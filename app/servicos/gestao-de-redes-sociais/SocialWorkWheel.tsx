"use client";

import {useState, type CSSProperties} from "react";

type WorkStep = readonly [string, string, string];

export default function SocialWorkWheel({steps}: {steps: readonly WorkStep[]}) {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const visible = hovered ?? selected;
  const step = steps[visible];

  return <div className="sociallp-wheel-layout">
    <div className="sociallp-wheel-stage" aria-label="Etapas do planejamento de redes sociais">
      <div className="sociallp-wheel-ring" style={{"--wheel-turn": `${selected * -30}deg`} as CSSProperties} aria-hidden="true">
        <span>Estratégia</span>
      </div>
      <div className="sociallp-wheel-center" aria-hidden="true">
        <b>{steps[selected][0]}</b>
        <span>etapa selecionada</span>
      </div>
      <div className="sociallp-wheel-actions">
        {steps.map(([number, title], index) => {
          const angle = index * 30;
          return <button
            type="button"
            key={title}
            className={index === selected ? "is-active" : ""}
            style={{"--step-angle": `${angle}deg`} as CSSProperties}
            aria-pressed={index === selected}
            aria-controls="sociallp-step-detail"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(index)}
            onBlur={() => setHovered(null)}
            onClick={() => setSelected(index)}
          >
            <span>{number}</span>
            <strong>{title}</strong>
            <small>Clique e saiba mais</small>
          </button>;
        })}
      </div>
    </div>

    <article className="sociallp-wheel-detail" id="sociallp-step-detail" key={`${selected}-${visible}`} aria-live="polite">
      <span>Etapa {step[0]}</span>
      <h3>{step[1]}</h3>
      <p>{step[2]}</p>
      <small>Escolha outra etapa da roda para conhecer o restante do processo.</small>
    </article>
  </div>;
}
