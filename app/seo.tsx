import type { Metadata } from "next";

export const SITE_URL = "https://www.bydomarketing.com.br";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Bydo Marketing",
      locale: "pt_BR",
      type: "website",
      images: [{ url: absoluteUrl("/brand/bydo-og-image.png"), width: 1200, height: 630, alt: "Bydo Marketing" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/brand/bydo-og-image.png")],
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Bydo Marketing",
  url: SITE_URL,
  logo: absoluteUrl("/brand/bydo-logo-gradient.svg"),
  founder: {
    "@type": "Person",
    name: "Herika Gomes",
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Bydo Marketing",
  url: SITE_URL,
  inLanguage: "pt-BR",
  publisher: { "@id": ORGANIZATION_ID },
};

export function breadcrumbSchema(items: readonly (readonly [string, string])[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Brasil" },
  };
}

export function faqSchema(items: readonly (readonly [string, string])[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
