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

  const heroCta = document.getElementById('heroCta');
  heroCta.href = '#contact';
  heroCta.className = 'btn btn-primary';
  heroCta.textContent = C.hero.cta_button;

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

  // ── GALLERY ─────────────────────────────────────────────
  const gGrid = document.getElementById('galleryGrid');
  C.gallery.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-item reveal';
    div.style.transitionDelay = `${i * 0.07}s`;

    const usePlaceholder = item.placeholder === true || !item.src;
    const dims =
      item.width && item.height ? ` width="${item.width}" height="${item.height}"` : '';
    const imgContent = usePlaceholder
      ? `<div class="gallery-placeholder gallery-img">
           <span>📸</span>
           <p style="font-size:0.7rem;padding:0 20px;text-align:center;">Add a photo path in content.js</p>
         </div>`
      : `<img class="gallery-img" src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async"${dims} />`;

    div.innerHTML = `
      ${imgContent}
      <div class="gallery-caption">${item.caption}</div>
    `;
    gGrid.appendChild(div);
  });

  // ── CONTACT DETAILS ─────────────────────────────────────
  const phoneDigits = C.contact.whatsapp_number.replace(/\D/g, '');
  const phoneLink = document.getElementById('phoneLink');
  if (phoneLink && phoneDigits) {
    phoneLink.href = `tel:+${phoneDigits}`;
  }
  const phoneDisplay = C.contact.phone_display || C.contact.whatsapp_display;
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
  const bookingForm = document.getElementById('bookingForm');
  function bookingMessageFromForm(form) {
    const data = {
      name: form.name.value.trim(),
      country: form.country.value.trim(),
      date: form.date.value,
      travelers: form.travelers.value,
      message: form.message.value.trim(),
    };
    return (
      `Hello M4Travels Sri Lanka! I'd like to book a tour.\n\n` +
      `Name: ${data.name}\n` +
      `Country: ${data.country}\n` +
      `Arrival date: ${data.date}\n` +
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

  // ── SCROLL REVEAL ───────────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
