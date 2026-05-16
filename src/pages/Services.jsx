import SEO from "../components/SEO";
import { SERVICES } from "../data/services";
import { SITE_DATA } from "../data/siteData";

export default function Services() {
  return (
    <>
      <SEO
        title="Layanan Interior Custom Banyumas"
        description="Layanan BAF meliputi interior rumah, kost, toko, kitchen set, custom furniture, dan desain interior di Banyumas."
      />
      <section className="pageHero">
        <p className="eyebrow">Layanan BAF</p>
        <h1>Layanan Desain & Pengerjaan Interior Custom</h1>
        <p>
          BAF membantu kebutuhan interior dari tahap konsultasi, desain,
          pengukuran, produksi, sampai pemasangan di lokasi.
        </p>
      </section>

      <section className="section">
        <div className="grid">
          {SERVICES.map((service) => (
            <article className="card" key={service.title}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <a href={SITE_DATA.whatsappUrl} target="_blank" rel="noreferrer">
                Konsultasi layanan ini →
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
