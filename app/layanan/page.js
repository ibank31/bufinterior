import Link from "next/link";
import { services } from "@/content/services";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(staticPageMetadata.layanan);

export default function LayananPage() {
  return (
    <main className="section-pad">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">Layanan</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-[-0.07em] text-charcoal sm:text-6xl">
          Layanan interior dan custom furniture BUF
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Pilih layanan sesuai kebutuhan ruang: kitchen set, custom furniture, interior rumah, interior toko, backdrop TV, lemari custom, dan booth usaha.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={service.href} className="rounded-[1.5rem] border border-stone-200 bg-paper p-5 shadow-soft transition hover:-translate-y-1">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-wood">{service.category}</p>
              <h2 className="mt-3 text-2xl font-black text-charcoal">{service.shortTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
