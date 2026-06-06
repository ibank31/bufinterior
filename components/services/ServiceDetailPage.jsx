import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { routes } from "@/content/routes";
import { serviceHighlights } from "@/content/services";
import { articles } from "@/content/articles";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

const whatsappNumber = "6285772208688";

const processSteps = [
  ["01", "Konsultasi kebutuhan", "Ceritakan ukuran ruang, fungsi yang dibutuhkan, referensi desain, dan gambaran budget."],
  ["02", "Survey / ukur ruang", "Kebutuhan survey atau pengukuran bisa dikonfirmasi terlebih dahulu."],
  ["03", "Arahan desain & material", "BUF bantu arahkan bentuk, finishing, material, dan opsi pengerjaan yang paling masuk akal."],
  ["04", "Produksi & pemasangan", "Pengerjaan dilakukan dari workshop sampai pemasangan sesuai kesepakatan."],
];

const userQuestions = [
  "Ruang saya ukurannya tidak standar, bisa dibuat custom?",
  "Saya belum punya desain, apakah bisa dibantu konsepnya?",
  "Material bisa menyesuaikan budget?",
  "Bisa survey atau koordinasi sesuai lokasi proyek?",
  "Kalau hanya ingin konsultasi dulu boleh?",
];

const defaultFaqs = [
  {
    question: "Apakah layanan BUF bisa custom sesuai ukuran ruang?",
    answer:
      "Bisa. BUF mengerjakan interior dan furniture custom dengan menyesuaikan ukuran ruang, fungsi yang dibutuhkan, material, dan budget pelanggan.",
  },
  {
    question: "Apakah harus sudah punya desain sebelum konsultasi?",
    answer:
      "Tidak harus. Pelanggan bisa mulai dari foto ruang, ukuran kasar, referensi desain, atau kebutuhan fungsi. BUF dapat membantu memberi arahan awal.",
  },
  {
    question: "Apakah material bisa dipilih sendiri?",
    answer:
      "Material bersifat by request pelanggan dan dapat disesuaikan dengan kebutuhan, tampilan, fungsi ruang, serta budget pengerjaan.",
  },
  {
    question: "Apakah BUF bisa survey atau koordinasi sesuai lokasi proyek?",
    answer:
      "Ya, kebutuhan survey atau koordinasi dapat dikonfirmasi melalui kontak BUF sesuai lokasi proyek.",
  },
];

const serviceHeroVisuals = {
  "kitchen-set-banyumas": "/assets/portfolio/kitchen-set-luxury-rak-display-buf-01.webp",
  "custom-furniture-banyumas": "/assets/portfolio/meja-kerja-custom-panel-buf-01.webp",
  "interior-rumah-banyumas": "/assets/portfolio/interior-rumah-luxury-panel-kayu-buf-01.webp",
  "interior-toko-banyumas": "/assets/portfolio/interior-toko-display-silver-buf-01.webp",
  "backdrop-tv-banyumas": "/assets/portfolio/backdrop-tv-bawah-tangga-modern-buf-01.webp",
  "lemari-custom-banyumas": "/assets/portfolio/lemari-custom-display-lighting-buf-01.webp",
  "booth-usaha-banyumas": "/assets/portfolio/booth-harmoni-silver-display-buf-01.webp",
};

const serviceCtaVisuals = {
  "kitchen-set-banyumas": "/assets/portfolio/kitchen-set-proses-pemasangan-buf-01.webp",
  "custom-furniture-banyumas": "/assets/portfolio/meja-kerja-custom-panel-buf-01.webp",
  "interior-rumah-banyumas": "/assets/portfolio/interior-rumah-open-space-backdrop-tv-buf-01.webp",
  "interior-toko-banyumas": "/assets/portfolio/booth-travel-custom-moazzam-buf-01.webp",
  "backdrop-tv-banyumas": "/assets/portfolio/backdrop-tv-proses-pemasangan-buf-01.webp",
  "lemari-custom-banyumas": "/assets/portfolio/wardrobe-meja-rias-display-buf-01.webp",
  "booth-usaha-banyumas": "/assets/portfolio/booth-pang-waffle-custom-buf-01.webp",
};

