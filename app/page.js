import Link from "next/link";
import { routes } from "@/content/routes";
import { articles } from "@/content/articles";
import { services, serviceHighlights } from "@/content/services";
import { localServices } from "@/content/local-services";
import { staticPageMetadata } from "@/content/static-pages";
import { portfolioPreview, processSteps } from "@/content/home";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(staticPageMetadata.home);

export default function HomePage() {
  const featuredArticles = articles.slice(0, 3);
  return (
    <main>
      <section className="wood-grain-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.55] bg-[radial-gradient(circle_at_12%_18%,rgba(138,90,60,0.18),transparent_28rem),radial-gradient(circle_at_88%_10%,rgba(8,121,173,0.11),transparent_25rem)]" />

        <div className="relative mx-auto grid max-w-7xl gap-4 px-5 py-4 sm:px-8 sm:py-6 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-8 lg:px-4 lg:py-10">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.20em] text-wood shadow-soft backdrop-blur sm:text-[11px] sm:tracking-[0.22em]">
              Workshop custom di Berkoh, Purwokerto
            </p>

            <h1 className="mt-4 text-[2.5rem] font-black leading-[1.08] tracking-[-0.04em] text-charcoal sm:text-6xl sm:leading-[1.03] lg:text-[5rem] lg:leading-[0.94]">
              Jasa pembuatan kitchen set, lemari, booth, dan interior custom yang disesuaikan dengan ukuran ruangan.
            </h1>

            <p className="mt-3 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg sm:leading-8">
              Berkah Utami Furniture adalah workshop interior dan furniture custom yang berlokasi di Berkoh, Purwokerto. Kami membuat kitchen set, lemari, backdrop TV, interior toko, booth usaha, akrilik, aluminium, dan kanopi.
            </p>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:mt-6">
              <Link href={routes.kontak} className="rounded-full bg-charcoal px-7 py-3 text-center text-sm font-black text-white shadow-[0_18px_45px_rgba(23,23,23,0.2)] lg:py-3.5">
                Konsultasi via WhatsApp
              </Link>
              <Link href={routes.portfolio} className="rounded-full border border-stone-300 bg-white/80 px-7 py-3 text-center text-sm font-black text-charcoal shadow-soft backdrop-blur lg:py-3.5">
                Lihat Hasil Pekerjaan
              </Link>
            </div>

            <div className="mt-5 grid max-w-xl grid-cols-3 divide-x divide-stone-300/80 rounded-[1.5rem] border border-stone-300/70 bg-white/55 p-2.5 shadow-soft backdrop-blur lg:mt-6 lg:p-3.5">
              <div className="px-2.5">
                <p className="text-lg font-black tracking-[-0.025em] text-charcoal sm:text-xl">20++</p>
                <p className="mt-0.5 text-[11px] font-bold leading-5 text-muted">Pekerjaan selesai</p>
              </div>
              <div className="px-2.5">
                <p className="text-lg font-black tracking-[-0.025em] text-charcoal sm:text-xl">Custom</p>
                <p className="mt-0.5 text-[11px] font-bold leading-5 text-muted">Dibuat sesuai ukuran</p>
              </div>
              <div className="px-2.5">
                <p className="text-lg font-black tracking-[-0.025em] text-charcoal sm:text-xl">BUF</p>
                <p className="mt-0.5 text-[11px] font-bold leading-5 text-muted">Workshop di Berkoh</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 top-8 z-10 hidden rounded-[1.5rem] border border-white/30 bg-white/80 p-4 shadow-soft backdrop-blur md:block">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-blue">Dari ukuran ke produksi</p>
              <p className="mt-1 text-lg font-black tracking-[-0.02em] text-charcoal">Diukur, dibuat, lalu dipasang</p>
            </div>

            <div className="rounded-[2.5rem] border border-white/70 bg-white/45 p-3 shadow-[0_35px_100px_rgba(23,23,23,0.16)] backdrop-blur">
              <div className="overflow-hidden rounded-[2rem] bg-white">
                <div className="min-h-[300px] bg-[linear-gradient(180deg,rgba(23,23,23,0.00),rgba(23,23,23,0.03)),url('/assets/portfolio/interior-rumah-luxury-panel-kayu-buf-01.webp')] bg-cover bg-center sm:min-h-[380px] lg:min-h-[440px]" />
                <div className="border-t border-stone-200 bg-[#171717] p-3.5 text-white lg:p-4.5">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/50">Interior custom • dari workshop BUF</p>
                  <p className="mt-1.5 text-lg font-black leading-[1.25] tracking-[-0.02em] sm:text-xl">
                    Kitchen set, lemari, booth, dan interior usaha.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 right-3 hidden rounded-[1.5rem] bg-brand-blue px-5 py-4 text-white shadow-blue md:block">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/65">Bahan</p>
              <p className="mt-1 text-lg font-black">Dibahas sebelum produksi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wood-grain-bg relative overflow-hidden px-4 py-8 lg:py-10">
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_6%_20%,rgba(138,90,60,0.10),transparent_22rem),radial-gradient(circle_at_88%_15%,rgba(8,121,173,0.08),transparent_20rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-px w-10 bg-wood/55" />
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-blue">Yang sering dikerjakan</p>
              </div>
              <h2 className="mt-2 text-3xl font-black leading-[1.1] tracking-[-0.02em] text-charcoal sm:text-4xl">
                Kami ukur ruangnya dulu. Setelah itu, kami buat barangnya.
              </h2>
            </div>
            <p className="max-w-2xl text-sm font-medium leading-7 text-muted lg:justify-self-end">
              Setiap pekerjaan dimulai dari kebutuhan ruang. Dapur perlu storage. Area TV perlu rapi. Toko perlu display. Ruang kecil perlu furniture yang ukurannya pas.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <Link
                key={service.slug}
                href={service.href}
                className="wood-grain-card group relative overflow-hidden rounded-[1.75rem] border border-stone-200 p-4 shadow-[0_18px_55px_rgba(23,23,23,0.07)] transition hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-[0_26px_80px_rgba(23,23,23,0.13)]"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-wood via-brand-blue to-brand-red" />
                <div className="absolute -right-5 -top-4 text-[5rem] font-black leading-none tracking-[-0.12em] text-stone-100 transition group-hover:text-brand-blue/10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative">
                  <span className="inline-flex rounded-full bg-[#f5efe6] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.14em] text-wood">
                    {service.category}
                  </span>
                  <h3 className="mt-4 text-xl font-black tracking-[-0.025em] text-charcoal">{service.shortTitle}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-muted">{service.description}</p>

                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-stone-200 pt-3">
                    <span className="text-[11px] font-black uppercase tracking-[0.16em] text-muted">Custom</span>
                    <span className="rounded-full bg-charcoal px-3.5 py-1.5 text-xs font-black text-white transition group-hover:bg-brand-blue">
                      Detail →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-px w-10 bg-wood/55" />
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-blue">
                  Jasa custom area Purwokerto
                </p>
              </div>
              <h2 className="mt-2 text-3xl font-black leading-[1.1] tracking-[-0.02em] text-charcoal sm:text-4xl">
                Pilih jasa sesuai pekerjaan yang mau dibuat.
              </h2>
            </div>
            <p className="max-w-2xl text-sm font-medium leading-7 text-muted lg:justify-self-end">
              Anda bisa langsung memilih jenis pekerjaan. BUF melayani kitchen set, booth usaha, akrilik, aluminium, kanopi, dan pekerjaan custom lain di Purwokerto dan Banyumas.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {localServices.map((service, index) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_24px_70px_rgba(23,23,23,0.12)]"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-wood via-brand-blue to-brand-red" />
                <span className="inline-flex rounded-full bg-charcoal px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.14em] text-white">
                  Jasa {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-black leading-snug tracking-[-0.02em] text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-6 text-muted">
                  {service.heroDescription}
                </p>
                <div className="mt-4 border-t border-stone-200 pt-3">
                  <span className="inline-flex rounded-full bg-brand-blue px-3.5 py-1.5 text-xs font-black text-white shadow-blue transition group-hover:bg-charcoal">
                    {service.ctaLabel || "Lihat Detail Jasa"} →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-stone-200 bg-white/80 p-4 shadow-soft">
            <p className="text-sm font-bold leading-6 text-muted">
              Belum tahu harus mulai dari mana? Kirim foto ruang dan ceritakan kebutuhan Anda. Kami bantu urutkan pekerjaan yang paling perlu dikerjakan dulu.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-8 text-white lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/42">Portofolio</p>
              <h2 className="mt-2 max-w-3xl text-3xl font-black leading-[1.1] tracking-[-0.02em] sm:text-4xl">
                Lihat hasil pekerjaan agar bentuk akhirnya lebih mudah dibayangkan.
              </h2>
            </div>
            <Link href={routes.portfolio} className="text-sm font-black text-white">
              Lihat semua portofolio →
            </Link>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {portfolioPreview.map((item, index) => (
              <article key={item.title} className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] ${index === 0 ? "md:row-span-2" : ""}`}>
                <div className={`${index === 0 ? "min-h-[420px]" : "min-h-[220px]"} bg-cover bg-center transition duration-500 group-hover:scale-[1.03]`} style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.58)), url('${item.image}')` }}>
                  <div className="flex h-full min-h-[inherit] items-end p-4">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/50">{item.category}</p>
                      <h3 className="mt-1.5 text-lg font-black leading-[1.25] tracking-[-0.02em] sm:text-xl">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-blue">
              Perkiraan biaya awal
            </p>
            <h2 className="mt-2 text-3xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-4xl">
              Punya ukuran kasar? Gunakan itu untuk membaca biaya awal.
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-muted">
              Ukuran membantu kami membaca kebutuhan biaya. Kitchen set 3 meter, lemari 2 meter, dan backdrop 2,5 meter punya hitungan berbeda. Bahan, finishing, dan detail juga ikut menentukan harga.
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                href={routes.estimasiBiaya}
                className="rounded-full bg-charcoal px-6 py-2.5 text-center text-sm font-black text-white shadow-soft"
              >
                Cek Estimasi Biaya
              </Link>
              <Link
                href={routes.kontak}
                className="rounded-full border border-stone-300 bg-white px-6 py-2.5 text-center text-sm font-black text-charcoal shadow-soft"
              >
                Tanya Estimasi via WhatsApp
              </Link>
            </div>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-3">
            {[
              ["Kitchen Set 3 m", "± Rp5,4–13,5 jt+"],
              ["Lemari 2 m", "± Rp3–8 jt+"],
              ["Backdrop 2,5 m", "± Rp3–8,75 jt+"],
            ].map(([label, value]) => (
              <Link
                key={label}
                href={routes.estimasiBiaya}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(23,23,23,0.12)]"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-wood">
                  Contoh hitung
                </p>
                <h3 className="mt-2 text-lg font-black leading-snug tracking-[-0.02em] text-charcoal">
                  {label}
                </h3>
                <p className="mt-1.5 text-xl font-black tracking-[-0.03em] text-charcoal">
                  {value}
                </p>
                <p className="mt-2 text-[11px] font-bold leading-5 text-muted">
                  Kisaran awal, bukan harga final.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-grain-bg px-4 py-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-charcoal p-5 text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] lg:p-7">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(8,121,173,0.55),transparent_18rem),radial-gradient(circle_at_88%_78%,rgba(138,90,60,0.55),transparent_18rem)]" />
            <div className="relative">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/45">Cara kerja BUF</p>
              <h2 className="mt-2 text-3xl font-black leading-[1.1] tracking-[-0.02em] sm:text-4xl">
                Produksi berjalan setelah ukuran, fungsi, dan bahan jelas.
              </h2>
              <p className="mt-3 text-sm font-medium leading-7 text-white/68">
                Kami tidak langsung produksi dari tebakan. Kami baca ukuran, fungsi, bahan, dan detail ruang lebih dulu. Setelah itu, barang dikerjakan di workshop BUF.
              </p>

              <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/38">Prinsip kerja</p>
                <p className="mt-1.5 text-xl font-black tracking-[-0.025em]">
                  Ukuran harus jelas sebelum produksi dimulai.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            {serviceHighlights.map((item, index) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white/82 p-4 text-charcoal shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-blue/25"
              >
                <span className="absolute inset-y-4 left-0 w-1 rounded-r-full bg-gradient-to-b from-wood via-brand-blue to-brand-red" />
                <div className="pl-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-charcoal text-[10px] font-black tracking-[0.08em] text-white shadow-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-lg font-black leading-snug tracking-[-0.02em]">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fffaf2] px-4 py-8 lg:py-10">
        <div className="absolute left-0 top-0 h-full w-px bg-stone-200" />
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-px w-10 bg-wood/55" />
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-blue">Alur kerja</p>
          </div>
          <h2 className="mt-2 max-w-3xl text-3xl font-black leading-[1.1] tracking-[-0.02em] text-charcoal sm:text-4xl">
            Alur kerja dibuat jelas sejak awal.
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {processSteps.map(([number, title, desc], index) => (
              <div key={number} className="relative rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-soft">
                {index < processSteps.length - 1 ? (
                  <span className="absolute left-1/2 top-7 hidden h-px w-full bg-stone-200 md:block" />
                ) : null}
                <div className="relative">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-sm font-black text-white shadow-soft">
                    {number}
                  </span>
                  <h3 className="mt-4 text-lg font-black tracking-[-0.02em] text-charcoal">{title}</h3>
                  <p className="mt-1.5 text-sm font-medium leading-6 text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:grid md:grid-cols-[1fr_0.58fr]">
            <div className="p-5 md:p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/45">Mau mulai?</p>
              <h3 className="mt-2 text-2xl font-black leading-[1.1] tracking-[-0.025em] md:text-3xl">
                Kirim foto ruang dan ukuran kasar dulu.
              </h3>
              <p className="mt-2 max-w-2xl text-sm font-medium leading-7 text-white/62">
                Kami baca ruangnya dulu. Setelah itu, kami arahkan pilihan bahan, bentuk, dan estimasi awal yang masuk akal.
              </p>
              <Link href={routes.kontak} className="mt-5 inline-flex rounded-full bg-brand-blue px-6 py-2.5 text-sm font-black text-white shadow-blue">
                Chat BUF
              </Link>
            </div>
            <div className="bg-[#111]">
              <img
                src="/assets/portfolio/interior-rumah-open-space-backdrop-tv-buf-01.webp"
                alt="Referensi interior rumah custom BUF"
                className="h-full max-h-[320px] min-h-[200px] w-full object-contain md:object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}