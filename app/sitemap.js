import { sitemapRoutes } from "@/content/routes";
import { articles } from "@/content/articles";
import { localServices } from "@/content/local-services";
import { absoluteSiteUrl } from "@/lib/url";

export const dynamic = "force-static";

export default function sitemap() {
  const staticRoutes = sitemapRoutes.map(({ path, priority }) => ({
    url: absoluteSiteUrl(path),
    changeFrequency: "weekly",
    priority,
  }));

  const localServiceRoutes = localServices.map((service) => ({
    url: absoluteSiteUrl(service.href),
    changeFrequency: "weekly",
    priority: 0.82,
  }));

  const articleRoutes = articles.map((article) => ({
    url: absoluteSiteUrl(`/artikel/${article.slug}`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...localServiceRoutes, ...articleRoutes];
}
