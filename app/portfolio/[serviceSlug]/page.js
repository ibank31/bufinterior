import Link from "next/link";
import { notFound } from "next/navigation";
import PortofolioGridClient from "@/components/portfolio/PortofolioGridClient";
import { portfolioItems, getPortofolioItemsByCategory } from "@/content/portfolio";
import { services } from "@/content/services";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { serviceSlug } = await params;
  const service = services.find((item) => item.slug === serviceSlug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: `Portofolio ${service.title} | Berkah Utami Furniture`,
    description: `Lihat contoh portofolio ${service.title.toLowerCase()} BUF sebagai referensi model, bahan, dan hasil pengerjaan custom.`,
    path: `${routes.portfolio}/${service.slug}`,
  });
}

export default async function PortfolioServicePage({ params }) {
  const { serviceSlug } = await params;
  const service = services.find((item) => item.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  const items = getPortofolioItemsByCategory(service.slug);

  if (!items.length) {
    notFound();
  }

  return (
    <main>
      <section className="bg-charcoal px-6 py-12 text-white sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <Link
              href={routes.portfolio}
              className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 backdrop-blur sm:text-[11px]"
            >
              ← Semua Portofolio
            </Link>
            <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Portofolio {service.title}
            </h1>
          </div>

          <p className="max-w-2xl text-base font-medium leading-8 text-white/64 sm:text-lg">
            Lihat contoh pengerjaan {service.title.toLowerCase()} BUF sebagai referensi awal sebelum membahas ukuran, bahan, dan estimasi.
          </p>
        </div>
      </section>

      <PortofolioGridClient items={items} />

      <section className="bg-[#fffaf2] px-4 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-charcoal p-7 text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">
                Butuh pengerjaan serupa?
              </p>
              <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
                Pelajari layanan {service.title.toLowerCase()} atau mulai chat lewat WhatsApp.
              </h2>
            </div>
            <Link
              href={service.href}
              className="rounded-full bg-brand-blue px-7 py-3.5 text-center text-sm font-black text-white shadow-blue"
            >
              Lihat Layanan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
