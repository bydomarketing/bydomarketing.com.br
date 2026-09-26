"use client";

import {useState} from "react";
import {Picture} from "../../site";

type ResultItem = {readonly src: string; readonly alt: string; readonly caption: string};

const SLOT_OFFSETS = [-2, -1, 0, 1, 2] as const;

export default function ResultsCarousel({items}: {items: readonly ResultItem[]}) {
  const [active, setActive] = useState(0);
  const n = items.length;
  const go = (dir: number) => setActive(i => (i + dir + n) % n);

  return <div className="googlelp-gallery">
    <div className="googlelp-gallery-row">
      {SLOT_OFFSETS.map(offset => {
        const itemIndex = (active + offset + n) % n;
        const item = items[itemIndex];
        const d = Math.abs(offset);
        return <figure
          className="googlelp-gallery-card"
          key={offset}
          style={{transform: `scale(${1 - d * 0.14}) translateY(${d * 16}px)`, opacity: 1 - d * 0.22, zIndex: 10 - d}}
        >
          <Picture src={item.src} alt={item.alt} />
          <figcaption>{item.caption}</figcaption>
        </figure>;
      })}
    </div>
    <div className="googlelp-gallery-nav">
      <button type="button" aria-label="Ver resultado anterior" onClick={() => go(-1)}>‹</button>
      <div className="googlelp-gallery-dots" role="tablist" aria-label="Selecionar resultado">
        {items.map((item, i) => (
          <button
            type="button"
            key={item.src}
            className={i === active ? "is-active" : ""}
            aria-label={`Ver resultado ${i + 1}`}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
      <button type="button" aria-label="Ver próximo resultado" onClick={() => go(1)}>›</button>
    </div>
  </div>;
}
