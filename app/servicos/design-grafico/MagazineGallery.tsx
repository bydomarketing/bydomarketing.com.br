"use client";

import {useState} from "react";
import {Picture} from "../../site";
import MagazineFlipbook from "./MagazineFlipbook";

const magazines = [
  {
    id: "claudia",
    cover: "/portfolio/capa-revista-claudia.webp",
    coverAlt: "Capa da revista portfólio da Dra. Cláudia Lima",
    alt: "Revista portfólio criada pela Bydo para a Dra. Cláudia Lima",
    className: "designlp-magazine-cover designlp-magazine-cover-side",
    pages: Array.from({length: 16}, (_, i) => `/revista/revista-claudia-${String(i + 1).padStart(2, "0")}.webp`),
  },
  {
    id: "rita",
    cover: "/portfolio/capa-revista-rita.webp",
    coverAlt: "Capa da revista portfólio da Rita de Cássia",
    alt: "Revista portfólio criada pela Bydo para a Rita de Cássia",
    className: "designlp-magazine-cover designlp-magazine-cover-main",
    pages: Array.from({length: 14}, (_, i) => `/revista/revista-rita-${String(i + 1).padStart(2, "0")}.webp`),
  },
  {
    id: "leticia",
    cover: "/portfolio/capa-revista-leticia.webp",
    coverAlt: "Capa da revista portfólio da Dra. Letícia Martins",
    alt: "Revista portfólio criada pela Bydo para a Dra. Letícia Martins",
    className: "designlp-magazine-cover designlp-magazine-cover-side",
    pages: Array.from({length: 14}, (_, i) => `/revista/revista-leticia-${String(i + 1).padStart(2, "0")}.webp`),
  },
] as const;

export default function MagazineGallery() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = magazines.find(magazine => magazine.id === openId);

  return <>
    {magazines.map(magazine => (
      <button
        type="button"
        key={magazine.id}
        className={magazine.className}
        onClick={() => setOpenId(magazine.id)}
        aria-label={`Abrir ${magazine.coverAlt} para folhear`}
      >
        <Picture src={magazine.cover} alt={magazine.coverAlt} />
        <span>Clique para ler a revista</span>
      </button>
    ))}
    <MagazineFlipbook pages={open?.pages ?? []} alt={open?.alt ?? ""} open={Boolean(open)} onClose={() => setOpenId(null)} />
  </>;
}