const relatedArticleSlugsByService = {
  "kitchen-set-banyumas": [
    "biaya-kitchen-set-custom",
    "material-kitchen-set-yang-bagus",
    "tips-memilih-jasa-interior-custom",
  ],
  "custom-furniture-banyumas": [
    "lemari-custom-vs-lemari-jadi",
    "tips-memilih-jasa-interior-custom",
    "material-kitchen-set-yang-bagus",
  ],
  "interior-rumah-banyumas": [
    "tips-memilih-jasa-interior-custom",
    "material-kitchen-set-yang-bagus",
    "lemari-custom-vs-lemari-jadi",
  ],
  "interior-toko-banyumas": [
    "tips-memilih-jasa-interior-custom",
    "biaya-kitchen-set-custom",
    "lemari-custom-vs-lemari-jadi",
  ],
  "backdrop-tv-banyumas": [
    "tips-memilih-jasa-interior-custom",
    "lemari-custom-vs-lemari-jadi",
    "material-kitchen-set-yang-bagus",
  ],
  "lemari-custom-banyumas": [
    "lemari-custom-vs-lemari-jadi",
    "tips-memilih-jasa-interior-custom",
    "material-kitchen-set-yang-bagus",
  ],
  "booth-usaha-banyumas": [
    "tips-memilih-jasa-interior-custom",
    "biaya-kitchen-set-custom",
    "lemari-custom-vs-lemari-jadi",
  ],
};

function getRelatedArticlesForService(serviceSlug) {
  const slugs = relatedArticleSlugsByService[serviceSlug] || [];
  return slugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter(Boolean);
}

