import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/content/routes";
import { buildWhatsappHref } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Estimasi Biaya Interior Custom, Kitchen Set & Furniture | BUF",
  description:
    "Panduan estimasi biaya awal untuk kitchen set custom, lemari custom, backdrop TV, booth usaha, interior toko, dan custom furniture. Hitung gambaran budget dari ukuran kasar sebelum konsultasi.",
  path: "/estimasi-biaya",
});

function whatsappHref(text) {
  return buildWhatsappHref(text);
}

const estimationCards = [
  {
    label: "Kitchen Set Custom",
    unit: "per meter lari",
    range: "Mulai ± Rp1,8 juta / meter lari",
    description:
      "Kitchen set biasanya paling sering membuat calon pelanggan bingung karena detailnya bisa sangat berbeda. Kitchen set sederhana tentu berbeda dengan kitchen set lengkap yang memakai kabinet atas-bawah, top table, backsplash, banyak laci, rak piring, lampu, dan aksesoris tambahan.",
    href: routes.kitchenSet,
    waText:
      "Halo BUF, saya ingin minta estimasi awal kitchen set custom. Ukuran kasar saya sekitar ... meter. Saya akan kirim foto ruang dan referensi desain.",
    tiers: [
      {
        name: "Ekonomis",
        price: "± Rp1,8 – 2,5 jt/m",
        example: "3 m: ± Rp5,4 – 7,5 jt",
        cocok:
          "Cocok jika fokus utama adalah fungsi dasar, kabinet sederhana, detail minim, dan ingin budget lebih ringan.",
      },
      {
        name: "Standar",
        price: "± Rp2,5 – 3,5 jt/m",
        example: "3 m: ± Rp7,5 – 10,5 jt",
        cocok:
          "Cocok untuk kitchen set yang lebih rapi dan fungsional, umumnya dengan penyimpanan lebih tertata dan finishing lebih matang.",
      },
      {
        name: "Detail Custom",
        price: "± Rp3,5 – 4,5 jt/m",
        example: "3 m: ± Rp10,5 – 13,5 jt",
        cocok:
          "Cocok jika ingin lebih banyak laci, aksesoris, kabinet atas-bawah, top table/backplash tertentu, dan detail desain lebih rapi.",
      },
      {
        name: "Premium",
        price: "± Rp4,5 jt+/m",
        example: "3 m: mulai ± Rp13,5 jt+",
        cocok:
          "Cocok untuk desain lebih kompleks, finishing/material lebih tinggi, detail dekoratif, aksesoris lengkap, atau kebutuhan khusus.",
      },
    ],
  },
  {
    label: "Lemari Custom / Wardrobe",
    unit: "per meter lari",
    range: "Mulai ± Rp1,5 juta / meter lari",
    description:
      "Lemari custom terlihat sederhana, tetapi estimasinya bisa berubah karena tinggi lemari, jumlah pintu, sekat, laci, rel, kaca, finishing, dan apakah dibuat sampai plafon.",
    href: routes.lemariCustom,
    waText:
      "Halo BUF, saya ingin minta estimasi awal lemari custom. Ukuran kasar saya sekitar ... meter. Saya akan kirim foto ruang dan kebutuhan penyimpanan.",
    tiers: [
      {
        name: "Ekonomis",
        price: "± Rp1,5 – 2,2 jt/m",
        example: "2 m: ± Rp3 – 4,4 jt",
        cocok:
          "Cocok untuk lemari sederhana dengan fungsi utama penyimpanan, sekat tidak terlalu banyak, dan detail minim.",
      },
      {
        name: "Standar",
        price: "± Rp2,2 – 3 jt/m",
        example: "2 m: ± Rp4,4 – 6 jt",
        cocok:
          "Cocok untuk lemari kamar yang lebih rapi, pembagian ruang lebih jelas, dan finishing lebih matang.",
      },
      {
        name: "Detail Custom",
        price: "± Rp3 – 4 jt/m",
        example: "2 m: ± Rp6 – 8 jt",
        cocok:
          "Cocok jika butuh banyak sekat, laci, pintu tertentu, kombinasi kaca, atau lemari dibuat menyesuaikan kebiasaan pemakai.",
      },
      {
        name: "Premium",
        price: "± Rp4 jt+/m",
        example: "2 m: mulai ± Rp8 jt+",
        cocok:
          "Cocok untuk wardrobe besar, finishing/material lebih tinggi, detail sampai plafon, sliding, lampu, atau aksesoris lebih lengkap.",
      },
    ],
  },
  {
    label: "Backdrop TV Custom",
    unit: "per meter lari",
    range: "Mulai ± Rp1,2 juta / meter lari",
    description:
      "Backdrop TV bisa ringan jika hanya panel sederhana, tetapi bisa naik jika menyatu dengan kabinet bawah, rak display, ambalan, lampu LED, panel motif, atau storage tambahan.",
    href: routes.backdropTv,
    waText:
      "Halo BUF, saya ingin minta estimasi awal backdrop TV custom. Ukuran kasar saya sekitar ... meter. Saya akan kirim foto ruang dan referensi desain.",
    tiers: [
      {
        name: "Ekonomis",
        price: "± Rp1,2 – 2 jt/m",
        example: "2,5 m: ± Rp3 – 5 jt",
        cocok:
          "Cocok untuk panel TV sederhana, tampilan lebih rapi, dan detail penyimpanan tidak terlalu banyak.",
      },
      {
        name: "Standar",
        price: "± Rp2 – 2,8 jt/m",
        example: "2,5 m: ± Rp5 – 7 jt",
        cocok:
          "Cocok untuk backdrop dengan panel lebih matang, kabinet bawah sederhana, ambalan, atau kombinasi material yang lebih rapi.",
      },
      {
        name: "Detail Custom",
        price: "± Rp2,8 – 3,5 jt/m",
        example: "2,5 m: ± Rp7 – 8,75 jt",
        cocok:
          "Cocok jika ingin kabinet, rak display, lampu LED, panel dekoratif, storage tambahan, atau desain lebih menyatu dengan ruang.",
      },
      {
        name: "Premium",
        price: "± Rp3,5 jt+/m",
        example: "2,5 m: mulai ± Rp8,75 jt+",
        cocok:
          "Cocok untuk detail visual lebih kuat, finishing/material lebih tinggi, aksen dekoratif, lighting, dan desain kompleks.",
      },
    ],
  },
];

