import {Picture} from "../../site";

export const socialArts = Array.from({length: 15}, (_, index) => `/social/social-${String(index + 1).padStart(2, "0")}.webp`);

export default function SocialPortfolioMarquee() {
  return <div className="sociallp-marquee" aria-label="Galeria de conteúdos criados pela Bydo">
    <div>{[...socialArts, ...socialArts].map((src, index) => <Picture src={src} alt={index < socialArts.length ? `Conteúdo para redes sociais criado pela Bydo, projeto ${index + 1}` : ""} key={`${src}-${index}`} />)}</div>
  </div>;
}
