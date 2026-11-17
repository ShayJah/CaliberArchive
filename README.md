# Caliber Archive

Next.js (App Router) + SCSS/CSS + SQLite (one file, no server to install).

    npm install
    npm run dev      # http://localhost:3000

## Designer cheat sheet
- **Styling:** `app/globals.scss` (global stylesheet; SCSS and CSS both work, no Tailwind). Colors, font, spacing are variables at the top.
- **Pages:** `app/page.tsx` (shop grid), `app/products/[slug]/page.tsx` (product), `app/layout.tsx` (header/footer).
- **Products:** `lib/db.ts` seeds 3 demo items on first run. Edit them there, then delete `caliber.db` to reseed.
  Or browse/edit the data with any SQLite viewer (e.g. TablePlus, DB Browser for SQLite) on `caliber.db`.
- **Images:** drop files in `public/` and set `image` to `/yourfile.jpg`.
- Menu animations later: `npm i gsap` (not installed yet).
- Needs Node 22.13+.
