import type { Metadata } from "next";
import { Footer, Header, Picture, whatsapp } from "../site";
import { JsonLd, ORGANIZATION_ID, SITE_URL, breadcrumbSchema, pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Sobre a Bydo Marketing | Conheça a Agência e sua Fundadora",
  description: "Conheça a história da Bydo Marketing e a trajetória de Herika Gomes, fundadora da agência com quase 30 anos de experiência em design e 20 anos em marketing.",
  path: "/sobre",
});

export default function SobrePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Sobre a Bydo Marketing",
      url: `${SITE_URL}/sobre`,
      about: { "@id": ORGANIZATION_ID },
      inLanguage: "pt-BR",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/sobre#herika-gomes`,
      name: "Herika Gomes",
      jobTitle: "Estrategista e fundadora da Bydo Marketing",
      worksFor: { "@id": ORGANIZATION_ID },
      url: `${SITE_URL}/sobre`,
    },
    breadcrumbSchema([["Home", "/"], ["Sobre", "/sobre"]]),
  ];
  return <><JsonLd data={structuredData} /><Header /><main className="aboutlp">
    <section className="aboutlp-hero"><Picture className="aboutlp-mark" src="/brand/bydo-symbol-gradient.svg" alt="" eager /><div><h1>Sobre a Bydo Marketing</h1><p>Uma agência construída a partir de quase três décadas de experiência, evolução profissional e uma maneira muito própria de enxergar empresas, marcas e comunicação.</p></div></section>

    <section className="aboutlp-story" id="historia"><h2 className="aboutlp-editorial-title">Construí minha trajetória profissional entre o design<br />e o marketing, e vivi na prática a realidade de quem empreende.</h2><div className="aboutlp-editorial"><div className="aboutlp-editorial-photo"><Picture src="/portfolio/herika-gomes.webp" alt="Herika Gomes, estrategista e fundadora da Bydo Marketing" /><span>Herika Gomes</span></div><div className="aboutlp-editorial-copy"><div className="aboutlp-editorial-columns"><p>Sou Herika Gomes, estrategista e fundadora da Bydo Marketing. Minha trajetória começou no design gráfico, uma área que me ensinou a observar como forma, organização e clareza influenciam a maneira como uma empresa é percebida. Ao longo de quase três décadas, acompanhei mudanças profundas na comunicação e aprendi que um material visual precisa fazer sentido para o negócio, para o público e para o momento em que será utilizado.</p><p>O marketing ampliou esse olhar. Passei a analisar a empresa de maneira mais completa, considerando sua proposta, seu posicionamento, a experiência do cliente e os caminhos que levam uma pessoa da descoberta até o contato. Essa visão me permitiu compreender que a comunicação precisa reunir estética, direção e intenção comercial.</p><p>Nos últimos anos, a gestão de redes sociais e a estruturação da presença digital aproximaram ainda mais o meu trabalho da rotina de prestadoras de serviço, negócios locais e pequenas empresas. Conhecer os desafios, a disponibilidade e a capacidade de participação de cada cliente tornou o processo mais realista, próximo e coerente.</p><p>A Bydo reúne esse repertório em projetos acompanhados de perto. Eu participo da análise, das decisões e da construção das soluções, de modo que cada trabalho preserve a identidade da empresa e tenha uma função clara dentro da sua comunicação.</p></div></div></div><blockquote className="aboutlp-editorial-quote">Minha experiência me ensinou a olhar para cada projeto por inteiro,<br />porque design, posicionamento e estratégia precisam seguir a mesma direção.</blockquote></section>

    <section className="aboutlp-closing"><div className="aboutlp-history-grid"><article><strong>Quase 30 anos</strong><span>criando e moldando marcas através do design, com um olhar que une estética e função.</span></article><article><strong>20 anos</strong><span>de marketing estratégico, ajudando negócios a se posicionarem com clareza no mercado.</span></article><article><strong>Mais de 5 anos</strong><span>como social media, consultora de marketing e especialista em ferramentas do Google, como o Google Meu Negócio.</span></article></div></section>

    <section className="aboutlp-final"><h2>É fazendo que acontece, e nós fazemos para você.</h2><p>Se você quer conhecer melhor a Bydo e conversar diretamente com quem conduz cada projeto, fale conosco.</p><a className="button" href={whatsapp}>Conversar com a Bydo</a></section>
  </main><Footer /></>;
}
