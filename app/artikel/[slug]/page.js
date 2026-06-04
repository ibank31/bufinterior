import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getRelatedArticles } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/content/routes";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return buildMetadata({
      title: "Artikel Tidak Ditemukan | BUF",
      description: "Artikel yang Anda cari tidak ditemukan.",
      path: "/artikel",
    });
  }

  return buildMetadata({
    title: `${article.title} | BUF`,
    description: article.excerpt,
    path: `/artikel/${article.slug}`,
  });
}

export default function ArticleDetailPage({ params }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug);

  return (
    <main>
      <section className="wood-grain-bg px-6 py-12 sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <Link
              href="/artikel"
              className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-wood shadow-soft backdrop-blur sm:text-[11px]"
            >
              ← Semua artikel
            </Link>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
              {article.category} • {article.readingTime}
            </p>
            <h1 className="mt-4 max-w-4xl text-[2.55rem] font-black leading-[1.06] tracking-[-0.04em] text-charcoal sm:text-6xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg sm:leading-8">
              {article.excerpt}
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-white/70 bg-white/45 p-3 shadow-[0_35px_100px_rgba(23,23,23,0.14)] backdrop-blur">
            <div className="min-h-[390px] rounded-[2rem] bg-cover bg-center" style={{
              backgroundImage: `linear-gradient(180deg,rgba(23,23,23,0.00),rgba(23,23,23,0.10)),url('${article.heroImage}')`,
            }} />
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-soft">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">
                Ringkasan
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.02em] text-charcoal">
                Cocok dibaca sebelum konsultasi.
              </h2>
              <p className="mt-3 text-sm font-medium leading-7 text-muted">
                Setelah membaca, Anda bisa langsung konsultasi sesuai kebutuhan ruang.
              </p>
              <Link href={article.relatedServiceHref} className="mt-5 inline-flex rounded-full bg-charcoal px-5 py-3 text-sm font-black text-white">
                Layanan {article.relatedServiceLabel}
              </Link>
            </div>
          </aside>

          <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft md:p-8">
            <div className="grid gap-8">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-3xl font-black leading-[1.1] tracking-[-0.02em] text-charcoal">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-base font-medium leading-8 text-muted">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] bg-charcoal text-white md:grid md:grid-cols-[1fr_0.42fr]">
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
                  Konsultasi
                </p>
                <h2 className="mt-3 text-2xl font-black leading-[1.12] tracking-[-0.02em]">
                  Punya kebutuhan serupa? Mulai dari foto ruang dan ukuran kasar dulu.
                </h2>
                <Link href={routes.kontak} className="mt-6 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue">
                  Hubungi BUF
                </Link>
              </div>
              <div className="min-h-[200px] bg-[linear-gradient(180deg,rgba(23,23,23,0.05),rgba(23,23,23,0.35)),url('/assets/portfolio/backdrop-tv-ruang-keluarga-baf-banyumas.webp')] bg-cover bg-center" />
            </div>
          </article>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
            Artikel terkait
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {relatedArticles.map((item) => (
              <Link key={item.slug} href={`/artikel/${item.slug}`} className="rounded-[2rem] border border-stone-200 bg-white/82 p-5 shadow-soft backdrop-blur transition hover:-translate-y-1">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-wood">
                  {item.category}
                </p>
                <h2 className="mt-4 text-2xl font-black leading-[1.12] tracking-[-0.02em] text-charcoal">
                  {item.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm font-medium leading-7 text-muted">
                  {item.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
