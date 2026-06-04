# Next.js + Cloudflare Rebuild Plan

Branch ini disiapkan untuk membangun ulang website BUF — Berkah Utami Furniture menggunakan Next.js App Router dengan arah deploy Cloudflare.

## Prinsip Migrasi

- Branch `main` tetap aman sampai rebuild siap.
- Struktur lama React/Vite tidak diteruskan sebagai fondasi utama.
- Asset lama seperti logo dan foto gallery tetap dipertahankan.
- Tampilan BUF harus punya karakter interior sendiri, bukan meniru visual Radjaac.

## Target Stack

- Next.js App Router
- Tailwind CSS
- Content-driven routes
- SEO metadata per halaman
- Dynamic sitemap dan robots
- Schema JSON-LD
- Cloudflare-ready deployment

## Struktur Target

```txt
app/
├─ layout.js
├─ page.js
├─ globals.css
├─ sitemap.js
├─ robots.js
├─ not-found.js
├─ layanan/
├─ gallery/
├─ kontak/
├─ tentang-kami/
└─ artikel/

content/
├─ site.js
├─ routes.js
├─ navigation.js
├─ static-pages.js
├─ services.js
├─ gallery.js
├─ articles.js
└─ faqs.js

lib/
├─ seo.js
├─ url.js
├─ schema.js
└─ whatsapp.js

components/
├─ layout/
├─ home/
├─ services/
├─ gallery/
├─ article/
├─ seo/
└─ ui/

docs/research/
```

## Halaman Fase 1

- `/`
- `/layanan`
- `/gallery`
- `/kontak`
- `/tentang-kami`
- `/layanan/kitchen-set-banyumas`
- `/layanan/custom-furniture-banyumas`
- `/layanan/interior-rumah-banyumas`
- `/layanan/interior-toko-banyumas`

## Arah Visual BUF

- Warm ivory background
- Charcoal text
- Wood/taupe interior accents
- Blue logo as controlled CTA/link accent
- Red logo only for small highlights
- Large interior imagery
- Clean premium local workshop feel

## Catatan

File ini hanya marker awal branch dan rencana migrasi. Implementasi Next.js akan dilakukan bertahap setelah branch aman.
