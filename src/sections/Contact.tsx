import "../styles/Contact.css"

const Contact = () => {

    const EmailIcon = "https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-envelope-white-icon.png"
    const LinkedInIcon = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
    const GithubIcon = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get In Touch</h2>
        
        <div className="contact__links">
          <a className="contact__link" href="mailto:benok.loslos@gmail.com">
            <img className="contact__icon" src={EmailIcon} alt="" />
            Email
          </a>
          <a className="contact__link" href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
            <img className="contact__icon" src={LinkedInIcon} alt="" />
            LinkedIn
          </a>
          <a className="contact__link" href="https://github.com/your-username" target="_blank" rel="noreferrer">
            <img className="contact__icon" src={GithubIcon} alt="" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact