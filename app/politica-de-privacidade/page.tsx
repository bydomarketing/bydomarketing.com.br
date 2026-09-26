import type { Metadata } from "next";

import { Footer, Header } from "../components/site-shell";
import { JsonLd, breadcrumbSchema, pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidade e Cookies | Bydo Marketing",
  description: "Entenda quais dados o site da Bydo Marketing coleta, como eles são usados e quais são os seus direitos sobre essas informações.",
  path: "/politica-de-privacidade",
});

export default function Page() {
  return <>
    <JsonLd data={breadcrumbSchema([["Home", "/"], ["Política de Privacidade", "/politica-de-privacidade"]])} />
    <Header />
    <main className="articlelp">
      <article>
        <div className="articlelp-hero">
          <a href="/">← Voltar para a home</a>
          <span>Bydo Marketing</span>
          <h1>Política de Privacidade e Cookies</h1>
          <p>Este documento explica de forma simples quais informações o nosso site coleta, para que elas servem e como você pode falar com a gente sobre isso a qualquer momento.</p>
          <div><span>Última atualização em 26 de setembro de 2026</span></div>
        </div>
        <div className="articlelp-content">
          <p className="articlelp-introduction">A Bydo Marketing respeita a privacidade de quem visita o site e segue a Lei Geral de Proteção de Dados (LGPD) na forma como trata qualquer informação enviada por aqui, então esta página existe pra deixar claro, em linguagem direta, o que acontece com os seus dados quando você navega ou entra em contato com a gente.</p>
          <section>
            <h2>Quem é responsável pelo site</h2>
            <p>O site bydomarketing.com.br pertence à Bydo Marketing, agência de marketing digital conduzida por Herika Gomes, com atendimento a partir de Ribeirão Pires, São Paulo. Qualquer dúvida sobre esta política pode ser enviada para agenciabydo@gmail.com ou pelo WhatsApp (11) 93955-3258.</p>
          </section>
          <section>
            <h2>Quais dados coletamos</h2>
            <p>O único lugar do site que pede informação pessoal é o formulário de contato, onde perguntamos nome, e-mail, telefone, o serviço de interesse e a mensagem que você quiser escrever. Preencher e-mail e telefone é opcional, mas nome e mensagem precisam ser preenchidos pra que a conversa faça sentido do outro lado.</p>
          </section>
          <section>
            <h2>Como usamos essas informações</h2>
            <p>Quando você envia o formulário, o site monta essa mensagem automaticamente e abre uma conversa direta no WhatsApp entre você e a Bydo, então esses dados não ficam guardados em nenhum banco de dados ou servidor próprio nosso, eles passam a existir apenas dentro da conversa de WhatsApp que se forma a partir do envio. Usamos essas informações unicamente pra entender o que você precisa e responder sua solicitação, nunca pra vender ou repassar seus dados pra terceiros.</p>
          </section>
          <section>
            <h2>Cookies e ferramentas de terceiros</h2>
            <p>A página de contato exibe um mapa do Google incorporado, então o próprio Google pode registrar cookies técnicos ligados a esse mapa quando ele carrega, seguindo a política de privacidade do Google. Caso a Bydo passe a usar ferramentas de medição de audiência, como Google Analytics ou Google Search Console, essas ferramentas também podem usar cookies pra entender como as pessoas navegam pelo site, sempre de forma agregada e sem te identificar pelo nome.</p>
          </section>
          <section>
            <h2>Seus direitos sobre os dados enviados</h2>
            <p>Você pode pedir a qualquer momento pra saber quais dados seus chegaram até a Bydo através do formulário, pedir a correção de alguma informação ou pedir que uma conversa antiga seja apagada do nosso lado, bastando entrar em contato pelo e-mail ou pelo WhatsApp informados nesta página.</p>
          </section>
          <section>
            <h2>Alterações nesta política</h2>
            <p>Esta política pode ser atualizada conforme o site cresce e passa a usar novas ferramentas, e a data no topo desta página sempre mostra quando foi a última revisão.</p>
          </section>
        </div>
      </article>
    </main>
    <Footer />
  </>;
}
