import {Footer, Header, Picture, whatsapp} from "../../site";
import {JsonLd, breadcrumbSchema, faqSchema, pageMetadata, serviceSchema} from "../../seo";
import Reveal from "./Reveal";

const description = "Planejamento, criação e gestão de conteúdo para negócios locais, prestadores de serviço e pequenas empresas.";
export const metadata = pageMetadata({
  title: "Gestão de Redes Sociais | Bydo Marketing",
  description,
  path: "/servicos/gestao-de-redes-sociais",
});

const whatsappMessage = (message: string) => `https://wa.me/5511939553258?text=${encodeURIComponent(message)}`;

const activePresenceTopics = [
  ["Um perfil ativo mostra a empresa por inteiro", "Ele apresenta produtos e serviços, responde dúvidas, registra a rotina, mostra resultados e abre vários caminhos pra que o público encontre e conheça o seu negócio."],
  ["O seu conteúdo também aparece no Google", "Hoje as publicações públicas do Instagram podem aparecer na Pesquisa do Google, e uma legenda clara, construída com os termos que o cliente realmente pesquisa, ajuda a sua empresa a ser descoberta até fora da rede social."],
  ["Constância constrói autoridade", "Quando a empresa se comunica com regularidade e coerência, ela transmite autoridade e passa a impressão de um negócio sério, o que aumenta a confiança e faz o cliente escolher você mesmo quando aparece um concorrente mais barato."],
  ["Aparecer sempre mantém a sua relevância", "Como as redes entregam mais pra quem publica com frequência, essa constância sustenta a sua relevância, de modo que a empresa continua sendo vista em vez de ir sumindo aos poucos."],
] as const;

const faqs = [
  ["A gestão funciona para negócios locais?", "Sim. O planejamento considera a rotina, os produtos, os serviços, a região atendida e os motivos que fazem o cliente escolher aquele negócio."],
  ["Prestadores de serviço também podem contratar?", "Sim. Para profissionais, a estratégia pode trabalhar conhecimento, processo, diferenciais, provas e conteúdos que ajudem o público a confiar antes do contato."],
  ["Preciso aparecer em vídeos e stories?", "A participação é definida conforme a realidade de cada cliente. Algumas estratégias dependem mais de vídeos, enquanto outras combinam fotografias, artes, carrosséis e uma presença institucional."],
  ["Quem fornece as fotos e os vídeos?", "A necessidade de materiais é alinhada antes do início. Podemos trabalhar com conteúdos enviados pelo cliente e com materiais que a empresa já possui. Quando houver necessidade de uma produção específica, ela será avaliada separadamente."],
  ["A Bydo cria as legendas e as artes?", "Sim. A estrutura pode incluir planejamento, legendas, design, carrosséis, roteiros e edições de vídeo conforme o serviço indicado para o perfil."],
  ["A Bydo também publica os conteúdos?", "Sim. Depois da aprovação, os conteúdos previstos podem ser agendados e distribuídos nas redes incluídas na proposta."],
  ["Quantos conteúdos serão publicados por mês?", "A quantidade depende da necessidade, da disponibilidade para produzir materiais e do ritmo que a empresa consegue sustentar. A recomendação é apresentada depois da análise inicial."],
  ["A gestão inclui respostas a comentários e mensagens?", "O acompanhamento do perfil faz parte da organização do serviço, enquanto o atendimento comercial e as respostas em nome da empresa precisam ser definidos conforme a rotina e o escopo contratado."],
  ["Anúncios estão incluídos na gestão?", "A gestão de conteúdo organiza a presença orgânica. Quando a empresa precisa de campanhas, o planejamento de anúncios é tratado em uma proposta própria ou como serviço complementar."],
  ["Quanto tempo leva para começar?", "O início depende do recebimento das informações, dos acessos e dos materiais necessários. Primeiro organizamos a base estratégica e visual, de modo que o calendário possa começar com clareza."],
] as const;

