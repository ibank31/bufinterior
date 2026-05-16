import { SITE_DATA } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>{SITE_DATA.brandShort}</h2>
        <p>{SITE_DATA.description}</p>
      </div>

      <div>
        <h3>Workshop</h3>
        {SITE_DATA.workshops.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div>
        <h3>Kontak</h3>
        <p>WhatsApp: {SITE_DATA.phoneDisplay}</p>
        <p>Jam operasional: {SITE_DATA.operatingHours}</p>
      </div>
    </footer>
  );
}
