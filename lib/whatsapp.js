import { siteConfig } from "@/content/site";

export function buildWhatsappHref(message = "Halo BUF, saya ingin konsultasi kebutuhan interior/custom furniture. Lokasi proyek: ... Ukuran/perkiraan: ... Kebutuhan: ...") {
  const phone = siteConfig.whatsappNumber;
  const baseUrl = "https://wa.me/" + phone;
  return baseUrl + "?text=" + encodeURIComponent(message);
}
