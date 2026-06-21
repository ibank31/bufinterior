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
  googleMapsUrl: "https://maps.app.goo.gl/p4mdCRhi64oCzZyG7",
  geo: {
    latitude: -7.443152,
    longitude: 109.266957,
  },
  operatingHours: "08.00 – 16.00",
  areaFocus: "Berkoh, Purwokerto, Banyumas",
  areaNote: "Workshop ada di Berkoh, Purwokerto. Pengerjaan bisa untuk area Purwokerto, Banyumas, dan sekitar. Jadwal survey atau pemasangan dibicarakan dulu lewat WhatsApp.",
  surveyPolicy: "Untuk area Banyumas, survey lokasi gratis. Kalau di luar Banyumas, biaya survey dibicarakan dulu sesuai jarak dan jenis pekerjaannya.",
  workshops: ["Berkoh, Purwokerto", "Jl. Mentri Supeno", "Jl. Sunan Kalijaga, Berkoh"],
  positioning:
    "Workshop interior, furniture custom, dan fabrikasi di Berkoh, Purwokerto. Biasa mengerjakan kitchen set, lemari, backdrop TV, booth usaha, akrilik, aluminium, kanopi, dan pekerjaan custom untuk rumah atau tempat usaha.",
  defaultTitle:
    "BUF Purwokerto — Kitchen Set, Interior & Furniture Custom",
  defaultDescription:
    "Workshop interior dan furniture custom di Berkoh, Purwokerto. BUF mengerjakan kitchen set, lemari, backdrop TV, booth usaha, akrilik, aluminium, dan kanopi custom.",
  ogImage: "/og-image-1200x630.png",
};
