# BUF — Berkah Utami Furniture

Website resmi BUF (Berkah Utami Furniture), jasa desain interior dan pengerjaan furniture custom dengan pendekatan service-first, SEO-ready, dan siap deploy ke Cloudflare Pages.

Project ini sudah direbuild dari struktur React/Vite lama ke fondasi **Next.js App Router** dengan konten berbasis file agar halaman layanan, gallery, artikel, dan landing page estimasi biaya mudah dikembangkan bertahap.

## Status saat ini

Rebuild Next.js berjalan di branch `nextjs-cloudflare-rebuild` dan saat ini sudah sinkron dengan `main`.

Fondasi yang sudah tersedia:

- Next.js App Router.
- JavaScript, bukan TypeScript.
- Content-driven routes.
- SEO metadata per halaman.
- Sitemap dan robots.
- Schema JSON-LD dasar.
- Halaman layanan hub dan detail layanan.
- Gallery scalable berbasis `content/gallery.js`.
- Artikel SEO berbasis `content/articles.js`.
- Landing page `/estimasi-biaya`.
- Internal linking antar homepage, layanan, artikel, gallery, kontak, dan estimasi biaya.
- Build valid dengan `npm run build` memakai `next build --webpack`.

## Fokus layanan

- Interior rumah.
- Interior kost.
- Interior toko.
- Kitchen set.
- Custom furniture.
- Backdrop TV custom.
- Lemari custom.
- Booth usaha custom.
- Desain interior dan pengerjaan proyek.

## Route penting

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

## Tech stack

- Next.js App Router.
- React.
- JavaScript.
- Tailwind CSS.
- File-based content.
- JSON-LD schema.
- Cloudflare Pages deployment target.

## Struktur utama

```txt
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
```

## Scripts

```bash
npm install
npm run dev
npm run build
```

Build production memakai konfigurasi Next.js yang saat ini diarahkan ke `next build --webpack`.

## Arah SEO dan konten

Strategi konten saat ini menggunakan pendekatan service-first:

- Local SEO tetap dipakai sebagai pendukung.
- Copy tidak terlalu mengunci BUF hanya sebagai bisnis satu area.
- Artikel dibuat untuk menjawab problem user, bukan keyword stuffing.
- Halaman layanan diarahkan ke konsultasi WhatsApp.
- `/estimasi-biaya` dipakai untuk menangkap intent harga/biaya secara transparan.
- Internal linking menghubungkan layanan, artikel, gallery, estimasi, dan kontak.

## Catatan deploy

Sebelum domain production aktif:

- Ganti `baseUrl` dan `domain` di `content/site.js` ke domain final.
- Domain rencana: `bufinterior.com`.
- Pastikan sitemap live dapat diakses.
- Submit sitemap ke Google Search Console setelah domain final aktif.
- Setup Google Business Profile.
- Audit path gambar sebelum launch final.
- Tambahkan trust proof/testimoni jika data asli sudah tersedia.

## Kontak bisnis

WhatsApp: 085772208688

## Area layanan

Banyumas dan sekitarnya, dengan positioning layanan interior custom yang tetap bisa diperluas sesuai arah bisnis BUF.