const otherEstimates = [
  {
    title: "Custom Furniture Satuan",
    range: "± Rp750 ribu – Rp3 juta+ / item",
    desc: "Untuk meja belajar, meja rias, rak, kabinet kecil, nakas, ambalan, atau furniture satuan lain. Harga sangat tergantung ukuran dan detail fungsi.",
    href: routes.customFurniture,
  },
  {
    title: "Booth Usaha Custom",
    range: "± Rp2 juta – Rp10 juta+",
    desc: "Untuk booth makanan, minuman, display UMKM, atau booth jualan portable. Estimasi dipengaruhi ukuran, roda, lampu, rak display, branding, dan material.",
    href: routes.boothUsaha,
  },
  {
    title: "Interior Toko / Display",
    range: "± Rp2 juta – Rp8 juta+ untuk area kecil",
    desc: "Untuk rak display, meja kasir, area produk, booth display, atau kebutuhan toko kecil. Estimasi bisa naik jika area lebih luas dan detail brand lebih kompleks.",
    href: routes.interiorToko,
  },
];

const factors = [
  ["Ukuran dan bentuk ruang", "Ruang lurus, bentuk L, sudut, tinggi plafon, dan kondisi lokasi bisa mempengaruhi jumlah material serta detail pengerjaan."],
  ["Material utama", "Pilihan material menyesuaikan kebutuhan fungsi, tampilan, durabilitas, dan budget."],
  ["Finishing", "Finishing polos, motif kayu, motif marmer, kombinasi warna, atau detail premium akan mempengaruhi estimasi."],
  ["Kabinet, laci, dan sekat", "Semakin banyak kompartemen, laci, pintu, dan penyimpanan khusus, semakin banyak detail produksi."],
  ["Hardware dan aksesoris", "Engsel, rel laci, handle, rak piring, lampu LED, kaca, roda, dan aksesoris lain bisa membuat estimasi berubah."],
  ["Pemasangan dan lokasi proyek", "Kebutuhan survey, pengiriman, dan pemasangan dikonfirmasi sesuai lokasi proyek dan kondisi lapangan."],
];

const preparation = [
  "Foto ruang dari beberapa sudut",
  "Ukuran kasar panjang, tinggi, dan lebar ruang",
  "Jenis kebutuhan: kitchen set, lemari, backdrop, booth, atau interior toko",
  "Referensi desain yang disukai",
  "Gambaran budget awal",
  "Lokasi proyek untuk konfirmasi survey, pengiriman, atau pemasangan",
];