export default function Page() {
  return <><JsonLd data={[
    serviceSchema("Gestão de redes sociais", description, "/servicos/gestao-de-redes-sociais"),
    faqSchema(faqs),
    breadcrumbSchema([["Home", "/"], ["Serviços", "/#servicos"], ["Gestão de redes sociais", "/servicos/gestao-de-redes-sociais"]]),
  ]} /><Header /><main className="sociallp">
    <section className="sociallp-hero">
      <Picture className="sociallp-hero-photo" src="/social-media/hero-redes-sociais-loja.png" alt="Perfil de Instagram de uma loja local em um smartphone cercado pelos ícones das principais redes sociais" eager />
      <div className="sociallp-hero-shade" aria-hidden="true" />
      <div className="sociallp-hero-copy">
        <h1><span>Fazemos gestão de redes sociais<br />para </span><em>prestadores de serviços,<br />negócios locais e pequenas empresas.</em></h1>
        <p>Planejamento, criação de conteúdo e publicação para manter uma presença profissional, coerente com o seu negócio e preparada para atrair novos clientes.</p>
        <a className="button" href={whatsapp}>Quero organizar minhas redes</a>
      </div>
    </section>

    <section className="sociallp-intro">
      <div className="sociallp-intro-copy">
        <h2>Quem encontra seu perfil precisa reconhecer a qualidade que já existe no seu negócio.</h2>
        <p>Enquanto você atende clientes, cuida da equipe e mantém a empresa funcionando, as redes sociais continuam apresentando o seu negócio para quem chega até ele.</p>
        <p>Por isso, a Bydo organiza temas, linguagem, direção visual e frequência para que essa presença represente com clareza o trabalho que a sua empresa já realiza.</p>
        <a className="button" href={whatsapp}>Quero organizar minha presença</a>
      </div>
      <aside className="sociallp-intro-panel">
        <h3>Seu perfil também participa da decisão do cliente.</h3>
        <p>Quando a comunicação está desatualizada, genérica ou desconectada da realidade, a percepção de valor pode diminuir antes mesmo de uma conversa começar.</p>
        <div><span><b>Clareza</b><small>para apresentar o que você oferece</small></span><span><b>Consistência</b><small>para manter sua empresa presente</small></span></div>
      </aside>
    </section>

    <section className="sociallp-audience">
      <div className="sociallp-audience-head"><h2>Para quem é indicada a Gestão de Redes Sociais?</h2><p>Cada cliente gera uma demanda diferente. Por isso, ajustamos o planejamento à realidade da empresa, enquanto sua participação mantém o conteúdo próximo do que acontece no dia a dia. Você contribui com informações, ideias, fotos e vídeos, e a Bydo transforma esse material em uma comunicação organizada, estratégica e possível de sustentar.</p></div>
      <div className="sociallp-audience-track">
        <article><i aria-hidden="true" /><span>Negócios locais</span><h3>Produtos, serviços e rotina precisam continuar visíveis para quem acompanha a empresa.</h3><p>Conteúdos podem apresentar novidades, bastidores, atendimento, diferenciais, datas comerciais e motivos para visitar ou entrar em contato.</p><a className="sociallp-audience-button" href={whatsappMessage("Tenho um negócio local e gostaria de entender como funciona a gestão de redes sociais para minha empresa.")}>Quero falar sobre meu negócio local</a></article>
        <article><i aria-hidden="true" /><span>Prestadores de serviço</span><h3>Conhecimento e experiência precisam ganhar uma forma clara de aparecer.</h3><p>O conteúdo ajuda a explicar problemas, processos, decisões e provas que aumentam a confiança antes da contratação.</p><a className="sociallp-audience-button" href={whatsappMessage("Sou prestador de serviços e gostaria de entender como funciona a gestão de redes sociais para o meu perfil.")}>Quero falar sobre meu serviço</a></article>
        <article><i aria-hidden="true" /><span>Pequenas empresas</span><h3>A comunicação precisa manter unidade enquanto diferentes serviços disputam atenção.</h3><p>Planejamento e direção visual organizam a mensagem para que a empresa pareça tão profissional nas redes quanto já é no atendimento.</p><a className="sociallp-audience-button" href={whatsappMessage("Tenho uma pequena empresa e gostaria de receber mais informações sobre a gestão de redes sociais.")}>Quero falar sobre minha empresa</a></article>
      </div>
    </section>

    <section className="sociallp-breaker">
      <Reveal className="sociallp-breaker-card">
        <h2>Enquanto você atende quem já é seu cliente, nós cuidamos da parte que traz os próximos.</h2>
        <p>Você não precisa arrumar tempo nem aprender a mexer em rede social, porque a gente assume o planejamento, a produção e a publicação, de modo que a sua presença continue ativa, coerente e visível enquanto você segue focado em quem já confia no seu trabalho.</p>
        <a className="button sociallp-breaker-cta" href={whatsapp}>Quero minha rotina de volta ↗</a>
      </Reveal>
    </section>

    <section className="sociallp-process">
      <div className="sociallp-process-copy">
        <h2>Como a Bydo conduz <em>a gestão das suas redes sociais.</em></h2>
        <p>O nosso método segue quatro etapas que se conectam, porque cada uma prepara o terreno para a próxima e garante que a comunicação do seu negócio cresça com direção, em vez de depender de tentativa e erro.</p>
        <div className="sociallp-process-statement">Você não precisa se transformar em blogueiro, aparecer o tempo todo ou seguir todas as tendências, porque a sua participação é combinada de acordo com a rotina, a facilidade para produzir materiais e a forma mais coerente de representar o seu negócio.</div>
        <p>Tudo começa pela <strong>análise</strong>, quando estudamos o seu perfil, entendemos o seu público e observamos o que já existe no mercado, de modo a identificar oportunidades reais de posicionamento e os pontos que precisam de mais atenção antes de qualquer conteúdo ser produzido.</p>
        <p>A partir desse diagnóstico entra o <strong>planejamento</strong>, etapa em que organizamos temas, linguagem, direção visual e um calendário editorial que respeita a rotina e a capacidade de participação de cada cliente, de forma que cada conteúdo já nasça com uma função clara dentro da presença digital do negócio.</p>
        <p>Na <strong>execução</strong>, colocamos esse planejamento em prática através da produção de artes, legendas, carrosséis e vídeos que traduzem a estratégia em conteúdo pronto para publicar, sempre mantendo a identidade visual e a linguagem alinhadas ao que o seu negócio representa.</p>
        <p>Por fim, o <strong>acompanhamento</strong> mantém esse trabalho em constante evolução, porque analisamos o desempenho de cada publicação, ajustamos o que for necessário e conduzimos a comunicação para que ela continue conectada aos objetivos comerciais do negócio.</p>
        <p className="sociallp-process-note">É esse método, aplicado com consistência, que transforma a presença digital em um canal capaz de atrair, engajar e converter novos clientes para o seu negócio.</p>
        <h3>O método em quatro etapas.</h3>
        <ul className="sociallp-process-steps"><li>Análise</li><li>Planejamento</li><li>Execução</li><li>Acompanhamento</li></ul>
        <a href={whatsapp}>Conversar com a equipe da Bydo ↗</a>
      </div>
      <div className="sociallp-process-visual">
        <Picture src="/social/social-05.webp" alt="Espaço reservado para uma imagem de apresentação da gestão de redes sociais da Bydo" />
      </div>
    </section>

    <section className="sociallp-editorial">
      <div className="sociallp-editorial-head">
        <h2>Por que manter a sua presença digital ativa faz o cliente escolher você</h2>
        <p>Quando alguém precisa de um serviço na sua região, a primeira coisa que faz é procurar a empresa antes de decidir, e o que essa pessoa encontra é o que define se ela confia em você ou segue pro próximo nome da lista. Por isso não basta existir no digital, a sua presença precisa estar viva.</p>
      </div>
      <div className="sociallp-editorial-body">
        <div className="sociallp-editorial-topics">{activePresenceTopics.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
        <div className="sociallp-editorial-grid"><Picture src="/social/mockup-carrossel-rita-de-cassia-vertical.webp" alt="Mockup de carrossel de Instagram mostrando publicações criadas pela Bydo para a cliente Rita de Cássia" /></div>
      </div>
      <a className="button sociallp-editorial-cta" href={whatsapp}>Conversar sobre meu conteúdo ↗</a>
    </section>

    <section className="sociallp-faq">
      <div><h2>O que precisa estar claro antes de começar.</h2><p>Cada gestão é recomendada depois de entendermos a realidade do perfil e a participação possível do cliente.</p></div>
      <div>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="sociallp-final"><Picture src="/brand/instagram-official.svg" alt="" /><h2>A qualidade do seu negócio também precisa ser reconhecida nas redes sociais para que sua empresa seja encontrada, valorizada e escolhida.</h2><p>E é isso que fazemos por negócios como o seu.</p><a className="button" href={whatsapp}>Falar com a Bydo</a></section>
  </main><Footer /></>;
}
