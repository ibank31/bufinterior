import SEO from "../components/SEO";
import { PORTFOLIO } from "../data/portfolio";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Gallery Desain & Pengerjaan Interior"
        description="Lihat contoh konsep desain dan pengerjaan interior, kitchen set, custom furniture, dan interior toko BUF di Banyumas."
        path="/portofolio"
      />
      <section className="pageHero">
        <p className="eyebrow">Gallery</p>
        <h1>Gallery Desain & Pengerjaan Interior</h1>
        <p>
          Lihat beberapa contoh desain dan pengerjaan BUF untuk interior rumah,
          toko, kitchen set, dan furniture custom.
        </p>
      </section>

      <section className="section">
        <div className="grid portfolioGrid">
          {PORTFOLIO.map((item) => (
            <article className="portfolioCard" key={item.title}>
              <img className="portfolioImage" src={item.image} alt={item.title} loading="lazy" />
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
