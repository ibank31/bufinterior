"use client";

import { useEffect } from "react";

const WHATSAPP_LINK_SELECTOR =
  'a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="whatsapp://"]';

const SLUG_LABELS = {
  "kitchen-set": "Kitchen Set",
  "lemari": "Lemari",
  "wardrobe": "Wardrobe",
  "backdrop-tv": "Backdrop TV",
  "meja": "Meja",
  "kursi": "Kursi",
  "custom-furniture": "Custom Furniture",
  "desain-interior": "Desain Interior",
  "interior-rumah": "Interior Rumah",
  "interior-kantor": "Interior Kantor",
  "renovasi": "Renovasi",
};

function normalizeText(value, fallback = "unknown") {
  const normalized = String(value || "")
    .replace(/[?#].*$/, "")
    .replace(/^\/+|\/+$/g, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!normalized) return fallback;
  return normalized
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getPathSegments() {
  return window.location.pathname
    .split("/")
    .map((segment) => segment.trim())
    .filter(Boolean);
}

function getPageType(segments) {
  const [section] = segments;
  if (!section) return "homepage";
  return section;
}

function getPageContext(segments) {
  const [section, slug] = segments;
  if (!slug) return normalizeText(section || "homepage", "Homepage");
  return SLUG_LABELS[slug] || normalizeText(slug);
}

function inferServiceName(segments, label) {
  const [section, slug] = segments;

  if (["layanan", "jasa"].includes(section) && slug) {
    return SLUG_LABELS[slug] || normalizeText(slug);
  }

  const matchedSlug = Object.keys(SLUG_LABELS).find((key) => {
    const readable = SLUG_LABELS[key].toLowerCase();
    return label.toLowerCase().includes(readable.toLowerCase());
  });

  if (matchedSlug) return SLUG_LABELS[matchedSlug];
  return section === "kontak" ? "Konsultasi Interior" : "General Inquiry";
}

function inferProductType(serviceName) {
  const value = serviceName.toLowerCase();

  if (value.includes("kitchen")) return "Kitchen Set";
  if (value.includes("wardrobe") || value.includes("lemari")) return "Wardrobe / Lemari";
  if (value.includes("meja")) return "Meja";
  if (value.includes("kursi")) return "Kursi";
  if (value.includes("backdrop")) return "Backdrop TV";
  if (value.includes("furniture")) return "Custom Furniture";
  if (value.includes("interior") || value.includes("renovasi")) return "Interior Service";

  return "General Furniture";
}

function inferProjectArea(segments) {
  const [section, slug] = segments;
  const pathname = window.location.pathname.toLowerCase();

  if (section === "area" && slug) return normalizeText(slug);
  if (pathname.includes("purwokerto")) return "Purwokerto";
  if (pathname.includes("banyumas")) return "Banyumas";

  return "Tidak Spesifik";
}

function getCtaLocation(link) {
  const explicitLocation = link.getAttribute("data-cta-location");
  if (explicitLocation) return explicitLocation;

  if (link.closest("header")) return "header";
  if (link.closest("footer")) return "footer";

  const dataSection = link.closest("[data-section]")?.getAttribute("data-section");
  if (dataSection) return dataSection;

  const section = link.closest("section[id]")?.getAttribute("id");
  if (section) return section;

  const floatingContainer = link.closest('[class*="fixed"], [class*="sticky"]');
  if (floatingContainer) return "floating";

  return window.location.pathname === "/" ? "homepage_body" : "page_body";
}

function buildLeadPayload(link, label, href) {
  const segments = getPathSegments();
  const pageType = getPageType(segments);
  const pageContext = getPageContext(segments);
  const serviceName = inferServiceName(segments, label);

  return {
    event_category: "engagement",
    event_label: label,
    link_url: href,
    page_path: window.location.pathname,

    // GA4 custom dimensions — harus sama dengan parameterName di GA4 Admin.
    lead_source: `${pageType}:${pageContext}`,
    cta_location: getCtaLocation(link),
    service_name: serviceName,
    product_type: inferProductType(serviceName),
    product_name: pageContext,
    project_area: inferProjectArea(segments),
  };
}

// Listener global: menangkap semua klik link WhatsApp (floating button,
// footer, halaman layanan, dll.) tanpa perlu mengubah tiap tombol satu per satu,
// lalu mengirim event ke GA4 sebagai sinyal lead.
export default function WhatsAppTracker() {
  useEffect(() => {
    function handleClick(event) {
      const target = event.target;
      if (!target || typeof target.closest !== "function") return;

      const link = target.closest(WHATSAPP_LINK_SELECTOR);
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const label = (link.getAttribute("aria-label") || link.textContent || "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 120);
      const payload = buildLeadPayload(link, label, href);

      if (typeof window.gtag === "function") {
        window.gtag("event", "whatsapp_click", payload);
        window.gtag("event", "generate_lead", payload);
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
