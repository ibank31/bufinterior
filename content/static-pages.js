import { routes } from "@/content/routes";
import { siteConfig } from "@/content/site";

export const staticPageMetadata = {
  home: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    path: routes.home,
    image: siteConfig.ogImage,
  },
  layanan: {
    title: "Layanan Interior Custom Banyumas | BUF Berkah Utami Furniture",
    description: "Layanan BUF meliputi kitchen set, custom furniture, interior rumah, interior toko, backdrop TV, lemari custom, booth usaha, dan desain interior di Banyumas.",
    path: routes.layanan,
  },
  gallery: {
    title: "Gallery Desain & Pengerjaan Interior | BUF Banyumas",
    description: "Lihat contoh desain, realisasi, dan proses pengerjaan interior custom, kitchen set, furniture, dan booth usaha BUF Berkah Utami Furniture.",
    path: routes.gallery,
  },
  kontak: {
    title: "Kontak BUF Banyumas | Konsultasi Interior Custom",
    description: "Hubungi BUF Berkah Utami Furniture untuk konsultasi desain dan pengerjaan interior custom, kitchen set, furniture, dan booth usaha di Banyumas.",
    path: routes.kontak,
  },
  tentangKami: {
    title: "Tentang BUF | Workshop Interior & Custom Furniture Banyumas",
    description: "Profil BUF Berkah Utami Furniture, workshop interior dan custom furniture di Banyumas yang melayani desain sekaligus pengerjaan.",
    path: routes.tentangKami,
  },
  artikel: {
    title: "Artikel Interior & Custom Furniture | BUF Banyumas",
    description: "Panduan seputar kitchen set, interior rumah, custom furniture, material, dan pengerjaan interior di Banyumas.",
    path: routes.artikel,
  },
};
