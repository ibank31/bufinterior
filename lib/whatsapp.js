import { siteConfig } from "@/content/site";

export function buildWhatsappHref(message = "Halo BUF, saya ingin konsultasi kebutuhan interior/custom furniture.") {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
