export const routes = {
  home: "/",
  layanan: "/layanan",
  jasa: "/jasa",
  area: "/area",
  kitchenSet: "/layanan/kitchen-set",
  customFurniture: "/layanan/custom-furniture",
  interiorRumah: "/layanan/interior-rumah",
  interiorToko: "/layanan/interior-toko",
  backdropTv: "/layanan/backdrop-tv",
  lemariCustom: "/layanan/lemari-custom",
  boothUsaha: "/layanan/booth-usaha",
  akrilikCustom: "/layanan/akrilik-custom",
  aluminium: "/layanan/aluminium",
  kanopi: "/layanan/kanopi",
  portfolio: "/portfolio",
  kontak: "/kontak",
  estimasiBiaya: "/estimasi-biaya",
  caraKerja: "/cara-kerja",
  tentangKami: "/tentang-kami",
  artikel: "/artikel",
  kebijakanPrivasi: "/kebijakan-privasi",
  syaratKetentuan: "/syarat-ketentuan",
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
  return `${routes.artikel}/${slug}`;
}

export function portfolioHref(serviceSlug) {
  return `${routes.portfolio}/${serviceSlug}`;
}

export function localServiceHref(slug) {
  return `${routes.jasa}/${slug}`;
}

export function areaHref(slug) {
  return `${routes.area}/${slug}`;
}
