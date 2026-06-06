import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";
import { portfolioItems } from "@/content/portfolio";
import PortofolioGridClient from "@/components/portfolio/PortofolioGridClient";

export const metadata = buildMetadata(staticPageMetadata.portfolio);

export default function PortofolioPage() {
  return (
    <main>
      <section className="bg-charcoal px-6 py-12 text-white sm:px-8 lg:px-4 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/55 backdrop-blur sm:text-[11px]">
              Portofolio BUF
            </p>
            <h1 className="mt-5 max-w-4xl text-[2.55rem] font-black leading-[1.06] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Pilih referensi visual yang paling mendekati kebutuhan ruangmu.
            </h1>
          </div>

          <p className="max-w-2xl text-base font-medium leading-7 text-white/64 sm:text-lg sm:leading-8">
            Lihat contoh foto dan video proyek BUF, mulai dari kitchen set, backdrop TV, custom furniture, booth usaha, interior rumah, sampai kebutuhan ruang lainnya.
          </p>
        </div>
      </section>

      <PortofolioGridClient items={portfolioItems} />
    </main>
  );
}
