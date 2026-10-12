import { Footer, FounderSection, Header, Picture, services, whatsapp } from "./components/site-shell";
import GoogleMapSection from "./components/GoogleMapSection";
import SitesPortfolioCarousel from "./servicos/sites-e-landing-pages/SitesPortfolioCarousel";
import DesignSocialGallery, { designSocialItems } from "./servicos/design-grafico/DesignSocialGallery";
export { Footer, FounderSection, Header, Picture, services, whatsapp } from "./components/site-shell";
export { portfolioItems } from "./components/portfolio-data";

export function HomePage() {
  return <><Header overHero /><main className="homev2">
    <section className="hero"><div><h1><span className="headline-line">Agência de marketing digital</span><span className="headline-line">em São Paulo para empresas e</span><span className="headline-line">prestadoras de serviço que</span><span className="headline-line"><strong className="headline-emphasis">querem ser encontradas,</strong></span><span className="headline-line"><strong className="headline-emphasis">valorizadas e escolhidas.</strong></span></h1><p className="lead">A Bydo é uma agência de marketing digital que organiza sua presença no Google, no site e nas redes sociais para que mais pessoas encontrem sua empresa, reconheçam a qualidade do seu trabalho e avancem com confiança até o contato.</p><a className="button" href={whatsapp}>Quero estruturar meu negócio</a></div><Picture className="mark" src="/brand/bydo-symbol-gradient.svg" alt="" eager /></section>

    <section className="statement"><p className="statementslogan"><strong>É fazendo que acontece,</strong><em>e nós fazemos para você.</em></p></section>

    <section className="services"><h2>Nós organizamos os canais que fazem seu cliente te encontrar e confiar na sua empresa.</h2><p className="sectionlead">Nós identificamos o que precisa ser organizado e construímos estratégias coerentes com o momento, o público e os objetivos do seu negócio.</p><div className="servicegrid">{services.map((service, index) => <a className={`card c${index}`} href={service.href} key={service.href}><b>0{index + 1}</b><p>{service.tag}</p><h3>{service.title}</h3><small>{service.text}</small><strong>Conhecer solução ↗</strong></a>)}</div></section>

    <section className="decision decisioncompare dark"><div className="decisioncompare-head"><h2>Sua empresa até pode estar na internet, porém é a forma profissional de se apresentar que faz o cliente decidir por você.</h2><p className="decisioncompare-subtitle">Enquanto uma presença comum afasta oportunidades, a Bydo constrói uma estrutura completa para o seu negócio ser encontrado, compreendido e escolhido.</p></div><div className="comparison-grid"><article className="comparison-common"><h3>Sem uma estrutura alinhada</h3><ul><li><span aria-hidden="true">×</span><p>Informações soltas e desatualizadas que geram dúvida</p></li><li><span aria-hidden="true">×</span><p>Imagem visual genérica que não transmite autoridade</p></li><li><span aria-hidden="true">×</span><p>Falta de clareza sobre o valor real da sua entrega</p></li><li><span aria-hidden="true">×</span><p>Caminho confuso que faz o visitante abandonar o contato</p></li></ul></article><article className="comparison-bydo"><Picture className="bydo-badge bydo-badge-gradient" src="/brand/avatar-bydo-gradiente.svg" alt="" /><h3>Com a Presença Bydo</h3><ul><li><span aria-hidden="true">✓</span><p>Comunicação clara com autoridade imediata</p></li><li><span aria-hidden="true">✓</span><p>Posicionamento visual de alto padrão</p></li><li><span aria-hidden="true">✓</span><p>Jornada intuitiva focada em conversão</p></li><li><span aria-hidden="true">✓</span><p>Pontos de contato e WhatsApp facilitados</p></li><li><span aria-hidden="true">✓</span><p>Estrutura técnica otimizada para o Google</p></li><li><span aria-hidden="true">✓</span><p>Mensagem padronizada em todos os canais</p></li><li><span aria-hidden="true">✓</span><p>Exposição estratégica de provas e diferenciais</p></li><li><span aria-hidden="true">✓</span><p>Base sólida pronta para escalar vendas</p></li></ul></article></div></section>

    <section className="channelstory"><div className="channelstoryhead"><h2>“Se eu já tenho Instagram,<br />por que preciso de Google Meu Negócio e site?”</h2><p>Porque o cliente pesquisa, compara e decide em mais de um lugar, e o Instagram, o Google e o site participam de momentos diferentes dessa decisão. Quando trabalham juntos, sua empresa constrói uma presença mais consistente.</p></div><div className="channelstage" aria-label="Instagram, Google e site como partes conectadas da presença digital"><article className="channelwindow googlewindow"><div className="browserdots"><i></i><i></i><i></i></div><div className="channelwindowtop"><Picture src="/brand/google-g.svg" alt="" /><strong>Google</strong></div><Picture className="channelmedia" src="/home/google-procura.webp" alt="Cliente procurando um serviço local no Google" /><div className="channelwindowcopy"><h3>Procura</h3><p>Aproxima quem já está procurando pelo seu serviço.</p></div></article><article className="channelwindow instagramwindow"><div className="channelwindowtop"><Picture src="/brand/instagram-official.svg" alt="" /><strong>Instagram</strong></div><Picture className="channelmedia" src="/home/instagram-acompanha.webp" alt="Cliente acompanhando o perfil de uma empresa no Instagram" /><div className="channelwindowcopy"><h3>Acompanha</h3><p>Mantém sua empresa presente na rotina.</p></div></article><article className="channelwindow sitewindow"><div className="browserdots"><i></i><i></i><i></i></div><div className="channelwindowtop"><span className="siteicon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1M14 11a5 5 0 0 0-7.1-.1l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1" /></svg></span><strong>Site</strong></div><Picture className="channelmedia" src="/home/site-decide.webp" alt="Cliente avaliando o site profissional de uma empresa" /><div className="channelwindowcopy"><h3>Decide</h3><p>Organiza as informações que ajudam o cliente a confiar e entrar em contato.</p></div></article></div><p className="channelconclusion"><strong>Quando os três canais confirmam a mesma impressão, sua empresa deixa menos oportunidades para os concorrentes.</strong></p></section>

    <Process showEyebrow={false} title="Veja o que acontece quando você começa a trabalhar com a Bydo." />

    <section className="projects" id="projetos"><div className="sectionheading"><div><h2>Alguns sites que criamos para <em>apresentar, posicionar, gerar confiança e autoridade.</em></h2></div><p>O site organiza a história da empresa, ajuda o Google a compreender os serviços e cria caminhos claros para o visitante entrar em contato.</p></div><SitesPortfolioCarousel /></section>

    <section className="socialshowcase"><div className="sectionheading"><div><h2>Design de posts para redes sociais de empresas e prestadores de serviço</h2></div><p>Cada arte é criada para comunicar com clareza, manter coerência visual e transformar o perfil da empresa em uma vitrine profissional dos seus serviços.</p></div><DesignSocialGallery items={designSocialItems} initialIndex={2} /></section>

    <section className="proof"><div><h2>Quando sua empresa aparece no Google, novas oportunidades chegam até você.</h2><p>Em um dos perfis gerenciados pela Bydo, pessoas encontraram a empresa, solicitaram rotas, acessaram o site e entraram em contato diretamente pelo Google.</p><a className="textlink" href="/servicos/perfil-da-empresa-no-google">Conhecer a solução para Google ↗</a></div><div className="proofimage"><Picture className="proofmockup" src="/portfolio/google-resultados.webp" alt="Case com 2.044 visualizações, 462 interações, 310 rotas, 97 ligações e 55 cliques no site" /><Picture className="bydo-badge bydo-badge-dark" src="/brand/avatar-bydo-preto-gradiente.svg" alt="" /></div></section>

    <FounderSection />

    <Final showEyebrow={false} title="Sua empresa precisa de uma agência que entenda de negócio local e organize todo o caminho até o contato." />
  </main><Footer /></>;
}

