import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import { SITE_DATA } from "../data/siteData";
import { SERVICES } from "../data/services";
import { HERO_IMAGES, PORTFOLIO } from "../data/portfolio";

export default function Home() {
  return (
    <>
      <SEO
        title="Jasa Interior Custom Banyumas"
        description="BUF melayani desain dan pengerjaan interior rumah, kost, toko, kitchen set, dan custom furniture di Banyumas."
        path="/"
      />

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">BUF — Berkah Utami Furniture</p>
          <h1>Jasa Desain & Pengerjaan Interior Custom di Banyumas</h1>
          <p>
            BUF membantu pengerjaan interior rumah, kost, toko, kitchen set, dan
            custom furniture dari tahap desain sampai pemasangan.
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href={SITE_DATA.whatsappUrl} target="_blank" rel="noreferrer">
              Konsultasi via WhatsApp <ArrowRight size={18} />
            </a>
            <a className="secondaryBtn" href="/layanan">
              Lihat Layanan
            </a>
          </div>
        </div>

        <div className="heroCard">
          <img
            className="heroImage"
            src={HERO_IMAGES.main}
            alt="Jasa desain dan pengerjaan interior custom BUF Banyumas"
          />
          <div className="heroNote">
            <strong>Desain + pengerjaan</strong>
            <span>Satu jalur dari konsultasi sampai pemasangan.</span>
          </div>
        </div>
      </section>

      <section className="section intro">
        <p className="eyebrow">Mulai dari kebutuhan ruang</p>
        <h2>Bingung mulai dari mana untuk bikin interior?</h2>
        <p>
          Mulai dari ukuran ruang, pilihan material, desain, sampai estimasi biaya
          sering bikin bingung. BUF membantu Anda merancang kebutuhan interior
          secara lebih terarah, menyesuaikan fungsi ruang, selera, dan budget.
        </p>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow">Layanan</p>
          <h2>Layanan Interior BUF</h2>
        </div>
        <div className="grid">
          {SERVICES.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Kenapa BUF?</p>
          <h2>Desain dan pengerjaan interior dalam satu jalur.</h2>
          <p>
            Calon klien tidak perlu memisahkan antara desain dan pengerjaan.
            BUF membantu dari konsultasi, pengukuran, konsep, produksi, sampai
            pemasangan di lokasi.
          </p>
        </div>
        <div className="checks">
          {[
            "Bisa custom sesuai ukuran ruang",
            "Material menyesuaikan kebutuhan dan budget",
            "Cocok untuk rumah, kost, toko, dan ruang usaha",
            "Fokus area Banyumas dan sekitarnya"
          ].map((item) => (
            <div className="check" key={item}>
              <CheckCircle2 size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow">Portofolio</p>
          <h2>Contoh Desain & Pengerjaan Interior</h2>
        </div>
        <div className="grid portfolioGrid">
          {PORTFOLIO.slice(0, 6).map((item) => (
            <article className="portfolioCard" key={item.title}>
              <img className="portfolioImage" src={item.image} alt={item.title} loading="lazy" />
              <div>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process">
        <p className="eyebrow">Alur kerja</p>
        <h2>Alur Pengerjaan</h2>
        <div className="steps">
          {[
            "Konsultasi kebutuhan",
            "Survey dan pengukuran",
            "Konsep desain",
            "Estimasi biaya",
            "Produksi furniture/interior",
            "Pemasangan di lokasi",
            "Serah terima pekerjaan"
          ].map((step, index) => (
            <div className="step" key={step}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section area">
        <p className="eyebrow">Area layanan</p>
        <h2>Banyumas dan sekitarnya</h2>
        <p>
          BUF melayani kebutuhan desain dan pengerjaan interior di area{" "}
          {SITE_DATA.serviceAreas.join(", ")}.
        </p>
      </section>

      <section className="cta">
        <h2>Mau konsultasi kebutuhan interior?</h2>
        <p>
          Ceritakan kebutuhan ruang Anda. BUF siap membantu memberi arahan desain,
          ukuran, material, dan estimasi pengerjaan.
        </p>
        <a className="primaryBtn" href={SITE_DATA.whatsappUrl} target="_blank" rel="noreferrer">
          Chat WhatsApp Sekarang
        </a>
      </section>
    </>
  );
}
