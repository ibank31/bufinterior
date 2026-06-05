# Next.js + Cloudflare Rebuild Plan

Dokumen ini mencatat arah rebuild website BUF — Berkah Utami Furniture menggunakan Next.js App Router dengan target deploy Cloudflare Pages.

## Status Saat Ini

Rebuild Next.js sudah berjalan di branch `nextjs-cloudflare-rebuild`.

Fondasi yang sudah ada:

- Next.js App Router.
- JavaScript, bukan TypeScript.
- Content-driven routes.
- SEO metadata per halaman.
- Sitemap dan robots.
- Schema JSON-LD dasar.
- Halaman layanan detail.
- Gallery scalable berbasis `content/gallery.js`.
- Artikel SEO berbasis `content/articles.js`.
- Halaman `/estimasi-biaya`.
- Internal linking antar homepage, layanan, artikel, gallery, kontak, dan estimasi biaya.
- Build valid dengan `npm run build` memakai `next build --webpack`.

## Prinsip Migrasi

- Branch `main` tetap aman sampai rebuild siap.
- Struktur lama React/Vite tidak diteruskan sebagai fondasi utama.
- Asset lama seperti logo dan foto gallery tetap dapat dipakai jika masih relevan.
- Tampilan BUF harus punya karakter interior sendiri, bukan meniru visual Radjaac.
- Copy website tidak boleh terlalu mengunci BUF hanya sebagai bisnis lokal satu area.
- Local SEO tetap dipakai sebagai pendukung, bukan seluruh positioning.

## Target Stack

- Next.js App Router
- Tailwind CSS
- Content-driven routes
- SEO metadata per halaman
- Static sitemap dan robots
- Schema JSON-LD
- Cloudflare-ready deployment

## Struktur Implementasi Saat Ini

app/
- layout.js
- page.js
- globals.css
- sitemap.js
- robots.js
- not-found.js
- estimasi-biaya/
- layanan/
- gallery/
- kontak/
- tentang-kami/
- artikel/

content/
- site.js
- routes.js
- navigation.js
- static-pages.js
- services.js
- gallery.js
- articles.js

lib/
- seo.js
- url.js
- schema.js

components/
- layout/
- services/
- seo/
- ui/

docs/
- migration/
- research/
- seo/

## Route Penting Saat Ini

- `/`
- `/layanan`
- `/estimasi-biaya`
- `/gallery`
- `/kontak`
- `/tentang-kami`
- `/artikel`
- `/artikel/biaya-kitchen-set-custom`
- `/artikel/material-kitchen-set-yang-bagus`
- `/artikel/tips-memilih-jasa-interior-custom`
- `/artikel/lemari-custom-vs-lemari-jadi`
- `/layanan/kitchen-set-banyumas`
- `/layanan/custom-furniture-banyumas`
- `/layanan/interior-rumah-banyumas`
- `/layanan/interior-toko-banyumas`
- `/layanan/backdrop-tv-banyumas`
- `/layanan/lemari-custom-banyumas`
- `/layanan/booth-usaha-banyumas`

## Arah Visual BUF

- Warm ivory background.
- Charcoal text.
- Wood/taupe interior accents.
- Blue logo sebagai CTA/link accent.
- Red logo hanya untuk highlight kecil.
- Large interior imagery.
- Premium workshop feel.
- Badge/numbering harus tegas, tetapi tidak seragam di semua halaman.
- Foto proyek asli perlu diaudit dan diganti bertahap saat asset yang lebih proper sudah siap.

## Catatan Deploy

Sebelum domain production aktif:

- Ganti `baseUrl` dan `domain` di `content/site.js` ke domain final.
- Domain rencana: `bufinterior.com`.
- Pastikan sitemap live dapat diakses.
- Submit sitemap ke Google Search Console setelah domain final.
- Setup Google Business Profile.
- Audit path gambar sebelum launch final.
