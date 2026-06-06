"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { galleryCategories, getGalleryCategoryLabel } from "@/content/gallery";

const whatsappNumber = "6285772208688";

function buildWhatsappHref(item) {
  const text = `Halo BUF, saya tertarik dengan model ${item.title}. Bisa konsultasi untuk kebutuhan ruang saya?`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

const mediaFilters = [
  { id: "semua", label: "Semua" },
  { id: "photo", label: "Foto" },
  { id: "video", label: "Video" },
];

export default function GalleryGridClient({ items }) {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [activeMedia, setActiveMedia] = useState("semua");
  const [selectedItem, setSelectedItem] = useState(null);

  const activeItems = useMemo(() => {
    return items.filter((item) => {
      const mediaType = item.mediaType || "photo";
      const matchCategory = activeCategory === "semua" || item.category === activeCategory;
      const matchMedia = activeMedia === "semua" || mediaType === activeMedia;

      return matchCategory && matchMedia;
    });
  }, [items, activeCategory, activeMedia]);

  const activeCategoryLabel = activeCategory === "semua" ? "Semua" : getGalleryCategoryLabel(activeCategory);
  const selectedMediaType = selectedItem?.mediaType || "photo";

  return (
    <>
      <section className="sticky top-[73px] z-30 border-b border-stone-200 bg-[#fffaf2]/92 px-4 py-3 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl gap-3">
          <div className="flex gap-2 overflow-x-auto">
            {galleryCategories.map((category) => {
              const isActive = category.id === activeCategory;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`shrink-0 rounded-full px-5 py-3 text-xs font-black ${
                    isActive
                      ? "bg-charcoal text-white shadow-soft"
                      : "bg-white text-charcoal shadow-soft"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {mediaFilters.map((filter) => {
              const isActive = filter.id === activeMedia;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveMedia(filter.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-[11px] font-black ${
                    isActive
                      ? "bg-brand-blue text-white shadow-blue"
                      : "bg-white text-charcoal shadow-soft"
                  }`}
                >
                  {filter.label}
                </button>
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
              {activeItems.map((item, index) => {
                const mediaType = item.mediaType || "photo";
                const previewImage = item.thumbnail || item.poster || item.image;

                return (
                  <article
                    key={item.slug}
                    className={`group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(23,23,23,0.14)] ${
                      index === 0 ? "lg:col-span-2" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className={`relative block w-full overflow-hidden bg-cover bg-center text-left transition duration-500 group-hover:scale-[1.03] ${
                        index === 0 ? "min-h-[420px]" : "min-h-[300px]"
                      }`}
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.00), rgba(0,0,0,0.22)), url('${previewImage}')`,
                      }}
                      aria-label={`Lihat ${item.title}`}
                    >
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-charcoal shadow-soft">
                        {mediaType === "video" ? "Video" : "Foto"}
                      </span>

                      {mediaType === "video" ? (
                        <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/92 text-2xl font-black text-charcoal shadow-soft">
                          ▶
                        </span>
                      ) : null}
                    </button>

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
                );
              })}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-soft">
              <h2 className="text-3xl font-black tracking-[-0.02em] text-charcoal">
                Belum ada visual di filter ini.
              </h2>
              <p className="mt-3 text-sm font-medium leading-7 text-muted">
                Foto dan video baru bisa ditambahkan kapan saja melalui data gallery.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("semua");
                  setActiveMedia("semua");
                }}
                className="mt-6 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm font-black text-white"
              >
                Lihat semua gallery
              </button>
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
                Foto dan video gallery bisa jadi titik awal untuk diskusi desain, material, finishing, dan estimasi pengerjaan.
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
            <div className="min-h-[220px] bg-[linear-gradient(180deg,rgba(23,23,23,0.05),rgba(23,23,23,0.35)),url('/assets/portfolio/lemari-custom-display-lighting-buf-01.webp')] bg-cover bg-center" />
          </div>
        </div>
      </section>

      {selectedItem ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/72 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-charcoal shadow-soft"
            >
              Tutup
            </button>

            {selectedMediaType === "video" ? (
              <video
                src={selectedItem.video}
                poster={selectedItem.poster || selectedItem.thumbnail}
                controls
                playsInline
                preload="metadata"
                className="max-h-[78vh] w-full bg-black object-contain"
              />
            ) : (
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[78vh] w-full object-contain"
              />
            )}

            <div className="p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-brand-blue">
                {selectedMediaType === "video" ? "Video" : "Foto"} • {getGalleryCategoryLabel(selectedItem.category)} • {selectedItem.type}
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.02em] text-charcoal">
                {selectedItem.title}
              </h2>
              <p className="mt-2 text-sm font-medium leading-7 text-muted">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