function Process({ showEyebrow = true, title = "Da estratégia à presença pronta para funcionar." }: { showEyebrow?: boolean; title?: string }) {
  const steps = [
    ["⌕", "Entender", "Conhecemos o negócio, o público e a forma como as pessoas procuram o que você oferece."],
    ["◇", "Planejar", "Definimos prioridades e desenhamos uma direção coerente com os objetivos da empresa."],
    ["✦", "Criar", "Transformamos a estratégia em site, conteúdo, Google e materiais de comunicação."],
    ["↗", "Conectar", "Integramos os canais para que a mensagem conduza o cliente até o próximo passo."],
    ["◎", "Acompanhar", "Observamos a presença em funcionamento e identificamos oportunidades de evolução."]
  ];
  return <section className="process">{showEyebrow && <p className="eyebrow">Como funciona</p>}<h2>{title}</h2><p className="processintro">O cliente percorre um processo claro dentro da Bydo, enquanto cada etapa organiza uma parte essencial da presença digital.</p><ol>{steps.map(([icon, title, text], index) => <li key={title}><div className="stepcontent"><span className="stepnumber">0{index + 1}</span><h3>{title}</h3><p>{text}</p></div><div className="stepnode" aria-hidden="true"><span>{icon}</span></div></li>)}</ol></section>;
}

