import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const siteUrl = "https://www.bydomarketing.com.br";
const routes = [
  ["/", "Agência de Marketing Digital em São Paulo | Bydo Marketing"],
  ["/sobre", "Sobre a Bydo Marketing | Conheça a Agência e sua Fundadora"],
  ["/projetos", "Projetos de Marketing Digital | Bydo Marketing"],
  ["/blog", "Blog de Marketing Digital | Bydo Marketing"],
  ["/servicos/sites-e-landing-pages", "Criação de Sites e Landing Pages | Bydo Marketing"],
  ["/servicos/perfil-da-empresa-no-google", "Perfil da Empresa no Google | Bydo Marketing"],
  ["/servicos/gestao-de-redes-sociais", "Gestão de Redes Sociais | Bydo Marketing"],
  ["/servicos/design-grafico", "Design Gráfico para Empresas | Bydo Marketing"],
];

const workerUrl = new URL(`../dist/server/index.js?test=${process.pid}-${Date.now()}`, import.meta.url);
const { default: worker } = await import(workerUrl.href);

async function assetsFetch(request) {
  const pathname = new URL(request.url).pathname;
  try {
    const body = await readFile(new URL(`../dist/client${pathname}`, import.meta.url));
    const contentType = pathname.endsWith(".xml") ? "application/xml" : pathname.endsWith(".txt") ? "text/plain" : "application/octet-stream";
    return new Response(body, { status: 200, headers: { "content-type": contentType } });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

async function render(path) {
  return worker.fetch(
    new Request(`${siteUrl}${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: assetsFetch } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

function canonicalFrom(html) {
  const tag = html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>/i)?.[0];
  return tag?.match(/\bhref=["']([^"']+)["']/i)?.[1];
}

function titleFrom(html) {
  return html.match(/<title>([^<]+)<\/title>/i)?.[1];
}

test("server-renders every indexable route with one H1 and complete canonical metadata", async () => {
  const titles = new Set();
  for (const [path, expectedTitle] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, path);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff", path);
    assert.equal(response.headers.get("x-frame-options"), "SAMEORIGIN", path);
    assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin", path);
    assert.match(response.headers.get("content-security-policy") ?? "", /frame-ancestors 'self'/, path);

    const html = await response.text();
    const expectedCanonical = new URL(path, siteUrl).toString();
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${path} deve ter somente um H1`);
    assert.equal(titleFrom(html), expectedTitle, `${path} deve ter um título próprio`);
    assert.equal(new URL(canonicalFrom(html)).toString(), expectedCanonical, `${path} deve apontar para o domínio oficial`);
    assert.match(html, /<meta\b[^>]*\bname=["']description["'][^>]*\bcontent=["'][^"']+["']/i, path);
    assert.match(html, /<meta\b[^>]*\bproperty=["']og:url["'][^>]*\bcontent=["']https:\/\/www\.bydomarketing\.com\.br/i, path);
    assert.match(html, /application\/ld\+json/i, path);
    assert.match(html, /class=["']skip-link["'][^>]*href=["']#conteudo-principal["']/i, path);
    assert.match(html, /<details\b[^>]*class=["']mobile-menu["']/i, path);
    for (const image of html.match(/<img\b[^>]*>/gi) ?? []) assert.match(image, /\balt=["'][^"']*["']/i, `${path} contém imagem sem texto alternativo`);
    const headingLevels = [...html.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
    for (let index = 1; index < headingLevels.length; index += 1) {
      assert.ok(headingLevels[index] <= headingLevels[index - 1] + 1, `${path} contém salto na hierarquia de títulos`);
    }
    assert.doesNotMatch(html, /bydo-marketing-v2\.ng-lojaribeirao\.chatgpt\.site/i, path);
    titles.add(titleFrom(html));
  }
  assert.equal(titles.size, routes.length, "cada rota deve ter um título exclusivo");
});

test("keeps every visible internal link reachable", async () => {
  const hrefs = new Set();
  for (const [path] of routes) {
    const html = await (await render(path)).text();
    for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)) {
      const href = match[1];
      if (!href.startsWith("/")) continue;
      hrefs.add(href.split("#")[0].split("?")[0] || "/");
    }
  }

  for (const href of hrefs) {
    const response = await render(href);
    assert.equal(response.status, 200, `link interno quebrado: ${href}`);
  }
});

test("publishes the expected structured data on the relevant pages", async () => {
  const home = await (await render("/")).text();
  assert.match(home, /"@type":"Organization"/);
  assert.match(home, /"@type":"WebSite"/);

  const about = await (await render("/sobre")).text();
  assert.match(about, /"@type":"Person"/);
  assert.match(about, /"@type":"AboutPage"/);
  assert.match(about, /"@type":"BreadcrumbList"/);

  for (const path of routes.filter(([route]) => route.startsWith("/servicos/")).map(([route]) => route)) {
    const html = await (await render(path)).text();
    assert.match(html, /"@type":"Service"/, path);
    assert.match(html, /"@type":"FAQPage"/, path);
    assert.match(html, /"@type":"BreadcrumbList"/, path);
  }
});

test("publishes robots and sitemap with only real canonical routes", async () => {
  const robots = await readFile(new URL("../public/robots.txt", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");

  assert.match(robots, /^User-agent: \*/m);
  assert.match(robots, /^Allow: \/$/m);
  assert.match(robots, new RegExp(`Sitemap: ${siteUrl.replaceAll(".", "\\.")}/sitemap\\.xml`));

  for (const [path] of routes) {
    const canonical = new URL(path, siteUrl).toString();
    assert.match(sitemap, new RegExp(`<loc>${canonical.replaceAll(".", "\\.")}<\\/loc>`), path);
  }
  assert.ok((sitemap.match(/<url>/g) ?? []).length >= routes.length);
  assert.doesNotMatch(sitemap, /ng-lojaribeirao/);
});

test("returns a custom, non-indexable 404 page", async () => {
  const response = await render("/pagina-que-nao-existe");
  assert.equal(response.status, 404);
  const html = await response.text();
  assert.match(html, /Esta página não foi encontrada\./);
  assert.match(html, /<meta\b[^>]*\bname=["']robots["'][^>]*\bcontent=["'][^"']*noindex/i);
});

test("does not publish an unfinished blog article", async () => {
  const response = await render("/blog/artigo-ainda-nao-publicado");
  assert.equal(response.status, 404);
  const html = await response.text();
  assert.match(html, /Esta página não foi encontrada\./);
  assert.match(html, /<meta\b[^>]*\bname=["']robots["'][^>]*\bcontent=["'][^"']*noindex/i);
});
