import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SITE_DATA } from "../data/siteData";

const navItems = [
  { label: "Beranda", to: "/" },
  { label: "Layanan", to: "/layanan" },
  { label: "Gallery", to: "/portofolio" },
  { label: "Kontak", to: "/kontak" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${isOpen ? "isOpen" : ""}`}>
      <div className="navbarTop">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img
            className="brandLogo"
            src="/assets/logo/logo-transparent-attempt.png"
            alt="Logo BUF Berkah Utami Furniture"
          />
          <span className="brandText">
            <strong>{SITE_DATA.brandShort}</strong>
            <small>{SITE_DATA.brandName}</small>
          </span>
        </Link>

        <button
          className="menuButton"
          type="button"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
          <span>Menu</span>
        </button>
      </div>

      <nav className="dropdownNav">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={closeMenu}>
            {item.label}
          </NavLink>
        ))}
        <a className="dropdownCta" href={SITE_DATA.whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Konsultasi WhatsApp
        </a>
      </nav>
    </header>
  );
}
