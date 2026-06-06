import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import { routes } from "@/content/routes";
import { workflowIntro, workflowNotes, workflowSteps } from "@/content/workflow";

export const metadata = buildMetadata(staticPageMetadata.caraKerja);

export default function CaraKerjaPage() {
  return (
    <main>
      <section className="wood-grain-bg px-6 py-12 sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-wood shadow-soft backdrop-blur sm:text-[11px]">
              {workflowIntro.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
              {workflowIntro.title}
            </h1>
          </div>

          <p className="max-w-2xl text-base font-medium leading-8 text-muted sm:text-lg">
            {workflowIntro.description}
          </p>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {workflowSteps.map((step) => (
              <article key={step.number} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-sm font-black text-white">
                  {step.number}
                </span>
                <h2 className="mt-5 text-2xl font-black leading-tight tracking-[-0.02em] text-charcoal">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm font-medium leading-7 text-muted">
                  {step.description}
                </p>
                <div className="mt-5 grid gap-3">
                  {step.details.map((item) => (
                    <p key={item} className="rounded-2xl bg-[#fffaf2] px-4 py-3 text-sm font-bold leading-6 text-charcoal">
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-14 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
              Catatan penting
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] sm:text-5xl">
              Estimasi custom harus berdasarkan kebutuhan nyata.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {workflowNotes.map((item) => (
              <p key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 text-sm font-bold leading-7 text-white/72">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 text-white shadow-[0_28px_90px_rgba(0,0,0,0.2)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">
                Siap mulai konsultasi?
              </p>
              <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
                Kirim foto, ukuran kasar, dan kebutuhan ruang melalui WhatsApp.
              </h2>
            </div>
            <Link
              href={routes.kontak}
              className="rounded-full bg-brand-blue px-7 py-3.5 text-center text-sm font-black text-white shadow-blue"
            >
              Buka Kontak BUF
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
