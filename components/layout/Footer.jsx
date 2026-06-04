import Link from "next/link";
import { siteConfig } from "@/content/site";
import { routes } from "@/content/routes";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.25fr_0.75fr_0.9fr]">
        <div>
          <p className="text-3xl font-black tracking-[-0.025em]">{siteConfig.name} — {siteConfig.legalName}</p>
          <p className="mt-4 max-w-xl text-sm font-medium leading-8 text-white/62">{siteConfig.positioning}</p>
          <Link href={routes.kontak} className="mt-6 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue">
            Konsultasi
          </Link>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/38">Workshop</p>
          <div className="mt-5 grid gap-3 text-sm font-medium leading-7 text-white/64">
            {siteConfig.workshops.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/38">Kontak</p>
          <div className="mt-5 grid gap-3 text-sm font-medium leading-7 text-white/64">
            <p>WhatsApp: {siteConfig.whatsappDisplay}</p>
            <p>Jam: {siteConfig.operatingHours}</p>
            <p>Area: {siteConfig.areaFocus}</p>
            <p>{siteConfig.areaNote}</p>
            <Link href={routes.kontak} className="font-black text-white">Lihat kontak lengkap</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs font-medium leading-6 text-white/38">
        © {new Date().getFullYear()} {siteConfig.legalName}. Interior custom, kitchen set, dan furniture custom Banyumas.
      </div>
    </footer>
  );
}
