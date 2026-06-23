import { portfolioHref, routes } from "@/content/routes";
import { normalizeSitePath } from "@/lib/url";
import { services } from "@/content/services";

export const serviceGroupOrder = [
  "Custom Interior & Furniture",
  "Commercial & Business Custom",
  "Exterior & Building Support",
];

const portfolioGroupLabelMap = {
  "Custom Interior & Furniture": "Contoh Pengerjaan Hunian",
  "Commercial & Business Custom": "Contoh Pengerjaan Usaha",
  "Exterior & Building Support": "Contoh Pengerjaan Bangunan",
};

function buildServiceGroups(mapItem, groupLabelMap = {}) {
  return serviceGroupOrder
    .map((groupLabel) => {
      const items = services
        .filter((service) => service.group === groupLabel)
        .map(mapItem);

      return {
        label: groupLabelMap[groupLabel] || groupLabel,
        items,
      };
    })
    .filter((group) => group.items.length);
}

export const serviceNavigationGroups = buildServiceGroups((service) => ({
  label: service.title,
  href: normalizeSitePath(service.href),
}));

export const portfolioNavigationGroups = buildServiceGroups(
  (service) => ({
    label: service.shortTitle,
    href: portfolioHref(service.slug),
  }),
  portfolioGroupLabelMap
);

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
