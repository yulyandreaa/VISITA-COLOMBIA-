import './style.css';
import { slides, highlights, tours, moments, credits } from './data';

const pad = (n: number) => String(n).padStart(2, '0');

const icons = {
  search: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  arrowL: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>`,
  arrowR: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>`,
  play: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  close: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
};

function render(): string {
  return `
  <header class="nav" id="nav">
    <a class="logo" href="#inicio" aria-label="Visita Colombia, inicio">
      <span class="logo-flag"><i></i><i></i><i></i></span>
      <span>CO<b>.</b>TRAVEL</span>
    </a>
    <button class="burger" id="burger" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span></button>
    <nav class="links" id="links">
      <a href="#inicio">Inicio</a>
      <a href="#destinos">Destinos</a>
      <a href="#tours">Tours</a>
      <a href="#inspira">Experiencias</a>
      <a href="#planea">Contacto</a>
    </nav>
    <button class="icon-btn search" aria-label="Buscar">${icons.search}</button>
  </header>

  <section class="hero" id="inicio">
    <div class="hero-bg">
      ${slides
        .map((s, i) => `<div class="hero-img${i === 0 ? ' active' : ''}" style="background-image:url('${s.image}')"></div>`)
        .join('')}
    </div>
    <div class="hero-shade"></div>

    <div class="hero-content wrap">
      <p class="eyebrow" id="hero-place">${icons.pin}<span>${slides[0].place} · ${slides[0].region}</span></p>
      <h1 class="hero-title" id="hero-title"><span>${slides[0].title[0]}</span><span>${slides[0].title[1]}</span></h1>
      <a class="btn" href="#tours">Explorar tours</a>
    </div>

    <div class="hero-counter" aria-live="polite">
      <span class="count" id="hero-count">01</span>
      <div class="bars">
        ${slides.map((_, i) => `<button class="bar${i === 0 ? ' active' : ''}" data-slide="${i}" aria-label="Ver imagen ${i + 1}"></button>`).join('')}
      </div>
      <span class="total">/ ${pad(slides.length)}</span>
    </div>

    <div class="hero-highlights wrap" id="destinos">
      ${highlights
        .map(
          (h) => `
        <article class="highlight">
          <h3>${h.title}</h3>
          <p>${h.text}</p>
          <a href="#tours">Leer más</a>
        </article>`,
        )
        .join('')}
    </div>
  </section>

  <section class="tours wrap" id="tours">
    <p class="kicker">Conoce lugares increíbles</p>
    <h2 class="section-title">Tours populares</h2>
    <div class="tour-grid" id="tour-grid">
      ${tours
        .map(
          (t) => `
        <article class="tour reveal">
          <img src="${t.image}" alt="${t.place}" loading="lazy" />
          <div class="tour-info">
            <span class="tour-days">${t.days}</span>
            <h3>${t.name}</h3>
            <p class="tour-place">${t.place}</p>
            <p class="tour-desc">${t.description}</p>
          </div>
        </article>`,
        )
        .join('')}
    </div>
    <div class="dots" id="tour-dots">
      ${tours.map((_, i) => `<span class="${i === 0 ? 'active' : ''}"></span>`).join('')}
    </div>
  </section>

  <section class="inspire" id="inspira">
    <div class="inspire-bg"></div>
    <div class="wrap inspire-inner">
      <div class="inspire-copy reveal">
        <h2 class="big-title">Viaja e<br />inspira tu vida</h2>
        <button class="play" id="open-gallery">
          <span class="play-circle">${icons.play}</span>
          <span>Ver galería</span>
        </button>
      </div>
      <div class="moments">
        <div class="moments-head">
          <p class="kicker">Momentos en Colombia</p>
          <div class="arrows">
            <button class="icon-btn" id="m-prev" aria-label="Anterior">${icons.arrowL}</button>
            <button class="icon-btn" id="m-next" aria-label="Siguiente">${icons.arrowR}</button>
          </div>
        </div>
        <div class="moment-track" id="moment-track">
          ${moments
            .map(
              (m, i) => `
            <button class="moment" data-moment="${i}">
              <img src="${m.image}" alt="${m.label}" loading="lazy" />
              <span>${m.label}</span>
            </button>`,
            )
            .join('')}
        </div>
      </div>
    </div>
  </section>

  <section class="plan wrap" id="planea">
    <div class="plan-copy reveal">
      <p class="kicker">Planea tu viaje</p>
      <h2 class="section-title left">Colombia te espera</h2>
      <p>Cuéntanos qué te gustaría vivir y te enviamos una ruta a tu medida, con los mejores lugares, temporadas y consejos locales.</p>
    </div>
    <form class="plan-form reveal" id="plan-form" novalidate>
      <label>
        <span>Nombre</span>
        <input name="name" type="text" placeholder="Tu nombre" required />
      </label>
      <label>
        <span>Correo</span>
        <input name="email" type="email" placeholder="tu@correo.com" required />
      </label>
      <label class="full">
        <span>¿Qué quieres vivir?</span>
        <select name="interest">
          <option>Playas del Caribe</option>
          <option>Montaña y café</option>
          <option>Selva y naturaleza</option>
          <option>Ciudades y cultura</option>
        </select>
      </label>
      <button class="btn full" type="submit">Quiero mi ruta</button>
      <p class="form-msg full" id="form-msg" role="status"></p>
    </form>
  </section>

  <footer class="footer">
    <div class="wrap footer-inner">
      <a class="logo" href="#inicio"><span class="logo-flag"><i></i><i></i><i></i></span><span>CO<b>.</b>TRAVEL</span></a>
      <p>Colombia, el riesgo es que te quieras quedar.</p>
      <details class="credits">
        <summary>Créditos fotográficos (Wikimedia Commons)</summary>
        <ul>
          ${credits.map((c) => `<li><a href="${c.url}" target="_blank" rel="noopener">${c.file}</a> — ${c.author}, ${c.license}</li>`).join('')}
        </ul>
      </details>
    </div>
  </footer>

  <div class="lightbox" id="lightbox" hidden>
    <button class="icon-btn lb-close" id="lb-close" aria-label="Cerrar">${icons.close}</button>
    <button class="icon-btn lb-prev" id="lb-prev" aria-label="Anterior">${icons.arrowL}</button>
    <figure>
      <img id="lb-img" src="" alt="" />
      <figcaption id="lb-cap"></figcaption>
    </figure>
    <button class="icon-btn lb-next" id="lb-next" aria-label="Siguiente">${icons.arrowR}</button>
  </div>
  `;
}

