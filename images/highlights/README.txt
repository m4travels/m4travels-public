M4 Travels — highlight photos (carousel)
========================================

Each place has its own folder. Put your JPG / WEBP / PNG files there.

TWO WAYS to tell the site which files to show (pick one):

A) manifest.json (easiest for many photos)
   Edit images/highlights/manifest.json — keys must match "folder" in js/content.js:

   {
     "sigiriya": ["IMG_001.jpg", "IMG_002.jpg"],
     "galle-fort": ["fort-1.webp"]
   }

   Leave "photos": [] in content.js for those highlights — manifest is used automatically.

B) content.js only
   In js/content.js → sl_highlights, set:

   folder: "sigiriya",
   photos: ["IMG_001.jpg", "IMG_002.jpg"],

IMPORTANT
• Filenames must match exactly (Linux servers are case-sensitive: photo.jpg ≠ Photo.JPG).
• Opening index.html as a file (file://) may block manifest.json — use a local server
  (e.g. npx serve .) or test on your live GitHub Pages site.
• Safari often won’t show HEIC; use JPG or WEBP for the web.

Multiple files in one highlight = prev/next slider on that card.
