import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(staticPageMetadata.gallery);

export default function GalleryPage() {
  return (
    <main className="section-pad">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">Gallery</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.07em] text-charcoal sm:text-6xl">
          Gallery desain dan pengerjaan interior
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Area ini akan berisi konsep desain, realisasi proyek, dan proses pengerjaan BUF. Foto akan dipilah agar calon pelanggan mudah membedakan desain dan hasil pekerjaan.
        </p>
      </div>
    </main>
  );
}
