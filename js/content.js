/**
 * ============================================================
 *  M4 TRAVELS SRI LANKA — EDITABLE CONTENT FILE
 * ============================================================
 *  HOW TO UPDATE THE WEBSITE:
 *  1. Open this file in any text editor (Notepad, etc.)
 *  2. Change the text between the quote marks " "
 *  3. Save the file
 *  4. Upload to GitHub — the website updates automatically!
 *
 *  DO NOT change anything outside of the quote marks.
 * ============================================================
 */

const SITE_CONTENT = {

  // ── CONTACT DETAILS ──────────────────────────────────────
  contact: {
    phone_display: "+94 77 751 3098",         // Shown for Phone & WhatsApp (same number)
    whatsapp_number: "+94777513098",          // Digits only after +94 for wa.me links (no spaces)
    whatsapp_display: "+94 77 751 3098",
    email: "info@m4travels.com",
    location: "Based in Sri Lanka – Islandwide Travel",
    whatsapp_cta: "Chat with us on WhatsApp to plan your tour",
    facebook_url: "https://www.facebook.com/M4TravelsSL/",
    instagram_url: "https://www.instagram.com/m4travels_sl/",
    tripadvisor_url: "",                      // Leave empty if not on TripAdvisor
  },

  // ── HERO SECTION (Top of homepage) ───────────────────────
  hero: {
    cta_button: "Start your Sri Lanka journey with us today.",
  },

  // ── WHY CHOOSE US (Badges on homepage) ───────────────────
  highlights: [
    "Professional Tourist Driver",
    "Comfortable Private Vehicle",
    "Flexible Travel Plans",
    "Affordable Prices",
  ],

  // ── WHY TOURISTS CHOOSE US (Section 4) ───────────────────
  why_us: [
    "Friendly and professional driver",
    "Clean and comfortable vehicle",
    "Flexible travel plans",
    "Affordable daily rates",
    "Local knowledge of Sri Lanka",
  ],

  // ── SERVICES ─────────────────────────────────────────────
  services: [
    {
      icon: "✈️",
      title: "Airport Transfers",
      description: "Safe and comfortable airport pickup and drop-off anywhere in Sri Lanka.",
    },
    {
      icon: "🌴",
      title: "Private Day Tours",
      description: "Customized day trips to top attractions across the island.",
    },
    {
      icon: "🗺️",
      title: "Multi-Day Tours",
      description: "Complete Sri Lanka travel packages with driver and vehicle.",
    },
    {
      icon: "💍",
      title: "Wedding & Special Event Transport",
      description: "Luxury transport for weddings and special occasions.",
    },
  ],

  // ── TOUR PACKAGES (multi-day ideas — routes adjusted to your dates & pace) ──
  packages: {
    intro:
      "Sample private-tour frameworks based on popular Sri Lanka circuits (Cultural Triangle UNESCO sites, hill country trains, south coast, and wildlife). Hotels, entrance tickets, and meals are arranged by you or we can advise — transport and guiding by your M4Travels driver.",
    footnote:
      "All packages are private vehicle + driver; final itinerary and quote depend on pickup point, season, and your interests. Contact us on WhatsApp or the form below.",
    items: [
      {
        label: "3 Days",
        title: "Cultural Triangle snapshot",
        subtitle: "Ancient cities & rock fortress",
        highlights: [
          "Dambulla Cave Temple — cave shrines and Buddha statues (UNESCO)",
          "Sigiriya Lion Rock — climb the fortress and see frescoes (UNESCO)",
          "Polonnaruwa or Anuradhapura — ruined capitals and stupas",
          "Optional: Minneriya or Kaudulla for elephant gatherings (seasonal)",
          "Can start/end Colombo or Kandy depending on your flights",
        ],
        ideal: "Best for: short stays, history lovers, first-time visitors.",
      },
      {
        label: "5 Days",
        title: "Culture, hills & tea country",
        subtitle: "Kandy, Nuwara Eliya, scenic route",
        highlights: [
          "Kandy — Temple of the Sacred Tooth, lake walk, cultural show option",
          "Peradeniya Royal Botanical Gardens or Pinnawala (route-dependent)",
          "Tea country — factory visit, viewpoints, cool climate in Nuwara Eliya",
          "Scenic drive toward Ella or train segment (subject to seat availability)",
          "Flexible mix of one wildlife or extra heritage stop if time allows",
        ],
        ideal: "Best for: couples and families who want culture plus cool hill scenery.",
      },
      {
        label: "10 Days",
        title: "Island highlights tour",
        subtitle: "Triangle → hills → safari → south coast",
        highlights: [
          "Cultural Triangle — Sigiriya, Dambulla, Polonnaruwa/Anuradhapura",
          "Kandy and tea hills — Nuwara Eliya, Ella area viewpoints",
          "Yala or Udawalawe — jeep safari for elephants, leopard chance (Yala)",
          "South coast — Galle Fort (UNESCO), Mirissa/Matara beaches, stilt fishermen",
          "Coastal drive to Colombo or airport; pacing adjusted so you are not rushed",
        ],
        ideal: "Best for: round-trip Sri Lanka without skipping icons or beach time.",
      },
      {
        label: "Custom",
        title: "Your dates, your route",
        subtitle: "Fully tailored private tour",
        highlights: [
          "Any duration — from long weekends to three weeks",
          "East coast (Trincomalee, Arugam Bay) or north — season-dependent",
          "Slow travel, photography, honeymoon, or multi-generational family pace",
          "Airport meet anywhere (Colombo, Mattala, etc.) and island-wide drops",
          "We plan driving order, daily distances, and realistic sightseeing times",
        ],
        ideal: "Best for: travellers who already know what they want — or want us to design it.",
      },
    ],
  },

  // ── GALLERY ───────────────────────────────────────────────
  // Photos live in images/gallery/. Optional: width & height (intrinsic pixels) reduce layout shift.
  // Set placeholder: true to show the upload prompt instead of an image.
  gallery: [
    { src: "images/gallery/sigiriya.jpg",     alt: "Sigiriya Lion Rock fortress", caption: "Sigiriya", width: 640, height: 427 },
    { src: "images/gallery/beach.jpg",        alt: "Tropical beach in Sri Lanka", caption: "Southern coast", width: 640, height: 426 },
    { src: "images/gallery/galle.jpg",        alt: "Galle coast and fort area", caption: "Galle", width: 640, height: 399 },
    { src: "images/gallery/tea.jpg",          alt: "Tea plantations in the hills", caption: "Tea country", width: 640, height: 426 },
    { src: "images/gallery/elephant.jpg",     alt: "Elephants in Sri Lanka", caption: "Wildlife", width: 640, height: 427 },
    { src: "images/gallery/pinnawala.jpg",    alt: "Pinnawala elephant scene", caption: "Pinnawala", width: 640, height: 360 },
    { src: "images/gallery/elle.jpg",         alt: "Scenic hills near Ella", caption: "Ella", width: 640, height: 960 },
    { src: "images/gallery/lotus-tower.jpg",  alt: "Colombo Lotus Tower skyline", caption: "Colombo", width: 640, height: 960 },
    { src: "images/gallery/fishing.jpg",      alt: "Traditional stilt fishing", caption: "Coastal life", width: 640, height: 427 },
    { src: "images/gallery/downshouth.jpg",   alt: "Southern Sri Lanka coastline", caption: "Down south", width: 640, height: 997 },
  ],

};
