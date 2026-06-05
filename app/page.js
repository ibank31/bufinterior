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
    image: "/assets/portfolio/backdrop-tv-ruang-keluarga-baf-banyumas.webp",
  },
  {
    title: "Wardrobe & Meja Rias Custom",
    category: "Custom Furniture",
    image: "/assets/portfolio/wardrobe-meja-rias-custom-baf-banyumas.webp",
  },
  {
    title: "Booth Toko Roti",
    category: "Interior Usaha",
    image: "/assets/portfolio/booth-toko-roti-custom-baf-banyumas.webp",
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
      <section className="wood-grain-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.55] bg-[radial-gradient(circle_at_12%_18%,rgba(138,90,60,0.18),transparent_28rem),radial-gradient(circle_at_88%_10%,rgba(8,121,173,0.11),transparent_25rem)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-9 sm:px-8 sm:py-12 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10 lg:px-4 lg:py-16">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.20em] text-wood shadow-soft backdrop-blur sm:text-[11px] sm:tracking-[0.22em]">
              Workshop interior & custom furniture
            </p>

            <h1 className="mt-6 text-[2.75rem] font-black leading-[1.1] tracking-[-0.045em] text-charcoal sm:text-7xl sm:leading-[1.03] lg:text-[5.45rem] lg:leading-[1] lg:leading-[0.92]">
              Ruang custom yang terasa rapi, hangat, dan fungsional.
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg sm:leading-8 lg:mt-7">
              BUF membantu desain dan pengerjaan interior rumah, toko, kitchen set, backdrop TV, lemari custom, dan booth usaha sesuai ukuran ruang, kebutuhan, serta budget. Konsultasi proyek dapat dimulai dari WhatsApp dan lokasi pengerjaan bisa dikonfirmasi.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-9">
              <Link href={routes.kontak} className="rounded-full bg-charcoal px-7 py-3.5 text-center text-sm font-black text-white shadow-[0_18px_45px_rgba(23,23,23,0.2)] lg:py-4">
                Konsultasi Ruang
              </Link>
              <Link href={routes.gallery} className="rounded-full border border-stone-300 bg-white/80 px-7 py-3.5 text-center text-sm font-black text-charcoal shadow-soft backdrop-blur lg:py-4">
                Lihat Gallery
              </Link>
            </div>

            <div className="mt-7 grid max-w-xl grid-cols-3 divide-x divide-stone-300/80 rounded-[1.5rem] border border-stone-300/70 bg-white/55 p-3 shadow-soft backdrop-blur lg:mt-10 lg:p-4">
              <div className="px-3">
                <p className="text-xl font-black tracking-[-0.025em] text-charcoal sm:text-2xl">7+</p>
                <p className="mt-1 text-xs font-bold leading-5 text-muted">Layanan interior</p>
              </div>
              <div className="px-3">
                <p className="text-xl font-black tracking-[-0.025em] text-charcoal sm:text-2xl">Custom</p>
                <p className="mt-1 text-xs font-bold leading-5 text-muted">Sesuai ukuran ruang</p>
              </div>
              <div className="px-3">
                <p className="text-xl font-black tracking-[-0.025em] text-charcoal sm:text-2xl">BUF</p>
                <p className="mt-1 text-xs font-bold leading-5 text-muted">Workshop sendiri</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 top-8 z-10 hidden rounded-[1.5rem] border border-white/30 bg-white/80 p-4 shadow-soft backdrop-blur md:block">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-blue">Desain + pengerjaan</p>
              <p className="mt-1 text-lg font-black tracking-[-0.02em] text-charcoal">Dari konsep sampai pasang</p>
            </div>

            <div className="rounded-[2.5rem] border border-white/70 bg-white/45 p-3 shadow-[0_35px_100px_rgba(23,23,23,0.16)] backdrop-blur">
              <div className="overflow-hidden rounded-[2rem] bg-white">
                <div className="min-h-[390px] bg-[linear-gradient(180deg,rgba(23,23,23,0.00),rgba(23,23,23,0.03)),url('/assets/hero/hero-interior-custom-baf-banyumas.webp')] bg-cover bg-center sm:min-h-[430px] lg:min-h-[470px]" />
                <div className="border-t border-stone-200 bg-[#171717] p-4 text-white lg:p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/50">Custom interior • by konfirmasi</p>
                  <p className="mt-2 text-xl font-black leading-[1.25] tracking-[-0.02em] sm:text-2xl">
                    Interior, furniture, dan ruang usaha custom.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 right-3 hidden rounded-[1.5rem] bg-brand-blue px-5 py-4 text-white shadow-blue md:block">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/65">Material</p>
              <p className="mt-1 text-lg font-black">By request pelanggan</p>
            </div>
          </div>
        </div>
      </section>

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

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <Link
                key={service.slug}
                href={service.href}
                className="wood-grain-card group relative overflow-hidden rounded-[2rem] border border-stone-200 p-5 shadow-[0_18px_55px_rgba(23,23,23,0.07)] transition hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-[0_26px_80px_rgba(23,23,23,0.13)]"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-wood via-brand-blue to-brand-red" />
                <div className="absolute -right-5 -top-4 text-[5.4rem] font-black leading-none tracking-[-0.12em] text-stone-100 transition group-hover:text-brand-blue/10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative">
                  <span className="inline-flex rounded-full bg-[#f5efe6] px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-wood">
                    {service.category}
                  </span>
                  <h3 className="mt-8 text-2xl font-black tracking-[-0.025em] text-charcoal">{service.shortTitle}</h3>
                  <p className="mt-4 text-sm font-medium leading-7 text-muted">{service.description}</p>

                  <div className="mt-7 flex items-center justify-between gap-3 border-t border-stone-200 pt-4">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-muted">Custom</span>
                    <span className="rounded-full bg-charcoal px-4 py-2 text-xs font-black text-white transition group-hover:bg-brand-blue">
                      Detail →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">Gallery</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-[1.1] tracking-[-0.02em] sm:text-5xl">
                Contoh visual yang membantu calon pelanggan membayangkan ruangnya.
              </h2>
            </div>
            <Link href={routes.gallery} className="text-sm font-black text-white">
              Lihat semua gallery →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {galleryPreview.map((item, index) => (
              <article key={item.title} className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] ${index === 0 ? "md:row-span-2" : ""}`}>
                <div className={`${index === 0 ? "min-h-[520px]" : "min-h-[250px]"} bg-cover bg-center transition duration-500 group-hover:scale-[1.03]`} style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.58)), url('${item.image}')` }}>
                  <div className="flex h-full min-h-[inherit] items-end p-5">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-white/50">{item.category}</p>
                      <h3 className="mt-2 text-xl font-black leading-[1.25] tracking-[-0.02em] sm:text-2xl">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
            <div className="min-h-[220px] bg-[linear-gradient(180deg,rgba(23,23,23,0.05),rgba(23,23,23,0.35)),url('/assets/portfolio/meja-belajar-lemari-custom-baf-banyumas.webp')] bg-cover bg-center" />
          </div>
        </div>
      </section>
    </main>
  );
}
