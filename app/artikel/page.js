import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(staticPageMetadata.artikel);

export default function ArtikelPage() {
  return (
    <main className="wood-grain-bg section-pad">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-stone-200 bg-white/72 p-7 shadow-soft backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">Artikel</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.045em] text-charcoal sm:text-6xl">
          Panduan interior dan custom furniture
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Artikel SEO akan ditambahkan setelah riset keyword valid agar kontennya tidak asal.
        </p>
      </div>
    </main>
  );
}
