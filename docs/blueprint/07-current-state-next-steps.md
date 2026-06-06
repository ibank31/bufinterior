# Current State & Next Steps Website BUF

Dokumen ini adalah snapshot kondisi repo terbaru setelah batch optimasi local SEO, halaman jasa, metadata, structured data, dan WhatsApp CTA global.

## Kondisi Website Saat Ini

Website BUF sekarang sudah bergerak dari profil umum menjadi website jasa custom yang lebih rapi untuk akuisisi lead, dengan struktur layanan, portofolio, cara kerja, dan landing page lokal yang siap dikembangkan.

Fondasi utama yang sudah masuk ke repo:

1. **Arsitektur jasa lokal**
   - `/jasa` sebagai hub jasa area Purwokerto.
   - 5 landing page prioritas:
     - `/jasa/kitchen-set-purwokerto`
     - `/jasa/booth-usaha-purwokerto`
     - `/jasa/akrilik-custom-purwokerto`
     - `/jasa/aluminium-purwokerto`
     - `/jasa/kanopi-purwokerto`

2. **Hubungan `/layanan` dan `/jasa`**
   - `/layanan/*` tetap menjadi halaman layanan umum.
   - `/jasa/*` menjadi landing page lokal yang lebih spesifik untuk intent area Purwokerto.
   - Internal link dibuat kontekstual, tidak spam, dan hanya mengarah ke halaman yang relevan.

3. **Homepage**
   - Hero sudah menegaskan workshop custom di Berkoh, Purwokerto.
   - Homepage menautkan langsung ke 5 halaman jasa prioritas agar tidak orphan dan tetap mudah dijangkau crawler maupun pengguna.

4. **Halaman jasa lokal**
   - Setiap `/jasa/*` sudah punya:
     - hero lokal,
     - sinyal lokasi Berkoh/Purwokerto,
     - masalah umum pelanggan,
     - cocok untuk siapa,
     - hal yang perlu disiapkan sebelum chat,
     - jenis pengerjaan,
     - alasan memilih BUF,
     - FAQ,
     - CTA WhatsApp dan link pendukung.

5. **Metadata dan canonical**
   - `siteConfig.baseUrl` sudah env-ready melalui `NEXT_PUBLIC_SITE_URL`.
   - Saat domain final aktif, production env harus diset:
     - `NEXT_PUBLIC_SITE_URL=https://bufinterior.com`
   - Meta description halaman lokal sudah dipadatkan agar lebih aman untuk SERP.

6. **Structured data**
   - Sitewide schema sudah memuat `LocalBusiness` dan `WebSite`.
   - Halaman jasa lokal memakai `Service`, `FAQPage`, dan `BreadcrumbList`.
   - LocalBusiness memakai nomor dari `content/site.js`, sehingga nomor final tinggal diganti di satu tempat.

7. **WhatsApp CTA**
   - Link WhatsApp sudah dipusatkan ke `lib/whatsapp.js`.
   - Floating WhatsApp global sudah aktif di layout.
   - Floating CTA sudah disesuaikan agar tidak mengalahkan modal portofolio.

## Struktur Navbar Final

Navbar global yang disepakati:

- Beranda
- Layanan
- Portofolio
- Estimasi Biaya
- Cara Kerja BUF
- Tentang BUF

Catatan:
- Tidak ada menu `Jasa` di navbar global.
- `/jasa/*` tetap dipakai sebagai landing page SEO dan lead generation.
- Tidak ada menu `Gallery`; istilah publik yang dipakai adalah `Portofolio`.
- Dropdown tidak memakai CTA. Dropdown hanya untuk navigasi.

## Prinsip Arah Website

Arah website tetap:

**Website lokal yang membantu calon pelanggan memahami layanan custom BUF, memilih jalur jasa yang tepat, lalu menghubungi WhatsApp dengan konteks kebutuhan yang lebih jelas.**

Yang harus dijaga:

