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
  document.getElementById('heroSubtitle').textContent = C.hero.subtitle;
  document.getElementById('heroCta').textContent = C.hero.cta_button;

  const badgesEl = document.getElementById('heroBadges');
  C.highlights.forEach(text => {
    const b = document.createElement('span');
    b.className = 'hero-badge';
    b.innerHTML = `✅ ${text}`;
    badgesEl.appendChild(b);
  });
  // Move the CTA button into hero-badges area (after badges)
  const heroCta = document.getElementById('heroCta');
  heroCta.href = '#contact';
  heroCta.className = 'btn btn-primary';

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

  // ── GALLERY ─────────────────────────────────────────────
  const gGrid = document.getElementById('galleryGrid');
  C.gallery.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-item reveal';
    div.style.transitionDelay = `${i * 0.07}s`;

    // Check if it's a placeholder path or real image
    const isPlaceholder = item.src.startsWith('images/');
    const imgContent = isPlaceholder
      ? `<div class="gallery-placeholder gallery-img">
           <span>📸</span>
           <p style="font-size:0.7rem;padding:0 20px;text-align:center;">Upload: ${item.src}</p>
         </div>`
      : `<img class="gallery-img" src="${item.src}" alt="${item.alt}" loading="lazy" />`;

    div.innerHTML = `
      ${imgContent}
      <div class="gallery-caption">${item.caption}</div>
    `;
    gGrid.appendChild(div);
  });

  // ── PRICING ─────────────────────────────────────────────
  document.getElementById('pricingHeadline').innerHTML = C.pricing.headline.replace(' & ', ' &amp; ').replace('&', '& <em>') + '</em>';
  document.getElementById('pricingHeadline').innerHTML = `Transparent &amp; <em>Affordable Pricing</em>`;
  document.getElementById('pricingIntro').textContent = C.pricing.intro;
  document.getElementById('pricingNote').textContent = '⚠ ' + C.pricing.note;
  document.getElementById('pricingCta').textContent = '💬 ' + C.pricing.cta;

  const pGrid = document.getElementById('pricingGrid');
  C.pricing.packages.forEach((pkg, i) => {
    const card = document.createElement('div');
    card.className = `pricing-card reveal${pkg.highlight ? ' highlight' : ''}`;
    card.style.transitionDelay = `${i * 0.1}s`;

    const featuresHtml = pkg.features.map(f => `<li>${f}</li>`).join('');
    const ctaClass = pkg.highlight ? 'btn-outline' : 'btn-primary';
    const ctaStyle = pkg.highlight ? 'style="border-color:var(--gold-light);color:var(--gold-light);"' : '';

    card.innerHTML = `
      <div class="pc-name">${pkg.name}</div>
      <div class="pc-price">${pkg.price}</div>
      <ul>${featuresHtml}</ul>
      <a href="#contact" class="btn ${ctaClass}" ${ctaStyle}>Get a Quote</a>
    `;
    pGrid.appendChild(card);
  });

  // ── REVIEWS ─────────────────────────────────────────────
  const rGrid = document.getElementById('reviewsGrid');
  C.reviews.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'review-card reveal';
    card.style.transitionDelay = `${i * 0.1}s`;
    const stars = '⭐'.repeat(r.stars);
    card.innerHTML = `
      <div class="review-stars">${stars}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">
        <strong>${r.name}</strong>
        <span>📍 ${r.country}</span>
      </div>
    `;
    rGrid.appendChild(card);
  });

  // ── CONTACT DETAILS ─────────────────────────────────────
  document.getElementById('contactWhatsapp').textContent = C.contact.whatsapp_display;
  document.getElementById('contactEmail').textContent = C.contact.email;
  document.getElementById('contactLocation').textContent = C.contact.location;

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

  // ── BOOKING FORM → WHATSAPP ─────────────────────────────
  document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const f = this;
    const data = {
      name:      f.name.value,
      country:   f.country.value,
      date:      f.date.value,
      travelers: f.travelers.value,
      service:   f.service.value,
      message:   f.message.value,
    };

    const msg =
`Hello M4 Travels! I'd like to book a tour.

👤 Name: ${data.name}
🌍 Country: ${data.country}
📅 Arrival Date: ${data.date}
👥 Travellers: ${data.travelers}
🚗 Service: ${data.service}
💬 Message: ${data.message || 'N/A'}`;

    window.open(waLink(msg), '_blank');
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