const $ = <T extends HTMLElement>(sel: string) => document.querySelector<T>(sel)!;

function initHero(): void {
  const imgs = document.querySelectorAll<HTMLElement>('.hero-img');
  const bars = document.querySelectorAll<HTMLButtonElement>('.bar');
  const title = $('#hero-title');
  const place = $('#hero-place span');
  const count = $('#hero-count');
  let current = 0;
  let timer: number | undefined;

  const show = (i: number) => {
    current = (i + slides.length) % slides.length;
    const s = slides[current];
    imgs.forEach((el, k) => el.classList.toggle('active', k === current));
    bars.forEach((el, k) => el.classList.toggle('active', k === current));
    title.classList.remove('in');
    void title.offsetWidth;
    title.innerHTML = `<span>${s.title[0]}</span><span>${s.title[1]}</span>`;
    title.classList.add('in');
    place.textContent = `${s.place} · ${s.region}`;
    count.textContent = pad(current + 1);
  };

  const restart = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => show(current + 1), 6500);
  };

  bars.forEach((b) =>
    b.addEventListener('click', () => {
      show(Number(b.dataset.slide));
      restart();
    }),
  );
  restart();
}

function initNav(): void {
  const nav = $('#nav');
  const burger = $<HTMLButtonElement>('#burger');
  const onScroll = () => nav.classList.toggle('solid', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  $('#links').addEventListener('click', (e) => {
    if ((e.target as HTMLElement).tagName === 'A') {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

function initTourDots(): void {
  const grid = $('#tour-grid');
  const dots = document.querySelectorAll<HTMLElement>('#tour-dots span');
  grid.addEventListener(
    'scroll',
    () => {
      const card = grid.firstElementChild as HTMLElement;
      const i = Math.round(grid.scrollLeft / (card.offsetWidth + 16));
      dots.forEach((d, k) => d.classList.toggle('active', k === i));
    },
    { passive: true },
  );
}

function initMoments(): void {
  const track = $('#moment-track');
  const step = () => (track.firstElementChild as HTMLElement).offsetWidth + 16;
  $('#m-prev').addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  $('#m-next').addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

  const box = $('#lightbox');
  const img = $<HTMLImageElement>('#lb-img');
  const cap = $('#lb-cap');
  let idx = 0;

  const open = (i: number) => {
    idx = (i + moments.length) % moments.length;
    img.src = moments[idx].image;
    img.alt = moments[idx].label;
    cap.textContent = moments[idx].label;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    box.hidden = true;
    document.body.style.overflow = '';
  };

  track.querySelectorAll<HTMLButtonElement>('.moment').forEach((b) =>
    b.addEventListener('click', () => open(Number(b.dataset.moment))),
  );
  $('#open-gallery').addEventListener('click', () => open(0));
  $('#lb-close').addEventListener('click', close);
  $('#lb-prev').addEventListener('click', () => open(idx - 1));
  $('#lb-next').addEventListener('click', () => open(idx + 1));
  box.addEventListener('click', (e) => {
    if (e.target === box) close();
  });
  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') open(idx + 1);
    if (e.key === 'ArrowLeft') open(idx - 1);
  });
}

function initForm(): void {
  const form = $<HTMLFormElement>('#plan-form');
  const msg = $('#form-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = 'Por favor escribe tu nombre y un correo válido.';
      msg.className = 'form-msg full error';
      return;
    }
    msg.textContent = `¡Gracias, ${name}! Pronto recibirás tu ruta de ${String(data.get('interest')).toLowerCase()}.`;
    msg.className = 'form-msg full ok';
    form.reset();
  });
}

function initReveal(): void {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          io.unobserve(en.target);
        }
      }),
    { threshold: 0.15 },
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}

$('#app').innerHTML = render();
initNav();
initHero();
initTourDots();
initMoments();
initForm();
initReveal();

// El contenido se monta con JS, así que el navegador no alcanza a saltar al #ancla al cargar.
if (location.hash) document.querySelector(location.hash)?.scrollIntoView({ behavior: 'instant' });
