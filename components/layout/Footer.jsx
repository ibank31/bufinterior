import Link from "next/link";
import { siteConfig } from "@/content/site";
import { routes } from "@/content/routes";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <p className="text-2xl font-black tracking-[-0.04em]">{siteConfig.name} — {siteConfig.legalName}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">{siteConfig.positioning}</p>
          <Link href={routes.kontak} className="mt-5 inline-flex rounded-full bg-brand-blue px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5">
            Konsultasi
          </Link>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-white/55">Workshop</p>
          <div className="mt-4 grid gap-2 text-sm leading-7 text-white/72">
            {siteConfig.workshops.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-white/55">Kontak</p>
          <div className="mt-4 grid gap-2 text-sm leading-7 text-white/72">
            <p>WhatsApp: {siteConfig.whatsappDisplay}</p>
            <p>Jam: {siteConfig.operatingHours}</p>
            <p>Area: {siteConfig.areaFocus}</p>
            <p>{siteConfig.areaNote}</p>
            <Link href={routes.kontak} className="font-bold text-white">Lihat kontak lengkap</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs leading-6 text-white/50">
        © {new Date().getFullYear()} {siteConfig.legalName}. Interior custom, kitchen set, dan furniture custom Banyumas.
      </div>
    </footer>
  );
}
