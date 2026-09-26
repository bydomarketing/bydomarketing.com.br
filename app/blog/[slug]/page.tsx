import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header, Picture } from "../../site";
import { JsonLd, ORGANIZATION_ID, SITE_URL, absoluteUrl, breadcrumbSchema } from "../../seo";
import { articles, findArticle } from "../articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function renderWithEmphasis(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part
  );
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) return { title: "Artigo não encontrado | Bydo Marketing", robots: { index: false, follow: true } };

  const path = `/blog/${article.slug}`;
  return {
    title: `${article.title} | Bydo Marketing`,
    description: article.description,
    alternates: { canonical: path },
    openGraph: {
      title: article.title,
      description: article.description,
      url: path,
      siteName: "Bydo Marketing",
      locale: "pt_BR",
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: ["Herika Gomes"],
      images: article.image ? [{ url: article.image, alt: article.imageAlt ?? article.title }] : undefined,
    },
    twitter: {
      card: article.image ? "summary_large_image" : "summary",
      title: article.title,
      description: article.description,
      images: article.image ? [article.image] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();

  const path = `/blog/${article.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt ?? article.publishedAt,
      inLanguage: "pt-BR",
      mainEntityOfPage: absoluteUrl(path),
      author: {
        "@type": "Person",
        name: "Herika Gomes",
        url: `${SITE_URL}/sobre`,
      },
      publisher: { "@id": ORGANIZATION_ID },
      image: article.image ? absoluteUrl(article.image) : undefined,
    },
    breadcrumbSchema([["Home", "/"], ["Blog", "/blog"], [article.title, path]]),
  ];

  return <><JsonLd data={structuredData} /><Header /><main className="articlelp">
    <article>
      <div className="articlelp-hero">
        <Link href="/blog">← Voltar ao blog</Link>
        <span>{article.category}</span>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <div><span>Por Herika Gomes · Bydo Marketing</span><time dateTime={article.publishedAt}>{new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(new Date(article.publishedAt))}</time><span>{article.readingTime}</span></div>
      </div>
      {article.image && <Picture className="articlelp-cover" src={article.image} alt={article.imageAlt ?? article.title} eager />}
      <div className="articlelp-content">
        <p className="articlelp-introduction">{renderWithEmphasis(article.introduction)}</p>
        {article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{renderWithEmphasis(paragraph)}</p>)}</section>)}
        {article.relatedService && <aside><strong>Serviço relacionado</strong><Link href={article.relatedService.href}>{article.relatedService.label} →</Link></aside>}
      </div>
    </article>
  </main><Footer /></>;
}
