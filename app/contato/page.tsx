import type { Metadata } from "next";

import { Footer, Header } from "../components/site-shell";
import ContactSection from "../components/ContactSection";
import GoogleMapSection from "../components/GoogleMapSection";
import { JsonLd, breadcrumbSchema, pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Contato | Bydo Marketing",
  description: "Fale com a Bydo Marketing pelo WhatsApp ou pelo formulário e conheça o Perfil da Empresa no Google.",
  path: "/contato",
});

export default function Page() {
  return <>
    <JsonLd data={breadcrumbSchema([["Home", "/"], ["Contato", "/contato"]])} />
    <Header />
    <main className="contatolp">
      <ContactSection />
      <GoogleMapSection />
    </main>
    <Footer />
  </>;
}