function buildWhatsappHref(service) {
  const text = `Halo BUF, saya ingin konsultasi ${service.shortTitle}. Saya ingin tanya apakah bisa custom sesuai ukuran ruang saya.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function ServiceDetailPage({ service }) {
  const whatsappHref = buildWhatsappHref(service);
  const relatedArticles = getRelatedArticlesForService(service.slug);
  const heroVisual = serviceHeroVisuals[service.slug] || "/assets/portfolio/interior-rumah-luxury-panel-kayu-buf-01.webp";
  const ctaVisual = serviceCtaVisuals[service.slug] || heroVisual;

  const schemas = [
    serviceSchema(service),
    faqSchema(defaultFaqs),
    breadcrumbSchema([
      ["Beranda", routes.home],
      ["Layanan", routes.layanan],
      [service.shortTitle, service.href],
    ]),
  ];

  return (
    <main>
      <JsonLd data={schemas} />

      <section className="wood-grain-bg relative overflow-hidden px-6 py-12 sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <Link
              href={routes.layanan}
              className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-wood shadow-soft backdrop-blur sm:text-[11px]"
            >
              ← Semua layanan
            </Link>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
              {service.category}
            </p>

            <h1 className="mt-4 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
              {service.heroTitle || service.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg sm:leading-8">
              {service.heroDescription || service.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-charcoal px-7 py-3.5 text-center text-sm font-black text-white shadow-[0_18px_45px_rgba(23,23,23,0.2)]"
              >
                Konsultasi via WhatsApp
              </a>
              <Link
                href={routes.gallery}
                className="rounded-full border border-stone-300 bg-white/80 px-7 py-3.5 text-center text-sm font-black text-charcoal shadow-soft backdrop-blur"
              >
                Lihat Contoh Pekerjaan
              </Link>
              <Link
                href={routes.estimasiBiaya}
                className="rounded-full border border-stone-300 bg-white/80 px-7 py-3.5 text-center text-sm font-black text-charcoal shadow-soft backdrop-blur"
              >
                Cek Estimasi Biaya
              </Link>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-stone-300/70 bg-white/62 p-5 shadow-soft backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">
                Cocok jika Anda bertanya:
              </p>
              <div className="mt-4 grid gap-2">
                {userQuestions.slice(0, 3).map((item) => (
                  <p key={item} className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-black leading-6 text-charcoal">
                    “{item}”
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/70 bg-white/45 p-3 shadow-[0_35px_100px_rgba(23,23,23,0.14)] backdrop-blur">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <div
                className="min-h-[410px] bg-cover bg-center sm:min-h-[460px]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(23,23,23,0.00), rgba(23,23,23,0.04)), url('${heroVisual}')`,
                }}
              />
              <div className="border-t border-stone-200 bg-charcoal p-5 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                  Custom sesuai ruang
                </p>
                <p className="mt-2 text-2xl font-black leading-[1.2] tracking-[-0.02em]">
                  Ukuran, material, dan finishing bisa disesuaikan kebutuhan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-wood/55" />
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                  Yang biasanya dipikirkan pelanggan
                </p>
              </div>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
                Sebelum membuat {service.shortTitle.toLowerCase()}, biasanya orang ingin jelas dulu soal ukuran, material, dan budget.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-7 text-muted lg:justify-self-end">
              Karena itu, konsultasi awal tidak harus langsung deal. Tujuannya memahami kebutuhan ruang dan melihat opsi yang paling realistis untuk dikerjakan.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {userQuestions.map((item, index) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white/86 p-5 shadow-soft backdrop-blur"
              >
                <span className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-brand-blue" />
                <div className="pl-3">
                  <span className="inline-flex rounded-full bg-charcoal px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">
                    Pertanyaan {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 text-lg font-black leading-snug tracking-[-0.02em] text-charcoal">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-16 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">
              Kenapa konsultasi dulu?
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] sm:text-5xl">
              Hasil custom yang rapi dimulai dari ukuran dan kebutuhan yang jelas.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/64">
              Setiap ruang punya kondisi berbeda. Ada yang butuh banyak penyimpanan, ada yang mengejar tampilan, ada juga yang harus menyesuaikan budget. Konsultasi membantu menentukan prioritas sebelum produksi.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {serviceHighlights.map((item, index) => (
              <div key={item} className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <div className="absolute -right-4 -top-3 text-[4.2rem] font-black leading-none tracking-[-0.12em] text-white/[0.06]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[11px] font-black text-charcoal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 text-xl font-black leading-snug tracking-[-0.02em]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-wood/55" />
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
              Alur pengerjaan
            </p>
          </div>

          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
            Dari tanya-tanya sampai pemasangan, alurnya dibuat jelas.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {processSteps.map(([number, title, desc]) => (
              <div key={number} className="rounded-[1.75rem] border border-stone-200 bg-white/82 p-5 shadow-soft backdrop-blur">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-sm font-black text-white shadow-soft">
                  {number}
                </span>
                <h3 className="mt-6 text-xl font-black leading-[1.15] tracking-[-0.02em] text-charcoal">
                  {title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-muted">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Panduan terkait
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
                Baca dulu sebelum menentukan desain, material, dan budget.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-7 text-muted lg:justify-self-end">
              Beberapa pertanyaan biasanya lebih mudah dijawab setelah memahami faktor biaya, material, dan perbandingan custom furniture.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/artikel/${article.slug}`}
                className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(23,23,23,0.14)]"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-wood">
                  {article.category} • {article.readingTime}
                </p>
                <h3 className="mt-4 text-2xl font-black leading-[1.12] tracking-[-0.02em] text-charcoal">
                  {article.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm font-medium leading-7 text-muted">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
              Pertanyaan umum
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
              Jawaban singkat sebelum Anda menghubungi BUF.
            </h2>
          </div>

          <div className="grid gap-3">
            {defaultFaqs.map((item) => (
              <div key={item.question} className="rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-soft">
                <h3 className="text-lg font-black leading-snug tracking-[-0.02em] text-charcoal">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-muted">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:grid md:grid-cols-[1fr_0.58fr]">
          <div className="p-7 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
              Mulai dari konsultasi
            </p>
            <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
              Kirim foto ruang dan kebutuhan {service.shortTitle.toLowerCase()}. BUF bantu arahkan opsi pengerjaan.
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/62">
              Ceritakan ukuran ruang, kebutuhan fungsi, referensi model, dan budget. Tidak harus langsung punya desain final.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue"
            >
              Chat WhatsApp BUF
            </a>
          </div>
          <div
            className="min-h-[240px] bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(23,23,23,0.05), rgba(23,23,23,0.35)), url('${ctaVisual}')`,
            }}
          />
        </div>
      </section>
    </main>
  );
}
