import "../styles/Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer__container">
                <div className="footer__info">
                <p className="footer__text">&copy; 2026 Gabriel Loslos. All rights reserved.</p>
                <p className="footer__text">Built with React and Vite.</p>
            </div>
            <div className="footer__links">
                <a className="footer__link" href="#hero">Back to Top</a>
                <a className="footer__link" href="https://github.com/gabrieljamesbenedict" target="_blank" rel="noreferrer">GitHub</a>
                <a className="footer__link" href="https://www.linkedin.com/in/gjbmloslos/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="footer__link" href="mailto:benok.loslos@gmail.com">Email</a>
            </div>
        </div>
        </footer>
  );
}