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

  // ── HERO: “Call” + “Message us” are in index.html; phone number from contact below. ──

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
      "Below are example private-tour frameworks — Cultural Triangle, tea country, wildlife, and the south coast. Your hotels, tickets, and meals are yours to book (we’re happy to advise). Transport and day-to-day routing are with your M4Travels driver.",
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

  // ── SRI LANKA HIGHLIGHTS (carousel) ───────────────────────
  // Put files in images/highlights/<folder>/ then EITHER:
  //   • list them in "photos" below, OR
  //   • leave photos: [] and add the same folder name + filenames to images/highlights/manifest.json
  // Filenames must match exactly (case-sensitive on the server). See images/highlights/README.txt
  sl_highlights: [
    {
      folder: "sigiriya",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&w=960&q=80",
      title: "Sigiriya",
      subtitle: "The Lion Rock — a 5th-century palace fortress and UNESCO World Heritage icon rising from the central plains.",
      alt: "Sigiriya and central plains scenery",
    },
    {
      folder: "galle-fort",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&w=960&q=80",
      title: "Galle & the fort",
      subtitle: "Walk Dutch-era ramparts, the lighthouse, and cobbled lanes inside a living UNESCO fort on the south coast.",
      alt: "Galle coast and fort",
    },
    {
      folder: "elephant-gathering",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&w=960&q=80",
      title: "The elephant gathering",
      subtitle: "Minneriya and Kaudulla national parks host huge seasonal herds at the reservoirs — a classic safari moment.",
      alt: "Elephants in Sri Lanka",
    },
    {
      folder: "kandy",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&w=960&q=80",
      title: "Kandy & the Sacred Tooth",
      subtitle: "The hill-country capital, the lake, and Sri Dalada Maligawa — one of Buddhism’s most revered temples.",
      alt: "Kandy temple architecture",
    },
    {
      folder: "ella",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&w=960&q=80",
      title: "Ella & Nine Arch Bridge",
      subtitle: "Cool air, tea valleys, and the famous stone railway bridge — best paired with a scenic train ride.",
      alt: "Hills near Ella",
    },
    {
      folder: "tea-country",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&w=960&q=80",
      title: "Tea country",
      subtitle: "Rolling estates around Nuwara Eliya — factory visits, tastings, and misty mornings in “Little England.”",
      alt: "Tea plantations",
    },
    {
      folder: "dambulla",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&w=960&q=80",
      title: "Dambulla Cave Temple",
      subtitle: "Five cave shrines under a massive rock overhang — golden Buddhas and centuries of murals (UNESCO).",
      alt: "Dambulla cave temple",
    },
    {
      folder: "polonnaruwa",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&w=960&q=80",
      title: "Ancient Polonnaruwa",
      subtitle: "Cycling among ruined palaces, stupas, and the Gal Vihara rock Buddhas — the medieval capital frozen in stone.",
      alt: "Polonnaruwa ancient city",
    },
    {
      folder: "yala",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&w=960&q=80",
      title: "Yala & the south’s wildlife",
      subtitle: "Jeep safaris through scrub and coast — elephants, birds, and with luck a leopard in Sri Lanka’s best-known park.",
      alt: "Wildlife safari",
    },
    {
      folder: "south-beaches",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&w=960&q=80",
      title: "South coast beaches",
      subtitle: "Mirissa, Tangalle, and beyond — coconut palms, calm bays, and whale-watching boats in season.",
      alt: "Southern beaches",
    },
    {
      folder: "anuradhapura",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&w=960&q=80",
      title: "Anuradhapura",
      subtitle: "Sacred bodhi tree, enormous dagobas, and the cradle of Sinhalese civilization — a deeply spiritual UNESCO site.",
      alt: "Anuradhapura sacred sites",
    },
    {
      folder: "adams-peak",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&w=960&q=80",
      title: "Adam’s Peak (Sri Pada)",
      subtitle: "A night or dawn climb for pilgrims and hikers — sunrise above the clouds and a footprint-shaped summit shrine.",
      alt: "Adam’s Peak",
    },
    {
      folder: "horton-plains",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&w=960&q=80",
      title: "Horton Plains & World’s End",
      subtitle: "Highland grasslands, mist, and a sheer cliff drop — a different side of the island just hours from Nuwara Eliya.",
      alt: "Horton Plains",
    },
    {
      folder: "colombo",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&w=960&q=80",
      title: "Colombo gateway",
      subtitle: "Markets, colonial architecture, and the waterfront — an easy start or finish before the airport.",
      alt: "Colombo",
    },
    {
      folder: "train-kandy-ella",
      photos: [],
      fallbackSrc: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&w=960&q=80",
      title: "Scenic train: Kandy to Ella",
      subtitle: "Often named among the world’s most beautiful rail journeys — open windows, tea hills, and viaducts.",
      alt: "Scenic train in hill country",
    },
  ],

};
