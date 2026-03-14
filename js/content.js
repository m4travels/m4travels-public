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
    whatsapp_number: "+94777510000",          // Replace with your number (no spaces/dashes)
    whatsapp_display: "+94 77 751 XXXX",      // Displayed on site (replace XXXX with your digits)
    email: "info@m4travels.lk",               // Your email address
    location: "Based in Sri Lanka – Islandwide Travel",
    whatsapp_cta: "Chat with us on WhatsApp to plan your tour",
    facebook_url: "https://facebook.com/m4travelssrilanka",   // Your Facebook page URL
    instagram_url: "https://instagram.com/m4travelssrilanka", // Your Instagram URL
    tripadvisor_url: "",                      // Leave empty if not on TripAdvisor
  },

  // ── HERO SECTION (Top of homepage) ───────────────────────
  hero: {
    paragraphs: [
      "Discover the beauty of Sri Lanka with comfort, safety, and local expertise. At M4Travels Sri Lanka, we provide reliable airport transfers, private tours, and customized travel experiences across the island.",
      "From golden beaches to misty mountains, ancient cities to wildlife safaris – we help you explore Sri Lanka in the most convenient and memorable way.",
      "Whether you are visiting for a short holiday or a long adventure, we ensure a smooth and enjoyable journey from the moment you arrive.",
    ],
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

  // ── PRICING SECTION ───────────────────────────────────────
  pricing: {
    intro: "Prices can be discussed accordingly depending on the travel itinerary.",
    includes: [
      "Private vehicle",
      "Professional driver",
      "Flexible travel schedule",
    ],
    note: "Fuel, highway tickets, and hotel are not included.",
    cta: "Contact us on WhatsApp for a custom quote.",
  },

  // ── REVIEWS ───────────────────────────────────────────────
  // Add or remove review blocks as needed. Keep at least 2.
  reviews: [
    {
      name: "Sarah M.",
      country: "United Kingdom",
      stars: 5,
      text: "Absolutely fantastic service! Our driver was punctual, friendly, and knew all the best spots. Made our Sri Lanka trip truly unforgettable.",
    },
    {
      name: "Thomas R.",
      country: "Germany",
      stars: 5,
      text: "Very professional and reliable. The vehicle was clean and comfortable. We felt safe throughout the entire trip. Highly recommend!",
    },
    {
      name: "Priya K.",
      country: "Australia",
      stars: 5,
      text: "Booked airport transfer and a 3-day tour. Everything was perfectly arranged. Great value for money and wonderful local knowledge.",
    },
  ],

  // ── GALLERY ───────────────────────────────────────────────
  // Replace image URLs with your own photos uploaded to the /images folder.
  // Format: { src: "images/your-photo.jpg", alt: "Description", caption: "Location Name" }
  gallery: [
    { src: "images/gallery/sigiriya.jpg",    alt: "Sigiriya Rock Fortress", caption: "Sigiriya" },
    { src: "images/gallery/nine-arch.jpg",   alt: "Nine Arch Bridge Ella",  caption: "Nine Arch Bridge" },
    { src: "images/gallery/galle.jpg",       alt: "Galle Fort",             caption: "Galle Fort" },
    { src: "images/gallery/tooth-relic.jpg", alt: "Temple of Tooth Relic",  caption: "Kandy" },
    { src: "images/gallery/beach.jpg",       alt: "Sri Lanka Beach",        caption: "Southern Coast" },
    { src: "images/gallery/wildlife.jpg",    alt: "Wildlife Safari",        caption: "Yala Safari" },
  ],

};
