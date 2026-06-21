"use client";

import { useEffect, useState } from "react";
import { buildWhatsappHref } from "@/lib/whatsapp";

const message =
  "Halo BUF, saya mau tanya interior atau furniture custom. Lokasi proyek: ... Ukuran kira-kira: ... Saya ingin tanya proses dan estimasinya.";

export default function FloatingWhatsApp() {
  const [hiddenInFooter, setHiddenInFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setHiddenInFooter(entry.isIntersecting);
        }
      },
      { root: null, threshold: 0 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visibilityClasses = hiddenInFooter
    ? "pointer-events-none translate-y-4 opacity-0"
    : "translate-y-0 opacity-100";

  return (
    <a
      href={buildWhatsappHref(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Konsultasi via WhatsApp BUF"
      aria-hidden={hiddenInFooter}
      tabIndex={hiddenInFooter ? -1 : 0}
      className={`fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(23,23,23,0.24)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(23,23,23,0.28)] sm:bottom-5 sm:right-5 sm:px-5 ${visibilityClasses}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/18 text-base">
        WA
      </span>
      <span className="hidden sm:inline">Konsultasi WhatsApp</span>
    </a>
  );
}
