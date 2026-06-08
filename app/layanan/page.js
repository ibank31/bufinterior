import Link from "next/link";
import { services } from "@/content/services";
import { routes } from "@/content/routes";
import { staticPageMetadata } from "@/content/static-pages";
import { serviceAudiences, serviceProcess, serviceVisuals } from "@/content/service-page";
import { buildMetadata } from "@/lib/seo";
import { buildWhatsappHref } from "@/lib/whatsapp";

export const metadata = buildMetadata(staticPageMetadata.layanan);

const whatsappHref = buildWhatsappHref(
  "Halo BUF, saya mau tanya pengerjaan interior atau furniture custom. Lokasi proyek: ... Ruang yang ingin dikerjakan: ... Saya akan kirim foto dan ukuran kasar."
);

export default function LayananPage() {
  return (
    <main>
      <section className="wood-grain-bg relative overflow-hidden px-6 py-12 sm:px-8 lg:px-4 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-stone-300/70 bg-white/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-wood shadow-soft backdrop-blur sm:text-[11px]">
              Layanan BUF
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
              Pilih pekerjaan custom yang paling dekat dengan rencanamu.
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg sm:leading-8">
              Mau bikin kitchen set, lemari, backdrop TV, interior toko, booth, akrilik, aluminium, atau kanopi? Ceritakan dulu rencananya. Nanti ukuran, bahan, dan cara kerjanya kita urutkan pelan-pelan.
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
              <div className="min-h-[420px] bg-[linear-gradient(180deg,rgba(23,23,23,0.00),rgba(23,23,23,0.04)),url('/assets/portfolio/interior-rumah-luxury-panel-kayu-buf-01.webp')] bg-cover bg-center" />
              <div className="border-t border-stone-200 bg-charcoal p-5 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                  Dibuat setelah ukur ruang
                </p>
                <p className="mt-2 text-2xl font-black leading-[1.2] tracking-[-0.02em]">
                  Model, bahan, dan pemasangan dibahas sebelum produksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wood-grain-bg relative overflow-hidden px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-wood/55" />
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                  Pilih jenis pekerjaan
                </p>
              </div>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
                Yang paling sering dikerjakan di workshop BUF.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-7 text-muted lg:justify-self-end">
              Setiap pekerjaan bisa mulai dari data sederhana: contoh model, kondisi ruang, dan bagian yang paling ingin dibereskan.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_18px_55px_rgba(23,23,23,0.08)] transition hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-[0_28px_90px_rgba(23,23,23,0.14)]"
              >
                <div
                  className="min-h-[220px] bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.00), rgba(0,0,0,0.18)), url('${serviceVisuals[service.slug] || "/assets/portfolio/interior-rumah-luxury-panel-kayu-buf-01.webp"}')`,
                  }}
                />

                <div className="relative p-5">
                  <div className="absolute -top-6 right-5 rounded-full bg-white px-4 py-2 text-xs font-black text-brand-blue shadow-soft">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-wood">
                    {service.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-[1.12] tracking-[-0.02em] text-charcoal">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-7 text-muted">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-stone-200 pt-4">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-muted">
                      Detail layanan
                    </span>
                    <span className="rounded-full bg-charcoal px-4 py-2 text-xs font-black text-white transition group-hover:bg-brand-blue">
                      Lihat →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-16 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">
              Biasanya dipakai untuk
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-[-0.04em] sm:text-5xl">
              Kalau ukuran ruangnya tanggung, custom biasanya lebih enak.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/64">
              Misalnya dapur sempit, lemari ingin sampai plafon, toko butuh rak display, atau booth jualan perlu dibuat sesuai brand.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {serviceAudiences.map((item, index) => (
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
              Cara mulai ngobrol
            </p>
          </div>

          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.1] tracking-[-0.04em] text-charcoal sm:text-5xl">
            Tidak harus punya gambar final. Cerita singkat dan contoh model juga sudah cukup untuk mulai.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {serviceProcess.map(([number, title, desc]) => (
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

          <div className="mt-10 overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:grid md:grid-cols-[1fr_0.58fr]">
            <div className="p-7 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
                Mau tanya dulu?
              </p>
              <h3 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl">
                Bawa contoh model kalau ada.
              </h3>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/62">
                Kami cek dulu jenis pekerjaannya, lalu bahas bahan, ukuran, dan estimasi awalnya.
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
                className="h-full max-h-[360px] min-h-[240px] w-full object-contain md:object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
