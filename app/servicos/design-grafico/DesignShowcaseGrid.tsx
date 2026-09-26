"use client";

import {useState} from "react";
import {Picture} from "../../site";
import MagazineFlipbook from "./MagazineFlipbook";

const REVISTA_SRC = "/showcase/showcase-24.webp";
const revistaPages = Array.from({length: 16}, (_, i) => `/revista/revista-claudia-${String(i + 1).padStart(2, "0")}.webp`);

export const designShowcaseItems = [
  ["/showcase/showcase-01.webp", "Logotipo criado pela Bydo para a Dra. Giovana", "Identidade de marca", "Logotipo desenvolvido para posicionar a profissional no digital"],
  ["/showcase/showcase-18.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Marca construída para comunicar valor e credibilidade"],
  ["/showcase/showcase-25.webp", "Material de apresentação visual criado pela Bydo", "Identidade de marca", "Composição visual de apoio à apresentação da marca"],
  ["/showcase/showcase-04.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Construção visual alinhada ao posicionamento do negócio"],
  ["/showcase/showcase-05.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Elementos organizados para reforçar reconhecimento de marca"],
  ["/showcase/showcase-06.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Aplicação de paleta e tipografia com coerência visual"],
  ["/showcase/showcase-23.webp", "Mockup de identidade visual criado pela Bydo", "Identidade aplicada", "Marca apresentada em formato de vitrine visual"],
  ["/showcase/showcase-08.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Direção visual pensada para diferentes pontos de contato"],
  ["/showcase/showcase-09.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Construção de marca com clareza de posicionamento"],
  ["/showcase/showcase-10.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Símbolo e tipografia desenvolvidos sob medida"],
  ["/showcase/showcase-11.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Marca construída para fortalecer autoridade no nicho"],
  ["/showcase/showcase-12.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Composição visual pensada para uso em múltiplos formatos"],
  ["/showcase/showcase-13.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Marca desenvolvida com atenção ao público do negócio"],
  ["/showcase/showcase-14.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Construção visual com identidade própria"],
  ["/showcase/showcase-15.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Marca pensada para se destacar da concorrência"],
  ["/showcase/showcase-16.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Direção visual aplicada com consistência"],
  ["/showcase/showcase-17.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Elementos de marca organizados para uso comercial"],
  ["/showcase/showcase-02.webp", "Logotipo criado pela Bydo para a marca Cure-se", "Identidade de marca", "Construção visual pensada para transmitir cuidado e confiança"],
  ["/showcase/showcase-19.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Composição visual desenvolvida para reforçar reconhecimento"],
  ["/showcase/showcase-20.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Marca estruturada com foco em posicionamento"],
  ["/showcase/showcase-21.webp", "Identidade visual aplicada em material criado pela Bydo", "Identidade aplicada", "Marca aplicada a um material de apresentação real"],
  ["/showcase/showcase-22.webp", "Mockup de identidade visual criado pela Bydo", "Identidade aplicada", "Simulação de aplicação da marca em contexto real"],
  ["/showcase/showcase-07.webp", "Identidade visual criada pela Bydo", "Identidade de marca", "Marca estruturada para transmitir profissionalismo"],
  ["/showcase/showcase-24.webp", "Revista portfólio personalizada criada pela Bydo", "Material institucional", "Peça desenvolvida para apresentar história e serviços"],
  ["/showcase/showcase-03.webp", "Logotipo criado pela Bydo para a marca Mandala Modas", "Identidade de marca", "Marca desenvolvida para o segmento de moda"],
] as const;

export default function DesignShowcaseGrid() {
  const [revistaOpen, setRevistaOpen] = useState(false);

  return <div className="designlp-showcase-grid">
    {designShowcaseItems.map(([src, alt, title, text]) => {
      const isRevista = src === REVISTA_SRC;
      return <figure key={src} className={isRevista ? "designlp-showcase-revista" : undefined}>
        {isRevista
          ? <button type="button" className="designlp-showcase-revista-trigger" onClick={() => setRevistaOpen(true)} aria-label={`Abrir ${alt} para folhear`}>
              <Picture src={src} alt={alt} />
            </button>
          : <Picture src={src} alt={alt} />}
        <figcaption><strong>{title}</strong><span>{text}</span></figcaption>
      </figure>;
    })}
    <MagazineFlipbook pages={revistaPages} alt="Revista portfólio personalizada criada pela Bydo para a Dra. Cláudia" open={revistaOpen} onClose={() => setRevistaOpen(false)} />
  </div>;
}
