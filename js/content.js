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
    whatsapp_number: "+94777510000",          // Used for WhatsApp button (no spaces/dashes)
    whatsapp_display: "+94 77 751 0000",      // Displayed on site
    email: "info@m4travels.lk",               // Your email address
    location: "Colombo, Sri Lanka",
    facebook_url: "https://facebook.com/m4travelssrilanka",   // Your Facebook page URL
    instagram_url: "https://instagram.com/m4travelssrilanka", // Your Instagram URL
    tripadvisor_url: "",                      // Leave empty if not on TripAdvisor
  },

  // ── HERO SECTION (Top of homepage) ───────────────────────
  hero: {
    tagline: "Discover Sri Lanka",
    subtitle: "Private tours & airport transfers with local expertise",
    cta_button: "Book Your Tour",
  },

  // ── WHY CHOOSE US (Badges on homepage) ───────────────────
  highlights: [
    "Professional Tourist Driver",
    "Comfortable Private Vehicle",
    "Flexible Travel Plans",
    "Affordable Prices",
  ],

  // ── SERVICES ─────────────────────────────────────────────
  services: [
    {
      icon: "✈️",
      title: "Airport Transfers",
      description: "Safe and comfortable airport pickup and drop-off anywhere in Sri Lanka. Available from Bandaranaike International Airport 24/7.",
    },
    {
      icon: "🌴",
      title: "Private Day Tours",
      description: "Customized day trips to top attractions across the island. Tailored to your interests and pace.",
    },
    {
      icon: "🗺️",
      title: "Multi-Day Tours",
      description: "Complete Sri Lanka travel packages with professional driver and vehicle. We handle the journey, you enjoy the destination.",
    },
    {
      icon: "💍",
      title: "Wedding & Special Events",
      description: "Luxury transport for weddings, honeymoons, and special occasions. Memorable arrivals for your most important days.",
    },
  ],

  // ── PRICING SECTION ───────────────────────────────────────
  pricing: {
    headline: "Transparent & Affordable Pricing",
    intro: "Prices are tailored to your travel itinerary. All packages include a private vehicle and professional driver with flexible scheduling.",
    note: "Fuel, highway tolls, and hotel accommodation are not included in tour prices.",
    cta: "Contact us on WhatsApp for a custom quote — we'll reply within an hour!",
    packages: [
      {
        name: "Airport Transfer",
        price: "From $25",
        features: ["Colombo area pickup/drop", "Meet & greet service", "Flight tracking", "Air-conditioned vehicle"],
      },
      {
        name: "Day Tour",
        price: "From $60",
        features: ["Up to 10 hours", "Professional driver-guide", "Flexible itinerary", "Private vehicle"],
      },
      {
        name: "Multi-Day Tour",
        price: "Contact for quote",
        features: ["Custom itinerary", "All destinations covered", "Professional driver", "Comfortable travel"],
        highlight: true,
      },
    ],
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
