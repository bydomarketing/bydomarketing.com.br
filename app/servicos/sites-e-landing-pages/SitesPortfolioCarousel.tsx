"use client";

import {useRef} from "react";
import {Picture} from "../../components/site-shell";
import {portfolioItems} from "../../components/portfolio-data";

export const sitePortfolioItems = portfolioItems.slice(0, 8);

export default function SitesPortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("figure");
    const step = card ? card.getBoundingClientRect().width + 18 : 320;
    el.scrollBy({left: dir * step, behavior: "smooth"});
  };

  return <div className="siteslp-carousel" aria-label="Projetos de sites criados pela Bydo">
    <div className="siteslp-track" ref={trackRef}>
      {sitePortfolioItems.map((project, index) => {
        const content = <>
          {project.image
            ? <Picture src={project.image} alt={`Site de ${project.title} criado pela Bydo Marketing`} />
            : <div><b>{String(index + 1).padStart(2, "0")}</b><span>Espaço preparado para um novo projeto</span></div>}
          <figcaption><strong>{project.title}</strong></figcaption>
        </>;
        return project.url
          ? <figure className="siteslp-clickable" key={`${project.title}-${index}`}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir o site de ${project.title} em uma nova aba`}>{content}</a>
            </figure>
          : <figure className={project.image ? "" : "siteslp-placeholder"} key={`${project.title}-${index}`}>{content}</figure>;
      })}
    </div>
    <div className="siteslp-nav-row">
      <button type="button" className="siteslp-nav siteslp-prev" aria-label="Ver projetos anteriores" onClick={() => scroll(-1)}>‹</button>
      <button type="button" className="siteslp-nav siteslp-next" aria-label="Ver mais projetos" onClick={() => scroll(1)}>›</button>
    </div>
  </div>;
}
