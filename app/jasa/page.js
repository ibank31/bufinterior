import Link from "next/link";
import { localServices } from "@/content/local-services";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Jasa Custom Interior, Furniture & Proyek Purwokerto | Berkah Utami Furniture",
  description:
    "Jasa interior custom, furniture, kitchen set, booth usaha, akrilik, aluminium, dan kanopi dari workshop Berkah Utami Furniture di Berkoh, Purwokerto.",
  path: routes.jasa,
});

const hubHighlights = [
  "Workshop/kantor di Berkoh, Purwokerto",
  "Konsultasi awal bisa lewat WhatsApp",
  "Ukuran dibuat dari kondisi lokasi",
  "Layanan untuk rumah, toko, UMKM, kantor, dan usaha",
];

const projectSteps = [
  ["01", "Pilih jenis pekerjaan", "Mulai dari kitchen set, booth usaha, akrilik custom, aluminium, atau kanopi."],
  ["02", "Kirim ukuran dan foto lokasi", "Foto lokasi, ukuran kasar, dan referensi model membuat estimasi awal lebih mudah dihitung."],
  ["03", "Diskusi material dan model", "Model, bahan, dan cara pengerjaan dibahas dari fungsi ruang dan kisaran biaya."],
  ["04", "Atur survey atau jadwal kerja", "Kalau perlu cek lokasi, jadwal survey bisa dibicarakan lewat WhatsApp."],
];

export default function JasaPage() {
  return (
    <main>
      <section className="bg-charcoal px-6 py-12 text-white sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/55 backdrop-blur sm:text-[11px]">
              Jasa Area Purwokerto
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Jasa custom interior, furniture, dan proyek rumah/usaha di Purwokerto.
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/64 sm:text-lg sm:leading-8">
              Berkah Utami Furniture mengerjakan kitchen set, booth usaha, akrilik custom, aluminium, dan kanopi dari workshop di Berkoh, Purwokerto. Halaman ini dibuat supaya Anda bisa langsung memilih jenis pekerjaan yang paling dekat dengan rencana proyek.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={routes.kontak}
                className="rounded-full bg-brand-blue px-7 py-3.5 text-center text-sm font-black text-white shadow-blue"
              >
                Chat WhatsApp BUF
              </Link>
              <Link
                href={routes.portfolio}
                className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-center text-sm font-black text-white backdrop-blur"
              >
                Lihat Portofolio
              </Link>
              <Link
                href={routes.estimasiBiaya}
                className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-center text-sm font-black text-white backdrop-blur"
              >
                Cek Estimasi Biaya
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/42">
              Supaya tidak salah pilih layanan
            </p>
            <p className="mt-4 text-2xl font-black leading-snug tracking-[-0.02em] text-white">
              Kadang orang sudah tahu mau bikin kitchen set, booth, kanopi, atau aluminium, tapi belum tahu masuk halaman mana. Dari sini bisa langsung pilih jalurnya.
            </p>

            <div className="mt-6 grid gap-3">
              {hubHighlights.map((item) => (
                <p key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold leading-6 text-white/72">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Pilih jasa
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
                Mulai dari pekerjaan yang paling dekat dengan rencanamu.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-8 text-muted lg:justify-self-end">
              Setiap halaman berisi contoh masalah, jenis pekerjaan, hal yang perlu disiapkan sebelum chat, FAQ, dan tombol WhatsApp yang sudah sesuai jasa tersebut.
            </p>
          </div>

          <div className="mt-10 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {localServices.map((service, index) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_28px_90px_rgba(23,23,23,0.12)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-blue">
                    {service.category}
                  </p>
                  <span className="rounded-full bg-charcoal px-3 py-1 text-[11px] font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-black leading-[1.12] tracking-[-0.02em] text-charcoal">
                  {service.title}
                </h2>

                <p className="mt-4 text-sm font-medium leading-7 text-muted">
                  {service.heroDescription}
                </p>

                <div className="mt-6 border-t border-stone-200 pt-4">
                  <span className="inline-flex rounded-full bg-brand-blue px-4 py-2 text-xs font-black text-white shadow-blue transition group-hover:bg-charcoal">
                    Lihat detail jasa →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
              Cara mulai
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
              Tidak harus langsung punya gambar final.
            </h2>
            <p className="mt-5 text-base font-medium leading-8 text-muted">
              Untuk chat awal, cukup kirim foto lokasi, ukuran kasar, dan contoh model kalau ada. Dari situ baru dibahas bahan, ukuran, dan estimasi awalnya.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projectSteps.map(([number, title, desc]) => (
              <div key={number} className="rounded-[1.75rem] border border-stone-200 bg-white/88 p-5 shadow-soft backdrop-blur">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-sm font-black text-white">
                  {number}
                </span>
                <h3 className="mt-5 text-xl font-black leading-snug tracking-[-0.02em] text-charcoal">
                  {title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-muted">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-14 text-white lg:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.2)] md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">
                Belum yakin pilih jasa yang mana?
              </p>
              <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
                Kirim foto atau cerita singkat dulu, nanti kami bantu pilihkan jalur jasanya.
              </h2>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/62">
                Cocok kalau Anda belum yakin rencananya masuk kitchen set, furniture custom, akrilik, aluminium, booth, atau kanopi.
              </p>
            </div>

            <Link
              href={routes.kontak}
              className="rounded-full bg-brand-blue px-7 py-3.5 text-center text-sm font-black text-white shadow-blue"
            >
              Chat Sekarang
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
