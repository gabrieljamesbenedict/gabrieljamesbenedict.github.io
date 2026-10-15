import "../styles/Contact.css"

const Contact = () => {

    const EmailIcon = "/icons/email-envelope-white-icon.png"
    const LinkedInIcon = "/icons/linkedin-app-white-icon.png"
    const GithubIcon = "/icons/github-white-icon.png"

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get In Touch</h2>
        
        <div className="contact__links">
          <a className="contact__link" href="mailto:benok.loslos@gmail.com">
            <img className="contact__icon" src={EmailIcon} alt="Email" />
            Email
          </a>
          <a className="contact__link" href="https://www.linkedin.com/in/gjbmloslos/" target="_blank" rel="noreferrer">
            <img className="contact__icon" src={LinkedInIcon} alt="LinkedIn" />
            LinkedIn
          </a>
          <a className="contact__link" href="https://github.com/gabrieljamesbenedict" target="_blank" rel="noreferrer">
            <img className="contact__icon" src={GithubIcon} alt="GitHub" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact