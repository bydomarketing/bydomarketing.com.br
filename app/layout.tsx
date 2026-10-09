import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { JsonLd, SITE_URL, absoluteUrl, organizationSchema, websiteSchema } from "./seo";
import FloatingActions from "./components/FloatingActions";
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Agência de Marketing Digital em São Paulo | Bydo Marketing",
  description: "Sites, Perfil da Empresa no Google, gestão de redes sociais e design estratégico para empresas e prestadoras de serviço.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Agência de Marketing Digital em São Paulo | Bydo Marketing",
    description: "Estrutura digital para empresas e prestadoras de serviço serem encontradas, valorizadas e escolhidas.",
    url: "/",
    siteName: "Bydo Marketing",
    locale: "pt_BR",
    type: "website",
    images: [{ url: absoluteUrl("/brand/bydo-og-image.png"), width: 1200, height: 630, alt: "Bydo Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência de Marketing Digital em São Paulo | Bydo Marketing",
    description: "Estrutura digital para empresas e prestadoras de serviço serem encontradas, valorizadas e escolhidas.",
    images: [absoluteUrl("/brand/bydo-og-image.png")],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={manrope.variable}>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
