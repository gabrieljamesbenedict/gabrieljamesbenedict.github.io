import "../styles/Contact.css"
import Window from "../components/Window"
import { contactLinks } from "../data/ContactData"

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
            {contactLinks.map((contact) => (
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
