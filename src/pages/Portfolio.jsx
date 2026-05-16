import SEO from "../components/SEO";
import { PORTFOLIO } from "../data/portfolio";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portofolio Interior & Furniture Custom"
        description="Lihat contoh pengerjaan interior, kitchen set, dan custom furniture BAF di Banyumas."
      />
      <section className="pageHero">
        <p className="eyebrow">Portofolio</p>
        <h1>Contoh Pengerjaan Interior & Furniture</h1>
        <p>
          Beberapa contoh pekerjaan BAF untuk kebutuhan interior rumah, toko,
          kitchen set, dan furniture custom.
        </p>
      </section>

      <section className="section">
        <div className="grid portfolioGrid">
          {PORTFOLIO.map((item) => (
            <article className="portfolioCard" key={item.title}>
              <div className="portfolioImage">Foto proyek</div>
              <div>
                <span>{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <small>{item.location}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
