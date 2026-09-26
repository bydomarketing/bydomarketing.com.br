"use client";

import {useCallback, useEffect, useMemo, useRef, useState} from "react";

type FlipbookProps = {
  pages: readonly string[];
  alt: string;
  open: boolean;
  onClose: () => void;
};

type View = readonly string[];

function buildViews(pages: readonly string[]): View[] {
  if (pages.length === 0) return [];
  if (pages.length === 1) return [[pages[0]]];
  const middle = pages.slice(1, pages.length - 1);
  const views: View[] = [[pages[0]]];
  for (let i = 0; i < middle.length; i += 2) {
    views.push(i + 1 < middle.length ? [middle[i], middle[i + 1]] : [middle[i]]);
  }
  views.push([pages[pages.length - 1]]);
  return views;
}

function viewLabel(views: View[], index: number, total: number): string {
  if (index === 0) return `Capa · ${total} páginas`;
  if (index === views.length - 1) return "Contracapa";
  let pageNumber = 2;
  for (let i = 1; i < index; i++) pageNumber += views[i].length;
  const view = views[index];
  return view.length === 2 ? `Páginas ${pageNumber}-${pageNumber + 1} de ${total}` : `Página ${pageNumber} de ${total}`;
}

function Spread({srcs, alt}: {srcs: View; alt: string}) {
  return (
    <div className={`revistaflip-spread${srcs.length === 1 ? " revistaflip-spread-single" : ""}`}>
      {srcs.map((src, i) => <img key={src} src={src} alt={srcs.length === 1 ? alt : `${alt}, ${i === 0 ? "página esquerda" : "página direita"}`} />)}
      {srcs.length === 2 && <span className="revistaflip-spine" aria-hidden="true" />}
    </div>
  );
}

export default function MagazineFlipbook({pages, alt, open, onClose}: FlipbookProps) {
  const views = useMemo(() => buildViews(pages), [pages]);
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState<null | {dir: 1 | -1}>(null);
  const animatingRef = useRef(false);

  useEffect(() => {
    if (!open) return;
    setIndex(0);
    setFlip(null);
    animatingRef.current = false;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const go = useCallback((dir: 1 | -1) => {
    if (animatingRef.current) return;
    const target = index + dir;
    if (target < 0 || target >= views.length) return;
    animatingRef.current = true;
    setFlip({dir});
  }, [index, views.length]);

  const onFlipEnd = useCallback(() => {
    setIndex(current => current + (flip?.dir ?? 0));
    setFlip(null);
    animatingRef.current = false;
  }, [flip]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, go]);

  if (!open || views.length === 0) return null;

  const sourceView = views[index];
  const destView = flip ? views[index + flip.dir] : undefined;
  const bottomView = flip ? (flip.dir === 1 ? destView! : sourceView) : sourceView;
  const leafView = flip ? (flip.dir === 1 ? sourceView : destView!) : undefined;
  const isSpread = bottomView.length === 2;
  const isLastView = index === views.length - 1 && !flip;

  return (
    <div className="revistaflip-overlay" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <div className="revistaflip-modal" onClick={event => event.stopPropagation()}>
        <button type="button" className="revistaflip-close" onClick={onClose} aria-label="Fechar revista">×</button>

        <div className={`revistaflip-stage${isSpread ? " revistaflip-stage-spread" : ""}`}>
          <div className="revistaflip-page">
            <Spread srcs={bottomView} alt={alt} />
          </div>
          {flip && leafView && (
            <div
              className={`revistaflip-leaf revistaflip-leaf-${flip.dir === 1 ? "forward" : "back"}`}
              onAnimationEnd={onFlipEnd}
            >
              <Spread srcs={leafView} alt="" />
            </div>
          )}
          {isLastView && (
            <button type="button" className="revistaflip-close-end" onClick={onClose}>Fechar revista</button>
          )}
        </div>

        <div className="revistaflip-controls">
          <button type="button" className="revistaflip-nav" onClick={() => go(-1)} disabled={index === 0} aria-label="Página anterior">‹</button>
          <span className="revistaflip-counter">{viewLabel(views, index, pages.length)}</span>
          <button type="button" className="revistaflip-nav" onClick={() => go(1)} disabled={index === views.length - 1} aria-label="Próxima página">›</button>
        </div>
      </div>
    </div>
  );
}