- Jangan spam internal link.
- Jangan membuat copy yang terlalu SEO-facing seperti “fokus keyword”, “crawler”, atau “halaman uang” di UI publik.
- Prioritaskan copy yang terasa membantu calon pelanggan.
- Landing page lokal harus tetap spesifik, bukan sekadar duplikasi halaman layanan.
- Build hanya dilakukan kalau perubahan menyentuh logic/struktur penting atau sebelum commit batch besar.

## Checklist Sebelum Domain Final Live

Sebelum `bufinterior.com` dipakai sebagai domain utama:

- [ ] Domain `bufinterior.com` aktif dan mengarah ke hosting production.
- [ ] Environment variable production diset:
  - `NEXT_PUBLIC_SITE_URL=https://bufinterior.com`
- [ ] Nomor WhatsApp/telepon final sudah diverifikasi di `content/site.js`.
- [ ] Build production dicek dengan domain final:
  - `NEXT_PUBLIC_SITE_URL=https://bufinterior.com npm run build`
- [ ] Pastikan output build tidak bocor domain fallback `pages.dev`.
- [ ] Cek `/sitemap.xml` memakai `https://bufinterior.com`.
- [ ] Cek `/robots.txt` mengarah ke sitemap domain final.
- [ ] Submit sitemap ke Google Search Console.
- [ ] Verifikasi indexing halaman prioritas.

## Langkah Selanjutnya

Prioritas berikutnya bukan menambah halaman dulu, tetapi memastikan website yang sudah ada lebih siap dipakai dan diindeks.

### P1 — Audit UI mobile dan conversion

Cek manual di HP untuk:

- floating WhatsApp tidak menutup CTA penting,
- halaman `/jasa/*` tidak terasa terlalu panjang di atas fold,
- tombol WhatsApp mudah terlihat,
- card jasa tidak terlalu padat,
- portofolio tetap nyaman dibuka dengan modal.

Output yang dicari: daftar masalah UI kecil, bukan redesign besar.

### P2 — Finalisasi data bisnis

Sebelum publikasi domain final:

- pastikan nomor WhatsApp final,
- pastikan nama bisnis konsisten,
- pastikan area layanan tidak terlalu overclaim,
- pastikan alamat/sinyal lokasi sesuai kondisi nyata,
- update `content/site.js` jika ada data final.

### P3 — Indexing dan Search Console

Setelah domain final:

- submit sitemap,
- inspect URL:
  - `/`
  - `/jasa`
  - `/jasa/kitchen-set-purwokerto`
  - `/jasa/booth-usaha-purwokerto`
  - `/jasa/akrilik-custom-purwokerto`
  - `/jasa/aluminium-purwokerto`
  - `/jasa/kanopi-purwokerto`
- minta indexing manual untuk halaman prioritas.

### P4 — Artikel pendukung untuk P0

Setelah halaman jasa stabil, tambah artikel pendukung yang benar-benar menjawab intent calon pelanggan:

- Biaya kitchen set custom di Purwokerto
- Tips pesan booth usaha custom untuk UMKM
- Akrilik custom untuk display toko: fungsi dan contoh kebutuhan
- Kusen aluminium vs material lain untuk rumah/toko
- Cara memilih material kanopi untuk carport dan toko

Setiap artikel cukup menautkan ke layanan yang relevan secara kontekstual.

### P5 — Bukti visual dan trust

Perkuat halaman dengan bukti nyata:

- foto proyek yang paling representatif,
- kategori portofolio yang lebih rapi,
- alt text yang spesifik,
- copy singkat “contoh pengerjaan” jika sudah ada dokumentasi proyek.

## Commit Penting Terakhir

Batch terakhir yang sudah masuk:

- `Document current website state and next steps`
- `Adjust floating WhatsApp CTA layering`
- `Centralize WhatsApp links across pages`
- `Add global floating WhatsApp CTA`
- `Optimize meta descriptions for local service pages`
- `Refine structured data for local services`
- `Prepare canonical URLs for production domain`
- `Improve local service page conversion flow`
- `Strengthen local jasa hub page`
- `Enrich local service pages with conversion-focused sections`
- `Improve contextual internal links for local SEO`
