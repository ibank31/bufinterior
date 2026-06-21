import Link from "next/link";
import { siteConfig } from "@/content/site";
import { routes } from "@/content/routes";

const serviceLinks = [
  ["Kitchen Set", routes.kitchenSet],
  ["Custom Furniture", routes.customFurniture],
  ["Interior Rumah", routes.interiorRumah],
  ["Interior Toko", routes.interiorToko],
  ["Booth Usaha", routes.boothUsaha],
  ["Akrilik Custom", routes.akrilikCustom],
  ["Aluminium", routes.aluminium],
  ["Kanopi", routes.kanopi],
];

const navigationLinks = [
  ["Portofolio", routes.portfolio],
  ["Estimasi Biaya", routes.estimasiBiaya],
  ["Cara Kerja BUF", routes.caraKerja],
  ["Artikel", routes.artikel],
  ["Tentang BUF", routes.tentangKami],
  ["Kontak", routes.kontak],
];

const legalLinks = [
  ["Kebijakan Privasi", routes.kebijakanPrivasi],
  ["Syarat & Ketentuan", routes.syaratKetentuan],
];

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.85fr_0.75fr_0.9fr]">
          <div>
            <p className="text-3xl font-black tracking-[-0.025em]">
              {siteConfig.name} — {siteConfig.legalName}
            </p>
            <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-white/62">
              Workshop interior, furniture custom, dan fabrication di Berkoh, Purwokerto untuk rumah, toko, dan usaha.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={routes.kontak}
                className="rounded-full bg-brand-blue px-6 py-3 text-center text-sm font-black text-white shadow-blue"
              >
                Konsultasi
              </Link>
              <Link
                href={routes.portfolio}
                className="rounded-full border border-white/12 bg-white/[0.06] px-6 py-3 text-center text-sm font-black text-white"
              >
                Lihat Portofolio
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/38">
              Layanan
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-medium leading-6 text-white/64 lg:grid-cols-1">
              {serviceLinks.map(([label, href]) => (
                <Link key={href} href={href} className="transition hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/38">
              Navigasi
            </p>
            <div className="mt-5 grid gap-3 text-sm font-medium leading-6 text-white/64">
              {navigationLinks.map(([label, href]) => (
                <Link key={href} href={href} className="transition hover:text-white">
                  {label}
                </Link>
              ))}
            </div>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-white/38">
              Legal
            </p>
            <div className="mt-3 grid gap-3 text-sm font-medium leading-6 text-white/64">
              {legalLinks.map(([label, href]) => (
                <Link key={href} href={href} className="transition hover:text-white">
                  {label}
                </Link>
              ))}
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
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-black text-white transition hover:bg-white/10"
              >
                Buka Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5 text-center text-xs font-medium leading-6 text-white/38">
          © {new Date().getFullYear()} {siteConfig.legalName}. Interior custom, furniture custom, dan fabrication di Purwokerto.
        </div>
      </div>
    </footer>
  );
}
