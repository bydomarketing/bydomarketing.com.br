import {Footer, Header, Picture} from "../../site";
import {JsonLd, breadcrumbSchema, faqSchema, pageMetadata, serviceSchema} from "../../seo";
import DesignSocialGallery, {designSocialItems} from "./DesignSocialGallery";
import DesignShowcaseGrid from "./DesignShowcaseGrid";
import MagazineGallery from "./MagazineGallery";

const description = "Design gráfico para empresas e prestadores de serviço. Apresentações, portfólios, PDFs e materiais visuais que fortalecem o branding e a percepção de valor.";
export const metadata = pageMetadata({
  title: "Design Gráfico para Empresas | Bydo Marketing",
  description,
  path: "/servicos/design-grafico",
});

const whatsappDesign = `https://wa.me/5511939553258?text=${encodeURIComponent("Olá, gostaria de conhecer o serviço de design gráfico da Bydo para minha empresa.")}`;

const materials = [
  ["Apresentações", "Ideias, argumentos e informações organizados com clareza."],
  ["Portfólios", "Projetos apresentados com sequência visual e unidade."],
  ["Propostas e PDFs", "Documentos preparados para apoiar negociações e vendas."],
  ["Revistas digitais", "Conteúdos extensos transformados em publicações agradáveis."],
  ["Cartões e links digitais", "Informações essenciais reunidas em pontos de contato práticos."],
  ["Materiais impressos", "Aplicações físicas alinhadas à identidade da marca."],
] as const;

const process = [
  ["01", "Contexto", "Entendemos o objetivo do material, o público, a situação em que ele será usado e o que precisa comunicar."],
  ["02", "Conteúdo", "Organizamos as informações, definimos prioridades e estruturamos uma sequência que favorece a leitura."],
  ["03", "Direção visual", "Escolhemos a linguagem gráfica, o ritmo, as cores, a tipografia e os recursos que representam a marca."],
  ["04", "Criação", "Desenvolvemos o projeto e apresentamos a proposta visual para avaliação e alinhamento."],
  ["05", "Finalização", "Aplicamos os ajustes aprovados e preparamos os arquivos conforme o formato e a finalidade do material."],
] as const;

const faqs = [
  ["A Bydo cria apenas materiais digitais?", "Não. O projeto pode ser desenvolvido para uso digital ou impresso. O formato é definido conforme a finalidade, o público e o modo como o material será utilizado."],
  ["Posso contratar somente uma apresentação ou um portfólio?", "Sim. O design gráfico pode ser contratado para uma necessidade específica, sem a obrigação de contratar outros serviços da agência."],
  ["Preciso ter uma identidade visual pronta?", "Podemos trabalhar a partir de uma identidade existente. Quando a marca ainda não possui uma base visual consistente, avaliamos o que precisa ser organizado antes de iniciar o material."],
  ["A Bydo também organiza o conteúdo do material?", "Sim. O trabalho considera a hierarquia das informações, a sequência de leitura e a clareza da mensagem. A profundidade dessa organização depende do conteúdo recebido e do escopo aprovado."],
  ["Vocês escrevem os textos?", "Quando o projeto precisa de desenvolvimento ou revisão de texto, essa necessidade é avaliada no orçamento. Design e copy podem trabalhar juntos, porém são entregas com responsabilidades próprias."],
  ["Quantas alterações estão incluídas?", "A quantidade de rodadas de ajustes é definida na proposta. Assim, o processo permanece claro para a Bydo e para o cliente desde o início."],
  ["Quanto tempo leva para criar um projeto?", "O prazo depende da extensão do material, do volume de conteúdo e da agilidade nas aprovações. Depois de entendermos a demanda, apresentamos um cronograma compatível com o projeto."],
  ["Como recebo os arquivos finais?", "Os arquivos são preparados de acordo com o uso previsto, como apresentação em PDF, arquivo para publicação digital ou material pronto para produção gráfica."],
] as const;

