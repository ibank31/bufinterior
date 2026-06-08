const fallbackBaseUrl = "https://berkah-utami-furniture.pages.dev";
const configuredBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || fallbackBaseUrl;
const cleanBaseUrl = configuredBaseUrl.replace(/\/+$/, "");
const cleanDomain = cleanBaseUrl.replace(/^https?:\/\//, "");

export const siteConfig = {
  name: "BUF",
  legalName: "Berkah Utami Furniture",
  baseUrl: cleanBaseUrl,
  domain: cleanDomain,
  language: "id-ID",
  locale: "id_ID",
  whatsappNumber: "6281215659884",
  whatsappDisplay: "0812-1565-9884",
  operatingHours: "08.00 – 16.00",
  areaFocus: "Berkoh, Purwokerto, Banyumas",
  areaNote: "Workshop ada di Berkoh, Purwokerto. Pengerjaan bisa untuk area Purwokerto, Banyumas, dan sekitar. Jadwal survey atau pemasangan dibicarakan dulu lewat WhatsApp.",
  surveyPolicy: "Untuk area Banyumas, survey lokasi gratis. Kalau di luar Banyumas, biaya survey dibicarakan dulu sesuai jarak dan jenis pekerjaannya.",
  workshops: ["Berkoh, Purwokerto", "Jl. Mentri Supeno", "Jl. Sunan Kalijaga, Berkoh"],
  positioning:
    "Workshop interior, furniture custom, dan fabrikasi di Berkoh, Purwokerto. Biasa mengerjakan kitchen set, lemari, backdrop TV, booth usaha, akrilik, aluminium, kanopi, dan pekerjaan custom untuk rumah atau tempat usaha.",
  defaultTitle:
    "BUF — Interior Custom, Kitchen Set & Custom Furniture",
  defaultDescription:
    "BUF Berkah Utami Furniture adalah workshop interior, furniture custom, dan fabrikasi di Berkoh, Purwokerto. Mengerjakan kitchen set, lemari, backdrop TV, booth usaha, akrilik, aluminium, kanopi, interior rumah, interior toko, dan pekerjaan custom lainnya.",
  ogImage: "/assets/og/buf-interior-og.webp",
};
