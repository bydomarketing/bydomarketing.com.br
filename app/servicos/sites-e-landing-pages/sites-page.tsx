import { Footer, Header, Picture, whatsapp } from "../../site";
import SitesPortfolioCarousel from "./SitesPortfolioCarousel";

const process = [
  ["01", "Conhecer", "Entendemos a empresa, o público, os serviços e os objetivos do projeto."],
  ["02", "Planejar", "Definimos as páginas, os assuntos e os caminhos que vão orientar a navegação."],
  ["03", "Estruturar", "Organizamos a mensagem, os argumentos, as provas e os pontos de contato."],
  ["04", "Criar", "Desenvolvemos a identidade da página, a experiência visual e a adaptação para diferentes telas."],
  ["05", "Verificar", "Revisamos textos, links, formulários, velocidade, visualização no celular e configurações previstas no projeto."],
  ["06", "Publicar e acompanhar", "Colocamos o site no ar, realizamos as conexões contratadas e verificamos se a estrutura está funcionando como planejado."],
];

const scopeGroups = [
  { number: "01", icon: "✦", title: "Estratégia e conteúdo", text: "Organizamos a arquitetura, os textos, as páginas de serviços e as principais dúvidas dos clientes.", items: ["Planejamento da arquitetura", "Copy das páginas", "Páginas individuais para serviços", "Perguntas frequentes"] },
  { number: "02", icon: "◇", title: "Design e experiência", text: "Criamos o design personalizado, a versão responsiva, o portfólio e a apresentação das provas.", items: ["Design personalizado", "Desenvolvimento responsivo", "Portfólio e projetos", "Depoimentos e provas"] },
  { number: "03", icon: "↗", title: "Contato e conversão", text: "Estruturamos formulários, WhatsApp, localização e conexões com os demais canais digitais.", items: ["Formulários", "Integração com WhatsApp", "Mapa e localização", "Integração com redes sociais"] },
  { number: "04", icon: "◎", title: "Visibilidade e crescimento", text: "Preparamos o blog, as métricas, os recursos para campanhas e a estrutura inicial para o Google.", items: ["Blog", "Configuração de métricas", "Preparação para campanhas", "Estrutura inicial para o Google"] },
];

export const siteFaqs = [
  ["Qual é a diferença entre um site institucional e uma landing page?", "O site institucional apresenta a empresa de maneira mais ampla e pode reunir diferentes páginas e serviços. A landing page concentra a comunicação em uma oferta, campanha ou ação principal."],
  ["Como saber qual formato minha empresa precisa?", "Analisamos seus serviços, seu público, a forma como os clientes chegam e os objetivos do projeto. A partir dessas informações, recomendamos a estrutura mais adequada."],
  ["O projeto será personalizado?", "Sim. A organização das páginas, o design e os textos serão desenvolvidos a partir da identidade e das necessidades da empresa."],
  ["O site funcionará no celular?", "Sim. O projeto será adaptado para celulares, tablets e computadores, considerando leitura, velocidade e facilidade de navegação."],
  ["A Bydo também desenvolve os textos?", "A copy pode fazer parte do projeto. Organizamos as informações da empresa e desenvolvemos os textos conforme o público e o objetivo de cada página."],
  ["O site aparecerá no Google?", "O site será preparado para rastreamento e indexação de acordo com o escopo contratado. O posicionamento depende também da concorrência, dos conteúdos publicados e da autoridade construída ao longo do tempo."],
  ["Existe acompanhamento depois da publicação?", "O acompanhamento, a manutenção e as atualizações podem ser incluídos na proposta conforme as necessidades do projeto."],
] as const;

