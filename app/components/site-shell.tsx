import Link from "next/link";
import HeaderShell from "./HeaderShell";

export const whatsapp = "https://wa.me/5511939553258?text=Ol%C3%A1%2C%20quero%20estruturar%20a%20presen%C3%A7a%20digital%20do%20meu%20neg%C3%B3cio.";

export const services = [
  { href: "/servicos/sites-e-landing-pages", navLabel: "Sites", tag: "Sites e Landing Pages", title: "Uma sede própria na internet, criada para explicar seu valor e gerar contato.", text: "Sites institucionais e landing pages preparados para busca, confiança e conversão." },
  { href: "/servicos/perfil-da-empresa-no-google", navLabel: "Google", tag: "Perfil da Empresa no Google", title: "Quem procura o seu serviço precisa conseguir encontrar você.", text: "Presença local organizada para transformar buscas em oportunidades reais." },
  { href: "/servicos/gestao-de-redes-sociais", navLabel: "Redes Sociais", tag: "Gestão de Redes Sociais", title: "Sua presença segue profissional enquanto você atende seus clientes.", text: "Planejamento, conteúdo e publicação para uma marca viva no dia a dia." },
  { href: "/servicos/design-grafico", navLabel: "Design", tag: "Design Gráfico", title: "Seus materiais também apresentam a qualidade da sua empresa.", text: "Apresentações, portfólios e materiais institucionais que reforçam percepção de valor." },
] as const;

export function Brand({ footer = false }: { footer?: boolean } = {}) {
  return <Link className={`brand${footer ? " brand-footer" : ""}`} href="/" aria-label="Bydo Marketing, página inicial">
    <img src="/brand/bydo-logo-header.webp" alt="Bydo Marketing" width={1468} height={639} />
  </Link>;
}

export function Header({ overHero = false }: { overHero?: boolean } = {}) {
  return <><a className="skip-link" href="#conteudo-principal">Ir para o conteúdo principal</a><HeaderShell overHero={overHero}><Brand /><nav aria-label="Navegação principal"><Link href="/">Home</Link><Link href="/sobre">Sobre</Link>{services.map(service => <Link key={service.href} href={service.href}>{service.navLabel}</Link>)}<Link href="/blog">Blog</Link><Link href="/contato">Contato</Link></nav><details className="mobile-menu"><summary aria-label="Abrir menu de navegação"><span aria-hidden="true"><i /><i /><i /></span>Menu</summary><div><Link href="/">Home</Link><Link href="/sobre">Sobre</Link>{services.map(service => <Link key={service.href} href={service.href}>{service.tag}</Link>)}<Link href="/blog">Blog</Link><Link href="/contato">Contato</Link><a className="button small" href={whatsapp}>Falar no WhatsApp</a></div></details><a className="button small header-whatsapp" href={whatsapp}>Falar no WhatsApp</a></HeaderShell><span className="skip-target" id="conteudo-principal" tabIndex={-1} /></>
}

export function Footer() {
  return <footer className="sitefooter">
    <div className="sitefooter-grid">
      <div className="sitefooter-about">
        <Brand footer />
        <div className="sitefooter-social">
          <a href="https://www.instagram.com/bydomarketingdigital/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Bydo Marketing"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4.3" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" /></svg></a>
          <a href="https://www.facebook.com/profile.php?id=61577454752620" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Bydo Marketing"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11h-2.4v2.8h2.4V21z" fill="currentColor" /></svg></a>
          <a href="https://www.linkedin.com/company/bydo-marketing-digital/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Bydo Marketing"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.85-3-1.85 0-2.13 1.44-2.13 2.9V21H9z" fill="currentColor" /></svg></a>
        </div>
        <p>A Bydo Marketing cria sites, fortalece empresas no Google e organiza a presença digital de prestadoras de serviço e empresas.</p>
      </div>
      <div className="sitefooter-col">
        <h3>Acesso rápido</h3>
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        {services.map(service => <Link key={service.href} href={service.href}>{service.tag}</Link>)}
        <Link href="/blog">Blog</Link>
        <Link href="/contato">Contato</Link>
      </div>
      <div className="sitefooter-col sitefooter-contact">
        <h3>Nossos contatos</h3>
        <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="currentColor" /></svg>Ribeirão Pires - SP · atendimento em todo o Brasil e no mundo</span>
        <span><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.49.73 4.8 1.98 6.74L4 29l7.46-1.94a11.9 11.9 0 0 0 4.56.9h.01c6.62 0 12.02-5.4 12.02-12.02C28 8.4 22.63 3 16.02 3zm0 21.86h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-4.43 1.15 1.18-4.31-.24-.37a9.83 9.83 0 0 1-1.51-5.22c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.33-9.39 9.33zm5.44-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" fill="currentColor" /></svg>(11) 93955-3258</span>
        <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3z" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>agenciabydo@gmail.com</span>
      </div>
    </div>
    <div className="sitefooter-bottom"><span>© {new Date().getFullYear()} Bydo Marketing. Todos os direitos reservados.</span><span aria-hidden="true"> · </span><Link href="/politica-de-privacidade" className="sitefooter-policy">Política de Privacidade e Cookies</Link></div>
  </footer>;
}

export function Picture({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  // The portfolio mixes provisional files with different proportions. Keeping the
  // native element prevents false intrinsic dimensions until the final assets arrive.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={src} alt={alt} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" />;
}

export function FounderSection() {
  return <section className="founder home-founder"><div className="founderphoto"><Picture src="/portfolio/herika-gomes.webp" alt="Herika Gomes, estrategista e fundadora da Bydo Marketing" /></div><div><p className="eyebrow">Quem está por trás da Bydo</p><h2>Estratégia, design e visão comercial reunidos no mesmo trabalho.</h2><p>Sou Herika Gomes e criei a Bydo para ajudar empresas a organizarem sua presença e crescerem com mais estrutura no digital. Minha trajetória reúne quase 30 anos de experiência em design gráfico, 20 anos de atuação em marketing e mais de cinco anos dedicados à gestão de redes sociais. Essa vivência me permite olhar para cada projeto de forma ampla, pois considero a qualidade visual, a clareza da mensagem, o posicionamento e o caminho comercial que conduz o cliente até a contratação.</p><div className="founderfacts" aria-label="Experiência profissional de Herika Gomes"><span><b>30</b> anos em design</span><span><b>20</b> anos em marketing</span><span><b>5+</b> anos como social media</span></div><p className="signatureline">É fazendo que acontece, e nós fazemos para você.</p></div></section>;
}
