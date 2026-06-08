import Link from "next/link";
import { buildWhatsappHref } from "@/lib/whatsapp";

export default function AreaPage({ area }) {
  return (
    <main>
      <section className="wood-grain-bg px-6 py-12 sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-wood shadow-soft backdrop-blur sm:text-[11px]">
              Area Layanan BUF
            </p>
            <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
              {area.heroTitle}
            </h1>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white/82 p-6 shadow-soft backdrop-blur">
            <p className="text-base font-medium leading-8 text-muted sm:text-lg">
              {area.heroDescription}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={buildWhatsappHref(area.ctaText)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-charcoal px-7 py-3.5 text-center text-sm font-black text-white shadow-soft"
              >
                {area.ctaLabel}
              </a>
              <Link
                href={area.fallbackHref}
                className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-center text-sm font-black text-charcoal shadow-soft"
              >
                Lihat Kontak
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Layanan di {area.name}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
                Pilih jenis pekerjaan yang paling dekat dengan rencana Anda.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-8 text-muted lg:justify-self-end">
              {area.intro}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {area.services.map((service, index) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_24px_70px_rgba(23,23,23,0.12)]"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-wood via-brand-blue to-brand-red" />
                <span className="inline-flex rounded-full bg-charcoal px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-black leading-snug tracking-[-0.02em] text-charcoal">
                  {service.shortTitle}
                </h3>
                <p className="mt-4 text-sm font-medium leading-7 text-muted">
                  {service.heroDescription}
                </p>
                <div className="mt-6 border-t border-stone-200 pt-4">
                  <span className="inline-flex rounded-full bg-brand-blue px-4 py-2 text-xs font-black text-white shadow-blue transition group-hover:bg-charcoal">
                    Lihat Detail →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-charcoal p-7 text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">
              Kebutuhan populer
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] sm:text-5xl">
              Banyak pelanggan mulai dari masalah ruang yang sederhana.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {area.popularNeeds.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-stone-200 bg-white/82 p-5 shadow-soft backdrop-blur"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-xl font-black leading-snug tracking-[-0.02em] text-charcoal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Cara mulai
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
                Mulai dari foto ruang, ukuran kasar, dan bagian yang ingin dibuat.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {area.steps.map(([number, title, desc]) => (
                <div
                  key={number}
                  className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-soft"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-sm font-black text-white shadow-soft">
                    {number}
                  </span>
                  <h3 className="mt-6 text-xl font-black tracking-[-0.02em] text-charcoal">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-7 text-muted">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-charcoal p-7 text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">
                FAQ {area.name}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] sm:text-5xl">
                Pertanyaan sebelum konsultasi.
              </h2>
            </div>
            <div className="grid gap-3">
              {area.faqs.map(([question, answer]) => (
                <div
                  key={question}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5"
                >
                  <h3 className="text-lg font-black tracking-[-0.02em]">
                    {question}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-7 text-white/62">
                    {answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-7">
            <a
              href={buildWhatsappHref(area.ctaText)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-brand-blue px-7 py-3.5 text-sm font-black text-white shadow-blue"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
