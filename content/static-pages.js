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
    title: "Layanan Interior Custom & Furniture | BUF Berkah Utami Furniture",
    description: "Layanan BUF meliputi kitchen set, custom furniture, interior rumah, interior toko, backdrop TV, lemari custom, booth usaha, dan desain interior. Lokasi proyek dapat dikonfirmasi terlebih dahulu.",
    path: routes.layanan,
  },
  gallery: {
    title: "Gallery Desain & Pengerjaan Interior | BUF",
    description: "Lihat contoh desain, realisasi, dan proses pengerjaan interior custom, kitchen set, furniture, dan booth usaha BUF Berkah Utami Furniture.",
    path: routes.gallery,
  },
  kontak: {
    title: "Kontak BUF | Konsultasi Interior Custom",
    description: "Hubungi BUF Berkah Utami Furniture untuk konsultasi desain dan pengerjaan interior custom, kitchen set, furniture, dan booth usaha. Lokasi proyek dapat dikonfirmasi terlebih dahulu.",
    path: routes.kontak,
  },
  tentangKami: {
    title: "Tentang BUF | Workshop Interior & Custom Furniture",
    description: "Profil BUF Berkah Utami Furniture, workshop interior dan custom furniture yang melayani desain sekaligus pengerjaan.",
    path: routes.tentangKami,
  },
  artikel: {
    title: "Artikel Interior & Custom Furniture | BUF",
    description: "Panduan seputar kitchen set, interior rumah, custom furniture, material, dan pengerjaan interior.",
    path: routes.artikel,
  },
};
