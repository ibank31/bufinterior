import SEO from "../components/SEO";
import { SITE_DATA } from "../data/siteData";

export default function Contact() {
  return (
    <>
      <SEO
        title="Kontak BAF Banyumas"
        description="Hubungi BAF Berkah Utami Furniture untuk konsultasi desain dan pengerjaan interior custom di Banyumas."
      />
      <section className="pageHero">
        <p className="eyebrow">Kontak</p>
        <h1>Konsultasi Interior dengan BAF</h1>
        <p>
          Ingin konsultasi kebutuhan interior rumah, kost, toko, kitchen set,
          atau custom furniture? Hubungi BAF untuk diskusi awal.
        </p>
        <a className="primaryBtn" href={SITE_DATA.whatsappUrl} target="_blank" rel="noreferrer">
          Chat WhatsApp
        </a>
      </section>

      <section className="section contactGrid">
        <article className="card">
          <h2>WhatsApp</h2>
          <p>{SITE_DATA.phoneDisplay}</p>
        </article>
        <article className="card">
          <h2>Workshop</h2>
          {SITE_DATA.workshops.map((workshop) => (
            <p key={workshop}>{workshop}</p>
          ))}
        </article>
        <article className="card">
          <h2>Jam Operasional</h2>
          <p>{SITE_DATA.operatingHours}</p>
        </article>
        <article className="card">
          <h2>Area Layanan</h2>
          <p>{SITE_DATA.mainArea} dan sekitarnya.</p>
        </article>
      </section>
    </>
  );
}
