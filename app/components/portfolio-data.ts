export type PortfolioItem = { image: string; title: string; text: string; url: string };

const siteProjects: [string, string, string, string][] = [
  ["/portfolio/site-dra-claudia-v2.webp", "Dra. Claudia Lima", "Saúde e autoridade profissional", "https://draclaudialima.bydomarketing.com.br/"],
  ["/portfolio/site-dra-leticia-v2.webp", "Dra. Leticia Martins", "Odontologia e experiência digital", "https://draleticiamartinsodonto.netlify.app/"],
  ["/portfolio/site-anshin-v2.webp", "Anshin Massoterapia", "SEO local e apresentação de serviços", "https://anshinmassoterapia.com.br/"],
  ["/portfolio/site-reengenharia-v2.webp", "RE Engenharia Elétrica", "Autoridade técnica e institucional", "https://reengenhariaeletrica.com.br/"],
  ["/portfolio/site-disk-gas-v2.webp", "Disk Gás de Cozinha", "Negócio técnico local e presença própria", "https://diskgasdecozinha.com.br/"],
  ["/portfolio/site-mega-tecnologia-v2.webp", "Mega Tecnologia CFTV", "Apresentação de serviços técnicos", "https://megatecnologiacftv.netlify.app/"],
  ["/portfolio/site-mix-construtora-v2.webp", "Mix Construtora", "Institucional para construção civil", "https://mix-construtora.netlify.app/"]
];

export const portfolioItems: PortfolioItem[] = Array.from({ length: 10 }, (_, index) => {
  const project = siteProjects[index];
  return project
    ? { image: project[0], title: project[1], text: project[2], url: project[3] }
    : { image: "", title: `Novo site ${String(index + 1).padStart(2, "0")}`, text: "Espaço preparado para um novo projeto", url: "" };
});
