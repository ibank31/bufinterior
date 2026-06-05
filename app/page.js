import Link from "next/link";
import { routes } from "@/content/routes";
import { articles } from "@/content/articles";
import { services, serviceHighlights } from "@/content/services";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(staticPageMetadata.home);

const galleryPreview = [
  {
    title: "Backdrop TV Ruang Keluarga",
    category: "Backdrop TV",
    image: "/assets/portfolio/backdrop-tv-proses-pasang-buf-01.webp",
  },
  {
    title: "Wardrobe & Meja Rias Custom",
    category: "Custom Furniture",
    image: "/assets/portfolio/wardrobe-meja-rias-custom-buf-01.webp",
  },
  {
    title: "Booth Toko Roti",
    category: "Interior Usaha",
    image: "/assets/portfolio/booth-pang-waffle-buf-01.webp",
  },
  {
    title: "Kitchen Set Proyek Real",
    category: "Kitchen Set",
    image: "/assets/portfolio/kitchen-set-proyek-real-buf-01.webp",
  },
  {
    title: "Interior Toko Display",
    category: "Interior Toko",
    image: "/assets/portfolio/interior-toko-display-silver-buf-01.webp",
  },
  {
    title: "Backdrop Panel Custom",
    category: "Backdrop TV",
    image: "/assets/portfolio/backdrop-panel-proses-buf-01.webp",
  },
];

const processSteps = [
  ["01", "Konsultasi ruang", "Ceritakan kebutuhan, ukuran ruang, fungsi, dan gambaran budget."],
  ["02", "Survey & ukur", "Kebutuhan survey dapat dikonfirmasi terlebih dahulu."],
  ["03", "Desain & estimasi", "Konsep, material, finishing, dan estimasi disesuaikan dengan kebutuhan."],
  ["04", "Produksi & pasang", "Pengerjaan dilakukan dari workshop sampai pemasangan di lokasi."],
];