export default function Page() {
  return <><JsonLd data={[
    serviceSchema("Design gráfico para empresas", description, "/servicos/design-grafico"),
    faqSchema(faqs),
    breadcrumbSchema([["Home", "/"], ["Serviços", "/#servicos"], ["Design gráfico", "/servicos/design-grafico"]]),
  ]} /><Header /><main className="designlp">
    <section className="designlp-hero">
      <div className="designlp-hero-art" aria-hidden="true">
        <Picture src="/social/social-03.webp" alt="" eager />
        <Picture src="/portfolio/revista-dra-leticia.webp" alt="" eager />
        <Picture src="/social/social-09.webp" alt="" eager />
        <Picture src="/portfolio/redes-duas-fachadas.webp" alt="" eager />
        <Picture src="/portfolio/revista-portfolio-dupla.webp" alt="" eager />
        <Picture src="/social/social-06.webp" alt="" eager />
        <Picture src="/portfolio/identidade-dr-bruno.webp" alt="" eager />
        <Picture src="/portfolio/revista-portfolio-fernanda.webp" alt="" eager />
      </div>
      <div className="designlp-hero-copy">
        <h1><em>Design gráfico</em> para empresas e prestadores de serviço</h1>
        <p>O design organiza a forma como sua marca se apresenta, fortalece o branding e influencia a percepção de valor construída em cada contato com o mercado.</p>
        <a className="button" href={whatsappDesign}>Quero criar meu material</a>
      </div>
    </section>

    <section className="designlp-perception">
      <div className="designlp-perception-stage">
        <article className="designlp-perception-card">
          <h2>Como o design gráfico e os materiais de divulgação fortalecem a percepção da sua marca</h2>
          <p>Materiais de divulgação e marketing desenvolvidos de forma profissional participam da maneira como clientes, parceiros e equipes interpretam uma marca antes mesmo de uma conversa começar.</p>
          <p>Tipografia, imagens, organização e acabamento visual trabalham juntos para apresentar o negócio com clareza e construir uma percepção compatível com o espaço que a marca deseja ocupar.</p>
        </article>
        <figure className="designlp-perception-visual">
          <Picture src="/portfolio/identidade-dr-bruno.webp" alt="Projeto de identidade visual aplicado a diferentes pontos de contato" />
        </figure>
        <aside className="designlp-perception-accent">
          <span><strong>Clareza</strong><small>Organiza a informação e facilita a compreensão.</small></span>
          <span><strong>Coerência</strong><small>Conecta os materiais pela mesma linguagem visual.</small></span>
          <span><strong>Reconhecimento</strong><small>Ajuda o público a identificar e lembrar da marca.</small></span>
          <span><strong>Valor</strong><small>Fortalece a percepção construída em cada contato.</small></span>
        </aside>
      </div>
    </section>

    <section className="designlp-brand">
      <div className="designlp-market" aria-label="Representação da fatia que uma marca relevante ocupa na percepção do mercado">
        <div className="designlp-market-chart" aria-hidden="true">
          <span>mercado</span>
          <strong>sua<br />marca</strong>
        </div>
        <div className="designlp-market-note">
          <span>fatia de mercado</span>
          <strong>Uma marca reconhecida ocupa espaço na memória e na escolha do público.</strong>
        </div>
        <div className="designlp-market-legend" aria-hidden="true"><span><i></i>sua marca</span><span><i></i>outras marcas</span></div>
      </div>
      <div className="designlp-brand-copy">
        <h2>O design ajuda a marca a ocupar uma posição mais clara no mercado</h2>
        <p>Branding também se constrói na repetição coerente dos sinais que uma empresa apresenta. Quando documentos, apresentações, publicações e materiais comerciais falam a mesma linguagem, o público reconhece com mais facilidade de onde aquela mensagem vem.</p>
        <p>Essa consistência fortalece a memória da marca, organiza sua expressão e cria uma percepção compatível com o espaço que ela deseja ocupar.</p>
      </div>
    </section>

    <section className="designlp-materials">
      <div className="designlp-materials-layout">
        <div className="designlp-materials-head">
          <h2>Materiais visuais para cada ponto de contato da empresa</h2>
          <p>Cada projeto nasce de uma necessidade concreta. Por isso, formato, conteúdo e direção visual são definidos de acordo com o uso que o material terá.</p>
          <a className="button" href={whatsappDesign}>Falar sobre o material que preciso</a>
        </div>
        <div className="designlp-materials-list">
          {materials.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p><span aria-hidden="true">↗</span></article>)}
        </div>
      </div>
    </section>

    <section className="designlp-socialarts">
      <div className="designlp-socialarts-copy">
        <h2>Design de posts para redes sociais de empresas e prestadores de serviço</h2>
        <p>Nós criamos artes personalizadas, alinhadas à identidade, ao posicionamento e à comunicação de cada negócio, e desenvolvemos posts estáticos e carrosséis para apresentar ideias com clareza, além de artes para campanhas de marketing digital, divulgação de produtos e serviços e ações planejadas para datas especiais, sempre ampliando a visibilidade da oferta, fortalecendo o posicionamento da marca e facilitando sua circulação nas redes sociais e no WhatsApp.</p>
        <a className="button" href={whatsappDesign}>Quero criar artes para minhas redes sociais</a>
      </div>
      {/* 17 artes reais enviadas pela Herika, na sequência do carrossel, com a arte 3 centralizada por padrão */}
      <DesignSocialGallery items={designSocialItems} initialIndex={2} />
      <blockquote className="designlp-socialarts-quote">Você cuida dos seus clientes e nós cuidamos de como a sua marca se posiciona.</blockquote>
    </section>

    <section className="designlp-magazine">
      <div className="designlp-magazine-gallery" aria-label="Revistas portfólio desenvolvidas pela Bydo">
        <MagazineGallery />
      </div>
      <div className="designlp-magazine-copy">
        <h2>Revista portfólio para apresentar sua história, seus serviços e seus diferenciais</h2>
        <p>A revista portfólio reúne as informações mais importantes sobre o seu trabalho em uma apresentação digital moderna, elegante e fácil de compartilhar.</p>
        <p>Ela pode ser enviada pelo WhatsApp, apresentada em reuniões, acessada pelo celular e preparada para impressão. O projeto atende principalmente prestadoras de serviço e também pode ser desenvolvido para empresas que precisam organizar sua apresentação institucional e comercial.</p>
        <div><span>PDF interativo</span><span>Envio pelo WhatsApp</span><span>Leitura no celular</span><span>Versão para imprimir</span></div>
        <a className="button" href={whatsappDesign}>Quero criar minha revista portfólio</a>
      </div>
    </section>

    <section className="designlp-showcase">
      <div className="designlp-showcase-head">
        <h2>Projetos de design desenvolvidos pela Bydo</h2>
        <p>Projetos diferentes mostram como a direção visual pode organizar mensagens, apresentar serviços e fortalecer a presença de uma marca em seus pontos de contato.</p>
      </div>
      <DesignShowcaseGrid />
    </section>

    <section className="designlp-process">
      <div className="designlp-process-head">
        <p className="designlp-kicker">Metodologia Bydo</p>
        <h2>Como funciona um projeto de design na Bydo</h2>
        <p>O processo conecta objetivo, conteúdo e forma, de modo que cada decisão visual tenha relação com a finalidade do material.</p>
      </div>
      <div className="designlp-process-flow">{process.map(([number, title, text]) => <div className="designlp-process-step" key={number}><span className="designlp-process-node">{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
      <p className="designlp-process-note">A linha conecta as cinco etapas visualmente, e a progressão de cor do azul ao rosa reforça a ideia de caminho, do primeiro entendimento do briefing até a entrega final. <b>É a mesma lógica de processo que a Bydo vende, agora aplicada na própria página que vende design.</b></p>
    </section>

    <section className="designlp-faq">
      <div className="designlp-faq-head"><h2>Dúvidas frequentes sobre serviços de design gráfico</h2><p>O escopo é definido conforme a necessidade da empresa, porque cada material possui uma finalidade, um volume de conteúdo e uma forma de utilização.</p></div>
      <div>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="designlp-final">
      <Picture src="/brand/bydo-symbol-gradient.svg" alt="" />
      <h2>Vamos conversar sobre design gráfico para sua empresa</h2>
      <p>Conte o que você precisa criar e em qual contexto esse material será utilizado. A Bydo analisa a demanda e indica o formato adequado para o projeto.</p>
      <a className="button" href={whatsappDesign}>Solicitar orçamento</a>
    </section>
  </main><Footer /></>;
}
