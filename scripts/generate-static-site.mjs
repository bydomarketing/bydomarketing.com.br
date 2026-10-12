import { mkdir, readFile, writeFile, copyFile, cp, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const rootDir = process.cwd();
const distClientDir = path.join(rootDir, "dist", "client");
const publicDir = path.join(rootDir, "public");
const producaoDir = path.join(rootDir, "producao");

// 1. Ensure producao directories
await mkdir(producaoDir, { recursive: true });
await mkdir(path.join(producaoDir, "css"), { recursive: true });
await mkdir(path.join(producaoDir, "js"), { recursive: true });

// 2. Locate compiled CSS from dist/client/_next/static/css/
const nextCssDir = path.join(distClientDir, "_next", "static", "css");
let compiledCss = "";
if (existsSync(nextCssDir)) {
  const cssFiles = await readdir(nextCssDir);
  const mainCssFile = cssFiles.find((f) => f.endsWith(".css"));
  if (mainCssFile) {
    compiledCss = await readFile(path.join(nextCssDir, mainCssFile), "utf8");
  }
}

if (!compiledCss && existsSync(path.join(rootDir, "app", "globals.css"))) {
  compiledCss = await readFile(path.join(rootDir, "app", "globals.css"), "utf8");
}

// Prepare pure CSS with Manrope Google Font and font definitions
const pureCssHeader = `/* Bydo Marketing - Folha de Estilos Consolidada para Hospedagem Estática (Hostinger / Apache) */
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --font-manrope: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
`;

await writeFile(path.join(producaoDir, "css", "style.css"), pureCssHeader + "\n" + compiledCss, "utf8");
console.log("✓ CSS limpo consolidado gerado em producao/css/style.css");

// 3. Generate pure JavaScript: producao/js/main.js
const vanillaJs = `/**
 * Bydo Marketing - JavaScript Puro e Estruturado para Produção Estática
 * Compatível com Apache / Hostinger sem dependência de frameworks ou runtimes server-side.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. HEADER SCROLL EFFECT
  // =========================================================================
  function initHeaderScroll() {
    const header = document.querySelector('header.header-overhero');
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 60) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // =========================================================================
  // 2. MENU MOBILE
  // =========================================================================
  function initMobileMenu() {
    const details = document.querySelector('details.mobile-menu');
    if (!details) return;

    // Fechar ao clicar em qualquer link interno
    const links = details.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        details.removeAttribute('open');
      });
    });

    // Fechar ao clicar fora do menu
    document.addEventListener('click', function (e) {
      if (details.hasAttribute('open') && !details.contains(e.target)) {
        details.removeAttribute('open');
      }
    });
  }

  // =========================================================================
  // 3. CARROSSEL DE PROJETOS DE SITES (Home e Sites LP)
  // =========================================================================
  function initSitesCarousels() {
    // Carrossel da Home (.sitecarousel)
    const homeCarousels = document.querySelectorAll('.sitecarousel');
    homeCarousels.forEach(function (carousel) {
      const track = carousel.querySelector('.sitetrack');
      const prevBtn = carousel.querySelector('.sitecarousel-nav:first-child');
      const nextBtn = carousel.querySelector('.sitecarousel-nav:last-child');
      if (!track) return;

      function getStep() {
        const card = track.querySelector('figure');
        return card ? card.getBoundingClientRect().width + 18 : 320;
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', function () {
          track.scrollBy({ left: -getStep(), behavior: 'smooth' });
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', function () {
          track.scrollBy({ left: getStep(), behavior: 'smooth' });
        });
      }
    });

    // Carrossel da Landing Page de Sites (.siteslp-carousel)
    const sitesLpCarousels = document.querySelectorAll('.siteslp-carousel');
    sitesLpCarousels.forEach(function (carousel) {
      const track = carousel.querySelector('.siteslp-track');
      const prevBtn = carousel.querySelector('.siteslp-prev');
      const nextBtn = carousel.querySelector('.siteslp-next');
      if (!track) return;

      function getStep() {
        const card = track.querySelector('figure');
        return card ? card.getBoundingClientRect().width + 18 : 320;
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', function () {
          track.scrollBy({ left: -getStep(), behavior: 'smooth' });
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', function () {
          track.scrollBy({ left: getStep(), behavior: 'smooth' });
        });
      }
    });
  }

  // =========================================================================
  // 4. CARROSSEL DE RESULTADOS DO GOOGLE (.googlelp-gallery)
  // =========================================================================
  function initResultsCarousel() {
    const gallery = document.querySelector('.googlelp-gallery');
    if (!gallery) return;

    const cards = gallery.querySelectorAll('.googlelp-gallery-card');
    const dotsContainer = gallery.querySelector('.googlelp-gallery-dots');
    const prevBtn = gallery.querySelector('.googlelp-gallery-nav > button:first-child');
    const nextBtn = gallery.querySelector('.googlelp-gallery-nav > button:last-child');

    if (!cards.length) return;

    const total = 12; // Total de resultados
    let active = 0;

    // Itens de resultado completos com imagens e legendas
    const items = [
      { src: "/proof/google-01.webp", alt: "Painel de insights do Google mostrando 84 ligações realizadas diretamente a partir da busca local.", caption: "84 ligações recebidas diretamente a partir do perfil no Google." },
      { src: "/proof/google-02.webp", alt: "Painel de insights do Google mostrando 142 chamadas recebidas nos últimos 30 dias.", caption: "142 chamadas recebidas no mês através da busca local." },
      { src: "/proof/google-03.webp", alt: "Painel de insights do Google mostrando 3.420 visualizações na busca e no Maps em 30 dias.", caption: "3.420 visualizações na busca e no Google Maps em 30 dias." },
      { src: "/proof/google-04.webp", alt: "Painel de insights do Google mostrando 1.840 buscas diretas pelo nome da empresa.", caption: "1.840 buscas pela marca e pelos serviços locais." },
      { src: "/proof/google-05.webp", alt: "Painel de insights do Google mostrando 210 ligações recebidas no período.", caption: "210 ligações geradas a partir da presença no Google." },
      { src: "/proof/google-06.webp", alt: "Painel de insights do Google mostrando 490 rotas solicitadas por clientes até o estabelecimento.", caption: "490 solicitações de rota até a porta da empresa." },
      { src: "/proof/google-07.webp", alt: "Painel de insights do Google mostrando 98 ligações diretas.", caption: "98 ligações diretas geradas pelo perfil otimizado." },
      { src: "/proof/google-08.webp", alt: "Painel de insights do Google mostrando 7.150 impressões na pesquisa do Google.", caption: "7.150 impressões na pesquisa e no mapa em um mês." },
      { src: "/proof/google-09.webp", alt: "Painel de insights do Google mostrando 120 ligações atendidas.", caption: "120 chamadas iniciadas diretamente a partir do perfil." },
      { src: "/proof/google-10.webp", alt: "Painel de insights do Google mostrando 315 solicitações de rotas.", caption: "315 clientes traçaram rotas no Maps até a empresa." },
      { src: "/proof/google-11.webp", alt: "Painel de insights do Google mostrando 25 cliques para acessar o site a partir do perfil.", caption: "25 cliques do perfil no Google direto para o site da empresa." },
      { src: "/proof/google-12.webp", alt: "Painel de insights do Google mostrando 582 solicitações de rotas até o endereço da empresa.", caption: "582 solicitações de rotas até a empresa." }
    ];

    const slotOffsets = [-2, -1, 0, 1, 2];

    function update() {
      // Atualiza os 5 cards visíveis
      slotOffsets.forEach(function (offset, idx) {
        if (!cards[idx]) return;
        const itemIndex = (active + offset + total) % total;
        const item = items[itemIndex];
        const d = Math.abs(offset);

        cards[idx].style.transform = 'scale(' + (1 - d * 0.14) + ') translateY(' + (d * 16) + 'px)';
        cards[idx].style.opacity = (1 - d * 0.22);
        cards[idx].style.zIndex = (10 - d);

        const img = cards[idx].querySelector('img');
        const cap = cards[idx].querySelector('figcaption');
        if (img && item) {
          img.src = item.src;
          img.alt = item.alt;
        }
        if (cap && item) {
          cap.textContent = item.caption;
        }
      });

      // Atualiza os dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('button');
        dots.forEach(function (dot, i) {
          if (i === active) {
            dot.classList.add('is-active');
            dot.setAttribute('aria-pressed', 'true');
          } else {
            dot.classList.remove('is-active');
            dot.setAttribute('aria-pressed', 'false');
          }
        });
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        active = (active - 1 + total) % total;
        update();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        active = (active + 1) % total;
        update();
      });
    }

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('button');
      dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
          active = i;
          update();
        });
      });
    }

    update();
  }

  // =========================================================================
  // 5. GALERIA INTERATIVA DE ARTES SOCIAIS EM 3D COVERFLOW (.designlp-coverflow)
  // =========================================================================
  function initDesignSocialGallery() {
    const coverflow = document.querySelector('.designlp-coverflow');
    if (!coverflow) return;

    const stage = coverflow.querySelector('.designlp-coverflow-stage');
    if (!stage) return;

    const cards = stage.querySelectorAll('.designlp-coverflow-card');
    const prevBtn = coverflow.querySelector('.designlp-coverflow-prev');
    const nextBtn = coverflow.querySelector('.designlp-coverflow-next');
    const count = cards.length;
    if (!count) return;

    let active = 0;

    const SIZES = {
      desktop: { center: 460, mid: 380, far: 280, gap: 18 },
      tablet: { center: 340, mid: 280, far: 205, gap: 14 },
      mobile: { center: 220, mid: 182, far: 134, gap: 8 }
    };

    function getSizes() {
      const w = window.innerWidth;
      if (w <= 680) return SIZES.mobile;
      if (w <= 1150) return SIZES.tablet;
      return SIZES.desktop;
    }

    function update() {
      const sizes = getSizes();

      cards.forEach(function (card, index) {
        let offset = index - active;
        if (offset > count / 2) offset -= count;
        if (offset < -count / 2) offset += count;

        const abs = Math.abs(offset);
        const visible = abs <= 2;
        const width = abs === 0 ? sizes.center : abs === 1 ? sizes.mid : abs === 2 ? sizes.far : 0;
        const rotate = offset === 0 ? 0 : offset > 0 ? -20 : 20;

        card.style.width = visible ? width + 'px' : '0px';
        card.style.margin = visible ? '0 ' + sizes.gap + 'px' : '0px';
        card.style.opacity = visible ? '1' : '0';
        card.style.transform = 'rotateY(' + rotate + 'deg)';
        card.style.zIndex = (100 - abs);
        card.style.pointerEvents = visible ? 'auto' : 'none';

        if (offset === 0) {
          card.classList.add('is-active');
          card.setAttribute('aria-current', 'true');
        } else {
          card.classList.remove('is-active');
          card.setAttribute('aria-current', 'false');
        }
        card.setAttribute('tabindex', visible ? '0' : '-1');

        const tint = card.querySelector('.designlp-coverflow-tint');
        if (tint) {
          tint.style.opacity = Math.min(abs * 0.32, 0.7);
        }
      });
    }

    cards.forEach(function (card, index) {
      card.addEventListener('click', function () {
        active = index;
        update();
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        active = (active - 1 + count) % count;
        update();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        active = (active + 1) % count;
        update();
      });
    }

    window.addEventListener('resize', update, { passive: true });
    update();
  }

  // =========================================================================
  // 6. RODA INTERATIVA DE ESTRATÉGIA DE REDES SOCIAIS (.sociallp-wheel-layout)
  // =========================================================================
  function initSocialWorkWheel() {
    const wheelLayout = document.querySelector('.sociallp-wheel-layout');
    if (!wheelLayout) return;

    const ring = wheelLayout.querySelector('.sociallp-wheel-ring');
    const centerNumber = wheelLayout.querySelector('.sociallp-wheel-center b');
    const buttons = wheelLayout.querySelectorAll('.sociallp-wheel-actions button');
    const detailArticle = wheelLayout.querySelector('.sociallp-wheel-detail');

    if (!buttons.length || !detailArticle) return;

    const stepsData = [
      ["01", "Alinhamento de objetivos", "Entendemos o momento da empresa, o perfil do público, as prioridades comerciais e o que as redes sociais precisam gerar."],
      ["02", "Diagnóstico e referências", "Analisamos o perfil atual, a concorrência e referências visuais para definir a direção mais adequada."],
      ["03", "Definição de pilares", "Estruturamos os temas que mantêm o perfil variado, relevante e comercialmente coerente ao longo do mês."],
      ["04", "Linha editorial", "Definimos os assuntos de cada semana, garantindo constância e foco nos diferenciais da marca."],
      ["05", "Tom de voz e posicionamento", "Estabelecemos como a marca fala, que tipo de vocabulário utiliza e como reforça autoridade."],
      ["06", "Criação visual", "Desenvolvemos artes profissionais, com padrão estético consistente e adequadas a cada formato."],
      ["07", "Redação dos conteúdos", "Escrevemos legendas claras, envolventes e orientadas para despertar interesse e gerar contato."],
      ["08", "Aprovação com o cliente", "Apresentamos o material com antecedência para alinhamento e eventuais ajustes antes da publicação."],
      ["09", "Agendamento das publicações", "Programamos datas e horários estratégicos para manter a frequência sem depender de postagens manuais."],
      ["10", "Publicação e monitoramento", "Acompanhamos a veiculação do conteúdo e orientamos a equipe sobre interações relevantes."],
      ["11", "Análise de resultados", "Avaliamos alcance, engajamento e temas que geraram mais retorno para guiar os próximos passos."],
      ["12", "Ajustes contínuos", "Refinamos a estratégia a cada ciclo para que a presença digital continue evoluindo junto com o negócio."]
    ];

    let selected = 0;

    function renderDetail(index) {
      const step = stepsData[index];
      if (!step) return;

      const span = detailArticle.querySelector('span');
      const h3 = detailArticle.querySelector('h3');
      const p = detailArticle.querySelector('p');

      if (span) span.textContent = 'Etapa ' + step[0];
      if (h3) h3.textContent = step[1];
      if (p) p.textContent = step[2];
    }

    function selectStep(index) {
      selected = index;
      if (ring) {
        ring.style.setProperty('--wheel-turn', (index * -30) + 'deg');
      }
      if (centerNumber) {
        centerNumber.textContent = stepsData[index][0];
      }
      buttons.forEach(function (btn, i) {
        if (i === index) {
          btn.classList.add('is-active');
          btn.setAttribute('aria-pressed', 'true');
        } else {
          btn.classList.remove('is-active');
          btn.setAttribute('aria-pressed', 'false');
        }
      });
      renderDetail(index);
    }

    buttons.forEach(function (button, index) {
      button.addEventListener('click', function () {
        selectStep(index);
      });
      button.addEventListener('mouseenter', function () {
        renderDetail(index);
      });
      button.addEventListener('mouseleave', function () {
        renderDetail(selected);
      });
      button.addEventListener('focus', function () {
        renderDetail(index);
      });
      button.addEventListener('blur', function () {
        renderDetail(selected);
      });
    });

    selectStep(0);
  }

  // =========================================================================
  // 7. GALERIA INTERATIVA DE REVISTA E FLIPBOOK MODAL (.revistaflip)
  // =========================================================================
  function initMagazineFlipbook() {
    // Configurações das revistas completas da Bydo
    const magazines = {
      claudia: {
        alt: "Revista portfólio criada pela Bydo para a Dra. Cláudia Lima",
        total: 16,
        pages: Array.from({ length: 16 }, function (_, i) {
          var num = (i + 1 < 10 ? '0' : '') + (i + 1);
          return '/revista/revista-claudia-' + num + '.webp';
        })
      },
      rita: {
        alt: "Revista portfólio criada pela Bydo para a Rita de Cássia",
        total: 14,
        pages: Array.from({ length: 14 }, function (_, i) {
          var num = (i + 1 < 10 ? '0' : '') + (i + 1);
          return '/revista/revista-rita-' + num + '.webp';
        })
      },
      leticia: {
        alt: "Revista portfólio criada pela Bydo para a Dra. Letícia Martins",
        total: 14,
        pages: Array.from({ length: 14 }, function (_, i) {
          var num = (i + 1 < 10 ? '0' : '') + (i + 1);
          return '/revista/revista-leticia-' + num + '.webp';
        })
      }
    };

    function buildViews(pages) {
      if (!pages.length) return [];
      if (pages.length === 1) return [[pages[0]]];
      const middle = pages.slice(1, pages.length - 1);
      const views = [[pages[0]]];
      for (let i = 0; i < middle.length; i += 2) {
        if (i + 1 < middle.length) {
          views.push([middle[i], middle[i + 1]]);
        } else {
          views.push([middle[i]]);
        }
      }
      views.push([pages[pages.length - 1]]);
      return views;
    }

    function viewLabel(views, index, total) {
      if (index === 0) return 'Capa · ' + total + ' páginas';
      if (index === views.length - 1) return 'Contracapa';
      let pageNumber = 2;
      for (let i = 1; i < index; i++) {
        pageNumber += views[i].length;
      }
      const view = views[index];
      return view.length === 2
        ? 'Páginas ' + pageNumber + '-' + (pageNumber + 1) + ' de ' + total
        : 'Página ' + pageNumber + ' de ' + total;
    }

    let activeModal = null;
    let currentViews = [];
    let currentIndex = 0;
    let totalPages = 0;
    let currentAlt = '';
    let isAnimating = false;

    function renderModalStage() {
      if (!activeModal) return;
      const stage = activeModal.querySelector('.revistaflip-stage');
      const counter = activeModal.querySelector('.revistaflip-counter');
      const prevBtn = activeModal.querySelector('.revistaflip-controls .revistaflip-nav:first-child');
      const nextBtn = activeModal.querySelector('.revistaflip-controls .revistaflip-nav:last-child');

      if (!stage || !currentViews.length) return;

      const view = currentViews[currentIndex];
      const isSpread = view.length === 2;
      const isLastView = currentIndex === currentViews.length - 1;

      if (isSpread) {
        stage.classList.add('revistaflip-stage-spread');
      } else {
        stage.classList.remove('revistaflip-stage-spread');
      }

      // Constrói o HTML das páginas atuais
      let pageHtml = '<div class="revistaflip-page"><div class="revistaflip-spread' + (isSpread ? '' : ' revistaflip-spread-single') + '">';
      view.forEach(function (src, i) {
        const pageAlt = isSpread ? (currentAlt + (i === 0 ? ', página esquerda' : ', página direita')) : currentAlt;
        pageHtml += '<img src="' + src + '" alt="' + pageAlt + '">';
      });
      if (isSpread) {
        pageHtml += '<span class="revistaflip-spine" aria-hidden="true"></span>';
      }
      pageHtml += '</div></div>';

      if (isLastView) {
        pageHtml += '<button type="button" class="revistaflip-close-end">Fechar revista</button>';
      }

      stage.innerHTML = pageHtml;

      const endBtn = stage.querySelector('.revistaflip-close-end');
      if (endBtn) {
        endBtn.addEventListener('click', closeModal);
      }

      if (counter) {
        counter.textContent = viewLabel(currentViews, currentIndex, totalPages);
      }
      if (prevBtn) {
        prevBtn.disabled = currentIndex === 0;
      }
      if (nextBtn) {
        nextBtn.disabled = currentIndex === currentViews.length - 1;
      }
    }

    function flipTo(dir) {
      if (isAnimating) return;
      const target = currentIndex + dir;
      if (target < 0 || target >= currentViews.length) return;

      isAnimating = true;
      const stage = activeModal.querySelector('.revistaflip-stage');

      const leafView = dir === 1 ? currentViews[currentIndex] : currentViews[target];
      const isLeafSpread = leafView.length === 2;

      const leafEl = document.createElement('div');
      leafEl.className = 'revistaflip-leaf ' + (dir === 1 ? 'revistaflip-leaf-forward' : 'revistaflip-leaf-back');

      let leafHtml = '<div class="revistaflip-spread' + (isLeafSpread ? '' : ' revistaflip-spread-single') + '">';
      leafView.forEach(function (src) {
        leafHtml += '<img src="' + src + '" alt="">';
      });
      if (isLeafSpread) {
        leafHtml += '<span class="revistaflip-spine" aria-hidden="true"></span>';
      }
      leafHtml += '</div>';
      leafEl.innerHTML = leafHtml;

      stage.appendChild(leafEl);

      currentIndex = target;
      renderModalStage();
      // Re-adiciona a folha animando sobre a nova base
      stage.appendChild(leafEl);

      leafEl.addEventListener('animationend', function () {
        if (leafEl.parentNode) {
          leafEl.parentNode.removeChild(leafEl);
        }
        isAnimating = false;
      });
    }

    function openMagazine(magKey) {
      const mag = magazines[magKey] || magazines.claudia;
      currentViews = buildViews(mag.pages);
      currentIndex = 0;
      totalPages = mag.total;
      currentAlt = mag.alt;
      isAnimating = false;

      // Cria o overlay se não existir
      let overlay = document.querySelector('.revistaflip-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'revistaflip-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', currentAlt);

        overlay.innerHTML =
          '<button type="button" class="revistaflip-backdrop" aria-label="Fechar revista" style="position:absolute;inset:0;border:none;background:transparent;cursor:default;"></button>' +
          '<div class="revistaflip-modal">' +
            '<button type="button" class="revistaflip-close" aria-label="Fechar revista">×</button>' +
            '<div class="revistaflip-stage"></div>' +
            '<div class="revistaflip-controls">' +
              '<button type="button" class="revistaflip-nav" aria-label="Página anterior">‹</button>' +
              '<span class="revistaflip-counter"></span>' +
              '<button type="button" class="revistaflip-nav" aria-label="Próxima página">›</button>' +
            '</div>' +
          '</div>';

        document.body.appendChild(overlay);

        const closeBtn = overlay.querySelector('.revistaflip-close');
        const backdrop = overlay.querySelector('.revistaflip-backdrop');
        const prevBtn = overlay.querySelector('.revistaflip-controls .revistaflip-nav:first-child');
        const nextBtn = overlay.querySelector('.revistaflip-controls .revistaflip-nav:last-child');

        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);
        prevBtn.addEventListener('click', function () { flipTo(-1); });
        nextBtn.addEventListener('click', function () { flipTo(1); });
      }

      activeModal = overlay;
      overlay.style.display = 'grid';
      document.body.style.overflow = 'hidden';

      renderModalStage();
    }

    function closeModal() {
      if (!activeModal) return;
      activeModal.style.display = 'none';
      document.body.style.overflow = '';
      activeModal = null;
    }

    // Teclado para navegar ou fechar
    window.addEventListener('keydown', function (e) {
      if (!activeModal) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') flipTo(1);
      if (e.key === 'ArrowLeft') flipTo(-1);
    });

    // Detecta cliques nas capas de revista
    const covers = document.querySelectorAll('.designlp-magazine-cover');
    covers.forEach(function (cover) {
      cover.addEventListener('click', function () {
        const img = cover.querySelector('img');
        const src = img ? img.getAttribute('src') : '';
        if (src.includes('claudia')) {
          openMagazine('claudia');
        } else if (src.includes('rita')) {
          openMagazine('rita');
        } else if (src.includes('leticia')) {
          openMagazine('leticia');
        } else {
          openMagazine('claudia');
        }
      });
    });

    // Detecta clique no gatilho do showcase (showcase-24)
    const showcaseTriggers = document.querySelectorAll('.designlp-showcase-revista-trigger');
    showcaseTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        openMagazine('claudia');
      });
    });
  }

  // =========================================================================
  // INICIALIZAÇÃO AUTOMÁTICA QUANDO O DOM ESTIVER PRONTO
  // =========================================================================
  function initAll() {
    initHeaderScroll();
    initMobileMenu();
    initSitesCarousels();
    initResultsCarousel();
    initDesignSocialGallery();
    initSocialWorkWheel();
    initMagazineFlipbook();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
`;

await writeFile(path.join(producaoDir, "js", "main.js"), vanillaJs, "utf8");
console.log("✓ JavaScript puro consolidado gerado em producao/js/main.js");

// 4. Transform all HTML files from dist/client into pristine pure HTML
async function collectHtmlFiles(dir, base = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(base, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "_next" && entry.name !== ".vite") {
        files.push(...(await collectHtmlFiles(fullPath, relPath)));
      }
    } else if (entry.name.endsWith(".html")) {
      files.push({ fullPath, relPath });
    }
  }
  return files;
}

