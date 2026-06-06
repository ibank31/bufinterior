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
    title: "Layanan Interior Custom, Kitchen Set & Furniture | BUF",
    description: "Layanan BUF untuk kitchen set, custom furniture, interior rumah/toko, booth usaha, akrilik, aluminium, dan kanopi custom.",
    path: routes.layanan,
  },
  gallery: {
    title: "Gallery Desain & Pengerjaan Interior | BUF",
    description: "Lihat contoh desain, realisasi, dan proses pengerjaan interior custom, kitchen set, furniture, dan booth usaha BUF Berkah Utami Furniture.",
    path: routes.gallery,
  },
  kontak: {
    title: "Kontak BUF | Konsultasi Interior & Custom Furniture",
    description: "Hubungi BUF untuk konsultasi kitchen set, custom furniture, interior, booth usaha, dan kebutuhan custom rumah atau usaha.",
    path: routes.kontak,
  },
  estimasiBiaya: {
    title: "Estimasi Biaya Interior Custom, Kitchen Set & Furniture | BUF",
    description: "Panduan estimasi biaya awal untuk kitchen set custom, lemari custom, backdrop TV, booth usaha, interior toko, dan custom furniture.",
    path: routes.estimasiBiaya,
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
