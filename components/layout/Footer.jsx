import Link from "next/link";
import { siteConfig } from "@/content/site";
import { routes } from "@/content/routes";

const priorityServices = [
  ["Kitchen Set Custom", routes.kitchenSet],
  ["Custom Furniture", routes.customFurniture],
  ["Booth Usaha Custom", routes.boothUsaha],
  ["Akrilik Custom", routes.akrilikCustom],
  ["Aluminium", routes.aluminium],
  ["Kanopi", routes.kanopi],
];

const guideLinks = [
  ["Estimasi Biaya", routes.estimasiBiaya],
  ["Biaya Kitchen Set Custom", "/artikel/biaya-kitchen-set-custom"],
  ["Material Kitchen Set", "/artikel/material-kitchen-set-yang-bagus"],
  ["Tips Memilih Jasa Interior", "/artikel/tips-memilih-jasa-interior-custom"],
  ["Lemari Custom vs Lemari Jadi", "/artikel/lemari-custom-vs-lemari-jadi"],
];

const localServiceLinks = [
  ["Kitchen Set Purwokerto", "/jasa/kitchen-set-purwokerto"],
  ["Booth Usaha Purwokerto", "/jasa/booth-usaha-purwokerto"],
  ["Akrilik Custom Purwokerto", "/jasa/akrilik-custom-purwokerto"],
  ["Aluminium Purwokerto", "/jasa/aluminium-purwokerto"],
  ["Kanopi Purwokerto", "/jasa/kanopi-purwokerto"],
];

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_0.8fr_0.85fr_0.85fr]">
        <div>
          <p className="text-3xl font-black tracking-[-0.025em]">
            {siteConfig.name} — {siteConfig.legalName}
          </p>
          <p className="mt-4 max-w-xl text-sm font-medium leading-8 text-white/62">
            {siteConfig.positioning}
          </p>
          <Link
            href={routes.kontak}
            className="mt-6 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue"
          >
            Konsultasi
          </Link>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/38">
            Layanan Prioritas
          </p>
          <div className="mt-5 grid gap-3 text-sm font-medium leading-7 text-white/64">
            {priorityServices.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/38">
            Jasa Area
          </p>
          <div className="mt-5 grid gap-3 text-sm font-medium leading-7 text-white/64">
            {localServiceLinks.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-white">
                {label}
              </Link>
            ))}
            <Link href={routes.jasa} className="font-black text-white">
              Semua Jasa Area
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/38">
            Panduan
          </p>
          <div className="mt-5 grid gap-3 text-sm font-medium leading-7 text-white/64">
            {guideLinks.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-white">
                {label}
              </Link>
            ))}
            <Link href={routes.artikel} className="font-black text-white">
              Semua Artikel
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/38">
            Kontak
          </p>
          <div className="mt-5 grid gap-3 text-sm font-medium leading-7 text-white/64">
            <p>WhatsApp: {siteConfig.whatsappDisplay}</p>
            <p>Jam: {siteConfig.operatingHours}</p>
            <p>Workshop: Berkoh, Purwokerto</p>
            <p>Area: {siteConfig.areaFocus}</p>
            <p>{siteConfig.areaNote}</p>
            <Link href={routes.portfolio} className="font-black text-white">
              Lihat Portofolio
            </Link>
            <Link href={routes.kontak} className="font-black text-white">
              Lihat Kontak Lengkap
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs font-medium leading-6 text-white/38">
        © {new Date().getFullYear()} {siteConfig.legalName}. Interior custom, furniture custom, dan fabrication di Purwokerto.
      </div>
    </footer>
  );
}