const htmlFiles = await collectHtmlFiles(distClientDir);
console.log(`Encontrados ${htmlFiles.length} arquivos HTML pré-renderizados.`);

function cleanHtml(rawHtml) {
  // 1. Extrai head e body
  const headMatch = rawHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  let head = headMatch ? headMatch[1] : "";
  let body = bodyMatch ? bodyMatch[1] : rawHtml;

  // 2. Limpeza profunda do head:
  // Remove scripts de bundle framework
  head = head.replace(/<script[\s\S]*?<\/script>/gi, "");
  // Remove modulepreloads
  head = head.replace(/<link[^>]*rel=["']modulepreload["'][^>]*>/gi, "");
  // Remove preload de chunks JS
  head = head.replace(/<link[^>]*as=["']script["'][^>]*>/gi, "");
  // Remove CSS do _next
  head = head.replace(/<link[^>]*href=["']\/_next\/static\/css\/[^"']*["'][^>]*>/gi, "");
  head = head.replace(/data-rsc-css-href=["'][^"']*["']/gi, "");
  head = head.replace(/data-precedence=["'][^"']*["']/gi, "");
  // Remove styles embutidos de fonts do vinext
  head = head.replace(/<style data-vinext-fonts>[\s\S]*?<\/style>/gi, "");
  head = head.replace(/<link[^>]*href=["']\/_next\/static\/_vinext_fonts\/[^"']*["'][^>]*>/gi, "");

  // Adiciona fontes do Google, CSS consolidado e JS puro
  const modernHeadAdditions = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css">
  <script defer src="/js/main.js"></script>`;

  // 3. Limpeza profunda do body:
  // Remove todos os scripts de serialização RSC e runtime
  body = body.replace(/<script[\s\S]*?<\/script>/gi, "");
  // Remove comentários vazios gerados pelo React (<!-- -->)
  body = body.replace(/<!-- -->/g, "");

  // Monta o documento HTML5 puro e limpo
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
${head.trim()}
${modernHeadAdditions}
</head>
<body>
${body.trim()}
</body>
</html>`;
}

for (const { fullPath, relPath } of htmlFiles) {
  const content = await readFile(fullPath, "utf8");
  const cleaned = cleanHtml(content, relPath);

  // Destino 1: Como arquivo direto (ex: producao/blog.html)
  const destFile = path.join(producaoDir, relPath);
  await mkdir(path.dirname(destFile), { recursive: true });
  await writeFile(destFile, cleaned, "utf8");

  // Destino 2: Como pasta index.html para garantir URLs sem extensão e sem 403 Forbidden
  // Exemplo: producao/blog.html -> producao/blog/index.html
  // Exemplo: producao/servicos/design-grafico.html -> producao/servicos/design-grafico/index.html
  if (relPath !== "index.html" && relPath !== "404.html" && !relPath.endsWith("index.html")) {
    const withoutExt = relPath.replace(/\.html$/, "");
    const folderIndex = path.join(producaoDir, withoutExt, "index.html");
    await mkdir(path.dirname(folderIndex), { recursive: true });
    await writeFile(folderIndex, cleaned, "utf8");
  }
}
console.log("✓ Todas as páginas HTML convertidas para formato puro, estruturado e com espelhamento duplo.");

// 5. Copiar todas as pastas de mídia e arquivos raiz de public para producao
const publicEntries = await readdir(publicDir, { withFileTypes: true });
for (const entry of publicEntries) {
  const src = path.join(publicDir, entry.name);
  const dest = path.join(producaoDir, entry.name);
  if (entry.isDirectory()) {
    await cp(src, dest, { recursive: true });
  } else {
    await copyFile(src, dest);
  }
}
console.log("✓ Recursos estáticos (imagens, favicons, robots, sitemap, .htaccess) sincronizados.");

// 6. Atualizar .htaccess na pasta producao com regras completas
const htaccessContent = `# ==============================================================================
# Bydo Marketing - Apache / Hostinger / LiteSpeed Configuration (.htaccess)
# 100% Otimizado para site estático puro (HTML, CSS e JS puros)
# ==============================================================================

# 1. Impede a listagem de arquivos de diretórios (evita erro 403 Forbidden)
Options -Indexes -MultiViews

# 2. Arquivo padrão de diretórios
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # 3. Força HTTPS se disponível
  RewriteCond %{HTTPS} off
  RewriteCond %{HTTP_HOST} ^(www\\\\.)?bydomarketing\\\\.com\\\\.br$ [NC]
  RewriteRule ^(.*)$ https://www.bydomarketing.com.br/$1 [R=301,L]

  # 4. Arquivos físicos existentes: serve diretamente (.css, .js, .webp, .svg, etc.)
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule ^ - [L]

  # 5. Diretórios físicos com index.html: serve diretamente
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^ - [L]

  # 6. Diretórios físicos SEM index.html: redireciona para index.html raiz
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteCond %{REQUEST_FILENAME}/index.html !-f
  RewriteRule ^ index.html [L]

  # 7. URLs amigáveis: /sobre resolve para sobre.html, /blog/artigo resolve para blog/artigo.html
  RewriteCond %{DOCUMENT_ROOT}/$1.html -f
  RewriteRule ^(.+?)/?$ $1.html [L]

  # 8. Rota não encontrada: exibe a página 404 personalizada
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ 404.html [L]
</IfModule>

# ==============================================================================
# Compressão GZIP / Deflate para máxima velocidade na Hostinger
# ==============================================================================
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json image/svg+xml
</IfModule>

# ==============================================================================
# Cabeçalhos de Cache (Browser Caching)
# ==============================================================================
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# ==============================================================================
# Cabeçalhos de Segurança
# ==============================================================================
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;

await writeFile(path.join(producaoDir, ".htaccess"), htaccessContent, "utf8");
console.log("✓ .htaccess otimizado para produção salvo em producao/.htaccess");

// 7. Limpeza de arquivos residuais em producao
try {
  const producaoEntries = await readdir(producaoDir);
  for (const entry of producaoEntries) {
    if ((entry.endsWith(".txt") && entry !== "robots.txt") || entry === "_headers" || entry === "vinext-client-entry-manifest.json" || entry === "_next" || entry === ".vite") {
      execSync(`rm -rf "${path.join(producaoDir, entry)}"`);
    }
  }
} catch {
  // Ignora se não existir
}

// 8. Gerar pacote ZIP pronto para upload direto na Hostinger via python3 zipfile
try {
  execSync(`python3 -c "
import os, zipfile
def zip_dir(src_dir, zip_name):
    with zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(src_dir):
            for file in files:
                if file.endswith('.zip'): continue
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, src_dir)
                zipf.write(file_path, arcname)
    print(f'✓ Pacote {zip_name} criado com sucesso ({os.path.getsize(zip_name)} bytes)')

zip_dir('producao', 'site-estatico-producao.zip')
"`, { stdio: "inherit" });
} catch (e) {
  console.error("Aviso ao gerar zip:", e.message);
}

console.log("\n=======================================================");
console.log("SUCESSO: Pacote estático puro gerado com sucesso em /producao");
console.log("=======================================================");
