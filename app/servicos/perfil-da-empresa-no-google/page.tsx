import {Footer, Header, Picture, whatsapp} from "../../site";
import {JsonLd, breadcrumbSchema, faqSchema, pageMetadata, serviceSchema} from "../../seo";
import ResultsCarousel from "./ResultsCarousel";
import GoogleMapSection from "../../components/GoogleMapSection";

const waNumber = "5511939553258";
const serviceWhatsapp = (message: string) => `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

export const resultCards = [
  {src: "/proof/google-01.webp", alt: "Painel de insights do Google mostrando 976 interações no perfil da empresa.", caption: "976 interações no perfil em um único mês de acompanhamento."},
  {src: "/proof/google-02.webp", alt: "Painel de insights do Google mostrando 892 solicitações de rotas até o endereço da empresa.", caption: "892 solicitações de rotas até a empresa, com pico de 129 só em maio."},
  {src: "/proof/google-03.webp", alt: "Painel de insights do Google mostrando 938 interações no perfil de outro cliente.", caption: "938 interações no perfil de outro cliente atendido pela Bydo."},
  {src: "/proof/google-04.webp", alt: "Painel de insights do Google mostrando 254 chamadas recebidas pelo perfil da empresa.", caption: "254 chamadas recebidas direto pelo perfil no Google."},
  {src: "/proof/google-05.webp", alt: "Painel de insights do Google mostrando 84 chamadas feitas do perfil da empresa.", caption: "84 chamadas feitas direto pelo perfil da empresa no Google."},
  {src: "/proof/google-06.webp", alt: "Painel de insights do Google mostrando 296 interações no perfil de um cliente.", caption: "296 interações no perfil de mais um cliente atendido pela Bydo."},
  {src: "/proof/google-07.webp", alt: "Painel de insights do Google mostrando 282 solicitações de rotas até o endereço da empresa.", caption: "282 solicitações de rotas até o endereço da empresa."},
  {src: "/proof/google-08.webp", alt: "Painel de insights do Google mostrando 475 interações no perfil da empresa.", caption: "475 interações no perfil em dois meses de gestão."},
  {src: "/proof/google-09.webp", alt: "Painel de insights do Google mostrando 62 chamadas feitas do perfil da empresa.", caption: "62 chamadas recebidas direto pelo perfil no Google."},
  {src: "/proof/google-10.webp", alt: "Painel de insights do Google mostrando 388 solicitações de rotas até o endereço da empresa.", caption: "388 solicitações de rotas até a empresa."},
  {src: "/proof/google-11.webp", alt: "Painel de insights do Google mostrando 25 cliques para acessar o site a partir do perfil.", caption: "25 cliques do perfil no Google direto para o site da empresa."},
  {src: "/proof/google-12.webp", alt: "Painel de insights do Google mostrando 582 solicitações de rotas até o endereço da empresa.", caption: "582 solicitações de rotas até a empresa."},
] as const;

const description = "Criação, organização e gestão do Perfil da Empresa no Google para negócios locais que precisam ser encontrados e escolhidos.";
export const metadata = pageMetadata({
  title: "Perfil da Empresa no Google | Bydo Marketing",
  description,
  path: "/servicos/perfil-da-empresa-no-google",
});

const faqs = [
  ["O Perfil da Empresa no Google é gratuito?", "Sim. A criação e o uso do perfil são gratuitos. A Bydo presta o serviço profissional de configuração, organização, conteúdo e acompanhamento."],
  ["Toda empresa pode ter um perfil?", "O recurso atende empresas que recebem clientes em um local físico ou que prestam serviços presencialmente na área informada. Negócios exclusivamente on-line não são elegíveis."],
  ["A Bydo garante a primeira posição?", "Nenhuma empresa pode garantir posições no Google. O trabalho organiza relevância, informações, reputação e consistência, enquanto distância e destaque local também influenciam cada resultado."],
  ["O perfil continuará pertencendo à minha empresa?", "Sim. O proprietário deve permanecer como titular e manter o controle do perfil, enquanto a Bydo recebe apenas o acesso necessário para executar o serviço contratado."],
  ["Posso contratar somente uma reorganização?", "Sim. Depois do diagnóstico, podemos indicar uma configuração inicial, uma reorganização completa ou um acompanhamento contínuo, conforme a situação encontrada."],
  ["Preciso ter um endereço aberto ao público?", "Não necessariamente. Empresas que atendem no local do cliente podem ocultar o endereço e informar uma área de cobertura. O endereço deve aparecer somente quando a empresa realmente recebe clientes naquele local."],
  ["Por que uma alteração pode demorar para aparecer?", "As mudanças enviadas ao perfil passam pela análise do Google. Algumas aparecem rapidamente, enquanto outras podem permanecer pendentes por mais tempo ou exigir uma nova verificação."],
  ["As avaliações ajudam a empresa a aparecer melhor?", "As avaliações contribuem para a reputação e para o destaque local, porém atuam junto de outros fatores. Informações completas, relevância para a pesquisa e distância também participam da classificação."],
  ["O que influencia a posição nos resultados locais?", "O Google considera principalmente a relevância entre o perfil e a pesquisa, a distância em relação ao usuário e o destaque da empresa. Por isso, a organização do perfil precisa respeitar a realidade do negócio e as diretrizes da plataforma."],
  ["O que acontece quando um perfil é suspenso?", "Um perfil pode ser suspenso quando o Google identifica possíveis violações das diretrizes. Antes de enviar uma contestação, é importante revisar as informações e reunir documentos que comprovem o nome, o endereço e a existência da empresa."],
] as const;

export default function Page() {
  return <><JsonLd data={[
    serviceSchema("Gestão do Perfil da Empresa no Google", description, "/servicos/perfil-da-empresa-no-google"),
    faqSchema(faqs),
    breadcrumbSchema([["Home", "/"], ["Serviços", "/#servicos"], ["Perfil da Empresa no Google", "/servicos/perfil-da-empresa-no-google"]]),
  ]} /><Header /><main className="googlelp">
    <section className="googlelp-hero">
      <Picture className="googlelp-hero-photo" src="/google-profile/hero-owner.png" alt="Empreendedora consultando o celular em seu espaço de atendimento" eager />
      <div className="googlelp-hero-shade" aria-hidden="true" />
      <Picture className="googlelp-hero-google" src="/brand/google-g.svg" alt="" />
      <div className="googlelp-hero-copy">
        <h1><span>No Google, quem não é visto</span><span>é substituído pelo concorrente</span><em>no mesmo instante.</em></h1>
        <p className="googlelp-hero-subtitle"><span>Organizamos a presença da sua empresa na Pesquisa Google e no Google Maps</span><span>para que o cliente encontre informações corretas, conheça seus serviços</span><span>e avance com mais segurança até o contato.</span></p>
        <div className="googlelp-actions"><a className="button" href={whatsapp}>Quero organizar meu perfil</a><a href="#como-funciona">Entender como funciona ↓</a></div>
      </div>
    </section>

    <section className="googlelp-concept">
      <div className="googlelp-concept-copy">
        <h2>O que é o Perfil da Empresa no Google, afinal?</h2>
        <p>É o cadastro gratuito que faz sua empresa aparecer no Google Maps e na busca quando alguém procura pelo que você oferece, mostrando nome, localização, horários, fotos, avaliações e um caminho direto até o contato. Não é apenas um cadastro preenchido, porque a forma como ele é organizado decide se sua empresa passa confiança ou passa despercebida bem no momento em que o cliente está pronto para escolher.</p>
      </div>
      <Picture className="googlelp-concept-image" src="/google-profile/concept-local-search.webp" alt="Pessoa pesquisando um serviço perto dela no Google, com o Perfil da Empresa aparecendo nos resultados locais" />
    </section>

    <section className="googlelp-fear">
      <p>O que você sentiria se soubesse que alguém te procurou para contratar o seu serviço e não te encontrou?</p>
      <a className="button" href={whatsapp}>Não quero mais perder cliente assim</a>
    </section>

    <section className="googlelp-why">
      <div className="googlelp-why-copy"><h2>A decisão do seu cliente começa na pesquisa do Google, antes mesmo de ele chegar até você.</h2><p>A pesquisa no Google costuma acontecer quando uma necessidade já existe, pois a pessoa quer descobrir quem atende na região, entender as opções disponíveis e decidir com quem vale a pena conversar, e é justamente nesse momento que o perfil da sua empresa entra na disputa antes mesmo do primeiro contato acontecer.</p><p>O Perfil da Empresa reúne as informações que sustentam essa escolha, porque quando localização, horários, serviços, fotos e avaliações fazem sentido em conjunto, o cliente encontra menos dúvidas para confirmar que aquele é o negócio certo para procurar.</p><p>Quem pesquisa um serviço perto de mim no Google Maps costuma conferir esses mesmos pontos antes de visitar o espaço ou mandar a primeira mensagem, de modo que boa parte da decisão já está tomada quando o cliente finalmente chega até a sua porta.</p><p>Quando o perfil está incompleto ou desatualizado, essa dúvida aparece justamente no momento em que o cliente já estava pronto para agir, então organizar essas informações com antecedência ajuda sua empresa a participar de uma decisão que já está em andamento, tanto na Pesquisa Google quanto no Google Maps.</p><a className="button" href={whatsapp}>Quero preparar minha empresa</a></div>
      <div className="googlelp-why-compare">
        <Picture className="googlelp-why-single-image" src="/google-profile/serralheria-perto-de-mim.webp" alt="Cliente pesquisando serralheria perto de mim no Google, com o perfil da empresa aparecendo na busca e no Maps" />
      </div>
      <div className="googlelp-why-flow" aria-label="O papel do Perfil da Empresa na decisão local"><article><strong>Ser encontrada</strong><p>A empresa aparece quando alguém pesquisa uma solução na região.</p></article><article><strong>Ser compreendida</strong><p>O cliente identifica o que ela oferece e como pode ser atendido.</p></article><article><strong>Ser escolhida</strong><p>Informações coerentes ajudam a confirmar confiança e avançar até o contato.</p></article></div>
    </section>

    <section className="googlelp-diagnostic">
      <div><h2>Sua empresa aparece para quem procura pelos seus serviços no Google?</h2><p>Podemos analisar como o perfil está apresentado hoje e indicar quais informações precisam ser organizadas para melhorar a clareza, a confiança e o caminho até o contato.</p></div>
      <a className="button" href={whatsapp}>Quero analisar meu perfil</a>
    </section>

    <section className="googlelp-results">
      <h2>É isso que acontece quando a Bydo faz a gestão do seu perfil de empresa no Google.</h2>
      <ResultsCarousel items={resultCards} />
      <a className="button" href={whatsapp}>Quero ter resultados assim no meu negócio</a>
    </section>

    <section className="googlelp-services" id="como-funciona">
      <div className="googlelp-service-panel">
        <div className="googlelp-services-title"><h2>Temos o serviço certo para o momento atual do seu perfil no Google.</h2><p><span>Cada perfil parte de uma situação diferente.</span><span>Por isso, o serviço acompanha o que precisa ser organizado agora.</span></p></div>
        <div className="googlelp-service-options">
          <article><i aria-hidden="true" /><span className="googlelp-service-tag">Perfil novo</span><h3>Criação e configuração</h3><p className="googlelp-service-desc">Para quem tem um negócio local ou presta serviços e ainda não criou o Perfil da Empresa, porém precisa começar com uma estrutura coerente com a região atendida e com o que oferece.</p><ul><li>Cadastro completo e configurado do zero</li><li>Categorias e serviços definidos com clareza</li><li>Fotos, horários e contatos organizados desde o início</li></ul><strong>Nós criaremos o perfil de forma completa e com a melhor otimização possível, além de construir uma apresentação profissional que transmite confiança e coloca a sua empresa na rua mais movimentada do mundo.</strong><a className="button small googlelp-service-cta" href={serviceWhatsapp("Olá, quero criar o perfil da minha empresa no Google do zero e queria saber mais sobre esse serviço.")}>Quero saber mais</a></article>
          <article><i aria-hidden="true" /><span className="googlelp-service-tag">Perfil existente</span><h3>Reorganização completa</h3><p className="googlelp-service-desc">Para empresas e profissionais que já aparecem no Google, porém mantêm um cadastro incompleto, desatualizado ou configurado sem a clareza necessária para ajudar o cliente a decidir.</p><ul><li>Correção de informações erradas ou incompletas</li><li>Categorias e descrição revisadas</li><li>Fotos, horários e dados atualizados</li></ul><strong>Nós iremos corrigir as inconsistências do seu perfil, completar as informações que ainda estão faltando, atualizar fotos e horários e melhorar toda a apresentação para que o seu negócio finalmente pareça confiável.</strong><a className="button small googlelp-service-cta" href={serviceWhatsapp("Olá, meu perfil já existe no Google mas preciso reorganizar tudo e queria saber mais sobre esse serviço.")}>Quero saber mais</a></article>
          <article><i aria-hidden="true" /><span className="googlelp-service-tag">Acompanhamento contínuo</span><h3>Otimização mensal</h3><p className="googlelp-service-desc">Para quem precisa manter o perfil ativo ao longo do tempo. Depois da organização inicial, começa um trabalho mensal de atualização, análise e otimização conforme a evolução da empresa e das buscas.</p><ul><li>Publicações e novidades todo mês</li><li>Acompanhamento de avaliações e respostas</li><li>Ajustes conforme o desempenho nas buscas</li></ul><strong>Nós iremos corrigir inconsistências, completar as informações, criar uma apresentação profissional, manter a presença atualizada e acompanhar oportunidades de melhoria todos os meses.</strong><a className="button small googlelp-service-cta" href={serviceWhatsapp("Olá, quero manter meu perfil no Google sempre atualizado com acompanhamento mensal e queria saber mais sobre esse serviço.")}>Quero saber mais</a></article>
        </div>
      </div>
    </section>

    <section className="googlelp-showcase">
      <div className="googlelp-showcase-head"><h2>Um perfil completo ajuda o cliente a entender sua empresa antes do contato.</h2><p>Muitos negócios já possuem um perfil, porém aparecem com informações incompletas, pouco claras ou desconectadas. Quando a apresentação faz sentido como um todo, fica mais fácil reconhecer os serviços, avaliar a empresa e decidir o próximo passo.</p></div>
      <div className="googlelp-showcase-body">
        <div className="googlelp-screens googlelp-screens-single"><Picture src="/proof/google-showcase-composicao.webp" alt="Composição antes e depois do perfil da Odontologia Gonçalves no Google, mostrando a evolução da apresentação" eager /></div>
        <div className="googlelp-included"><h3>O que o cliente precisa encontrar</h3><ul><li><b>Informações que confirmam a escolha</b><span>Horários, localização, contatos e demais dados precisam transmitir segurança.</span></li><li><b>Serviços fáceis de compreender</b><span>Uma apresentação clara ajuda a pessoa a reconhecer se encontrou a empresa certa.</span></li><li><b>Imagens que mostram a realidade</b><span>Fotos reais ajudam o público a conhecer o espaço, a rotina e o trabalho oferecido.</span></li><li><b>Avaliações que reduzem a dúvida</b><span>A experiência de outros clientes oferece referências importantes para a decisão.</span></li></ul></div>
      </div>
    </section>

    <section className="googlelp-local-proof">
      <h2>A inteligência artificial mudou a forma de busca, mas a decisão ainda continua sendo local.</h2>
      <p className="googlelp-local-proof-intro">Hoje, além do Google tradicional, muita gente já pergunta direto para uma inteligência artificial como o ChatGPT, o Gemini, o Claude ou o Copilot qual profissional contratar, qual loja visitar ou qual serviço resolve o problema que está enfrentando naquele momento, e essas ferramentas buscam justamente as informações que estão organizadas no perfil da empresa para dar essa resposta. Por isso, não importa se a busca começa no Google, no Maps ou dentro de uma dessas inteligências artificiais, porque o que decide se o seu negócio aparece ou não continua sendo a forma como ele está estruturado e apresentado no ambiente digital.</p>
      <Picture className="googlelp-local-proof-visual" src="/proof/google-ia-busca-local.webp" alt="Ilustração representando a busca por inteligência artificial e a decisão local" />
      <div className="googlelp-local-proof-grid">
        <div className="googlelp-local-stat"><div className="googlelp-local-stat-num">87,5%</div><div className="googlelp-local-stat-caption">das buscas realizadas no Brasil acontecem dentro do Google.</div></div>
        <div className="googlelp-local-stat"><div className="googlelp-local-stat-num">46%</div><div className="googlelp-local-stat-caption">das buscas no Google já nascem com intenção local.</div></div>
        <div className="googlelp-local-stat"><div className="googlelp-local-stat-num">76%</div><div className="googlelp-local-stat-caption">de quem busca algo perto pelo celular visita o local em até 24 horas.</div></div>
        <div className="googlelp-local-stat"><div className="googlelp-local-stat-num">2,7x</div><div className="googlelp-local-stat-caption">mais chances de um perfil completo ser considerado confiável pelo cliente.</div></div>
      </div>
      <p className="googlelp-local-proof-close">O Google concentra a busca, a busca já nasce local, e o local vira visita em poucas horas. <b>Só um perfil bem cuidado transforma essa busca em cliente de verdade.</b></p>
      <p className="googlelp-source">Dados públicos sobre comportamento de busca e SEO local, reunidos de fontes do setor de marketing digital, com participação do Google no Brasil segundo a StatCounter em agosto de 2026.</p>
    </section>

    <section className="googlelp-faq">
      <div><h2>Antes de cuidar do perfil, vale entender o que depende dele.</h2></div>
      <div>{faqs.map(([question,answer],index) => <details key={question} open={index===0}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="googlelp-final"><Picture src="/brand/avatar-bydo-gradiente.svg" alt="" /><h2>Se o cliente já está procurando, sua empresa precisa estar preparada para ser encontrada.</h2><p>Conte para nós como o seu perfil funciona hoje e quais serviços você quer apresentar melhor no Google.</p><a className="button" href={whatsapp}>Falar com a Bydo</a></section>

    <GoogleMapSection />
  </main><Footer /></>;
}
