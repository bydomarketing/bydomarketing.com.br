"use client";

import {useEffect, useState} from "react";
import {Picture} from "../../components/site-shell";

type SocialItem = {readonly src: string; readonly alt: string};

export const designSocialItems = Array.from({length: 17}, (_, i) => i + 1).map(item => ({src: `/social/social-arte-${String(item).padStart(2,"0")}.webp`, alt: `Arte personalizada para redes sociais criada pela Bydo, exemplo ${item}`}));

const SIZES = {
  desktop: {center: 460, mid: 380, far: 280, gap: 18},
  tablet: {center: 340, mid: 280, far: 205, gap: 14},
  mobile: {center: 220, mid: 182, far: 134, gap: 8},
} as const;

function useCoverflowSizes() {
  const [key, setKey] = useState<keyof typeof SIZES>("desktop");

  useEffect(() => {
    const mqTablet = window.matchMedia("(max-width: 1150px)");
    const mqMobile = window.matchMedia("(max-width: 680px)");
    const update = () => setKey(mqMobile.matches ? "mobile" : mqTablet.matches ? "tablet" : "desktop");
    update();
    mqTablet.addEventListener("change", update);
    mqMobile.addEventListener("change", update);
    return () => {
      mqTablet.removeEventListener("change", update);
      mqMobile.removeEventListener("change", update);
    };
  }, []);

  return SIZES[key];
}

export default function DesignSocialGallery({items, initialIndex = 0}: {items: readonly SocialItem[]; initialIndex?: number}) {
  const [active, setActive] = useState(Math.min(initialIndex, items.length - 1));
  const sizes = useCoverflowSizes();

  const count = items.length;
  const go = (dir: number) => {
    setActive(current => (current + dir + count) % count);
  };

  return (
    <div className="designlp-coverflow">
      <button type="button" className="designlp-coverflow-nav designlp-coverflow-prev" aria-label="Ver arte anterior" onClick={() => go(-1)}>‹</button>
      <div className="designlp-coverflow-stage">
        {items
          .map((item, index) => {
            let offset = index - active;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;
            return {item, index, offset};
          })
          .sort((a, b) => a.offset - b.offset)
          .map(({item, index, offset}) => {
          const abs = Math.abs(offset);
          const visible = abs <= 2;
          const width = abs === 0 ? sizes.center : abs === 1 ? sizes.mid : abs === 2 ? sizes.far : 0;
          const rotate = offset === 0 ? 0 : offset > 0 ? -20 : 20;
          const tint = Math.min(abs * 0.32, 0.7);
          return (
            <button
              type="button"
              key={item.src}
              className={`designlp-coverflow-card${offset === 0 ? " is-active" : ""}`}
              style={{
                width: visible ? width : 0,
                margin: visible ? `0 ${sizes.gap}px` : "0",
                opacity: visible ? 1 : 0,
                transform: `rotateY(${rotate}deg)`,
                zIndex: 100 - abs,
                pointerEvents: visible ? "auto" : "none",
              }}
              onClick={() => setActive(index)}
              aria-label={`Ver arte ${index + 1} de ${items.length}`}
              aria-current={offset === 0}
              tabIndex={visible ? 0 : -1}
            >
              <Picture src={item.src} alt={item.alt} />
              <span className="designlp-coverflow-tint" style={{opacity: tint}} aria-hidden="true" />
            </button>
          );
        })}
      </div>
      <button type="button" className="designlp-coverflow-nav designlp-coverflow-next" aria-label="Ver próxima arte" onClick={() => go(1)}>›</button>
    </div>
  );
}
