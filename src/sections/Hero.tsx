import "../styles/Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Gabriel Loslos</h1>
        <p className="hero__subtitle">Software Developer & Designer</p>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">View Projects</a>
          <a href="#contact" className="hero__btn hero__btn--secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero