/**
 * M4 TRAVELS SRI LANKA — App Script
 * Reads from content.js and renders all dynamic sections.
 * Non-IT staff only need to edit content.js — never this file.
 */

document.addEventListener('DOMContentLoaded', () => {
  const C = SITE_CONTENT;

  // ── WHATSAPP HELPERS ────────────────────────────────────
  function waLink(msg = '') {
    const num = C.contact.whatsapp_number.replace(/\D/g, '');
    return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  }

  // ── NAVBAR SCROLL ───────────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // ── HERO ────────────────────────────────────────────────
  const badgesEl = document.getElementById('heroBadges');
  const checkIcon =
    '<span class="badge-check" aria-hidden="true"><svg viewBox="0 0 20 20" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8.25" stroke="currentColor" stroke-width="1.5"/><path d="M6.25 10.1 8.6 12.45 13.75 7.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
  C.highlights.forEach((text, i) => {
    const b = document.createElement('li');
    b.className = 'hero-badge';
    b.style.animationDelay = `${0.72 + i * 0.12}s`;
    b.innerHTML = `${checkIcon}<span class="badge-label">${text}</span>`;
    badgesEl.appendChild(b);
  });

  const phoneDigits = C.contact.whatsapp_number.replace(/\D/g, '');
  const phoneDisplay = C.contact.phone_display || C.contact.whatsapp_display;
  const heroCallBtn = document.getElementById('heroCallBtn');
  const heroCallNumber = document.getElementById('heroCallNumber');
  if (heroCallBtn && phoneDigits) {
    heroCallBtn.href = `tel:+${phoneDigits}`;
    heroCallBtn.setAttribute('aria-label', `Call M4 Travels at ${phoneDisplay}`);
  }
  if (heroCallNumber) {
    heroCallNumber.textContent = phoneDisplay;
  }

  const heroMessageBtn = document.getElementById('heroMessageBtn');
  const bookingForm = document.getElementById('bookingForm');
  if (heroMessageBtn && bookingForm) {
    heroMessageBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      bookingForm.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      const focusField = () => {
        const first = bookingForm.querySelector('input[name="name"]');
        if (first) first.focus({ preventScroll: true });
      };
      if (reduceMotion) {
        focusField();
      } else {
        window.setTimeout(focusField, 450);
      }
    });
  }

  // ── WHY US ──────────────────────────────────────────────
  const whyUsGrid = document.getElementById('whyUsGrid');
  if (whyUsGrid && C.why_us) {
    C.why_us.forEach((text, i) => {
      const div = document.createElement('div');
      div.className = 'why-us-item reveal';
      div.style.transitionDelay = `${i * 0.06}s`;
      div.innerHTML = `<span class="why-us-star">⭐</span><span>${text}</span>`;
      whyUsGrid.appendChild(div);
    });
  }

  // ── DESTINATIONS STRIP ──────────────────────────────────
  const destinations = [
    'Sigiriya', 'Ella', 'Kandy', 'Galle', 'Yala', 'Mirissa',
    'Colombo', 'Nuwara Eliya', 'Trincomalee', 'Polonnaruwa',
    'Anuradhapura', 'Dambulla', 'Bentota', 'Arugam Bay', 'Horton Plains'
  ];
  const track = document.getElementById('destTrack');
  // Duplicate for seamless loop
  const allDests = [...destinations, ...destinations];
  allDests.forEach(d => {
    const el = document.createElement('span');
    el.className = 'dest-item';
    el.textContent = d;
    track.appendChild(el);
  });

  // ── SERVICES ────────────────────────────────────────────
  const sGrid = document.getElementById('servicesGrid');
  C.services.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'service-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
    `;
    sGrid.appendChild(card);
  });

  // ── PACKAGES ────────────────────────────────────────────
  const pkgIntro = document.getElementById('packagesIntro');
  const pkgFoot = document.getElementById('packagesFootnote');
  const pkgGrid = document.getElementById('packagesGrid');
  if (C.packages && pkgIntro && pkgFoot && pkgGrid) {
    pkgIntro.textContent = C.packages.intro;
    pkgFoot.textContent = C.packages.footnote;
    C.packages.items.forEach((p, i) => {
      const card = document.createElement('article');
      const isCustom = p.label === 'Custom';
      card.className = `package-card reveal${isCustom ? ' package-card--custom' : ''}`;
      card.style.transitionDelay = `${i * 0.07}s`;
      const list = p.highlights.map(h => `<li>${h}</li>`).join('');
      card.innerHTML = `
        <p class="package-label">${p.label}</p>
        <h3>${p.title}</h3>
        <p class="package-subtitle">${p.subtitle}</p>
        <ul class="package-list">${list}</ul>
        <p class="package-ideal">${p.ideal}</p>
        <a href="#contact" class="btn ${isCustom ? 'btn-primary' : 'btn-outline'} package-cta">Enquire about this package</a>
      `;
      pkgGrid.appendChild(card);
    });
  }

  // ── SRI LANKA HIGHLIGHTS (local folders + simple carousel) ─
  const HIGHLIGHT_IMG_BASE = 'images/highlights/';

  function safeHighlightFolder(name) {
    return typeof name === 'string' && /^[a-z0-9-]+$/i.test(name);
  }

  /** Allow spaces, parentheses, etc. — only block path tricks. */
  function safeHighlightFilename(name) {
    if (typeof name !== 'string' || name.length === 0 || name.length > 240) return false;
    if (/[\\/]|\.\./.test(name)) return false;
    return true;
  }

  async function loadHighlightManifest() {
    try {
      const res = await fetch(`${HIGHLIGHT_IMG_BASE}manifest.json`, { cache: 'no-store' });
      if (!res.ok) return {};
      const data = await res.json();
      return data && typeof data === 'object' && !Array.isArray(data) ? data : {};
    } catch {
      return {};
    }
  }

  /** Non-empty `photos` in content.js wins; otherwise uses manifest.json for that folder key. */
  function photosForHighlight(item, manifest) {
    const fromJs = item.photos || [];
    if (fromJs.length > 0) return fromJs;
    const fromFile = manifest[item.folder];
    return Array.isArray(fromFile) ? fromFile : [];
  }

  function highlightLocalUrls(item, manifest) {
    if (!safeHighlightFolder(item.folder)) return [];
    const base = `${HIGHLIGHT_IMG_BASE}${item.folder}/`;
    const out = [];
    for (const file of photosForHighlight(item, manifest)) {
      if (safeHighlightFilename(file)) out.push(base + encodeURI(file));
    }
    return out;
  }

  function fillHighlightMedia(mediaEl, item, manifest) {
    const local = highlightLocalUrls(item, manifest);
    let urls = local.slice();
    if (urls.length === 0 && item.fallbackSrc) urls = [item.fallbackSrc];
    const altBase = item.alt || item.title || '';

    if (urls.length === 0) {
      const ph = document.createElement('div');
      ph.className = 'highlight-placeholder';
      ph.setAttribute('role', 'img');
      ph.setAttribute('aria-label', altBase);
      const icon = document.createElement('span');
      icon.textContent = '📸';
      const hint = document.createElement('span');
      hint.className = 'highlight-ph-hint';
      const folderLabel = safeHighlightFolder(item.folder) ? item.folder : '…';
      hint.append('Add files to ');
      const c1 = document.createElement('code');
      c1.textContent = `images/highlights/${folderLabel}/`;
      hint.appendChild(c1);
      hint.append(' then list filenames in ');
      const c2 = document.createElement('code');
      c2.textContent = 'photos';
      hint.appendChild(c2);
      hint.append(' in content.js.');
      ph.appendChild(icon);
      ph.appendChild(hint);
      mediaEl.appendChild(ph);
      return;
    }

    if (urls.length === 1) {
      const img = document.createElement('img');
      img.className = 'highlight-img';
      img.src = urls[0];
      img.alt = altBase;
      img.loading = 'lazy';
      img.decoding = 'async';
      if (item.width) img.width = item.width;
      if (item.height) img.height = item.height;
      mediaEl.appendChild(img);
      return;
    }

    const carousel = document.createElement('div');
    carousel.className = 'highlight-carousel';
    const viewport = document.createElement('div');
    viewport.className = 'highlight-carousel-viewport';
    const track = document.createElement('div');
    track.className = 'highlight-carousel-track';

    const n = urls.length;
    urls.forEach((src, idx) => {
      const slide = document.createElement('div');
      slide.className = 'highlight-carousel-slide';
      slide.style.width = `${100 / n}%`;
      const img = document.createElement('img');
      img.src = src;
      img.alt = urls.length > 1 ? `${altBase} — photo ${idx + 1}` : altBase;
      img.loading = idx === 0 ? 'eager' : 'lazy';
      img.decoding = 'async';
      slide.appendChild(img);
      track.appendChild(slide);
    });
    track.style.width = `${n * 100}%`;

    viewport.appendChild(track);
    carousel.appendChild(viewport);

    const prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'highlight-carousel-btn highlight-carousel-btn--prev';
    prev.setAttribute('aria-label', 'Previous photo');
    prev.innerHTML = '‹';
    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'highlight-carousel-btn highlight-carousel-btn--next';
    next.setAttribute('aria-label', 'Next photo');
    next.innerHTML = '›';
    carousel.appendChild(prev);
    carousel.appendChild(next);

    let index = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) track.classList.add('highlight-carousel-track--instant');

    function applyTransform() {
      const pct = (100 * index) / n;
      track.style.transform = `translate3d(-${pct}%, 0, 0)`;
    }

    function go(delta) {
      index = (index + delta + n) % n;
      applyTransform();
    }

    prev.addEventListener('click', () => go(-1));
    next.addEventListener('click', () => go(1));
    applyTransform();

    mediaEl.appendChild(carousel);
  }

  const highlightsGrid = document.getElementById('highlightsGrid');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (highlightsGrid && C.sl_highlights) {
    void (async () => {
      const highlightManifest = await loadHighlightManifest();
      C.sl_highlights.forEach((item, i) => {
        const article = document.createElement('article');
        article.className = 'highlight-card reveal';
        article.style.transitionDelay = `${i * 0.05}s`;

        const media = document.createElement('div');
        media.className = 'highlight-media';
        fillHighlightMedia(media, item, highlightManifest);

        const body = document.createElement('div');
        body.className = 'highlight-body';
        const h3 = document.createElement('h3');
        h3.className = 'highlight-title';
        h3.textContent = item.title || '';
        const p = document.createElement('p');
        p.className = 'highlight-subtitle';
        p.textContent = item.subtitle || '';
        body.appendChild(h3);
        body.appendChild(p);

        article.appendChild(media);
        article.appendChild(body);
        highlightsGrid.appendChild(article);
        revealObserver.observe(article);
      });
    })();
  }

  // ── CONTACT DETAILS ─────────────────────────────────────
  const phoneLink = document.getElementById('phoneLink');
  if (phoneLink && phoneDigits) {
    phoneLink.href = `tel:+${phoneDigits}`;
  }
  const contactPhoneEl = document.getElementById('contactPhone');
  if (contactPhoneEl) contactPhoneEl.textContent = phoneDisplay;

  document.getElementById('contactWhatsapp').textContent = C.contact.whatsapp_display;
  document.getElementById('contactEmail').textContent = C.contact.email;
  document.getElementById('contactLocation').textContent = C.contact.location;
  const contactWaCta = document.getElementById('contactWaCta');
  if (contactWaCta && C.contact.whatsapp_cta) {
    contactWaCta.textContent = C.contact.whatsapp_cta;
  }

  const waLink1 = waLink('Hello M4 Travels! I would like to enquire about a tour.');
  document.getElementById('whatsappLink').href = waLink1;
  document.getElementById('waFloat').href = waLink1;

  // Social links
  const socials = document.getElementById('socialLinks');
  if (C.contact.facebook_url) {
    const a = document.createElement('a');
    a.href = C.contact.facebook_url; a.target = '_blank'; a.rel = 'noopener';
    a.className = 'social-link'; a.textContent = '📘 Facebook';
    socials.appendChild(a);
  }
  if (C.contact.instagram_url) {
    const a = document.createElement('a');
    a.href = C.contact.instagram_url; a.target = '_blank'; a.rel = 'noopener';
    a.className = 'social-link'; a.textContent = '📷 Instagram';
    socials.appendChild(a);
  }
  if (C.contact.tripadvisor_url) {
    const a = document.createElement('a');
    a.href = C.contact.tripadvisor_url; a.target = '_blank'; a.rel = 'noopener';
    a.className = 'social-link'; a.textContent = '🦉 TripAdvisor';
    socials.appendChild(a);
  }

  // ── BOOKING FORM → EMAIL OR WHATSAPP ────────────────────
  function formatTravelMonth(ym) {
    if (!ym || !/^\d{4}-\d{2}$/.test(ym)) return ym || 'N/A';
    const [y, m] = ym.split('-');
    const d = new Date(parseInt(y, 10), parseInt(m, 10) - 1, 1);
    return d.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
  }

  function bookingMessageFromForm(form) {
    const ym = form.travelMonth.value;
    const data = {
      name: form.name.value.trim(),
      country: form.country.value.trim(),
      travelMonth: formatTravelMonth(ym),
      travelers: form.travelers.value,
      message: form.message.value.trim(),
    };
    return (
      `Hello M4Travels Sri Lanka! I'd like to book a tour.\n\n` +
      `Name: ${data.name}\n` +
      `Country: ${data.country}\n` +
      `Travelling month: ${data.travelMonth}\n` +
      `Number of travelers: ${data.travelers}\n` +
      `Tour plan / questions:\n${data.message || 'N/A'}`
    );
  }

  bookingForm.addEventListener('submit', e => e.preventDefault());

  document.getElementById('bookingWhatsappBtn').addEventListener('click', () => {
    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      return;
    }
    const msg = bookingMessageFromForm(bookingForm);
    window.open(waLink(msg), '_blank');
  });

  document.getElementById('bookingEmailBtn').addEventListener('click', () => {
    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      return;
    }
    const body = encodeURIComponent(bookingMessageFromForm(bookingForm));
    const subject = encodeURIComponent(
      `Tour booking — ${bookingForm.name.value.trim() || 'enquiry'}`
    );
    const to = encodeURIComponent(C.contact.email);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });

  // ── FOOTER YEAR ─────────────────────────────────────────
  document.getElementById('footerYear').textContent = new Date().getFullYear();

  // ── SCROLL REVEAL (highlights register above when async manifest loads) ──
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
});
