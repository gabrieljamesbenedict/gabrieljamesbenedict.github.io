import "../styles/Hero.css"
import { selectWorkspaceFile } from "../components/workspaceBus"

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__title">Gabriel Loslos</h1>
        <p className="hero__subtitle">Software Developer & Designer</p>
        <div className="hero__actions">
          <a href="#workspace" onClick={() => selectWorkspaceFile("~/projects/riel-armory.json")} className="hero__btn hero__btn--primary">View Projects</a>
          <a href="#workspace" onClick={() => selectWorkspaceFile("~/contact.sh")} className="hero__btn hero__btn--secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
