import Link from "next/link";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";
import {
  galleryCategories,
  galleryItems,
  getGalleryCategoryLabel,
} from "@/content/gallery";

export const metadata = buildMetadata(staticPageMetadata.gallery);

const whatsappNumber = "6285772208688";

function buildWhatsappHref(item) {
  const text = `Halo BUF, saya tertarik dengan model ${item.title}. Bisa konsultasi untuk kebutuhan ruang saya?`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function GalleryPage() {
  const activeItems = galleryItems;
  const activeCategoryLabel = "Semua";

  return (
    <main>
      <section className="bg-charcoal px-6 py-12 text-white sm:px-8 lg:px-4 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/55 backdrop-blur sm:text-[11px]">
              Gallery BUF
            </p>
            <h1 className="mt-5 max-w-4xl text-[2.55rem] font-black leading-[1.06] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Pilih referensi visual yang paling mendekati kebutuhan ruangmu.
            </h1>
          </div>

          <p className="max-w-2xl text-base font-medium leading-7 text-white/64 sm:text-lg sm:leading-8">
            Lihat contoh backdrop TV, custom furniture, booth usaha, interior rumah, dan kebutuhan ruang lain. Kalau ada model yang cocok, langsung tanyakan via WhatsApp.
          </p>
        </div>
      </section>

      <section className="sticky top-[73px] z-30 border-b border-stone-200 bg-[#fffaf2]/92 px-4 py-3 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-2 overflow-x-auto">
            {galleryCategories.map((category) => {
              const isActive = category.id === "semua";

              return (
                <span
                  key={category.id}
                  className={`shrink-0 rounded-full px-5 py-3 text-xs font-black ${
                    isActive
                      ? "bg-charcoal text-white shadow-soft"
                      : "bg-white text-charcoal shadow-soft"
                  }`}
                >
                  {category.label}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">
                Kategori aktif
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] text-charcoal">
                {activeCategoryLabel}
              </h2>
            </div>
            <p className="text-sm font-bold text-muted">
              {activeItems.length} contoh visual tersedia
            </p>
          </div>

          {activeItems.length ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {activeItems.map((item, index) => (
                <article
                  key={item.slug}
                  className={`group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(23,23,23,0.14)] ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`bg-cover bg-center transition duration-500 group-hover:scale-[1.03] ${
                      index === 0
                        ? "min-h-[420px]"
                        : "min-h-[300px]"
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.00), rgba(0,0,0,0.22)), url('${item.image}')`,
                    }}
                  />

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-wood">
                        {getGalleryCategoryLabel(item.category)}
                      </p>
                      <span className="rounded-full bg-[#f5efe6] px-3 py-1 text-[11px] font-black text-muted">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-black leading-[1.12] tracking-[-0.02em] text-charcoal">
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm font-medium leading-7 text-muted">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-stone-200 pt-4">
                      <Link
                        href={item.serviceHref}
                        className="text-xs font-black uppercase tracking-[0.16em] text-muted"
                      >
                        {item.serviceLabel}
                      </Link>
                      <a
                        href={buildWhatsappHref(item)}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-charcoal px-4 py-2 text-xs font-black text-white transition hover:bg-brand-blue"
                      >
                        Tanya →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-soft">
              <h2 className="text-3xl font-black tracking-[-0.02em] text-charcoal">
                Belum ada foto di kategori ini.
              </h2>
              <p className="mt-3 text-sm font-medium leading-7 text-muted">
                Foto baru bisa ditambahkan kapan saja melalui data gallery.
              </p>
              <Link href="/gallery" className="mt-6 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm font-black text-white">
                Lihat semua gallery
              </Link>
            </div>
          )}

          <div className="mt-10 overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:grid md:grid-cols-[1fr_0.5fr]">
            <div className="p-7 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
                Sudah ada referensi?
              </p>
              <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
                Kirim model yang kamu suka. BUF bantu sesuaikan dengan ukuran ruang dan budget.
              </h2>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/62">
                Foto gallery bisa jadi titik awal untuk diskusi desain, material, finishing, dan estimasi pengerjaan.
              </p>
              <a
                href="https://wa.me/6285772208688?text=Halo%20BUF%2C%20saya%20ingin%20konsultasi%20desain%20berdasarkan%20contoh%20gallery."
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue"
              >
                Konsultasi via WhatsApp
              </a>
            </div>
            <div className="min-h-[220px] bg-[linear-gradient(180deg,rgba(23,23,23,0.05),rgba(23,23,23,0.35)),url('/assets/portfolio/wardrobe-meja-rias-custom-buf-01.webp')] bg-cover bg-center" />
          </div>
        </div>
      </section>
    </main>
  );
}
