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
  areaNote: "Workshop/kantor berada di Berkoh, Purwokerto. Melayani Purwokerto, Banyumas, dan area sekitar dengan jadwal proyek by konfirmasi.",
  surveyPolicy: "Survey lokasi area Banyumas gratis. Untuk luar kota, biaya survey dapat dikonfirmasi sesuai jarak dan kebutuhan proyek.",
  workshops: ["Berkoh, Purwokerto", "Jl. Mentri Supeno", "Jl. Sunan Kalijaga, Berkoh"],
  positioning:
    "Workshop interior, custom furniture, dan fabrication di Berkoh, Purwokerto untuk kebutuhan rumah, toko, dan usaha. Membantu desain, produksi, dan pengerjaan sesuai ukuran ruang, kebutuhan, dan budget pelanggan.",
  defaultTitle:
    "BUF — Interior Custom, Kitchen Set & Custom Furniture",
  defaultDescription:
    "BUF Berkah Utami Furniture adalah workshop interior, custom furniture, dan fabrication di Berkoh, Purwokerto. Melayani kitchen set, booth usaha, akrilik, aluminium, kanopi, interior rumah, toko, dan kebutuhan custom lainnya.",
  ogImage: "/assets/og/buf-interior-og.webp",
};
