import { useEffect, useState } from "react";
import "../styles/Header.css"
import { navLinks } from "../data/NavData"
import BackgroundPicker from "../components/BackgroundPicker"
import type { BackgroundOption } from "../data/BackgroundData"

interface HeaderProps {
  backgroundOptions: BackgroundOption[];
  selectedBackgroundId: string;
  onSelectBackground: (id: string) => void;
  reduceMotion: boolean;
}

const Header = ({
  backgroundOptions,
  selectedBackgroundId,
  onSelectBackground,
  reduceMotion,
}: HeaderProps) => {
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
            <a
              key={link.href}
              className={link.special ? "header__link--special" : "header__link"}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <BackgroundPicker
          options={backgroundOptions}
          selectedId={selectedBackgroundId}
          onSelect={onSelectBackground}
          reduceMotion={reduceMotion}
        />
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
              className={link.special ? "header__link--special header__drawer-cta" : "header__drawer-link"}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  )
}

export default Header
