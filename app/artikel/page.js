import Link from "next/link";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";
import { articles } from "@/content/articles";
import { routes } from "@/content/routes";

export const metadata = buildMetadata(staticPageMetadata.artikel);

export default function ArtikelPage() {
  const featured = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <main>
      <section className="wood-grain-bg px-6 py-12 sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-wood shadow-soft backdrop-blur sm:text-[11px]">
              Artikel BUF
            </p>
            <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
              Panduan interior dan custom furniture sebelum mulai proyek.
            </h1>
          </div>

          <p className="max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg sm:leading-8">
            Artikel ini membantu memahami biaya, material, proses, dan pertimbangan sebelum membuat interior atau furniture custom.
          </p>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <article className="overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] lg:grid lg:grid-cols-[0.95fr_1.05fr]">
            <div
              className="min-h-[320px] bg-cover bg-center lg:min-h-[520px]"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.35)), url('${featured.heroImage}')`,
              }}
            />
            <div className="p-7 lg:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/42">
                Featured / {featured.category}
              </p>
              <h2 className="mt-4 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 text-sm font-medium leading-7 text-white/64">
                {featured.excerpt}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={`/artikel/${featured.slug}`}
                  className="rounded-full bg-brand-blue px-6 py-3 text-center text-sm font-black text-white shadow-blue"
                >
                  Baca Artikel
                </Link>
                <Link
                  href={featured.relatedServiceHref}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-center text-sm font-black text-white"
                >
                  Layanan {featured.relatedServiceLabel}
                </Link>
              </div>
            </div>
          </article>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherArticles.map((article) => (
              <article key={article.slug} className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(23,23,23,0.14)]">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-wood">
                  {article.category} • {article.readingTime}
                </p>
                <h2 className="mt-4 text-2xl font-black leading-[1.12] tracking-[-0.02em] text-charcoal">
                  {article.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm font-medium leading-7 text-muted">
                  {article.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-stone-200 pt-4">
                  <Link href={article.relatedServiceHref} className="text-xs font-black uppercase tracking-[0.16em] text-muted">
                    {article.relatedServiceLabel}
                  </Link>
                  <Link href={`/artikel/${article.slug}`} className="rounded-full bg-charcoal px-4 py-2 text-xs font-black text-white transition hover:bg-brand-blue">
                    Baca →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:grid md:grid-cols-[1fr_0.5fr]">
            <div className="p-7 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
                Butuh arahan langsung?
              </p>
              <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
                Artikel bisa membantu, tapi ukuran dan kebutuhan ruang tetap perlu dikonsultasikan.
              </h2>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/62">
                Kirim foto ruang, ukuran kasar, dan kebutuhan. BUF bantu arahkan opsi desain, material, dan pengerjaan.
              </p>
              <Link href={routes.kontak} className="mt-7 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue">
                Konsultasi via WhatsApp
              </Link>
            </div>
            <div className="min-h-[220px] bg-[linear-gradient(180deg,rgba(23,23,23,0.05),rgba(23,23,23,0.35)),url('/assets/portfolio/meja-kerja-custom-panel-buf-01.webp')] bg-cover bg-center" />
          </div>
        </div>
      </section>
    </main>
  );
}
