import { siteConfig } from "@/content/site";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(staticPageMetadata.tentangKami);

export default function TentangKamiPage() {
  return (
    <main className="wood-grain-bg section-pad">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-stone-200 bg-white/72 p-7 shadow-soft backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">Tentang Kami</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.045em] text-charcoal sm:text-6xl">
          BUF — Berkah Utami Furniture
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          {siteConfig.positioning}
        </p>
        <p className="mt-5 text-lg leading-8 text-muted">
          BUF melayani kebutuhan interior rumah, kost, toko, kitchen set, backdrop TV, lemari custom, meja belajar, meja rias, booth usaha, desain interior, dan desain sekaligus pengerjaan.
        </p>
      </div>
    </main>
  );
}
