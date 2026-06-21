import { siteConfig } from "@/content/site";
import { absoluteSiteUrl } from "@/lib/url";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteSiteUrl("/#business"),
    name: `${siteConfig.name} — ${siteConfig.legalName}`,
    legalName: siteConfig.legalName,
    url: absoluteSiteUrl("/"),
    telephone: `+${siteConfig.whatsappNumber}`,
    image: absoluteSiteUrl(siteConfig.ogImage),
    logo: absoluteSiteUrl("/assets/logo/logo-transparent-attempt.png"),
    hasMap: siteConfig.googleMapsUrl,
    sameAs: [siteConfig.googleMapsUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Berkoh",
      addressLocality: "Purwokerto",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    areaServed: siteConfig.areaFocus,
    description: siteConfig.defaultDescription,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteSiteUrl("/#website"),
    name: `${siteConfig.name} — ${siteConfig.legalName}`,
    url: absoluteSiteUrl("/"),
    inLanguage: siteConfig.language,
    description: siteConfig.defaultDescription,
    publisher: {
      "@id": absoluteSiteUrl("/#business"),
    },
  };
}

export function breadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const [name, path = "/"] = item;
      return {
        "@type": "ListItem",
        position: index + 1,
        name,
        item: absoluteSiteUrl(path),
      };
    }),
  };
}

export function faqSchema(items = []) {
  const mainEntity = items
    .map((item) => {
      const question = item?.question || item?.q || item?.[0];
      const answer = item?.answer || item?.a || item?.[1];

      if (!question || !answer) {
        return null;
      }

      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    })
    .filter(Boolean);

  if (!mainEntity.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

export function articleSchema(article) {
  const articleUrl = absoluteSiteUrl(`/artikel/${article.slug}`);
  const imageUrl = absoluteSiteUrl(article.heroImage || siteConfig.ogImage);
  const datePublished = article.date;
  const dateModified = article.dateModified || article.date;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#blogposting`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: article.title,
    description: article.excerpt,
    image: [imageUrl],
    datePublished,
    dateModified,
    inLanguage: siteConfig.language,
    author: {
      "@type": "Organization",
      name: "Tim BUF",
      url: absoluteSiteUrl("/tentang-kami"),
    },
    publisher: {
      "@id": absoluteSiteUrl("/#business"),
    },
  };
}

export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.primaryKeyword,
    areaServed: siteConfig.areaFocus,
    url: absoluteSiteUrl(service.href),
    provider: {
      "@id": absoluteSiteUrl("/#business"),
    },
  };
}

export function localServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.heroDescription,
    areaServed: service.area,
    serviceType: service.primaryKeyword,
    provider: {
      "@id": absoluteSiteUrl("/#business"),
    },
    url: absoluteSiteUrl(service.href),
  };
}

export function sitewideSchemas() {
  return [organizationSchema(), websiteSchema()];
}
