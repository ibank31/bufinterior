import { siteConfig } from "@/content/site";

export function buildWhatsappHref(message = "Halo BUF, saya mau konsultasi. Lokasi proyek: ... Kebutuhan: ... Ukuran kira-kira: ...") {
  const phone = siteConfig.whatsappNumber;
  const baseUrl = "https://wa.me/" + phone;
  return baseUrl + "?text=" + encodeURIComponent(message);
}
