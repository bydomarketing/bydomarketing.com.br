import { Picture } from "./site-shell";

const GOOGLE_PROFILE_URL = "https://share.google/HWwK69oRRuOk3WIRP";
const BUSINESS_QUERY = "Bydo Agência de Marketing Digital e Design, Ribeirão Pires - SP";
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS_QUERY)}&output=embed`;

export default function GoogleMapSection() {
  return <section className="ggmap">
    <iframe src={MAPS_EMBED_URL} title="Bydo Marketing no Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    <a className="ggmap-card" href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer">
      <Picture src="/brand/google-g.svg" alt="" className="ggmap-icon" />
      <div><strong>Bydo Marketing</strong><span>Ribeirão Pires - SP · ver perfil completo no Google</span></div>
      <span className="ggmap-arrow" aria-hidden="true">↗</span>
    </a>
  </section>;
}
