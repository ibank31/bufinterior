import { siteConfig } from "@/content/site";
import { absoluteSiteUrl } from "@/lib/url";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.baseUrl}/#business`,
    name: `${siteConfig.name} — ${siteConfig.legalName}`,
    legalName: siteConfig.legalName,
    url: siteConfig.baseUrl,
    telephone: siteConfig.whatsappDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.areaFocus,
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
    "@id": `${siteConfig.baseUrl}/#website`,
    name: `${siteConfig.name} — ${siteConfig.legalName}`,
    url: siteConfig.baseUrl,
    inLanguage: siteConfig.language,
    description: siteConfig.defaultDescription,
    publisher: {
      "@id": `${siteConfig.baseUrl}/#business`,
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
    areaServed: siteConfig.areaFocus,
    provider: {
      "@id": `${siteConfig.baseUrl}/#business`,
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
      "@id": `${siteConfig.baseUrl}/#business`,
    },
    url: absoluteSiteUrl(service.href),
  };
}

export function sitewideSchemas() {
  return [organizationSchema(), websiteSchema()];
}
