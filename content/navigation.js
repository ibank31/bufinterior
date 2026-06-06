import { routes } from "@/content/routes";

export const serviceNavigationGroups = [
  {
    label: "Custom Interior & Furniture",
    items: [
      { label: "Kitchen Set Custom", href: routes.kitchenSet },
      { label: "Custom Furniture", href: routes.customFurniture },
      { label: "Interior Rumah", href: routes.interiorRumah },
      { label: "Backdrop TV", href: routes.backdropTv },
      { label: "Lemari Custom", href: routes.lemariCustom },
    ],
  },
  {
    label: "Commercial & Business Custom",
    items: [
      { label: "Interior Toko", href: routes.interiorToko },
      { label: "Booth Usaha", href: routes.boothUsaha },
      { label: "Akrilik Custom", href: routes.akrilikCustom },
    ],
  },
  {
    label: "Exterior & Building Support",
    items: [
      { label: "Aluminium", href: routes.aluminium },
      { label: "Kanopi", href: routes.kanopi },
    ],
  },
];

export const portfolioNavigationGroups = serviceNavigationGroups.map((group) => ({
  label: group.label,
  items: group.items.map((item) => ({
    label: item.label.replace(" Custom", ""),
    href: `${routes.portfolio}/${item.href.split("/").pop()}`,
  })),
}));

export const mainNavigation = [
  { label: "Beranda", href: routes.home, exact: true },
  {
    label: "Layanan",
    href: routes.layanan,
    groups: serviceNavigationGroups,
  },
  {
    label: "Portofolio",
    href: routes.portfolio,
    groups: portfolioNavigationGroups,
  },
  { label: "Estimasi Biaya", href: routes.estimasiBiaya },
  { label: "Cara Kerja BUF", href: routes.caraKerja },
  { label: "Tentang BUF", href: routes.tentangKami },
];
