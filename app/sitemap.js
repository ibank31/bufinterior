import { articleHref, portfolioHref, sitemapRoutes } from "@/content/routes";
import { articles } from "@/content/articles";
import { localServices } from "@/content/local-services";
import { services } from "@/content/services";
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

  const portfolioServiceRoutes = services.map((service) => ({
    url: absoluteSiteUrl(portfolioHref(service.slug)),
    changeFrequency: "monthly",
    priority: 0.68,
  }));

  const articleRoutes = articles.map((article) => ({
    url: absoluteSiteUrl(articleHref(article.slug)),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...localServiceRoutes, ...portfolioServiceRoutes, ...articleRoutes];
}
