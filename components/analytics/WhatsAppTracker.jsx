"use client";

import { useEffect } from "react";

const WHATSAPP_LINK_SELECTOR =
  'a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="whatsapp://"]';

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

      if (typeof window.gtag === "function") {
        window.gtag("event", "whatsapp_click", {
          event_category: "engagement",
          event_label: label,
          link_url: href,
          page_path: window.location.pathname,
        });
        window.gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: label,
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
