import Link from "next/link";
import { siteConfig } from "@/content/site";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/content/routes";
import { buildWhatsappHref } from "@/lib/whatsapp";
import { contactChecklist, quickChats } from "@/content/contact";

export const metadata = buildMetadata(staticPageMetadata.kontak);

function whatsappHref(text) {
  return buildWhatsappHref(text);
}

export default function KontakPage() {
  return (
    <main>
      <section className="wood-grain-bg px-6 py-12 sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-wood shadow-soft backdrop-blur sm:text-[11px]">
              Kontak BUF
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
              Mulai ngobrol dari foto ruang dulu.
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg sm:leading-8">
              Tidak perlu langsung punya gambar final. Kirim foto ruang, ukuran kasar, dan contoh model kalau ada. Nanti kita bahas pelan-pelan: mau dibuat apa, bahannya apa, dan perlu survey atau tidak.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref("Halo BUF, saya mau tanya interior atau furniture custom. Lokasi proyek: ... Ukuran kira-kira: ... Saya akan kirim foto ruangnya.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-charcoal px-7 py-3.5 text-center text-sm font-black text-white shadow-[0_18px_45px_rgba(23,23,23,0.2)]"
              >
                Chat WhatsApp BUF
              </a>
              <Link
                href={routes.portfolio}
                className="rounded-full border border-stone-300 bg-white/80 px-7 py-3.5 text-center text-sm font-black text-charcoal shadow-soft backdrop-blur"
              >
                Lihat Portofolio Dulu
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/70 bg-white/45 p-3 shadow-[0_35px_100px_rgba(23,23,23,0.14)] backdrop-blur">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <div className="min-h-[390px] bg-[linear-gradient(180deg,rgba(23,23,23,0.00),rgba(23,23,23,0.04)),url('/assets/portfolio/lemari-custom-display-lighting-buf-01.webp')] bg-cover bg-center sm:min-h-[460px]" />
              <div className="border-t border-stone-200 bg-charcoal p-5 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                  Mulai dari cerita ruangnya
                </p>
                <p className="mt-2 text-2xl font-black leading-[1.2] tracking-[-0.02em]">
                  Tidak harus langsung punya desain final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-wood/55" />
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Pilih topik chat
              </p>
            </div>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
              Biar lebih mudah mulai chat, pilih topik konsultasi.
            </h2>
            <p className="mt-5 text-base font-medium leading-7 text-muted">
              Tombol di bawah akan membuka WhatsApp dengan pesan awal sesuai topik. Pesannya tetap bisa Anda edit sebelum dikirim.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {quickChats.map((item) => (
              <a
                key={item.label}
                href={whatsappHref(item.text)}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-blue/25 hover:shadow-[0_22px_70px_rgba(23,23,23,0.12)]"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-wood">
                  Konsultasi
                </p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-black leading-snug tracking-[-0.02em] text-charcoal">
                    {item.label}
                  </h3>
                  <span className="rounded-full bg-charcoal px-4 py-2 text-xs font-black text-white transition group-hover:bg-brand-blue">
                    Chat →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
              Sebelum chat
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
              Siapkan info sederhana supaya obrolannya cepat nyambung.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted">
              Tidak wajib lengkap semua. Foto dari beberapa sudut saja biasanya sudah cukup untuk mulai membaca kondisi ruang.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactChecklist.map((item, index) => (
              <div key={item} className="rounded-[1.75rem] border border-stone-200 bg-white/82 p-5 shadow-soft backdrop-blur">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-lg font-black leading-snug tracking-[-0.02em] text-charcoal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-16 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">
              Informasi kontak
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] sm:text-5xl">
              WhatsApp jadi jalur paling cepat untuk mulai.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/64">
              Survey, produksi, pengiriman, dan pemasangan dibicarakan sesuai lokasi serta jenis pekerjaannya.
            </p>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/35">
                WhatsApp
              </p>
              <p className="mt-3 text-2xl font-black tracking-[-0.02em]">
                {siteConfig.whatsappDisplay}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/35">
                Jam operasional
              </p>
              <p className="mt-3 text-2xl font-black tracking-[-0.02em]">
                {siteConfig.operatingHours}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/35">
                Basis layanan
              </p>
              <p className="mt-3 text-2xl font-black tracking-[-0.02em]">
                {siteConfig.areaFocus}
              </p>
              <p className="mt-2 text-sm font-medium leading-7 text-white/62">
                {siteConfig.areaNote}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/35">
                Workshop
              </p>
              <div className="mt-3 grid gap-2 text-sm font-medium leading-7 text-white/64">
                {siteConfig.workshops.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:grid md:grid-cols-[1fr_0.5fr]">
          <div className="p-7 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
              Mulai sekarang
            </p>
            <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
              Kirim foto ruang dan ceritakan mau dibuat seperti apa.
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/62">
              Chat awal bisa lewat WhatsApp sebelum menentukan perlu survey, gambar, bahan, atau langsung hitung estimasi.
            </p>
            <a
              href={whatsappHref("Halo BUF, saya mau tanya interior atau furniture custom. Lokasi proyek: ... Ukuran kira-kira: ... Saya akan kirim foto ruang dan referensi.")}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue"
            >
              Chat WhatsApp BUF
            </a>
          </div>
          <div className="bg-[#111]">
              <img
                src="/assets/portfolio/interior-rumah-open-space-backdrop-tv-buf-01.webp"
                alt="Referensi interior rumah custom BUF"
                className="h-full max-h-[360px] min-h-[220px] w-full object-contain md:object-cover"
              />
            </div>
        </div>
      </section>
    </main>
  );
}
