import "../styles/Contact.css"
import Window from "../components/Window"

const EmailIcon = "/icons/email-envelope-white-icon.png"
const LinkedInIcon = "/icons/linkedin-app-white-icon.png"
const GithubIcon = "/icons/github-white-icon.png"

const CONTACTS = [
  { label: "Email", command: "open --email", url: "mailto:benok.loslos@gmail.com", icon: EmailIcon },
  { label: "LinkedIn", command: "open --linkedin", url: "https://www.linkedin.com/in/gjbmloslos/", icon: LinkedInIcon },
  { label: "GitHub", command: "open --github", url: "https://github.com/gabrieljamesbenedict", icon: GithubIcon },
];

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section__container">
        <h2 className="section__title">Get In Touch</h2>
        <Window
          accent="purple"
          tabs={
            <div className="window__tab window__tab--active" role="tab" aria-selected="true">
              ~/contact.sh
              <span className="window__tab-close">×</span>
            </div>
          }
        >
          <div className="contact__cmds">
            {CONTACTS.map((contact) => (
              <a
                key={contact.label}
                className="contact__cmd"
                href={contact.url}
                target={contact.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
              >
                <span className="contact__prompt">$</span>
                <img className="contact__icon" src={contact.icon} alt={contact.label} />
                {contact.command} {contact.label}
                <span className="contact__url">{contact.url}</span>
              </a>
            ))}
          </div>
        </Window>
      </div>
    </section>
  )
}

export default Contact
