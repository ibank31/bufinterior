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
    address: {
      "@type": "PostalAddress",
      streetAddress: "Berkoh",
      addressLocality: "Purwokerto",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
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
      const question = item?.question || item?.[0];
      const answer = item?.answer || item?.[1];

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
