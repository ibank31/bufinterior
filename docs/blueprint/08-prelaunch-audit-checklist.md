# Pre-Launch Audit Checklist BUF Interior

Checklist ini wajib dijalankan sebelum bufinterior.com dipublikasikan sebagai domain utama.

## Wajib Dicek Sebelum Live
- [ ] Build normal sukses:
   npm run build
- [ ] Build domain final sukses:
   NEXT_PUBLIC_SITE_URL=https://bufinterior.com npm run build
- [ ] Sitemap memakai https://bufinterior.com
- [ ] Robots mengarah ke sitemap domain final
- [ ] Tidak ada route atau link publik /gallery
- [ ] Navbar final: Beranda, Layanan, Portofolio, Estimasi Biaya, Cara Kerja BUF, Tentang BUF
- [ ] Dropdown Layanan mengarah ke /layanan/*
- [ ] Dropdown Portofolio mengarah ke /portfolio/*
- [ ] Semua halaman P0 /jasa/* bisa dicapai maksimal 2 klik dari homepage
- [ ] Semua /portfolio/* bukan 404
- [ ] Semua placeholder portofolio sudah diganti data real sebelum launch final
- [ ] Tidak ada teks publik: Placeholder, Referensi Kategori, atau Dokumentasi real akan ditambahkan
- [ ] Tidak ada istilah Gallery di UI publik
- [ ] Semua WhatsApp link berasal dari lib/whatsapp.js
- [ ] Nomor WhatsApp final benar di content/site.js
- [ ] Canonical semua halaman memakai https://bufinterior.com
- [ ] Tidak ada domain fallback pages.dev di output build domain final
- [ ] Schema LocalBusiness, Service, FAQPage, BreadcrumbList valid
- [ ] Tidak ada Product Schema untuk jasa custom
- [ ] Mobile check selesai untuk homepage, layanan, portofolio, jasa, cara kerja, kontak, dan P0 pages

## Perintah Audit Cepat

1. Build normal:
   npm run build

2. Build domain final:
   NEXT_PUBLIC_SITE_URL=https://bufinterior.com npm run build

3. Cek route lama gallery:
   grep -R 'routes.gallery\|href={routes.gallery}\|href="/gallery"\|href="/gallery"\|content/gallery\|components/gallery' app components content lib --line-number || true

4. Cek placeholder dan istilah lama:
   grep -R 'Placeholder\|placeholder\|Referensi Kategori\|Dokumentasi real akan ditambahkan\|Gallery\|gallery' app components content lib --line-number || true

5. Cek WhatsApp:
   grep -R '6285772208688\|wa.me' app components content lib --line-number

6. Cek domain fallback di output build:
   grep -R 'pages.dev' .next/server/app --include='*.html' --include='*.rsc' --include='*.body' --include='*.js' -n || true
