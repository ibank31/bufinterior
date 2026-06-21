import Link from "next/link";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/content/routes";

export const metadata = buildMetadata(staticPageMetadata.syaratKetentuan);

const terms = [
  {
    title: "Informasi awal dan estimasi",
    body: "Isi website dan chat awal dipakai sebagai gambaran umum. Estimasi awal belum berarti harga final, karena ukuran, bahan, finishing, aksesoris, dan kondisi lapangan bisa mengubah hitungan.",
  },
  {
    title: "Survey dan pengukuran",
    body: "Tidak semua pekerjaan harus langsung survey. Kalau proyek butuh ukuran presisi, jadwal survey dibicarakan dulu. Area Banyumas dan luar area mengikuti kondisi pekerjaan serta jaraknya.",
  },
  {
    title: "Perubahan spesifikasi",
    body: "Perubahan bahan, desain, ukuran, atau detail setelah pembahasan awal dapat mempengaruhi biaya, urutan kerja, dan waktu pengerjaan.",
  },
  {
    title: "Pengerjaan custom",
    body: "Barang dibuat mengikuti detail yang disepakati untuk proyek tersebut. Untuk pekerjaan custom, hasil akhir mengikuti ukuran ruang, kebutuhan fungsi, dan pembahasan teknis yang berjalan.",
  },
  {
    title: "Foto dan referensi",
    body: "Foto di website dipakai sebagai contoh hasil dan referensi jenis pekerjaan. Beberapa gambar menunjukkan pendekatan visual atau kategori layanan, bukan janji bahwa semua proyek akan identik dengan foto tersebut.",
  },
  {
    title: "Konten website",
    body: "BUF berusaha menjaga informasi di website tetap rapi dan relevan, tetapi isi halaman bisa diperbarui kapan saja mengikuti perubahan layanan, cakupan kerja, dan materi promosi.",
  },
];

export default function SyaratKetentuanPage() {
  return (
    <main>
      <section className="wood-grain-bg px-6 py-12 sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-wood shadow-soft backdrop-blur sm:text-[11px]">
            Syarat & Ketentuan
          </p>

          <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
            Ringkasan aturan dasar sebelum memakai website dan memulai konsultasi dengan BUF.
          </h1>

          <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-muted sm:text-lg sm:leading-8">
            Halaman ini dibuat untuk menjelaskan cara membaca informasi di website BUF, terutama terkait estimasi, konsultasi awal, perubahan pekerjaan, dan pelaksanaan proyek custom.
          </p>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl grid gap-4">
          {terms.map((item, index) => (
            <article key={item.title} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Poin {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-2xl font-black leading-[1.12] tracking-[-0.02em] text-charcoal">
                {item.title}
              </h2>
              <p className="mt-4 text-sm font-medium leading-7 text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-charcoal px-4 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.2)]">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">Siap lanjut?</p>
          <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
            Setelah membaca halaman ini, Anda bisa lanjut ke kontak atau estimasi biaya untuk membuka obrolan awal.
          </h2>
          <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-white/62">
            Untuk detail transaksi, jadwal kerja, revisi, dan pemasangan, pembahasannya tetap mengikuti proyek masing-masing dan disepakati saat proses berjalan.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={routes.kontak} className="rounded-full bg-brand-blue px-6 py-3 text-center text-sm font-black text-white shadow-blue">
              Buka Kontak BUF
            </Link>
            <Link href={routes.home} className="rounded-full border border-white/12 bg-white/[0.06] px-6 py-3 text-center text-sm font-black text-white">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
