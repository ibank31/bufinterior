import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Halaman Tidak Ditemukan" description="Halaman yang Anda cari tidak tersedia." />
      <section className="pageHero">
        <h1>Halaman tidak ditemukan</h1>
        <p>Halaman yang Anda cari mungkin sudah dipindahkan atau belum tersedia.</p>
        <Link className="primaryBtn" to="/">
          Kembali ke Beranda
        </Link>
      </section>
    </>
  );
}
