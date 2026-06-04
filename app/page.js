import Link from "next/link";
import { routes } from "@/content/routes";
import { services, serviceHighlights } from "@/content/services";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(staticPageMetadata.home);

const processSteps = [
  ["01", "Konsultasi", "Ceritakan kebutuhan ruang, ukuran, fungsi, dan gambaran budget."],
  ["02", "Survey / ukur", "Area Banyumas bisa dikonfirmasi untuk survey atau pengukuran ruang."],
  ["03", "Desain & estimasi", "Konsep, material, dan estimasi disesuaikan dengan kebutuhan."],
  ["04", "Produksi & pasang", "Pengerjaan dilakukan bertahap dari workshop sampai pemasangan."],
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-14 sm:py-18 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(8,121,173,0.13),transparent_28rem),radial-gradient(circle_at_88%_18%,rgba(138,90,60,0.16),transparent_26rem)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
              BUF — Berkah Utami Furniture
            </p>
            <h1 className="mt-5 max-w-4xl text-[3.25rem] font-black leading-[0.98] tracking-[-0.085em] text-charcoal sm:text-6xl lg:text-7xl">
              Interior custom untuk rumah, toko, dan usaha di Banyumas.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-9 text-muted">
              BUF membantu desain dan pengerjaan kitchen set, custom furniture, backdrop TV, interior rumah, toko, kost, dan booth usaha sesuai ukuran ruang, kebutuhan, dan budget.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={routes.kontak} className="rounded-full bg-brand-blue px-6 py-3.5 text-sm font-black text-white shadow-blue">
                Konsultasi Sekarang
              </Link>
              <Link href={routes.gallery} className="rounded-full border border-stone-200 bg-white px-6 py-3.5 text-sm font-black text-charcoal shadow-soft">
                Lihat Gallery
              </Link>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
              {["Kitchen set", "Backdrop TV", "Lemari custom", "Interior toko", "Booth usaha", "Desain + pengerjaan"].map((item) => (
                <div key={item} className="rounded-2xl border border-stone-200/80 bg-white/75 px-4 py-3 text-sm font-black text-charcoal shadow-soft backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-10 z-10 hidden rounded-3xl bg-charcoal px-5 py-4 text-white shadow-soft sm:block">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/55">Workshop</p>
              <p className="mt-1 text-lg font-black">Custom sesuai ukuran</p>
            </div>

            <div className="rounded-[2.25rem] border border-stone-200 bg-paper p-4 shadow-[0_35px_90px_rgba(23,23,23,0.14)]">
              <div className="relative min-h-[430px] overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(23,23,23,0.15),rgba(8,121,173,0.06)),url('/assets/portfolio/backdrop-tv-ruang-keluarga-baf-banyumas.webp')] bg-cover bg-center">
                <div className="absolute inset-x-5 bottom-5 rounded-3xl bg-white/88 p-5 shadow-soft backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-wood">Desain + pengerjaan</p>
                  <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-charcoal">
                    Satu jalur dari konsep sampai pemasangan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/45 px-4 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">Layanan</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-charcoal sm:text-5xl">
                Layanan interior BUF
              </h2>
            </div>
            <Link href={routes.layanan} className="text-sm font-black text-brand-blue">
              Lihat semua layanan →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <Link key={service.slug} href={service.href} className="group rounded-[1.75rem] border border-stone-200 bg-paper p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(23,23,23,0.12)]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-wood">{service.category}</p>
                  <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-black text-brand-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-black tracking-[-0.04em] text-charcoal">{service.shortTitle}</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-muted">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">Kenapa BUF?</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.06em] text-charcoal sm:text-5xl">
              Workshop sendiri, pengerjaan lebih terarah.
            </h2>
            <p className="mt-5 text-base font-medium leading-8 text-muted">
              Material bisa menyesuaikan kebutuhan pelanggan. Fokus awal layanan berada di Banyumas, sementara luar kota dapat dikonfirmasi dulu.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {serviceHighlights.map((item) => (
              <div key={item} className="rounded-3xl border border-stone-200 bg-paper p-5 text-sm font-black text-charcoal shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-14 text-white sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">Alur kerja</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.06em] sm:text-5xl">
            Dibuat bertahap agar desain, ukuran, dan budget lebih jelas.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {processSteps.map(([number, title, desc]) => (
              <div key={number} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-black text-brand-blue">{number}</p>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-white/62">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
