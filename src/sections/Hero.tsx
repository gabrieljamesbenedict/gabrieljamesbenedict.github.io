import "../styles/Hero.css"
import { profile } from "../data/ProfileData"

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__title">{profile.name}</h1>
        <p className="hero__subtitle">{profile.title}</p>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">View Projects</a>
          <a href="#contact" className="hero__btn hero__btn--secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
