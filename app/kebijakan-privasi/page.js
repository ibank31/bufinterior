import Link from "next/link";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/content/routes";

export const metadata = buildMetadata(staticPageMetadata.kebijakanPrivasi);

const collectedData = [
  "Data yang Anda kirim sendiri saat chat atau konsultasi, seperti nama, nomor WhatsApp, lokasi proyek, foto ruang, ukuran kasar, dan referensi model.",
  "Informasi teknis dasar dari browser atau hosting yang dibutuhkan untuk keamanan, pemeliharaan, dan performa website.",
  "Catatan percakapan yang diperlukan untuk menindaklanjuti estimasi, survey, produksi, atau pemasangan.",
];

const useCases = [
  "Menjawab pertanyaan dan menindaklanjuti konsultasi awal.",
  "Membaca kebutuhan proyek dan menyiapkan estimasi awal.",
  "Menjadwalkan survey, pengukuran, produksi, pengiriman, atau pemasangan.",
  "Menjaga keamanan, stabilitas, dan evaluasi dasar website.",
];

const notes = [
  "BUF tidak menjual data pelanggan ke pihak lain.",
  "Data hanya dipakai seperlunya untuk proses konsultasi dan pelaksanaan pekerjaan.",
  "Kalau nanti ada alat analitik atau formulir baru yang ditambahkan, halaman ini akan diperbarui menyesuaikan praktik terbaru.",
];

export default function KebijakanPrivasiPage() {
  return (
    <main>
      <section className="wood-grain-bg px-6 py-12 sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-wood shadow-soft backdrop-blur sm:text-[11px]">
            Kebijakan Privasi
          </p>

          <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
            Penjelasan singkat tentang data yang dibagikan saat menghubungi BUF.
          </h1>

          <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-muted sm:text-lg sm:leading-8">
            Halaman ini menjelaskan jenis data yang biasanya masuk saat Anda membuka website BUF atau memulai konsultasi lewat WhatsApp. Isinya dibuat sederhana supaya mudah dibaca sebelum mulai chat.
          </p>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-10">
          <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">Data yang bisa dikumpulkan</p>
            <div className="mt-5 grid gap-3">
              {collectedData.map((item, index) => (
                <p key={item} className="rounded-[1.5rem] bg-[#fffaf2] px-4 py-4 text-sm font-bold leading-7 text-charcoal">
                  {String(index + 1).padStart(2, "0")}. {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">Data dipakai untuk apa</p>
            <div className="mt-5 grid gap-3">
              {useCases.map((item, index) => (
                <p key={item} className="rounded-[1.5rem] bg-[#fffaf2] px-4 py-4 text-sm font-bold leading-7 text-charcoal">
                  {String(index + 1).padStart(2, "0")}. {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">Catatan penting</p>
            <div className="mt-5 grid gap-3">
              {notes.map((item, index) => (
                <p key={item} className="rounded-[1.5rem] bg-[#fffaf2] px-4 py-4 text-sm font-bold leading-7 text-charcoal">
                  {String(index + 1).padStart(2, "0")}. {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.2)]">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">Butuh bantuan?</p>
          <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
            Kalau ada pertanyaan soal data atau isi halaman ini, hubungi BUF lewat WhatsApp.
          </h2>
          <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-white/62">
            Anda juga bisa kembali ke halaman kontak atau estimasi biaya kalau ingin langsung mulai diskusi proyek.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={routes.kontak} className="rounded-full bg-brand-blue px-6 py-3 text-center text-sm font-black text-white shadow-blue">
              Buka Kontak BUF
            </Link>
            <Link href={routes.estimasiBiaya} className="rounded-full border border-white/12 bg-white/[0.06] px-6 py-3 text-center text-sm font-black text-white">
              Lihat Estimasi Biaya
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
