# 02 - SEO Architecture & Crawler

## 1. Aturan URL Utama

Struktur wajib:

    /layanan/* = halaman layanan umum dan edukatif
    /jasa/*    = landing page lokal dan komersial

Contoh benar:

    /layanan/kitchen-set
    /jasa/kitchen-set-purwokerto

Contoh salah:

    /layanan/kitchen-set-purwokerto
    /area/kitchen-set-purwokerto
    /jasa/kitchen-set-sokaraja tanpa bukti proyek

## 2. Fungsi /layanan/*

Halaman /layanan/* dipakai untuk:
- edukasi layanan
- penjelasan material
- proses pengerjaan
- jenis/model layanan
- FAQ umum
- internal link ke landing lokal /jasa/*
- topical authority

Contoh:
- /layanan/kitchen-set membahas kitchen set secara umum.
- /layanan/akrilik-custom membahas jenis pekerjaan akrilik custom.
- /layanan/aluminium membahas kusen, pintu, partisi, etalase, dan kaca aluminium.

## 3. Fungsi /jasa/*

Halaman /jasa/* dipakai untuk:
- keyword lokal
- intent komersial
- landing page lead
- trust signal lokal
- CTA WhatsApp
- gallery/proof
- area layanan

Contoh:
- /jasa/kitchen-set-purwokerto
- /jasa/booth-usaha-purwokerto
- /jasa/akrilik-custom-purwokerto
- /jasa/aluminium-purwokerto
- /jasa/kanopi-purwokerto

## 4. Struktur Website Saat Ini

Halaman yang ada:

    /
    /layanan
    /layanan/kitchen-set
    /layanan/custom-furniture
    /layanan/interior-rumah
    /layanan/interior-toko
    /layanan/backdrop-tv
    /layanan/lemari-custom
    /layanan/booth-usaha
    /layanan/akrilik-custom
    /layanan/aluminium
    /layanan/kanopi

    /jasa
    /jasa/kitchen-set-purwokerto
    /jasa/booth-usaha-purwokerto
    /jasa/akrilik-custom-purwokerto
    /jasa/aluminium-purwokerto
    /jasa/kanopi-purwokerto

    /gallery
    /estimasi-biaya
    /kontak
    /tentang-kami
    /artikel

Struktur ini sudah benar dan harus dipertahankan.

## 5. Prinsip 3 Klik Crawler

Target:
- semua halaman uang bisa dicapai maksimal 3 klik dari homepage
- halaman P0 idealnya bisa dicapai 1 sampai 2 klik dari homepage
- jangan ada orphan page
- sitemap membantu discovery, tetapi internal link tetap lebih penting

### Dari Homepage

Homepage harus punya link jelas ke:
- /jasa/kitchen-set-purwokerto
- /jasa/booth-usaha-purwokerto
- /jasa/akrilik-custom-purwokerto
- /jasa/aluminium-purwokerto
- /jasa/kanopi-purwokerto
- /gallery
- /kontak

### Dari /layanan

Halaman /layanan harus link ke semua layanan umum dan mengarahkan user ke /jasa untuk jasa lokal.

### Dari Setiap /layanan/*

Setiap layanan umum harus punya CTA ke jasa lokal terkait.

Contoh:
- /layanan/kitchen-set -> /jasa/kitchen-set-purwokerto
- /layanan/booth-usaha -> /jasa/booth-usaha-purwokerto
- /layanan/akrilik-custom -> /jasa/akrilik-custom-purwokerto
- /layanan/aluminium -> /jasa/aluminium-purwokerto
- /layanan/kanopi -> /jasa/kanopi-purwokerto

### Dari /jasa

Halaman /jasa harus menjadi hub lokal yang menampilkan 5 kartu P0.

### Dari Setiap /jasa/*

Setiap landing lokal harus link ke:
- halaman /layanan/* terkait
- /gallery
- /estimasi-biaya
- /kontak
- artikel terkait jika ada

### Dari /gallery

Setiap item gallery harus diarahkan ke halaman jasa atau layanan terkait.

## 6. Sitemap

Sitemap harus hanya berisi URL yang:
- ingin diindeks
- status 200
- bukan redirect
- bukan dummy
- bukan thin content
- bukan halaman eksperimental

Halaman P0 wajib masuk sitemap:
- /jasa/kitchen-set-purwokerto
- /jasa/booth-usaha-purwokerto
- /jasa/akrilik-custom-purwokerto
- /jasa/aluminium-purwokerto
- /jasa/kanopi-purwokerto

## 7. Canonical

Setiap halaman harus canonical ke dirinya sendiri.

Contoh:

    https://bufinterior.com/jasa/kitchen-set-purwokerto

Saat domain final aktif, pastikan semua baseUrl/canonical bukan lagi domain development.

## 8. Schema

Default aman:
- LocalBusiness
- Service
- FAQPage
- BreadcrumbList
- ImageObject jika relevan

Offer boleh dipakai hati-hati jika ada estimasi atau priceSpecification yang valid.

Jangan default memakai Product Schema untuk jasa custom karena BUF bukan katalog ecommerce produk stok.

## 9. Core Web Vitals

Fokus:
- LCP di bawah 2,5 detik untuk mobile
- INP responsif
- CLS stabil

Aturan gambar:
- Hero image jangan lazy-load.
- Gambar below the fold boleh lazy-load.
- Gunakan WebP atau AVIF.
- Kompres gambar.
- Pakai ukuran yang sesuai.
- Jangan upload foto HP mentah ukuran besar.

## 10. Mobile-First

Karena calon pelanggan lokal banyak dari HP:
- CTA WhatsApp harus mudah ditemukan.
- Menu harus bisa dibaca crawler dan user.
- Teks penting harus muncul di HTML.
- Jangan sembunyikan navigasi penting di interaksi JavaScript yang tidak crawlable.
- Sticky CTA boleh, tapi jangan mengganggu konten.

## 11. Go-Live Domain Checklist

Sebelum bufinterior.com live:

- [ ] Environment variable production sudah diset: `NEXT_PUBLIC_SITE_URL=https://bufinterior.com`
- [ ] `siteConfig.baseUrl` menghasilkan `https://bufinterior.com`
- [ ] `siteConfig.domain` menghasilkan `bufinterior.com`
- [ ] Nomor WhatsApp/telepon final sudah diverifikasi di `content/site.js`
- [ ] canonical semua halaman benar
- [ ] sitemap aktif
- [ ] robots.txt allow crawl
- [ ] halaman P0 status 200
- [ ] metadata unik tiap halaman
- [ ] Open Graph image benar
- [ ] LocalBusiness schema valid
- [ ] Service schema valid
- [ ] FAQ schema hanya jika FAQ terlihat di halaman
- [ ] Breadcrumb schema sesuai struktur
- [ ] tidak ada lorem ipsum
- [ ] tidak ada halaman dummy
- [ ] tidak ada broken link
- [ ] tombol WhatsApp valid
- [ ] Google Search Console siap
- [ ] sitemap submit ke GSC
- [ ] inspect URL untuk halaman P0
