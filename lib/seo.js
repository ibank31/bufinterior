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
    title,
    description,
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
