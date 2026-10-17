import "../styles/Footer.css"
import { profile } from "../data/ProfileData"
import { contactLinks } from "../data/ContactData"

export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer__container">
                <div className="footer__info">
                <p className="footer__text">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                <p className="footer__text">{profile.footerTagline}</p>
            </div>
            <div className="footer__links">
                <a className="footer__link" href="#hero">Back to Top</a>
                {contactLinks.map((contact) => (
                    <a
                        key={contact.label}
                        className="footer__link"
                        href={contact.url}
                        target={contact.url.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noreferrer"
                    >
                        {contact.label}
                    </a>
                ))}
            </div>
        </div>
        </footer>
  );
}
