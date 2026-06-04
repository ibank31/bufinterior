# Roadmap Final BUF

Roadmap ini menjadi acuan rebuild website BUF menggunakan Next.js App Router, SEO lokal, gallery, dan Cloudflare.

## Keputusan Utama

- Tetap pakai app/ root, bukan src/app.
- Tetap pakai JavaScript dulu, bukan TypeScript.
- Tetap file-based content dulu, bukan CMS.
- Pakai /gallery, bukan /portfolio.
- Pakai /artikel, bukan /blog.
- Area page dibuat nanti setelah ada konten unik.
- Visual polish masuk awal karena bisnis interior dinilai dari visual.
- Google Business Profile wajib masuk strategi lokal.
- Testimoni dimulai dari section kecil dulu.

## Batch A - Fondasi Stabil + Deploy + GBP

- Pastikan build sukses di Termux dengan next build --webpack.
- Pastikan .next, out, dan .vercel masuk .gitignore.
- Fix asset path hero dan gallery.
- Buat app/not-found.js.
- Rapikan metadata semua halaman.
- Rapikan schema dasar.
- Deploy ke Cloudflare Pages.
- Setup Google Search Console setelah URL stabil.
- Submit sitemap.
- Setup Google Business Profile.
- GA4 dipasang setelah URL production jelas.

## Batch B - Visual Homepage + Gallery System

- Polishing homepage.
- Buat content/gallery.js.
- Buat GalleryGrid dan GalleryCard.
- Buat halaman /gallery dengan filter kategori.
- Buat /gallery/[slug] setelah data cukup.
- Optimasi gambar WebP dan next/image.
- Link gallery ke layanan terkait.

## Batch C - Enrich Halaman Layanan + FAQ

- Tambah manfaat per layanan.
- Tambah proses pengerjaan.
- Tambah material by request.
- Tambah FAQ minimal 4 sampai 5 pertanyaan per layanan.
- Tambah gallery terkait.
- Tambah CTA kontak.
- Tambah internal link ke artikel.
- Tambah Service schema, FAQPage schema, dan BreadcrumbList.

## Batch D - Artikel SEO Lokal

Artikel awal:
- Biaya Kitchen Set di Banyumas 2026
- Material Kitchen Set yang Bagus dan Tahan Lama
- Tips Memilih Jasa Interior di Banyumas
- Lemari Custom vs Lemari Jadi
- Gaya Desain Interior Populer untuk Rumah di Purwokerto
- Before-After Transformasi Dapur Sempit di Sokaraja

## Batch E - Testimoni + Harga + Area Page Terbatas

- Kumpulkan minimal 3 sampai 5 testimoni.
- Buat section testimoni di homepage.
- Buat halaman /testimoni setelah data cukup.
- Buat halaman /harga atau /estimasi-biaya.
- Harga ditulis sebagai range, bukan angka pasti.
- Area page hanya dibuat jika ada konten unik.

## Batch F - Launch + Monitoring + Marketing

- Final QA.
- Deploy final ke Cloudflare Pages.
- Update link website di Google Business Profile.
- Submit sitemap final ke Google Search Console.
- Request indexing halaman penting.
- Share website ke WhatsApp, Instagram, Facebook, dan GBP.
- Minta review Google dari klien lama.
- Monitor Search Console dan Analytics.

## Prioritas 30 Hari Pertama

1. Stabilkan Next.js branch.
2. Deploy staging Cloudflare.
3. Rapikan homepage visual.
4. Rapikan gallery dasar.
5. Perkaya halaman kitchen set, custom furniture, interior rumah, dan interior toko.
6. Setup Search Console.
7. Setup Google Business Profile.
8. Kumpulkan foto proyek dan testimoni.
9. Buat artikel biaya kitchen set Banyumas.
10. Submit sitemap dan halaman penting.
