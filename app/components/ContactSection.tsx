"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { services, whatsapp } from "./site-shell";

const WHATSAPP_NUMBER = "5511939553258";

export default function ContactSection() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telefone = String(data.get("telefone") || "").trim();
    const servico = String(data.get("servico") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();
    if (!nome || !mensagem) return;

    setSending(true);
    const lines = [
      `Olá! Meu nome é ${nome} e vim pelo site da Bydo.`,
      email && `E-mail: ${email}`,
      telefone && `Telefone: ${telefone}`,
      servico && `Serviço de interesse: ${servico}`,
      `Mensagem: ${mensagem}`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    form.reset();
    setSending(false);
  }

  return <section className="contactsec" id="contato">
    <div className="contactsec-card">
      <div className="contactsec-wave" aria-hidden="true" />
      <div className="contactsec-form">
        <h2>Como podemos te ajudar?</h2>
        <p>Envie uma mensagem, conte o que você precisa ou peça uma cotação sem compromisso. Ao enviar, o WhatsApp abre pronto para a conversa continuar direto comigo.</p>
        <form onSubmit={handleSubmit}>
          <input name="nome" type="text" placeholder="Seu nome" required />
          <input name="email" type="email" placeholder="Seu e-mail" />
          <input name="telefone" type="tel" placeholder="Seu telefone ou WhatsApp" />
          <select name="servico" defaultValue="">
            <option value="" disabled>Qual serviço você precisa?</option>
            {services.map(service => <option value={service.tag} key={service.href}>{service.tag}</option>)}
            <option value="Ainda não sei, quero conversar">Ainda não sei, quero conversar</option>
          </select>
          <textarea name="mensagem" placeholder="Sua mensagem" required />
          <button type="submit" disabled={sending}>{sending ? "Abrindo o WhatsApp..." : "Enviar mensagem"}</button>
        </form>
      </div>
      <div className="contactsec-info">
        <h2>Não fique com dúvida</h2>
        <p>Se você tiver alguma dúvida ou precisar de uma cotação, fale direto comigo pelos canais abaixo.</p>
        <ul>
          <li><span className="contactsec-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg></span><span>Ribeirão Pires - SP</span></li>
          <li><span className="contactsec-icon" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.49.73 4.8 1.98 6.74L4 29l7.46-1.94a11.9 11.9 0 0 0 4.56.9h.01c6.62 0 12.02-5.4 12.02-12.02C28 8.4 22.63 3 16.02 3zm0 21.86h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-4.43 1.15 1.18-4.31-.24-.37a9.83 9.83 0 0 1-1.51-5.22c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.33-9.39 9.33zm5.44-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" /></svg></span><span>(11) 93955-3258</span></li>
          <li><span className="contactsec-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 6h18v12H3z" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg></span><span>agenciabydo@gmail.com</span></li>
        </ul>
        <p className="contactsec-reach">Não importa onde você esteja, porque atendemos todo o Brasil e também clientes fora do país, já que o digital elimina qualquer distância entre o seu negócio e a gente.</p>
        <a className="button" href={whatsapp}>Se preferir, fale direto no WhatsApp</a>
      </div>
    </div>
  </section>;
}
