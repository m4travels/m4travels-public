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
  const heroSubEl = document.getElementById('heroSubtitle');
  C.hero.paragraphs.forEach(para => {
    const p = document.createElement('p');
    p.className = 'hero-para';
    p.textContent = para;
    heroSubEl.appendChild(p);
  });

  const badgesEl = document.getElementById('heroBadges');
  C.highlights.forEach(text => {
    const b = document.createElement('span');
    b.className = 'hero-badge';
    b.innerHTML = `✅ ${text}`;
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
  document.getElementById('pricingIntro').textContent = C.pricing.intro;
  const pricingIncludes = document.getElementById('pricingIncludes');
  if (pricingIncludes && C.pricing.includes) {
    C.pricing.includes.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      pricingIncludes.appendChild(li);
    });
  }
  document.getElementById('pricingNote').textContent = 'Not included: ' + C.pricing.note;
  document.getElementById('pricingCta').innerHTML = '💬 ' + C.pricing.cta;

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

  // ── BOOKING FORM → WHATSAPP ─────────────────────────────
  document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const f = this;
    const data = {
      name:      f.name.value,
      country:   f.country.value,
      date:      f.date.value,
      travelers: f.travelers.value,
      message:   f.message.value,
    };

    const msg =
`Hello M4Travels Sri Lanka! I'd like to book a tour.

👤 Name: ${data.name}
🌍 Country: ${data.country}
📅 Arrival Date: ${data.date}
👥 Number of Travelers: ${data.travelers}
📋 Tour Plan: ${data.message || 'N/A'}`;

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
