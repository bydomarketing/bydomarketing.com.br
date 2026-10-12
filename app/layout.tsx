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
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={manrope.variable}>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
