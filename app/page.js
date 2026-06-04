import Link from "next/link";
import { routes } from "@/content/routes";
import { services, serviceHighlights } from "@/content/services";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(staticPageMetadata.home);

export default function HomePage() {
  return (
    <main>
      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">BUF — Berkah Utami Furniture</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-[-0.07em] text-charcoal sm:text-6xl lg:text-7xl">
              Interior custom untuk ruang rumah, toko, dan usaha di Banyumas.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              BUF membantu desain dan pengerjaan kitchen set, custom furniture, backdrop TV, interior rumah, toko, kost, dan booth usaha sesuai ukuran ruang, kebutuhan, dan budget.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={routes.kontak} className="rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue">
                Konsultasi Sekarang
              </Link>
              <Link href={routes.gallery} className="rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-black text-charcoal shadow-soft">
                Lihat Gallery
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-paper p-4 shadow-soft ring-1 ring-stone-200/70">
            <div className="grid min-h-[420px] place-items-center rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(138,90,60,0.18),rgba(8,121,173,0.12)),url('/assets/portfolio/kitchen-set-modern-minimalis.webp')] bg-cover bg-center p-8 text-white">
              <div className="rounded-3xl bg-charcoal/70 p-5 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-white/70">Desain + Pengerjaan</p>
                <p className="mt-2 text-2xl font-black">Custom sesuai ukuran ruang</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">Layanan</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-charcoal">Layanan interior BUF</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <Link key={service.slug} href={service.href} className="rounded-[1.5rem] border border-stone-200 bg-paper p-5 shadow-soft transition hover:-translate-y-1">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-wood">{service.category}</p>
                <h3 className="mt-3 text-xl font-black text-charcoal">{service.shortTitle}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">Kenapa BUF?</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-charcoal">Workshop sendiri, pengerjaan lebih terarah.</h2>
            <p className="mt-4 text-base leading-8 text-muted">Material bisa menyesuaikan kebutuhan pelanggan. Fokus awal layanan berada di Banyumas, sementara luar kota dapat dikonfirmasi dulu.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {serviceHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-stone-200 bg-paper p-4 text-sm font-black text-charcoal shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
