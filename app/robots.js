import { absoluteSiteUrl } from "@/lib/url";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteSiteUrl("/sitemap.xml"),
  };
}
