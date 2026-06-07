import { siteConfig } from "@/content/site";

export function buildWhatsappHref(message = "Halo BUF, saya ingin konsultasi kebutuhan interior/custom furniture. Lokasi proyek: ... Ukuran/perkiraan: ... Kebutuhan: ...") {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
