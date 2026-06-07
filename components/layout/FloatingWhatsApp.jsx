import { buildWhatsappHref } from "@/lib/whatsapp";

const message =
  "Halo BUF, saya ingin konsultasi kebutuhan interior/custom furniture. Lokasi proyek: ... Ukuran/perkiraan: ... Kebutuhan: ... Saya ingin tanya proses dan estimasinya.";

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsappHref(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Konsultasi via WhatsApp BUF"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(23,23,23,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(23,23,23,0.28)] sm:bottom-5 sm:right-5 sm:px-5"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/18 text-base">
        WA
      </span>
      <span className="hidden sm:inline">Konsultasi WhatsApp</span>
    </a>
  );
}
