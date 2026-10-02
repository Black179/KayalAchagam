# Kayal Achagam Centre – Website

Static informational website (HTML + Tailwind CDN + vanilla JS). No build step.

## Run
Open `index.html` in a browser, or serve the folder:

    npx serve .

## Edit content
Everything is in the `CONFIG` object near the bottom of `index.html`:
- `phone`, `alternatePhone`, `email`, `address`, `mapsQuery`
- `kural`, `kuralNo` (Thirukkural shown in hero + Tamil Heritage)
- `sections[]` – service sections (01–08). Set `image: "images/your-photo.jpg"` to replace the icon panel with a photo
- `galleryImages[]` – `{ src: "images/xyz.jpg", alt: "caption" }`

Portraits are in `images/` (hero collage + Prabhakaran portrait). Replace the files keeping the same names to swap them.

## Deploy
Works on GitHub Pages / Netlify / any static host: publish the repo root.
