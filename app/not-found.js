import Link from "next/link";
import { routes } from "@/content/routes";

export const metadata = {
  title: "Halaman Tidak Ditemukan | BUF Berkah Utami Furniture",
  description: "Halaman yang Anda cari tidak ditemukan. Kembali ke website BUF Berkah Utami Furniture.",
};

export default function NotFoundPage() {
  return (
    <main className="section-pad">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-stone-200 bg-paper p-8 shadow-soft">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
          404
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.07em] text-charcoal">
          Halaman tidak ditemukan.
        </h1>
        <p className="mt-5 text-base font-medium leading-8 text-muted">
          Link yang dibuka mungkin berubah atau halaman belum tersedia. Silakan kembali ke beranda atau lihat layanan BUF.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={routes.home} className="rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white shadow-blue">
            Kembali ke Beranda
          </Link>
          <Link href={routes.layanan} className="rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-black text-charcoal shadow-soft">
            Lihat Layanan
          </Link>
        </div>
      </div>
    </main>
  );
}
