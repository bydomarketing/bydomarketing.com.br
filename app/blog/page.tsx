import { BlogPage } from "../site";
import type { Metadata } from "next";
import { JsonLd, ORGANIZATION_ID, SITE_URL, breadcrumbSchema, pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog de Marketing Digital | Bydo Marketing",
  description: "Conteúdos sobre Google, sites, redes sociais, design e posicionamento para empresas, negócios locais e prestadoras de serviço.",
  path: "/blog",
});

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog da Bydo Marketing",
    description: "Conteúdos sobre marketing digital para empresas, negócios locais e prestadoras de serviço.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@id": ORGANIZATION_ID,
    }
  };
  return <><JsonLd data={[structuredData, breadcrumbSchema([["Home", "/"], ["Blog", "/blog"]])]} /><BlogPage /></>;
}
