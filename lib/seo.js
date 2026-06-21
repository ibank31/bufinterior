import { siteConfig } from "@/content/site";
import { absoluteSiteUrl } from "@/lib/url";

export function buildMetadata({
  title = siteConfig.defaultTitle,
  description = siteConfig.defaultDescription,
  path = "/",
  image = siteConfig.ogImage,
  type = "website",
} = {}) {
  const url = absoluteSiteUrl(path);
  const imageUrl = absoluteSiteUrl(image);

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    applicationName: `${siteConfig.name} — ${siteConfig.legalName}`,
    title,
    description,
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: `${siteConfig.name} — ${siteConfig.legalName}`,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
