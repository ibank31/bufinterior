import { siteConfig } from "@/content/site";

export default function WhatsappLink({ children, className = "", ...props }) {
  const href = `tel:${siteConfig.whatsappDisplay}`;

  return (
    <a className={className} href={href} {...props}>
      {children}
    </a>
  );
}
