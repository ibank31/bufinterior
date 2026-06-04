import { siteConfig } from "@/content/site";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(staticPageMetadata.kontak);

export default function KontakPage() {
  return (
    <main className="wood-grain-bg section-pad">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">Kontak</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.045em] text-charcoal sm:text-6xl">
            Konsultasi interior dengan BUF
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Ceritakan kebutuhan ruang, ukuran, foto lokasi, dan gambaran budget agar tim BUF bisa memberi arahan awal.
          </p>
        </div>

        <div className="wood-grain-card rounded-[2rem] p-6 shadow-soft ring-1 ring-stone-200/70">
          <h2 className="text-2xl font-black text-charcoal">Informasi BUF</h2>
          <div className="mt-5 grid gap-4 text-sm leading-7 text-muted">
            <p><strong className="text-charcoal">WhatsApp:</strong> {siteConfig.whatsappDisplay}</p>
            <p><strong className="text-charcoal">Jam:</strong> {siteConfig.operatingHours}</p>
            <p><strong className="text-charcoal">Area:</strong> {siteConfig.areaFocus}. {siteConfig.areaNote}.</p>
            <div>
              <strong className="text-charcoal">Workshop:</strong>
              <ul className="mt-2 grid gap-1">
                {siteConfig.workshops.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
