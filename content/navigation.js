import { routes } from "@/content/routes";

export const mainNavigation = [
  { label: "Beranda", href: routes.home, exact: true },
  {
    label: "Layanan",
    href: routes.layanan,
    items: [
      { label: "Kitchen Set", href: routes.kitchenSet },
      { label: "Custom Furniture", href: routes.customFurniture },
      { label: "Interior Rumah", href: routes.interiorRumah },
      { label: "Interior Toko", href: routes.interiorToko },
      { label: "Backdrop TV", href: routes.backdropTv },
      { label: "Lemari Custom", href: routes.lemariCustom },
      { label: "Booth Usaha", href: routes.boothUsaha },
      { label: "Akrilik Custom", href: routes.akrilikCustom },
      { label: "Aluminium", href: routes.aluminium },
      { label: "Kanopi", href: routes.kanopi },
    ],
  },
  { label: "Jasa Area", href: routes.jasa },
  { label: "Gallery", href: routes.gallery },
  { label: "Artikel", href: routes.artikel },
  { label: "Tentang Kami", href: routes.tentangKami },
  { label: "Kontak", href: routes.kontak },
];