export function SitesLandingPage() {
  return <><Header /><main className="siteslp">
    <section className="siteslp-hero">
      <div className="siteslp-hero-art" aria-hidden="true">
        <Picture src="/portfolio/hero-claudia-photo.webp" alt="" eager />
        <Picture src="/portfolio/hero-anshin-photo.webp" alt="" eager />
        <Picture src="/portfolio/hero-reengenharia-photo.webp" alt="" eager />
        <Picture src="/portfolio/site-dra-leticia.webp" alt="" eager />
        <Picture src="/portfolio/site-mega-tecnologia-v2.webp" alt="" eager />
        <Picture src="/portfolio/site-disk-gas-v2.webp" alt="" eager />
      </div>
      <div className="siteslp-hero-shade" aria-hidden="true" />
      <div className="siteslp-hero-copy"><h1><em>Criamos sites, landing pages e lojas virtuais/e-commerce.</em></h1><p>Cada formato nasce do que a sua empresa precisa comunicar e vender, porque um negócio que apresenta vários serviços pede uma estrutura diferente de uma campanha com oferta única, assim como um negócio que vende produto por produto exige uma experiência de compra própria. Por isso, antes de definir o caminho, entendemos o momento do seu negócio e o percurso que o cliente precisa fazer até fechar com você.</p><div className="siteslp-actions"><a className="button" href={whatsapp}>Quero criar meu site</a><a className="siteslp-secondary" href="#portfolio-sites">Conhecer projetos da Bydo</a></div></div>
    </section>

    <section className="siteslp-problem"><div className="siteslp-problem-photo"><Picture src="/portfolio/arte-site-leticia-martins.webp" alt="Arte do site da Dra. Leticia Martins, criado pela Bydo" /></div><div className="siteslp-problem-copy"><h2>Seu site pode estar no ar e ainda assim passar despercebido.</h2><p>A publicação coloca a página na internet, porém o trabalho precisa continuar, porque para cumprir seu papel o site precisa carregar corretamente, funcionar bem no celular, ser encontrado pelos mecanismos de busca e oferecer caminhos de contato que realmente funcionem.</p><p>Um site sem as configurações e verificações adequadas pode permanecer desconhecido pelos mecanismos de busca, enquanto páginas lentas, textos pequenos e elementos desalinhados dificultam a navegação e aumentam o abandono.</p><p>Quando os serviços estão mal explicados ou as informações estão dispersas, o visitante perde o interesse antes do contato, e sem acompanhamento sua empresa não consegue identificar acessos, páginas visitadas, pontos de desistência e oportunidades de melhoria.</p></div></section>

    <section className="siteslp-formats"><div className="siteslp-heading"><h2>O formato certo depende do que sua empresa precisa alcançar.</h2><p>Antes de criar o projeto, analisamos como seus clientes pesquisam, quais serviços precisam ganhar destaque e qual ação esperamos que o visitante realize.</p></div><div className="siteslp-format-grid"><article><span>01</span><div><h3>Site institucional</h3><p>Uma estrutura completa para empresas que precisam apresentar diferentes serviços, organizar informações, construir presença própria e ampliar suas possibilidades de aparecer no Google.</p></div><a className="button" href={whatsapp}>Quero um site institucional ↗</a></article><article><span>02</span><div><h3>Landing page</h3><p>Uma página focada em um serviço, campanha ou oferta específica, com uma comunicação concentrada e um caminho direto até o contato.</p></div><a className="button" href={whatsapp}>Quero uma landing page ↗</a></article><article><span>03</span><div><h3>Loja virtual</h3><p>Uma estrutura para vender online, com produtos organizados, meios de pagamento configurados e uma experiência de compra clara do início ao fim.</p></div><a className="button" href={whatsapp}>Quero uma loja virtual ↗</a></article></div></section>

    <section className="siteslp-portfolio" id="portfolio-sites"><div className="siteslp-heading"><h2>Alguns sites que criamos para <em>apresentar, posicionar, gerar confiança e autoridade.</em></h2><p>Cada projeto nasce da realidade da empresa, do perfil do público e dos serviços que precisam ganhar espaço no digital.</p></div><SitesPortfolioCarousel /></section>

    <section className="siteslp-process"><h2>Cada etapa organiza uma parte importante do resultado.</h2><ol>{process.map(([number,title,text]) => <li key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>

    <section className="siteslp-google siteslp-google-scan">
      <div className="siteslp-google-heading"><div><h2>O Google precisa encontrar e compreender suas páginas para considerá-las nas buscas.</h2></div><p>Por isso, organizamos títulos, descrições, endereços, páginas de serviços e relações entre os conteúdos. Também deixamos a estrutura preparada para as verificações e ferramentas de acompanhamento definidas no projeto.</p></div>
      <div className="siteslp-search-canvas" aria-label="Representação do Google lendo a estrutura de um site e apresentando suas páginas nos resultados de busca">
        <div className="siteslp-page-scan"><div className="siteslp-browser-bar" aria-hidden="true"><i></i><i></i><i></i><span>anshinmassoterapia.com.br</span></div><div className="siteslp-page-layout"><Picture src="/portfolio/anshin-scan.webp" alt="Home do site da Anshin Massoterapia, criado pela Bydo" /></div><div className="siteslp-scan-line" aria-hidden="true"></div></div>
        <div className="siteslp-result-side"><div className="siteslp-flow-path" aria-hidden="true"></div><b className="siteslp-google-word">Google</b><div className="siteslp-search-field">massoterapia em Ribeirão Pires</div><div className="siteslp-search-result"><span>anshinmassoterapia.com.br</span><strong>Anshin Massoterapia | Drenagem Linfática, Reflexoterapia Podal e Aromaterapia</strong><p>Atendimento exclusivo para mulheres em Ribeirão Pires, com protocolos manuais integrativos para cuidado e equilíbrio do corpo feminino.</p></div><div className="siteslp-gmb-card"><span className="siteslp-gmb-pin">📍</span><div><strong>Anshin Massoterapia</strong><span>Ribeirão Pires, SP · Perfil verificado no Google</span></div></div><div className="siteslp-related-row"><span>drenagem linfática Ribeirão Pires</span><span>reflexoterapia podal perto de mim</span><span>massoterapia para mulheres</span></div><div className="siteslp-signal-row"><span>Google Meu Negócio</span><span>Palavras-chave locais</span><span>Estrutura para buscas</span><span>Performance no celular</span></div><p className="siteslp-note">Essa preparação cria uma base consistente para o site. A posição alcançada nas buscas também depende da concorrência, da qualidade dos conteúdos, da autoridade do domínio e da continuidade da estratégia.</p></div>
      </div>
    </section>

    <section className="siteslp-scope"><div className="siteslp-heading"><h2>Uma estrutura definida de acordo com o que sua empresa precisa comunicar e alcançar.</h2><p>A proposta reúne as páginas, os recursos e as configurações adequadas ao momento da empresa e aos objetivos do projeto.</p></div><div className="siteslp-scope-grid">{scopeGroups.map(group => <article key={group.title}><div className="siteslp-scope-top"><i aria-hidden="true">{group.icon}</i></div><h3>{group.title}</h3><p>{group.text}</p><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="siteslp-faq"><div><h2>O que você precisa saber antes de criar seu site.</h2></div><div>{siteFaqs.map(([question,answer],index) => <details open={index===0} key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

    <section className="siteslp-final"><h2>Seu site pode trabalhar pela sua empresa antes mesmo do primeiro contato.</h2><p>Vamos criar uma presença própria, profissional e preparada para receber quem já está procurando pelos serviços que você oferece.</p><a className="button" href={whatsapp}>Quero conversar sobre meu site</a></section>
  </main><Footer /></>;
}
