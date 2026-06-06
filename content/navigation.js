import { routes } from "@/content/routes";
import { services } from "@/content/services";

export const serviceGroupOrder = [
  "Custom Interior & Furniture",
  "Commercial & Business Custom",
  "Exterior & Building Support",
];

function buildServiceGroups(mapItem) {
  return serviceGroupOrder
    .map((groupLabel) => {
      const items = services
        .filter((service) => service.group === groupLabel)
        .map(mapItem);

      return {
        label: groupLabel,
        items,
      };
    })
    .filter((group) => group.items.length);
}

export const serviceNavigationGroups = buildServiceGroups((service) => ({
  label: service.title,
  href: service.href,
}));

export const portfolioNavigationGroups = buildServiceGroups((service) => ({
  label: service.shortTitle,
  href: `${routes.portfolio}/${service.slug}`,
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
