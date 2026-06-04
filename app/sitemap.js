import { sitemapRoutes } from "@/content/routes";
import { absoluteSiteUrl } from "@/lib/url";

export const dynamic = "force-static";

export default function sitemap() {
  return sitemapRoutes.map(({ path, priority }) => ({
    url: absoluteSiteUrl(path),
    changeFrequency: "weekly",
    priority,
  }));
}
