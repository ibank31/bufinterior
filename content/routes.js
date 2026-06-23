import { normalizeSitePath } from "@/lib/url";

// Situs di-deploy dengan trailingSlash: true. Semua route halaman dinormalisasi
// agar berakhiran "/" supaya internal <Link> langsung menuju URL kanonik dan
// tidak kena redirect 301/308 (hemat crawl budget).
const route = (path) => normalizeSitePath(path);

export const routes = {
  home: "/",
  layanan: route("/layanan"),
  jasa: route("/jasa"),
  area: route("/area"),
  kitchenSet: route("/layanan/kitchen-set"),
  customFurniture: route("/layanan/custom-furniture"),
  interiorRumah: route("/layanan/interior-rumah"),
  interiorToko: route("/layanan/interior-toko"),
  backdropTv: route("/layanan/backdrop-tv"),
  lemariCustom: route("/layanan/lemari-custom"),
  boothUsaha: route("/layanan/booth-usaha"),
  akrilikCustom: route("/layanan/akrilik-custom"),
  aluminium: route("/layanan/aluminium"),
  kanopi: route("/layanan/kanopi"),
  portfolio: route("/portfolio"),
  kontak: route("/kontak"),
  estimasiBiaya: route("/estimasi-biaya"),
  caraKerja: route("/cara-kerja"),
  tentangKami: route("/tentang-kami"),
  artikel: route("/artikel"),
  kebijakanPrivasi: route("/kebijakan-privasi"),
  syaratKetentuan: route("/syarat-ketentuan"),
};

export const sitemapRoutes = [
  { path: routes.home, priority: 1.0 },
  { path: routes.layanan, priority: 0.9 },
  { path: routes.jasa, priority: 0.86 },
  { path: routes.kitchenSet, priority: 0.9 },
  { path: routes.customFurniture, priority: 0.88 },
  { path: routes.interiorRumah, priority: 0.86 },
  { path: routes.interiorToko, priority: 0.86 },
  { path: routes.backdropTv, priority: 0.76 },
  { path: routes.lemariCustom, priority: 0.76 },
  { path: routes.boothUsaha, priority: 0.74 },
  { path: routes.akrilikCustom, priority: 0.74 },
  { path: routes.aluminium, priority: 0.74 },
  { path: routes.kanopi, priority: 0.74 },
  { path: routes.portfolio, priority: 0.8 },
  { path: routes.kontak, priority: 0.82 },
  { path: routes.estimasiBiaya, priority: 0.82 },
  { path: routes.caraKerja, priority: 0.78 },
  { path: routes.tentangKami, priority: 0.65 },
  { path: routes.artikel, priority: 0.55 },
  { path: routes.kebijakanPrivasi, priority: 0.22 },
  { path: routes.syaratKetentuan, priority: 0.22 },
];

export function articleHref(slug) {
  return normalizeSitePath(`/artikel/${slug}`);
}

export function portfolioHref(serviceSlug) {
  return normalizeSitePath(`/portfolio/${serviceSlug}`);
}

export function localServiceHref(slug) {
  return normalizeSitePath(`/jasa/${slug}`);
}

export function areaHref(slug) {
  return normalizeSitePath(`/area/${slug}`);
}