const commonQuestions = [
  {
    q: "Apakah angka di halaman ini harga final?",
    a: "Bukan. Angka ini adalah kisaran estimasi awal untuk membantu Anda menyiapkan gambaran budget. Harga final tetap menunggu detail ukuran, material, finishing, aksesoris, dan kondisi ruang.",
  },
  {
    q: "Kalau ukuran saya belum presisi, apakah tetap bisa minta estimasi?",
    a: "Bisa. Kirim ukuran kasar dulu, misalnya panjang dinding 3 meter atau area TV 2,5 meter. BUF bisa bantu memberi arahan awal sebelum pengukuran lebih detail.",
  },
  {
    q: "Apakah bisa menyesuaikan budget?",
    a: "Bisa dibahas. Dengan mengetahui budget awal, BUF bisa membantu memberi opsi desain, material, atau prioritas pengerjaan yang lebih realistis.",
  },
  {
    q: "Kenapa harga kitchen set bisa berbeda jauh?",
    a: "Kitchen set bisa berbeda karena ada kabinet atas/bawah, top table, backsplash, hardware, rak piring, laci, finishing, dan detail desain yang tidak selalu sama di setiap ruang.",
  },
];

export default function EstimasiBiayaPage() {
  return (
    <main>
      <section className="wood-grain-bg px-6 py-12 sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-wood shadow-soft backdrop-blur sm:text-[11px]">
              Estimasi Biaya
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
              Kira-kira budget interior custom mulai dari berapa?
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg sm:leading-8">
              Kalau Anda sudah tahu ukuran kasar ruang, halaman ini bisa membantu mengira-ngira estimasi awal sebelum konsultasi. Angka di sini bukan harga final, tetapi gambaran awal agar Anda tidak mulai dari nol.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref("Halo BUF, saya ingin minta estimasi awal interior/custom furniture. Saya akan kirim foto ruang, ukuran kasar, referensi desain, dan gambaran budget.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-charcoal px-7 py-3.5 text-center text-sm font-black text-white shadow-[0_18px_45px_rgba(23,23,23,0.2)]"
              >
                Minta Estimasi Awal
              </a>
              <Link
                href={routes.gallery}
                className="rounded-full border border-stone-300 bg-white/80 px-7 py-3.5 text-center text-sm font-black text-charcoal shadow-soft backdrop-blur"
              >
                Lihat Referensi Gallery
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/70 bg-white/45 p-3 shadow-[0_35px_100px_rgba(23,23,23,0.14)] backdrop-blur">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <div className="min-h-[390px] bg-[linear-gradient(180deg,rgba(23,23,23,0.00),rgba(23,23,23,0.08)),url('/assets/portfolio/kitchen-set-island-display-buf-01.webp')] bg-cover bg-center sm:min-h-[460px]" />
              <div className="border-t border-stone-200 bg-charcoal p-5 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                  Prinsip estimasi
                </p>
                <p className="mt-2 text-2xl font-black leading-[1.2] tracking-[-0.02em]">
                  Ukuran x kisaran per meter = gambaran awal. Detail ruang menentukan estimasi akhir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-14 text-white lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">
            Penting dibaca dulu
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="text-4xl font-black leading-[1.1] tracking-[-0.04em] sm:text-5xl">
              Estimasi biaya tidak bisa disamakan untuk semua ruang.
            </h2>
            <p className="text-base font-medium leading-8 text-white/64">
              Setiap proyek punya ukuran, kebutuhan, material, finishing, aksesoris, dan detail pengerjaan yang berbeda. BUF dapat memberi arahan estimasi awal setelah pelanggan mengirim foto ruang, ukuran kasar, referensi desain, dan gambaran budget.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Cara mengira-ngira
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
                Sudah tahu ukuran kasar? Cocokkan dulu dengan level spesifikasi.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-7 text-muted lg:justify-self-end">
              Contoh di bawah dibuat agar pelanggan awam bisa membayangkan budget awal. Pilih jenis pengerjaan, lalu cocokkan kebutuhan Anda dengan level Ekonomis, Standar, Detail Custom, atau Premium.
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {estimationCards.map((item) => (
              <article key={item.label} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft lg:grid lg:grid-cols-[0.78fr_1.22fr]">
                <div className="bg-charcoal p-6 text-white lg:p-7">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/42">
                    {item.unit}
                  </p>
                  <h3 className="mt-4 text-3xl font-black leading-[1.08] tracking-[-0.03em]">
                    {item.label}
                  </h3>
                  <p className="mt-4 text-2xl font-black text-brand-cream">
                    {item.range}
                  </p>
                  <p className="mt-4 text-sm font-medium leading-7 text-white/64">
                    {item.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href={whatsappHref(item.waText)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-black text-white shadow-blue"
                    >
                      Minta Estimasi {item.label}
                    </a>
                    <Link
                      href={item.href}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-center text-sm font-black text-white"
                    >
                      Lihat Layanan
                    </Link>
                  </div>
                </div>

                <div className="p-5 lg:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">
                    Level spesifikasi
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {item.tiers.map((tier) => (
                      <div key={tier.name} className="rounded-[1.5rem] border border-stone-200 bg-[#fffaf2] p-5">
                        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-wood">
                          {tier.name}
                        </p>
                        <p className="mt-3 text-2xl font-black tracking-[-0.02em] text-charcoal">
                          {tier.price}
                        </p>
                        <p className="mt-2 text-lg font-black tracking-[-0.02em] text-charcoal">
                          {tier.example}
                        </p>
                        <p className="mt-4 text-sm font-medium leading-7 text-muted">
                          {tier.cocok}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-[1.5rem] border border-stone-200 bg-white p-5 text-sm font-medium leading-7 text-muted">
                    Catatan: level ini bukan paket kaku. Fungsinya membantu Anda mengira-ngira posisi kebutuhan: sederhana, standar, banyak detail, atau premium. Estimasi akhir tetap menunggu ukuran, material, finishing, aksesoris, desain, dan kondisi ruang.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Estimasi lainnya
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
                Tidak semua pekerjaan cocok dihitung per meter.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-7 text-muted lg:justify-self-end">
              Beberapa kebutuhan seperti booth usaha, furniture satuan, dan display toko lebih sering dihitung dari ukuran, fungsi, jumlah item, dan detail desain.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {otherEstimates.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[2rem] border border-stone-200 bg-white/84 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(23,23,23,0.14)]"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-wood">
                  Kisaran awal
                </p>
                <h3 className="mt-4 text-2xl font-black leading-[1.12] tracking-[-0.02em] text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-4 text-xl font-black text-charcoal">
                  {item.range}
                </p>
                <p className="mt-4 text-sm font-medium leading-7 text-muted">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
              Kenapa bisa naik turun?
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
              Faktor yang paling sering mempengaruhi estimasi.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted">
              Dua proyek dengan ukuran sama bisa punya estimasi berbeda jika detail material, finishing, aksesoris, dan kondisi ruangnya berbeda.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {factors.map(([title, desc], index) => (
              <div key={title} className="relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-soft">
                <div className="absolute right-4 top-4 text-[3.25rem] font-black leading-none tracking-[-0.12em] text-stone-100">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <span className="inline-flex rounded-full bg-[#f5efe6] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-wood">
                    Faktor {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-xl font-black leading-snug tracking-[-0.02em] text-charcoal">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-7 text-muted">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
              Agar estimasi lebih akurat
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
              Kirim info sederhana ini saat menghubungi BUF.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted">
              Tidak harus lengkap sempurna. Ukuran kasar dan foto ruang sudah cukup untuk memulai obrolan estimasi awal.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {preparation.map((item, index) => (
              <div key={item} className="relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white/88 p-5 shadow-soft backdrop-blur">
                <div className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-gradient-to-b from-wood via-brand-blue to-brand-red" />
                <div className="pl-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-xs font-black tracking-[0.08em] text-white shadow-soft">
                    {String(index + 1).padStart(2, "0")}
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
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">
                Pertanyaan umum
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] sm:text-5xl">
                Hal yang biasanya ditanyakan sebelum minta estimasi.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-7 text-white/64 lg:justify-self-end">
              Bagian ini dibuat supaya pelanggan tidak bingung apakah boleh bertanya meski belum punya ukuran atau desain final.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {commonQuestions.map((item) => (
              <div key={item.q} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5">
                <h3 className="text-xl font-black leading-snug tracking-[-0.02em]">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-white/62">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:grid md:grid-cols-[1fr_0.5fr]">
          <div className="p-7 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
              Mulai dari ukuran kasar
            </p>
            <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
              Sudah punya ukuran? Kirim ke BUF dan minta estimasi awal.
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/62">
              Contoh: “Kitchen set saya sekitar 3 meter, ingin kabinet atas-bawah, warna kayu, dan budget sekitar ...” Dari situ BUF bisa bantu arahkan opsi yang lebih realistis.
            </p>
            <a
              href={whatsappHref("Halo BUF, saya ingin minta estimasi awal. Ukuran kasar saya sekitar ... meter. Saya akan kirim foto ruang, referensi desain, dan gambaran budget.")}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue"
            >
              Minta Estimasi via WhatsApp
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
