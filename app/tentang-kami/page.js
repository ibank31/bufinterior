import Link from "next/link";
import { siteConfig } from "@/content/site";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/content/routes";

export const metadata = buildMetadata(staticPageMetadata.tentangKami);

const whatsappHref =
  "https://wa.me/6285772208688?text=Halo%20BUF%2C%20saya%20ingin%20konsultasi%20kebutuhan%20interior%20atau%20custom%20furniture.";

const trustPoints = [
  ["Workshop sendiri", "Pengerjaan lebih terarah karena produksi dikerjakan dari workshop BUF."],
  ["Custom ukuran ruang", "Furniture dan interior bisa menyesuaikan ukuran, fungsi, dan kondisi ruang."],
  ["Material by request", "Material dapat disesuaikan dengan kebutuhan, tampilan, fungsi, dan budget."],
  ["Desain + pengerjaan", "Pelanggan bisa mulai dari konsultasi konsep sampai pengerjaan."],
  ["Survey by konfirmasi", "Kebutuhan survey atau pengukuran dapat dikonfirmasi sesuai lokasi proyek."],
  ["Luar kota by konfirmasi", "BUF berbasis di Banyumas dan terbuka untuk proyek luar kota sesuai konfirmasi."],
];

const approach = [
  ["01", "Pahami ruang", "Mulai dari ukuran, foto lokasi, fungsi ruang, dan masalah yang ingin diselesaikan."],
  ["02", "Arahkan desain", "Konsep dibuat agar selaras dengan kebutuhan, tampilan, dan budget pelanggan."],
  ["03", "Pilih material", "Material dan finishing disesuaikan dengan fungsi ruang dan preferensi pemakaian."],
  ["04", "Produksi terarah", "Pengerjaan dilakukan bertahap dari workshop sampai pemasangan."],
];

const customerNeeds = [
  "Dapur ingin lebih rapi dengan kitchen set custom",
  "Ruang TV ingin punya backdrop dan penyimpanan menyatu",
  "Kamar butuh lemari custom sesuai ukuran",
  "Toko butuh display produk yang lebih tertata",
  "UMKM butuh booth usaha yang sesuai brand",
  "Ruang kecil ingin dimaksimalkan tanpa memaksa furniture jadi",
];

export default function TentangKamiPage() {
  return (
    <main>
      <section className="wood-grain-bg px-6 py-12 sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-wood shadow-soft backdrop-blur sm:text-[11px]">
              Tentang BUF
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
              Workshop interior dan custom furniture untuk ruang yang lebih rapi.
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg sm:leading-8">
              {siteConfig.positioning} BUF membantu pelanggan yang membutuhkan interior dan furniture custom sesuai ukuran ruang, fungsi, material pilihan, dan budget.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-charcoal px-7 py-3.5 text-center text-sm font-black text-white shadow-[0_18px_45px_rgba(23,23,23,0.2)]"
              >
                Konsultasi dengan BUF
              </a>
              <Link
                href={routes.gallery}
                className="rounded-full border border-stone-300 bg-white/80 px-7 py-3.5 text-center text-sm font-black text-charcoal shadow-soft backdrop-blur"
              >
                Lihat Gallery
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/70 bg-white/45 p-3 shadow-[0_35px_100px_rgba(23,23,23,0.14)] backdrop-blur">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <div className="min-h-[390px] bg-[linear-gradient(180deg,rgba(23,23,23,0.00),rgba(23,23,23,0.04)),url('/assets/portfolio/interior-bawah-tangga-custom-baf-banyumas.webp')] bg-cover bg-center sm:min-h-[460px]" />
              <div className="border-t border-stone-200 bg-charcoal p-5 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                  Prinsip BUF
                </p>
                <p className="mt-2 text-2xl font-black leading-[1.2] tracking-[-0.02em]">
                  Bukan memaksa ruang mengikuti furniture jadi, tapi membuat furniture mengikuti ruang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-16 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">
              Kenapa bisa dipercaya?
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] sm:text-5xl">
              BUF dibangun untuk kebutuhan ruang yang tidak selalu bisa diselesaikan dengan furniture jadi.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/64">
              Banyak pelanggan datang bukan karena ingin sekadar membeli furniture, tapi karena ruangnya butuh solusi: lebih rapi, lebih fungsional, lebih sesuai ukuran, dan tetap masuk budget.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {trustPoints.map(([title, desc], index) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-black leading-snug tracking-[-0.02em]">
                  {title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-white/62">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-wood/55" />
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Pendekatan kerja
              </p>
            </div>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
              Setiap proyek dimulai dari memahami ruang dan kebutuhan pemakai.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted">
              BUF tidak langsung mendorong satu desain untuk semua orang. Kebutuhan ruang, kebiasaan pemakai, ukuran, dan budget menjadi dasar sebelum menentukan bentuk dan material.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {approach.map(([number, title, desc]) => (
              <div key={number} className="rounded-[1.75rem] border border-stone-200 bg-white/82 p-5 shadow-soft backdrop-blur">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-sm font-black text-white shadow-soft">
                  {number}
                </span>
                <h3 className="mt-6 text-xl font-black leading-[1.15] tracking-[-0.02em] text-charcoal">
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

      <section className="bg-[#fffaf2] px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Kebutuhan pelanggan
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
                Biasanya pelanggan menghubungi BUF karena ruangnya butuh solusi custom.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-7 text-muted lg:justify-self-end">
              Mulai dari rumah, toko, kost, sampai booth usaha. Konsultasi bisa dimulai dari cerita kebutuhan, foto ruang, dan ukuran kasar.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {customerNeeds.map((item, index) => (
              <div key={item} className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-soft">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-xl font-black leading-snug tracking-[-0.02em] text-charcoal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:grid md:grid-cols-[1fr_0.5fr]">
          <div className="p-7 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
              Mulai dari konsultasi
            </p>
            <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
              Ceritakan kebutuhan ruangmu. BUF bantu arahkan desain, material, dan opsi pengerjaan.
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/62">
              Tidak harus langsung punya desain final. Kirim foto ruang, ukuran kasar, referensi, atau kebutuhan fungsi yang ingin diselesaikan.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
          <div className="min-h-[220px] bg-[linear-gradient(180deg,rgba(23,23,23,0.05),rgba(23,23,23,0.35)),url('/assets/portfolio/backdrop-tv-putih-kayu-marmer-baf-banyumas.webp')] bg-cover bg-center" />
        </div>
      </section>
    </main>
  );
}
