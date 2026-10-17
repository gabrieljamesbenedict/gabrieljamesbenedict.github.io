import { useEffect, useState } from "react";
import "../styles/Header.css"
import { navLinks, contactLink } from "../data/NavData"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header__container">
        <a href="#hero"><h1 className="header__title">Hello World</h1></a>
        <nav className="header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} className="header__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <nav className="header__contact" aria-label="Contact">
          <a className="header__link--special" href={contactLink.href}>{contactLink.label}</a>
        </nav>
        <button
          type="button"
          className={`header__menu-toggle${menuOpen ? " header__menu-toggle--open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div
        className={`header__backdrop${menuOpen ? " header__backdrop--visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      <aside
        id="mobile-nav-drawer"
        className={`header__drawer${menuOpen ? " header__drawer--open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav className="header__drawer-nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="header__drawer-link"
              href={link.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            className="header__link--special header__drawer-cta"
            href={contactLink.href}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {contactLink.label}
          </a>
        </nav>
      </aside>
    </header>
  )
}

export default Header