function Final({ showEyebrow = true, title = "Sua empresa precisa de uma agência de marketing digital que organize o caminho até o contato." }: { showEyebrow?: boolean; title?: string }) {
  return <section className="final">{showEyebrow && <p className="eyebrow">Vamos começar</p>}<h2>{title}</h2><p>Conte para a Bydo como sua presença funciona hoje e quais resultados você quer alcançar.</p><a className="button" href={whatsapp}>Conversar com a Bydo</a></section>;
}

function Cards({ items }: { items: string[] }) {
  return <div className="minigrid">{items.map(item => { const [title, text] = item.split("|"); return <div key={title}><b>{title}</b><span>{text}</span></div>; })}</div>;
}

export function ServicePage({ service }: { service: (typeof services)[number] }) {
  return <><Header /><main><section className="servicehero"><p className="eyebrow">{service.tag} · Bydo Marketing</p><h1>{service.title}</h1><p className="lead">{service.text}</p><a className="button" href={whatsapp}>Quero falar sobre meu negócio</a></section><section className="intro"><p className="eyebrow">Estrutura com intenção</p><h2>Quando sua presença transmite clareza, o cliente entende por que deve considerar você.</h2><p>Esta página apresenta a solução, responde às dúvidas importantes e cria uma rota clara para o contato.</p></section><section className="dark"><p className="eyebrow">O que a Bydo organiza</p><Cards items={["Estratégia|Direção baseada no seu negócio, no público e nas buscas relevantes.", "Execução|Design e conteúdo feitos para serem entendidos em qualquer tela.", "Acompanhamento|Um processo claro, com espaço para prova, dados e evolução."]} /></section><Process /><section className="faq"><p className="eyebrow">Dúvidas frequentes</p><h2>Antes de contratar, você precisa entender como isso funciona.</h2>{["Essa solução funciona para o meu tipo de negócio?", "Quanto tempo leva para começar?", "Posso contratar esta solução separadamente?"].map((question, index) => <details open={index === 0} key={question}><summary>{question}</summary><p>A recomendação depende do momento do seu negócio, do público e de como as pessoas chegam até você. A conversa inicial mostra o caminho mais adequado.</p></details>)}</section><Final /></main><Footer /></>;
}

