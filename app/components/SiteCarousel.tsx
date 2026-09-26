"use client";

import { useRef } from "react";
import { Picture } from "./site-shell";

type PortfolioItem = { image: string; title: string; text: string; url: string };

export default function SiteCarousel({ items }: { items: PortfolioItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("figure");
    const step = card ? card.getBoundingClientRect().width + 18 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="sitecarousel" aria-label="Sites criados pela Bydo">
      <div className="sitetrack" ref={trackRef}>
        {items.map((project, index) => (
          <figure className={`projectcard${project.image ? "" : " siteplaceholder"}`} key={`${project.title}-${index}`}>
            {project.image ? (
              <Picture src={project.image} alt={`Site profissional de ${project.title} criado pela Bydo Marketing`} />
            ) : (
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>Espaço preparado para o próximo projeto</b>
              </div>
            )}
            <figcaption>
              <b>{project.title}</b>
              <span>{project.text}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="sitecarousel-nav-row">
        <button type="button" className="sitecarousel-nav" aria-label="Ver sites anteriores" onClick={() => scroll(-1)}>‹</button>
        <button type="button" className="sitecarousel-nav" aria-label="Ver próximos sites" onClick={() => scroll(1)}>›</button>
      </div>
    </div>
  );
}
