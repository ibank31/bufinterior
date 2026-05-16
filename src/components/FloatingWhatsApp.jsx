import { MessageCircle } from "lucide-react";
import { SITE_DATA } from "../data/siteData";

export default function FloatingWhatsApp() {
  return (
    <a className="floatingWa" href={SITE_DATA.whatsappUrl} target="_blank" rel="noreferrer">
      <MessageCircle size={20} />
      Chat BAF
    </a>
  );
}
