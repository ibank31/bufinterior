import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { routes } from "@/content/routes";
import { localServiceRoutes } from "@/content/local-services";
import { breadcrumbSchema, faqSchema, localServiceSchema } from "@/lib/schema";

const whatsappNumber = "6285772208688";

function buildWhatsappHref(service) {
  const text = `Halo Berkah Utami Furniture, saya ingin konsultasi ${service.shortTitle}. Lokasi saya di ${service.area}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function LocalServicePage({ service }) {
  const whatsappHref = buildWhatsappHref(service);

  const schemas = [
    localServiceSchema(service),
    faqSchema(service.faqs.map(([question, answer]) => ({ question, answer }))),
    breadcrumbSchema([
      ["Beranda", routes.home],
      ["Jasa Area", localServiceRoutes.jasa],
      [service.shortTitle, service.href],
    ]),
  ];

  return (
    <main>
      <JsonLd data={schemas} />

      <section className="bg-charcoal px-6 py-12 text-white sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Link
              href={localServiceRoutes.jasa}
              className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 backdrop-blur sm:text-[11px]"
            >
              ← Semua jasa area
            </Link>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
              {service.category} • {service.area}
            </p>

            <h1 className="mt-4 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {service.heroTitle}
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/68 sm:text-lg sm:leading-8">
              {service.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand-blue px-7 py-3.5 text-center text-sm font-black text-white shadow-blue"
              >
                {service.ctaLabel}
              </a>
              <Link
                href={service.serviceHref}
                className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-center text-sm font-black text-white backdrop-blur"
              >
                Pelajari Layanan Umum
              </Link>
              <Link
                href={routes.gallery}
                className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-center text-sm font-black text-white backdrop-blur"
              >
                Lihat Gallery
              </Link>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
                Sinyal lokal
              </p>
              <p className="mt-3 text-sm font-medium leading-7 text-white/68">
                Workshop/kantor Berkah Utami Furniture berada di Berkoh, Purwokerto. Area pengerjaan dapat dikonfirmasi melalui WhatsApp untuk wilayah Purwokerto, Banyumas, dan sekitar.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.2)]">
            <div
              className="min-h-[410px] rounded-[2rem] bg-cover bg-center sm:min-h-[500px]"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.28)), url('${service.visual}')`,
              }}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
              Fokus halaman
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
              Dibuat khusus untuk kebutuhan {service.shortTitle.toLowerCase()}.
            </h2>
            <p className="mt-5 text-base font-medium leading-7 text-muted">
              {service.intro}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {service.serviceTypes.map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-soft">
                <p className="text-lg font-black leading-snug tracking-[-0.02em] text-charcoal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Kenapa BUF
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
                Vendor lokal dengan pengerjaan custom dari Purwokerto.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {service.reasons.map((item, index) => (
                <div key={item} className="rounded-[1.75rem] border border-stone-200 bg-white/88 p-5 shadow-soft backdrop-blur">
                  <span className="inline-flex rounded-full bg-charcoal px-3 py-1 text-[11px] font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-base font-bold leading-7 text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-14 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
              Cara mulai
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] sm:text-5xl">
              Konsultasi awal bisa dari foto ruang, ukuran kasar, dan kebutuhan fungsi.
            </h2>
            <p className="mt-5 text-base font-medium leading-7 text-white/62">
              Tidak harus langsung deal. Kirim kebutuhan awal melalui WhatsApp agar BUF bisa memahami ukuran, fungsi, material, dan perkiraan arah pengerjaan.
            </p>
          </div>

          <div className="grid gap-3">
            {["Kirim foto/referensi", "Ceritakan ukuran dan kebutuhan", "Diskusi material dan model", "Konfirmasi survey atau pengerjaan"].map((item, index) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
                  Langkah {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-xl font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-14 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
            FAQ
          </p>
          <h2 className="mt-4 text-center text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
            Pertanyaan umum sebelum konsultasi.
          </h2>

          <div className="mt-8 grid gap-4">
            {service.faqs.map(([question, answer]) => (
              <div key={question} className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-soft">
                <h3 className="text-lg font-black tracking-[-0.02em] text-charcoal">{question}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-muted">{answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-charcoal p-7 text-center text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)]">
            <h2 className="text-3xl font-black leading-[1.1] tracking-[-0.02em]">
              Mau konsultasi {service.shortTitle.toLowerCase()}?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-7 text-white/62">
              Klik WhatsApp dan kirim kebutuhan awal. BUF akan bantu arahkan opsi yang paling masuk akal sesuai ukuran, fungsi, dan budget.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-brand-blue px-7 py-3.5 text-sm font-black text-white shadow-blue"
              >
                {service.ctaLabel}
              </a>
              <Link
                href={routes.estimasiBiaya}
                className="inline-flex rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-black text-white backdrop-blur"
              >
                Cek Estimasi Biaya
              </Link>
              <Link
                href={routes.kontak}
                className="inline-flex rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-black text-white backdrop-blur"
              >
                Lihat Kontak Lengkap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