export default function HomePage() {
  const featuredArticles = articles.slice(0, 3);
  return (
    <main>
      {/* ═══ HERO — Full-width visual premium ═══ */}
      <section className="relative min-h-[92vh] overflow-hidden lg:min-h-[94vh]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/portfolio/kitchen-set-showroom-buf-01.webp')" }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/60 to-transparent" />
        {/* Subtle warm accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(138,90,60,0.15),transparent_50%)]" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-12 sm:px-8 lg:min-h-[94vh] lg:px-4 lg:pb-20">
          {/* Floating badge top */}
          <div className="absolute left-6 top-8 sm:left-8 lg:left-4 lg:top-12">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.20em] text-white/80 backdrop-blur-md sm:text-[11px]">
              Workshop interior & custom furniture
            </p>
          </div>

          {/* Floating stats card — desktop only */}
          <div className="absolute right-4 top-12 hidden rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur-lg lg:block">
            <div className="grid gap-4">
              <div>
                <p className="text-3xl font-black tracking-tight text-white">7+</p>
                <p className="mt-1 text-xs font-semibold text-white/55">Layanan interior</p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-3xl font-black tracking-tight text-white">Custom</p>
                <p className="mt-1 text-xs font-semibold text-white/55">Sesuai ukuran ruang</p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-3xl font-black tracking-tight text-white">BUF</p>
                <p className="mt-1 text-xs font-semibold text-white/55">Workshop sendiri</p>
              </div>
            </div>
          </div>

          {/* Main hero content */}
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-[2.5rem] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.75rem] lg:leading-[0.95]">
              Ruang custom yang terasa rapi, hangat, dan fungsional.
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/70 sm:text-lg sm:leading-8 lg:mt-7">
              BUF membantu desain dan pengerjaan interior rumah, toko, kitchen set, backdrop TV, lemari custom, dan booth usaha sesuai ukuran ruang, kebutuhan, serta budget.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-9">
              <Link href={routes.kontak} className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-black text-charcoal shadow-[0_18px_45px_rgba(0,0,0,0.3)] transition hover:bg-brand-blue hover:text-white lg:py-4">
                Konsultasi Ruang
              </Link>
              <Link href={routes.gallery} className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-center text-sm font-black text-white backdrop-blur transition hover:bg-white/20 lg:py-4">
                Lihat Gallery
              </Link>
            </div>
          </div>

          {/* Mobile stats row */}
          <div className="mt-8 grid grid-cols-3 divide-x divide-white/15 rounded-[1.25rem] border border-white/15 bg-white/10 p-3 backdrop-blur-md lg:hidden">
            <div className="px-3 text-center">
              <p className="text-lg font-black text-white sm:text-xl">7+</p>
              <p className="mt-0.5 text-[10px] font-semibold text-white/50">Layanan</p>
            </div>
            <div className="px-3 text-center">
              <p className="text-lg font-black text-white sm:text-xl">Custom</p>
              <p className="mt-0.5 text-[10px] font-semibold text-white/50">Ukuran ruang</p>
            </div>
            <div className="px-3 text-center">
              <p className="text-lg font-black text-white sm:text-xl">BUF</p>
              <p className="mt-0.5 text-[10px] font-semibold text-white/50">Workshop</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LAYANAN — Cards with images, all 7 services ═══ */}
      <section className="wood-grain-bg relative overflow-hidden px-4 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_6%_20%,rgba(138,90,60,0.10),transparent_22rem),radial-gradient(circle_at_88%_15%,rgba(8,121,173,0.08),transparent_20rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-wood/55" />
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">Layanan utama</p>
              </div>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.02em] text-charcoal sm:text-5xl">
                Dibuat sesuai ruang, fungsi, dan karakter pemiliknya.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-8 text-muted lg:justify-self-end">
              Fokus BUF adalah interior dan furniture custom untuk kebutuhan nyata: dapur yang rapi, ruang TV yang lebih hangat, toko yang tertata, dan furniture yang pas dengan ukuran ruang.
            </p>
          </div>

          {/* Top row: 4 cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(23,23,23,0.13)]"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.06]"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-wood backdrop-blur">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-black tracking-[-0.025em] text-charcoal">{service.shortTitle}</h3>
                  <p className="mt-2 line-clamp-2 text-sm font-medium leading-6 text-muted">{service.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Custom</span>
                    <span className="rounded-full bg-charcoal px-3.5 py-1.5 text-[11px] font-bold text-white transition group-hover:bg-brand-blue">
                      Detail →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom row: 3 cards */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(4).map((service, index) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(23,23,23,0.13)]"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.06]"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-wood backdrop-blur">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-black tracking-[-0.025em] text-charcoal">{service.shortTitle}</h3>
                  <p className="mt-2 line-clamp-2 text-sm font-medium leading-6 text-muted">{service.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Custom</span>
                    <span className="rounded-full bg-charcoal px-3.5 py-1.5 text-[11px] font-bold text-white transition group-hover:bg-brand-blue">
                      Detail →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GALLERY — Bento layout with 6 items ═══ */}
      <section className="bg-charcoal px-4 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">Gallery</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-[1.1] tracking-[-0.02em] sm:text-5xl">
                Proyek real BUF — dari konsep sampai terpasang.
              </h2>
            </div>
            <Link href={routes.gallery} className="text-sm font-black text-white transition hover:text-brand-blue">
              Lihat semua gallery →
            </Link>
          </div>

          {/* Bento grid */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {galleryPreview.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 ${
                  index === 0 ? "sm:row-span-2" : ""
                }`}
              >
                <div
                  className={`${
                    index === 0 ? "min-h-[320px] sm:min-h-full sm:h-full" : "min-h-[220px] sm:min-h-[240px]"
                  } relative bg-cover bg-center transition duration-500 group-hover:scale-[1.04]`}
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.6)), url('${item.image}')`,
                  }}
                >
                  <div className="absolute inset-0 flex items-end p-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">{item.category}</p>
                      <h3 className="mt-1.5 text-lg font-black leading-snug tracking-[-0.02em] sm:text-xl">{item.title}</h3>
                    </div>
                  </div>
                  {/* Proyek real badge */}
                  <div className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white/70 backdrop-blur-sm">
                    Proyek real
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ESTIMASI BIAYA ═══ */}
      <section className="bg-[#fffaf2] px-4 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
              Estimasi budget awal
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
              Sudah punya ukuran kasar? Coba kira-kira budget sebelum konsultasi.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted">
              Kitchen set 3 meter, lemari 2 meter, atau backdrop TV 2,5 meter bisa mulai dihitung dari kisaran awal. Angka bukan harga final, tapi membantu Anda punya gambaran sebelum menghubungi BUF.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={routes.estimasiBiaya}
                className="rounded-full bg-charcoal px-6 py-3 text-center text-sm font-black text-white shadow-soft"
              >
                Cek Estimasi Biaya
              </Link>
              <Link
                href={routes.kontak}
                className="rounded-full border border-stone-300 bg-white px-6 py-3 text-center text-sm font-black text-charcoal shadow-soft"
              >
                Minta Estimasi via WhatsApp
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Kitchen Set 3 m", "± Rp5,4–13,5 jt+"],
              ["Lemari 2 m", "± Rp3–8 jt+"],
              ["Backdrop 2,5 m", "± Rp3–8,75 jt+"],
            ].map(([label, value]) => (
              <Link
                key={label}
                href={routes.estimasiBiaya}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(23,23,23,0.12)]"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-wood">
                  Contoh hitung
                </p>
                <h3 className="mt-4 text-xl font-black leading-snug tracking-[-0.02em] text-charcoal">
                  {label}
                </h3>
                <p className="mt-3 text-2xl font-black tracking-[-0.03em] text-charcoal">
                  {value}
                </p>
                <p className="mt-4 text-xs font-bold leading-6 text-muted">
                  Kisaran awal, bukan harga final.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KENAPA BUF ═══ */}
      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-charcoal p-7 text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] lg:p-9">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(8,121,173,0.55),transparent_18rem),radial-gradient(circle_at_88%_78%,rgba(138,90,60,0.55),transparent_18rem)]" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">Kenapa BUF?</p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.02em] sm:text-5xl">
                Workshop sendiri, pengerjaan lebih terarah.
              </h2>
              <p className="mt-6 text-base font-medium leading-8 text-white/68">
                BUF bukan sekadar menjual furniture jadi. Setiap pekerjaan disesuaikan dengan ukuran ruang, kebutuhan fungsi, material pilihan, dan budget pelanggan.
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/38">Prinsip kerja</p>
                <p className="mt-3 text-2xl font-black tracking-[-0.025em]">
                  Ukur dulu, sesuaikan desain, lalu produksi lebih terarah.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {serviceHighlights.map((item, index) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white/82 p-5 text-charcoal shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-blue/25"
              >
                <span className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-gradient-to-b from-wood via-brand-blue to-brand-red" />
                <div className="pl-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-[11px] font-black tracking-[0.08em] text-white shadow-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 text-xl font-black leading-snug tracking-[-0.02em]">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ALUR KERJA ═══ */}
      <section className="relative overflow-hidden bg-[#fffaf2] px-4 py-16 lg:py-24">
        <div className="absolute left-0 top-0 h-full w-px bg-stone-200" />
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-wood/55" />
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">Alur kerja</p>
          </div>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.1] tracking-[-0.02em] text-charcoal sm:text-5xl">
            Proses dibuat jelas agar hasilnya sesuai ukuran, fungsi, dan budget.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {processSteps.map(([number, title, desc], index) => (
              <div key={number} className="relative rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-soft">
                {index < processSteps.length - 1 ? (
                  <span className="absolute left-1/2 top-8 hidden h-px w-full bg-stone-200 md:block" />
                ) : null}
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-sm font-black text-white shadow-soft">
                    {number}
                  </span>
                  <h3 className="mt-6 text-xl font-black tracking-[-0.02em] text-charcoal">{title}</h3>
                  <p className="mt-3 text-sm font-medium leading-7 text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:grid md:grid-cols-[1fr_0.58fr]">
            <div className="p-7 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">Siap diskusi?</p>
              <h3 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.025em] md:text-4xl">
                Mulai dari ukuran ruang dan kebutuhanmu dulu.
              </h3>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/62">
                Kirim foto ruang, ukuran kasar, dan referensi desain. BUF bantu arahkan opsi desain dan pengerjaan yang paling masuk akal.
              </p>
              <Link href={routes.kontak} className="mt-7 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue">
                Konsultasi dengan BUF
              </Link>
            </div>
            <div className="min-h-[220px] bg-[linear-gradient(180deg,rgba(23,23,23,0.05),rgba(23,23,23,0.35)),url('/assets/portfolio/meja-kerja-custom-panel-buf-01.webp')] bg-cover bg-center" />
          </div>
        </div>
      </section>
    </main>
  );
}
