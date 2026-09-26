import type { Metadata } from "next";

import { Footer, FounderSection, Header, Picture, whatsapp } from "../site";
import { JsonLd, ORGANIZATION_ID, SITE_URL, breadcrumbSchema, pageMetadata } from "../seo";
import SitesPortfolioCarousel from "../servicos/sites-e-landing-pages/SitesPortfolioCarousel";
import ResultsCarousel from "../servicos/perfil-da-empresa-no-google/ResultsCarousel";
import { resultCards } from "../servicos/perfil-da-empresa-no-google/page";
import SocialPortfolioMarquee from "../servicos/gestao-de-redes-sociais/SocialPortfolioMarquee";
import DesignShowcaseGrid from "../servicos/design-grafico/DesignShowcaseGrid";

export const metadata: Metadata = pageMetadata({
  title: "Projetos de Marketing Digital | Bydo Marketing",
  description: "Conheça projetos de sites, Perfil da Empresa no Google, redes sociais e design gráfico desenvolvidos pela Bydo Marketing.",
  path: "/projetos",
});

const sitesText = [
  "Ter um site profissional deixou de ser um diferencial e virou uma exigência básica para qualquer negócio que queira ser levado a sério no digital, porque é o único espaço que pertence totalmente à empresa, sem depender do algoritmo de uma rede social ou das regras de uma plataforma de terceiros.",
  "Quando alguém pesquisa por um serviço e encontra apenas um perfil de Instagram desorganizado ou nenhuma presença própria, a decisão de confiar ou seguir adiante fica mais difícil, enquanto um site bem construído comunica seriedade antes mesmo do primeiro contato acontecer.",
  "Além disso, um site estruturado corretamente fortalece a autoridade do negócio perante o Google, o que ajuda a validar as informações do Perfil da Empresa no Google e contribui, de forma indireta, para uma presença mais consistente na busca local.",
  "A Bydo constrói sites e landing pages pensando nesse conjunto, unindo design, organização de conteúdo e estrutura técnica, para que o site trabalhe pela empresa mesmo quando ninguém está online para responder.",
];

const googleText = [
  "A maior parte das buscas por serviços locais já começa direto no Google, seja pelo mapa, seja pela busca simples, e é o Perfil da Empresa no Google que decide se o seu negócio aparece nesse momento de decisão ou fica invisível para quem está exatamente ao lado, procurando exatamente o que você oferece.",
  "Um perfil incompleto, com categoria errada, poucas fotos ou sem avaliações recentes, comunica descuido antes mesmo de a pessoa clicar em qualquer coisa, enquanto um perfil otimizado, com informações corretas, publicações ativas e prova social visível, transmite confiança e aumenta a chance real de contato.",
  "A otimização de perfil não é preencher um cadastro uma vez e esquecer, é um trabalho contínuo de ajuste, acompanhamento de dados e resposta ao comportamento de busca do público.",
  "A Bydo cuida dessa presença local para que a empresa apareça no momento certo, para a pessoa certa, com a informação certa.",
];

const socialText = [
  "Ter um perfil nas redes sociais não é mais suficiente, porque hoje o que separa um negócio que vende pelas redes de um que só posta por obrigação é a estratégia por trás de cada publicação.",
  "Cada empresa tem um público diferente, um objetivo diferente e uma forma diferente de se comunicar, então gerir redes sociais de verdade significa entender essa comunicação específica antes de criar qualquer conteúdo, e não aplicar uma fórmula genérica que serve para qualquer perfil.",
  "Quando a comunicação é pensada com intenção, as redes sociais deixam de ser só uma vitrine e passam a funcionar como canal de vendas, de autoridade e de relacionamento com quem já está interessado no que a empresa oferece.",
  "A Bydo assume essa gestão de forma estratégica, olhando para o negócio como um todo antes de decidir o que publicar, como publicar e com que frequência.",
];

