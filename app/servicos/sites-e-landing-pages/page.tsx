import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "../../seo";
import { SitesLandingPage, siteFaqs } from "./sites-page";

const description = "Criamos sites institucionais e landing pages personalizados, rápidos, responsivos e preparados para o Google, com estrutura estratégica para gerar confiança e facilitar o contato.";
export const metadata: Metadata = pageMetadata({
  title: "Criação de Sites e Landing Pages | Bydo Marketing",
  description,
  path: "/servicos/sites-e-landing-pages",
});

export default function Page() {
  return <><JsonLd data={[
    serviceSchema("Criação de sites e landing pages", description, "/servicos/sites-e-landing-pages"),
    faqSchema(siteFaqs),
    breadcrumbSchema([["Home", "/"], ["Serviços", "/#servicos"], ["Sites e landing pages", "/servicos/sites-e-landing-pages"]]),
  ]} /><SitesLandingPage /></>;
}
