import { areaHref, routes } from "@/content/routes";
import { getAreaBySlug } from "@/content/areas";
import { localServices } from "@/content/local-services";
import { siteConfig } from "@/content/site";

const activeAreaSlugs = ["purwokerto"];

export const areaPages = activeAreaSlugs.map((slug) => {
  const area = getAreaBySlug(slug);
  const areaServices = localServices.filter((service) => service.areaSlug === slug);

  if (!area) {
    throw new Error(`Area tidak ditemukan: ${slug}`);
  }

  return {
    ...area,
    href: areaHref(area.slug),
    title: `Jasa Interior, Furniture Custom & Pengerjaan Custom di ${area.name}`,
    shortTitle: `Jasa Custom ${area.name}`,
    heroTitle: `Jasa interior, furniture custom, dan pengerjaan custom di ${area.name}.`,
    heroDescription:
      `BUF Berkah Utami Furniture melayani kebutuhan interior, custom furniture, kitchen set, booth usaha, akrilik, aluminium, kanopi, dan pengerjaan custom di ${area.name}. ${siteConfig.surveyPolicy}`,
    metaDescription:
      `Jasa interior, custom furniture, kitchen set, booth usaha, akrilik, aluminium, dan kanopi di ${area.name}. ${siteConfig.surveyPolicy}`,
    intro:
      `${area.name} menjadi area utama layanan BUF karena dekat dengan workshop/kantor di Berkoh, Purwokerto. Pelanggan bisa mulai konsultasi dari foto ruang, ukuran kasar, kebutuhan fungsi, dan gambaran budget.`,
    services: areaServices,
    popularNeeds: [
      "Kitchen set custom untuk dapur rumah",
      "Lemari dan furniture custom sesuai ukuran ruang",
      "Backdrop TV dan storage ruang keluarga",
      "Interior toko, booth usaha, dan display produk",
      "Akrilik custom, aluminium, dan kanopi",
    ],
    bestFor: [
      "Pemilik rumah di Purwokerto",
      "Pemilik toko dan UMKM",
      "Kost, kontrakan, kantor kecil, dan ruang usaha",
      "Pelanggan yang butuh ukuran custom, bukan furniture jadi",
    ],
    steps: [
      ["01", "Kirim kebutuhan awal", "Ceritakan jenis ruang, kebutuhan, ukuran kasar, dan lokasi proyek."],
      ["02", "Diskusi arah desain", "BUF bantu arahkan opsi desain, material, finishing, dan perkiraan pengerjaan."],
      ["03", "Survey area Banyumas gratis", siteConfig.surveyPolicy],
      ["04", "Produksi dan pemasangan", "Pengerjaan dilakukan bertahap dari workshop sampai pemasangan sesuai kesepakatan."],
    ],
    faqs: [
      [`Apakah BUF melayani area ${area.name}?`, `Ya, BUF melayani area ${area.name} dan Banyumas. Konsultasi bisa dimulai lewat WhatsApp dengan foto ruang dan ukuran kasar.`],
      ["Apakah survey lokasi gratis?", siteConfig.surveyPolicy],
      ["Apakah harus langsung survey?", "Tidak harus. Konsultasi awal bisa dimulai dari WhatsApp agar kebutuhan, ukuran, dan gambaran budget lebih jelas."],
      ["Layanan apa saja yang tersedia?", "BUF melayani interior rumah/toko, kitchen set, custom furniture, backdrop TV, lemari custom, booth usaha, akrilik, aluminium, kanopi, dan kebutuhan custom lainnya."],
    ],
    ctaLabel: `Konsultasi Jasa Custom di ${area.name}`,
    ctaText:
      `Halo BUF, saya ingin konsultasi kebutuhan interior/custom furniture di ${area.name}. Lokasi proyek: ... Ukuran/perkiraan: ... Kebutuhan: ...`,
    fallbackHref: routes.kontak,
  };
});

export function getAreaPageBySlug(slug) {
  return areaPages.find((area) => area.slug === slug);
}
