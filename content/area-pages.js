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
      `BUF Berkah Utami Furniture mengerjakan interior, furniture custom, kitchen set, booth usaha, akrilik, aluminium, kanopi, dan pekerjaan custom di ${area.name}. ${siteConfig.surveyPolicy}`,
    metaDescription:
      `Jasa interior, furniture custom, kitchen set, booth usaha, akrilik, aluminium, dan kanopi di ${area.name}. ${siteConfig.surveyPolicy}`,
    intro:
      `${area.name} jadi area utama BUF karena dekat dengan workshop di Berkoh, Purwokerto. Mulainya bisa dari foto ruang, ukuran kasar, dan bagian yang ingin dibuat.`,
    services: areaServices,
    popularNeeds: [
      "Kitchen set custom untuk dapur rumah",
      "Lemari dan furniture yang dibuat mengikuti ukuran ruang",
      "Backdrop TV dan storage ruang keluarga",
      "Interior toko, booth usaha, dan display produk",
      "Akrilik custom, aluminium, dan kanopi",
    ],
    bestFor: [
      "Pemilik rumah di Purwokerto",
      "Pemilik toko dan UMKM",
      "Kost, kontrakan, kantor kecil, dan ruang usaha",
      "Pelanggan yang ruangnya tidak cocok pakai furniture jadi",
    ],
    steps: [
      ["01", "Kirim foto awal", "Ceritakan ruang yang ingin dibuat, ukuran kasar, dan lokasi proyek."],
      ["02", "Bahas arah model", "Model, bahan, finishing, dan perkiraan biaya dibahas dari data awal."],
      ["03", "Survey area Banyumas gratis", siteConfig.surveyPolicy],
      ["04", "Produksi dan pemasangan", "Barang dikerjakan dari workshop, lalu dipasang sesuai jadwal yang disepakati."],
    ],
    faqs: [
      [`Apakah BUF melayani area ${area.name}?`, `Ya, BUF melayani area ${area.name} dan Banyumas. Konsultasi bisa dimulai lewat WhatsApp dengan foto ruang dan ukuran kasar.`],
      ["Apakah survey lokasi gratis?", siteConfig.surveyPolicy],
      ["Apakah harus langsung survey?", "Tidak harus. Chat awal bisa dimulai dari foto ruang dan ukuran kasar dulu."],
      ["Layanan apa saja yang tersedia?", "BUF mengerjakan interior rumah/toko, kitchen set, furniture custom, backdrop TV, lemari custom, booth usaha, akrilik, aluminium, kanopi, dan pekerjaan custom lain."],
    ],
    ctaLabel: `Konsultasi Jasa Custom di ${area.name}`,
    ctaText:
      `Halo BUF, saya mau tanya interior atau furniture custom di ${area.name}. Lokasi proyek: ... Ukuran kira-kira: ... Saya akan kirim foto ruangnya.`,
    fallbackHref: routes.kontak,
  };
});

export function getAreaPageBySlug(slug) {
  return areaPages.find((area) => area.slug === slug);
}
