import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { routes } from "@/content/routes";
import { serviceHighlights } from "@/content/services";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export default function ServiceDetailPage({ service }) {
  const schemas = [
    serviceSchema(service),
    breadcrumbSchema([
      ["Beranda", routes.home],
      ["Layanan", routes.layanan],
      [service.shortTitle, service.href],
    ]),
  ];

  return (
    <main>
      <JsonLd data={schemas} />

      <section className="wood-grain-bg section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">
              {service.category}
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-[-0.045em] text-charcoal sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={routes.kontak} className="rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue">
                Konsultasi Kebutuhan
              </Link>
              <Link href={routes.gallery} className="rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-black text-charcoal shadow-soft">
                Lihat Gallery
              </Link>
            </div>
          </div>

          <div className="wood-grain-card rounded-[2rem] p-6 shadow-soft ring-1 ring-stone-200/70">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">
              Keunggulan BUF
            </p>
            <div className="mt-5 grid gap-3">
              {serviceHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-stone-200 bg-white p-4 text-sm font-black text-charcoal">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/70">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">
            Proses
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.025em] text-charcoal">
            Alur pengerjaan yang jelas
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {["Konsultasi", "Ukur / survey", "Desain & estimasi", "Produksi & pasang"].map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-soft">
                <p className="text-sm font-black text-brand-red">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-lg font-black text-charcoal">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