export function BlogPage() {
  const articles: { category: string; title: string; text: string; image: string; href?: string }[] = [
    { category: "Google e busca local", title: "Como aparecer no Google quando alguém procura pelo seu serviço", text: "Entenda quais informações ajudam o Google a compreender o seu negócio e aproximar sua empresa de pessoas que já procuram pelo que você oferece.", image: "/home/google-procura.webp", href: "/blog/como-aparecer-no-google-busca-local" },
    { category: "Perfil da Empresa no Google", title: "O que preencher no Perfil da Empresa no Google e por que cada informação importa", text: "Veja como serviços, categorias, fotos, avaliações e publicações ajudam a construir uma presença local mais completa.", image: "/portfolio/google-resultados.webp", href: "/blog/o-que-preencher-no-perfil-da-empresa-no-google" },
    { category: "Sites", title: "O que um site profissional precisa explicar antes do cliente entrar em contato", text: "Conheça os elementos que organizam a decisão do visitante e mostram com clareza o que a empresa oferece, para quem oferece e como contratar.", image: "/portfolio/site-dra-leticia.webp", href: "/blog/o-que-um-site-profissional-precisa-explicar" },
    { category: "Presença digital", title: "Site institucional e redes sociais cumprem funções diferentes na decisão do cliente", text: "Saiba como cada canal participa da pesquisa, da comparação e da confiança que antecedem o primeiro contato.", image: "/home/site-decide.webp", href: "/blog/site-institucional-e-redes-sociais-funcoes-diferentes" },
    { category: "Google e busca local", title: "O que é Google Meu Negócio e por que toda empresa local precisa ter um perfil otimizado", text: "Descubra o que é o Perfil da Empresa no Google, para quem ele serve e o que diferencia um perfil apenas criado de um perfil realmente otimizado para atrair clientes.", image: "/portfolio/fachada-digital-bydo.webp", href: "/blog/o-que-e-google-meu-negocio" },
    { category: "Perfil da Empresa no Google", title: "Por que meu negócio não aparece no Google Maps mesmo tendo perfil cadastrado", text: "Entenda os motivos mais comuns que fazem um perfil cadastrado não aparecer bem no mapa, mesmo depois de anos no ar.", image: "/portfolio/redes-duas-fachadas.webp", href: "/blog/por-que-nao-aparece-no-google-maps" },
    { category: "Sites", title: "Minha empresa precisa mesmo de um site? Sinais de que chegou a hora", text: "Veja os sinais mais comuns de que chegou a hora de sair do improviso e estruturar uma presença digital própria.", image: "/portfolio/site-dra-claudia.webp", href: "/blog/minha-empresa-precisa-de-um-site" },
    { category: "Presença digital", title: "O que um site profissional tem que uma página de rede social nunca vai ter", text: "Compare o que cada canal realmente entrega e entenda por que um site profissional continua sendo insubstituível.", image: "/home/instagram-acompanha.webp", href: "/blog/o-que-um-site-tem-que-rede-social-nao-tem" },
    { category: "Redes sociais", title: "O que precisa ser planejado na gestão de redes sociais para negócios locais", text: "Planejamento, linha editorial, calendário e acompanhamento trabalham juntos para manter uma comunicação coerente com o negócio.", image: "/social/social-01.webp", href: "/blog/o-que-precisa-ser-planejado-na-gestao-de-redes-sociais-para-negocios-locais" },
    { category: "Posicionamento", title: "Seu negócio precisa aparecer todos os dias nas redes sociais?", text: "Uma análise sobre frequência, participação do cliente e escolhas de conteúdo que respeitam a rotina de cada empresa.", image: "/portfolio/redes-duas-fachadas.webp", href: "/blog/seu-negocio-precisa-aparecer-todos-os-dias-nas-redes-sociais" },
    { category: "Design gráfico", title: "Como o design gráfico influencia a percepção de valor de uma empresa", text: "A organização visual ajuda o público a reconhecer a marca, compreender sua proposta e perceber mais profissionalismo em cada contato.", image: "/portfolio/identidade-dr-bruno.webp", href: "/blog/como-o-design-grafico-influencia-a-percepcao-de-valor-de-uma-empresa" },
    { category: "Materiais de divulgação", title: "Quais materiais ajudam prestadores de serviço a apresentar melhor o próprio trabalho", text: "Portfólios, apresentações e revistas digitais tornam serviços, diferenciais e resultados mais fáceis de entender e compartilhar.", image: "/portfolio/revista-dra-leticia.webp", href: "/blog/quais-materiais-ajudam-prestadores-de-servico-a-apresentar-melhor-o-proprio-trabalho" },
    { category: "Estratégia digital", title: "Como organizar Google, site e redes sociais para transmitir a mesma confiança", text: "Descubra como uma mensagem coerente em diferentes canais reduz dúvidas e ajuda o cliente a avançar com mais segurança.", image: "/portfolio/fachada-digital-bydo.webp", href: "/blog/como-organizar-google-site-e-redes-sociais-para-transmitir-a-mesma-confianca" }
  ];
  const [featured, ...moreArticles] = articles;
  return <><Header /><main className="bloglp">
    <section className="bloglp-hero bloglp-hero-featured">
      <div className="bloglp-hero-art" aria-hidden="true">
        <Picture src={featured.image} alt="" />
      </div>
      <div className="bloglp-hero-copy">
        <span className="bloglp-hero-eyebrow">{featured.category}</span>
        <h1>{featured.title}</h1>
        <p>{featured.text}</p>
        <a className="button" href={featured.href}>Ler artigo ↗</a>
      </div>
    </section>

    <section className="bloglp-articles">
      <h2 className="sr-only">Todos os artigos</h2>
      <div className="bloglp-grid">
        {moreArticles.map((article, index) => article.href ? <a className="bloglp-card" href={article.href} key={article.title}>
          <div className="bloglp-card-image"><Picture src={article.image} alt={`Imagem de apoio para o artigo ${article.title}`} /><span>{String(index + 2).padStart(2, "0")}</span></div>
          <div className="bloglp-card-copy"><small>{article.category}</small><h3>{article.title}</h3><p>{article.text}</p><strong>Ler artigo →</strong></div>
        </a> : <article className="bloglp-card" key={article.title}>
          <div className="bloglp-card-image"><Picture src={article.image} alt={`Imagem de apoio para o artigo ${article.title}`} /><span>{String(index + 2).padStart(2, "0")}</span></div>
          <div className="bloglp-card-copy"><small>{article.category}</small><h3>{article.title}</h3><p>{article.text}</p><strong>Artigo em preparação</strong></div>
        </article>)}
      </div>
    </section>

    <section className="bloglp-purpose"><div><h2>Conteúdo que ajuda pessoas e mecanismos de busca a compreenderem o que fazemos.</h2><p>O blog amplia as explicações que começam nas páginas de serviço. Assim, cada tema pode responder a uma pergunta específica, aprofundar uma decisão e conduzir o leitor para a solução mais adequada ao seu negócio.</p></div><div className="bloglp-purpose-points"><span><b>01</b>Perguntas reais do público</span><span><b>02</b>Respostas completas e claras</span><span><b>03</b>Conexão com os serviços da Bydo</span></div></section>

    <FounderSection />
    <Final showEyebrow={false} />
    <GoogleMapSection />
  </main><Footer /></>;
}
