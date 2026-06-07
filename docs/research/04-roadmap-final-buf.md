# Roadmap Final BUF

Roadmap ini menjadi acuan lanjutan website BUF menggunakan Next.js App Router, SEO service-first, conversion WhatsApp, portofolio, artikel edukatif, dan Cloudflare.

## Keputusan Utama

- Tetap pakai `app/` root, bukan `src/app`.
- Tetap pakai JavaScript dulu, bukan TypeScript.
- Tetap file-based content dulu, bukan CMS.
- Pakai `/portfolio`, bukan `/portfolio`.
- Pakai `/artikel`, bukan `/blog`.
- Pakai `/estimasi-biaya` untuk menangkap intent harga/biaya secara transparan.
- Area page dibuat nanti hanya jika ada konten/proyek unik.
- Visual polish penting karena bisnis interior dinilai dari visual.
- Google Business Profile wajib untuk local SEO.
- Testimoni dimulai dari section kecil dulu sebelum halaman khusus.
- Keyword lokal dipakai sebagai pendukung, bukan seluruh positioning.

## Status Pekerjaan Terbaru

Sudah selesai:

- Homepage dipoles dengan positioning service-first.
- Halaman layanan dibuat lebih premium dan WhatsApp-focused.
- Copy yang terlalu lokal-heavy sudah dikurangi.
- Portofolio scalable dibuat dengan `content/portfolio.js`.
- Kontak dibuat fokus ke WhatsApp.
- Tentang Kami dibuat trust-focused.
- Struktur artikel scalable dibuat.
- Artikel masuk sitemap.
- Metadata diselaraskan dengan strategi service-first.
- Internal linking cluster diperkuat.
- `/estimasi-biaya` dibuat sebagai landing page harga/biaya.
- Artikel biaya kitchen set diperkuat.
- Artikel material kitchen set diperkuat.
- Artikel tips memilih jasa interior custom diperkuat.
- Artikel lemari custom vs lemari jadi diperkuat.
- Build terakhir valid dengan 22 route.

## Batch A — Fondasi Stabil

Status: selesai.

- Next.js App Router sudah berjalan.
- Build berhasil di Termux dengan `next build --webpack`.
- Sitemap dan robots sudah ada.
- Metadata halaman sudah dirapikan.
- Schema dasar sudah tersedia.
- 404 page sudah ada.
- Artikel SSG menggunakan `generateStaticParams`.

## Batch B — Visual Homepage + Portofolio System

Status: sebagian besar selesai.

- Homepage sudah dipoles.
- Portofolio sudah photo-first dan scalable.
- Portofolio kategori sudah disiapkan.
- Foto proyek asli masih perlu audit dan penggantian bertahap.
- `/portfolio/[serviceSlug]` belum dibuat karena data/foto belum cukup.

## Batch C — Halaman Layanan + FAQ + Internal Link

Status: selesai untuk fondasi.

- Halaman layanan hub sudah dibuat.
- Halaman detail layanan sudah dibuat.
- CTA WhatsApp ada.
- Internal link ke artikel, portofolio, estimasi, dan kontak sudah diperkuat.
- FAQ dasar sudah ada.
- Ke depan bisa ditambah FAQ spesifik per layanan jika ada pertanyaan real dari pelanggan.

## Batch D — Artikel SEO Service-first

Status: artikel awal sudah diperkuat.

Artikel yang sudah ada dan diperkuat:

- `/artikel/biaya-kitchen-set-custom`
- `/artikel/material-kitchen-set-yang-bagus`
- `/artikel/tips-memilih-jasa-interior-custom`
- `/artikel/lemari-custom-vs-lemari-jadi`

Arah artikel:

- Menjawab problem user.
- Natural keyword, bukan keyword stuffing.
- Mengarah ke layanan terkait.
- Mengarah ke `/estimasi-biaya` jika relevan.
- Mengarah ke konsultasi WhatsApp secara tidak memaksa.

Artikel tambahan nanti:

- Harga lemari custom: cara mengira-ngira budget.
- Booth usaha custom: apa saja yang mempengaruhi biaya.
- Backdrop TV custom: contoh ukuran dan estimasi.
- Interior toko kecil: cara menata display agar rapi.
- Checklist sebelum pesan custom furniture.

## Batch E — Estimasi Biaya

Status: selesai untuk versi awal.

`/estimasi-biaya` dibuat untuk menangkap user yang mencari harga/biaya tanpa memberi janji harga pasti.

Prinsip halaman estimasi:

- Tampilkan range “mulai dari” atau “kisaran awal”.
- Jelaskan faktor yang mempengaruhi harga.
- Jangan janji harga pasti.
- Dorong user mengirim foto, ukuran kasar, referensi desain, dan budget.
- CTA utama: minta estimasi awal via WhatsApp.
- Gunakan level Ekonomis, Standar, Detail Custom, Premium agar user bisa mengira-ngira posisinya sendiri.

## Batch F — Trust Proof

Status: belum dikerjakan.

Prioritas berikutnya sebelum live final:

- Tambah section testimoni sederhana.
- Tambah bukti workshop/proses jika foto tersedia.
- Tambah trust proof di homepage atau kontak.
- Jangan membuat testimoni palsu.
- Jika belum ada testimoni, gunakan trust proof berbasis proses, workshop, alur kerja, dan portofolio.

## Batch G — Launch + Monitoring

Status: menunggu domain final dan asset gambar.

Sebelum launch final:

- Beli domain final.
- Domain rencana: `bufinterior.com`.
- Ganti `baseUrl` dan `domain` di `content/site.js`.
- Audit semua path gambar.
- Deploy Cloudflare Pages.
- Cek sitemap live.
- Setup Search Console.
- Submit sitemap.
- Setup Google Business Profile.
- Tambahkan website ke GBP.
- Minta review dari klien lama.
- Monitor Search Console dan Analytics.

## Prioritas Sebelum Online

1. Audit dan siapkan gambar yang lebih proper.
2. Tambah trust proof/testimoni section.
3. Ganti domain di config setelah domain dibeli.
4. Final build.
5. Deploy Cloudflare.
6. Setup Google Business Profile.
7. Submit sitemap ke Search Console.

## Catatan Final

Website tidak lagi diarahkan sebagai website lokal-heavy yang hanya mengejar keyword Banyumas. Arah utama adalah service-first: interior custom, kitchen set, custom furniture, estimasi biaya, material, dan trust. Local SEO tetap penting, tetapi diposisikan sebagai pendukung melalui metadata, slug, GBP, dan sebagian kecil konteks layanan.
