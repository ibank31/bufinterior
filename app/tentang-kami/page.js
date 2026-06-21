import Link from "next/link";
import { siteConfig } from "@/content/site";
import { staticPageMetadata } from "@/content/static-pages";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/content/routes";
import { buildWhatsappHref } from "@/lib/whatsapp";

export const metadata = buildMetadata(staticPageMetadata.tentangKami);

const whatsappHref = buildWhatsappHref(
  "Halo BUF, saya mau konsultasi interior atau furniture custom. Lokasi proyek: ... Kebutuhan: ... Ukuran area: ..."
);

const trustPoints = [
  ["Workshop di Berkoh", "Produksi dikerjakan dari workshop BUF, bukan sekadar ambil barang jadi."],
  ["Ukur dulu sebelum produksi", "Furniture dan interior dibuat setelah ukuran, fungsi, dan kondisi ruang dibaca."],
  ["Bahan dibahas di awal", "Pilihan bahan, finishing, warna, dan hardware dibicarakan sebelum produksi."],
  ["Gambar arah, lalu kerjakan", "Bisa mulai dari cerita ruang, contoh model, lalu masuk ke ukuran dan produksi."],
  ["Survey Banyumas gratis", "Survey area Banyumas gratis. Untuk luar Banyumas, biaya survey dibicarakan dulu sesuai jarak dan jenis pekerjaan."],
  ["Lokasi proyek jelas", "Survey area Banyumas gratis. Pengiriman dan pemasangan dibicarakan sesuai lokasi proyek."],
];

const approach = [
  ["01", "Baca ruangnya dulu", "Mulai dari foto lokasi, ukuran kasar, fungsi ruang, dan bagian yang paling mengganggu."],
  ["02", "Bahas arah model", "Model dibuat dari fungsi ruang, tampilan yang diinginkan, dan kisaran biaya yang ingin dijaga."],
  ["03", "Pilih material", "Bahan dan finishing dipilih dari cara pakai ruang dan tampilan yang diinginkan."],
  ["04", "Produksi di workshop", "Pengerjaan dilakukan bertahap dari workshop sampai pemasangan."],
];

const customerNeeds = [
  "Dapur ingin lebih rapi dengan kitchen set custom",
  "Ruang TV ingin punya backdrop dan penyimpanan menyatu",
  "Kamar butuh lemari sampai ukuran pas",
  "Toko butuh display produk yang lebih tertata",
  "UMKM butuh booth jualan yang kelihatan siap pakai",
  "Ruang kecil ingin dimaksimalkan tanpa memaksa furniture jadi",
];

export default function TentangKamiPage() {
  return (
    <main>
      <section className="wood-grain-bg px-6 py-12 sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-wood shadow-soft backdrop-blur sm:text-[11px]">
              Tentang BUF
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
              Workshop interior dan furniture custom di Berkoh, Purwokerto.
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg sm:leading-8">
              {siteConfig.positioning} Biasanya pelanggan datang karena dapur, kamar, ruang TV, toko, atau area usahanya tidak cocok pakai furniture jadi.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref}
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
                Lihat Portofolio
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/70 bg-white/45 p-3 shadow-[0_35px_100px_rgba(23,23,23,0.14)] backdrop-blur">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <div className="min-h-[390px] bg-[linear-gradient(180deg,rgba(23,23,23,0.00),rgba(23,23,23,0.04)),url('/assets/portfolio/interior-rumah-luxury-panel-kayu-buf-01.webp')] bg-cover bg-center sm:min-h-[460px]" />
              <div className="border-t border-stone-200 bg-charcoal p-5 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                  Prinsip BUF
                </p>
                <p className="mt-2 text-2xl font-black leading-[1.2] tracking-[-0.02em]">
                  Bukan memaksa ruang mengikuti furniture jadi, tapi membuat furniture mengikuti ruang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-16 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">
              Kenapa pilih BUF?
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] sm:text-5xl">
              BUF dibangun untuk ruang yang tidak selalu selesai dengan furniture jadi.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/64">
              Banyak orang datang karena ruangnya tanggung: dapur kurang storage, kamar butuh lemari pas ukuran, toko perlu display, atau booth ingin tampil lebih niat.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {trustPoints.map(([title, desc], index) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-black leading-snug tracking-[-0.02em]">
                  {title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-white/62">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-wood/55" />
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Pendekatan kerja
              </p>
            </div>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
              Setiap proyek dimulai dari membaca ruang dan cara pakainya.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted">
              BUF tidak mendorong satu desain untuk semua orang. Ukuran, kebiasaan pemakai, dan kisaran biaya dibaca dulu sebelum menentukan bentuk dan bahan.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {approach.map(([number, title, desc]) => (
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
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                Alasan pelanggan datang
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
                Biasanya pelanggan datang karena ada bagian ruang yang ingin dibereskan.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-7 text-muted lg:justify-self-end">
              Mulai dari rumah, toko, kost, sampai booth usaha. Chat awal bisa dimulai dari cerita singkat, foto ruang, dan ukuran kasar.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {customerNeeds.map((item, index) => (
              <div key={item} className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-soft">
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

      <section className="wood-grain-bg px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:grid md:grid-cols-[1fr_0.5fr]">
          <div className="p-7 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
              Mulai dari ngobrol dulu
            </p>
            <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
              Ceritakan ruangnya mau dibuat seperti apa. Nanti kita bahas model, bahan, dan cara pengerjaannya.
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/62">
              Tidak harus langsung punya gambar final. Kirim foto ruang, ukuran kasar, dan contoh model kalau ada.
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