const designText = [
  "Toda empresa precisa de uma identidade visual consistente, porque é ela que faz a marca ser reconhecida de forma instantânea em qualquer ponto de contato, do post no feed ao material impresso, da apresentação comercial ao perfil no Google.",
  "Sem uma identidade visual organizada, cada material sai com uma cara diferente, e isso dilui a percepção que o público tem do negócio, fazendo a marca parecer menor ou menos preparada do que realmente é.",
  "Quando cores, tipografia, linguagem visual e tom de comunicação seguem um mesmo padrão, a marca se posiciona com mais clareza no mercado e fica mais fácil para o público lembrar dela e diferenciá-la da concorrência.",
  "A Bydo desenvolve identidade visual e materiais gráficos pensando nesse conjunto todo, para que cada peça produzida reforce a mesma percepção de marca, em vez de competir entre si.",
];

export default function ProjetosPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Projetos de Marketing Digital",
      description: metadata.description,
      url: `${SITE_URL}/projetos`,
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "pt-BR",
    },
    breadcrumbSchema([["Home", "/"], ["Projetos", "/projetos"]]),
  ];
  return <><JsonLd data={structuredData} /><Header /><main className="projectslp">
    <section className="projectslp-hero"><div className="projectslp-hero-copy"><h1><span>Projetos de marketing</span><span>digital, sites, redes</span><span>sociais e design gráfico</span></h1><p>Nós transformamos estratégia em pontos de contato que ajudam empresas e prestadoras de serviço a serem encontradas, compreendidas e escolhidas.</p><a className="button" href={whatsapp}>Quero conversar sobre meu projeto</a></div><div className="projectslp-hero-grid" aria-label="Seleção de projetos da Bydo Marketing"><Picture src="/portfolio/site-dra-leticia.webp" alt="Site profissional criado pela Bydo Marketing" eager /><Picture src="/social/social-03.webp" alt="Arte para redes sociais criada pela Bydo Marketing" eager /><Picture src="/portfolio/google-resultados.webp" alt="Resultados de presença local no Google" eager /><Picture src="/portfolio/revista-dra-leticia.webp" alt="Revista portfólio criada pela Bydo Marketing" eager /></div></section>

    <section className="projectslp-section projectslp-sites"><div className="projectslp-head"><h2>Projetos de sites e landing pages</h2><div className="projectslp-text">{sitesText.map(p => <p key={p}>{p}</p>)}</div></div><SitesPortfolioCarousel /><a className="button projectslp-cta" href="/servicos/sites-e-landing-pages">Conhecer o serviço de sites e landing pages</a></section>

    <section className="projectslp-section projectslp-google"><div className="projectslp-head"><h2>Projetos para o Perfil da Empresa no Google</h2><div className="projectslp-text">{googleText.map(p => <p key={p}>{p}</p>)}</div></div><ResultsCarousel items={resultCards} /><a className="button projectslp-cta" href="/servicos/perfil-da-empresa-no-google">Conhecer o serviço de Perfil da Empresa no Google</a></section>

    <section className="projectslp-section projectslp-social"><div className="projectslp-head"><h2>Design e conteúdo para redes sociais</h2><div className="projectslp-text">{socialText.map(p => <p key={p}>{p}</p>)}</div></div><SocialPortfolioMarquee /><a className="button projectslp-cta" href="/servicos/gestao-de-redes-sociais">Conhecer o serviço de gestão de redes sociais</a></section>

    <section className="projectslp-section projectslp-design"><div className="projectslp-head"><h2>Projetos de design desenvolvidos pela Bydo</h2><div className="projectslp-text">{designText.map(p => <p key={p}>{p}</p>)}</div></div><DesignShowcaseGrid /><a className="button projectslp-cta" href="/servicos/design-grafico">Conhecer o serviço de design gráfico</a></section>

    <FounderSection />

    <section className="projectslp-final"><h2>Seu próximo projeto pode começar com uma conversa.</h2><p>Nós entendemos o momento da sua empresa e indicamos o caminho que faz sentido para a sua presença digital.</p><a className="button" href={whatsapp}>Falar sobre meu projeto</a></section>
  </main><Footer /></>;
}
