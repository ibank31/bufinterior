import Link from "next/link";
import { localServices } from "@/content/local-services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Jasa Area Purwokerto | Berkah Utami Furniture",
  description:
    "Landing page jasa lokal Berkah Utami Furniture untuk Purwokerto dan Banyumas: kitchen set, booth usaha, akrilik custom, aluminium, dan kanopi.",
  path: "/jasa",
});

export default function JasaPage() {
  return (
    <main>
      <section className="bg-charcoal px-6 py-12 text-white sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/55 backdrop-blur sm:text-[11px]">
            Jasa Area Purwokerto
          </p>
          <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Jasa custom interior, furniture, dan fabrication untuk Purwokerto.
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/64 sm:text-lg sm:leading-8">
            Berkah Utami Furniture melayani kebutuhan kitchen set, booth usaha, akrilik custom, aluminium, dan kanopi dari workshop di Berkoh, Purwokerto.
          </p>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {localServices.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft transition hover:-translate-y-1"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-blue">
                {service.category}
              </p>
              <h2 className="mt-3 text-2xl font-black leading-[1.12] tracking-[-0.02em] text-charcoal">
                {service.title}
              </h2>
              <p className="mt-3 text-sm font-medium leading-7 text-muted">
                {service.heroDescription}
              </p>
              <span className="mt-5 inline-flex text-xs font-black uppercase tracking-[0.16em] text-wood">
                Lihat halaman →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
