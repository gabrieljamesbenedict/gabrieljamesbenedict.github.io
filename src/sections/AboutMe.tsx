import "../styles/AboutMe.css"
import Window from "../components/Window"

const AboutMe = () => {
  return (
    <section className="section about" id="aboutme">
      <div className="section__container">
        <h2 className="section__title">About Me</h2>
        <Window
          accent="purple"
          tabs={
            <div className="window__tab window__tab--active" role="tab" aria-selected="true">
              ~/about/me.md
              <span className="window__tab-close">×</span>
            </div>
          }
        >
          <h3 className="about__lead">Gabriel James Benedict M Loslos</h3>
          <p className="about__bio">
            Hello World! I am a Computer Science major from Mapua University.
          </p>
          <p className="about__bio">
            Designing and programming software has always been my passion ever since I was young.
            I first started coding in Scratch. My primary skill is Backend Development and my favorite
            framework to use is Spring Boot. I can also do Frontend Development and I&apos;ve used
            React and Angular before.
          </p>
          <div className="about__row">
            <span className="about__label">EDUCATION</span>
            <span className="about__value">BS Computer Science — Mapua University</span>
          </div>
          <div className="about__row">
            <span className="about__label">LANGUAGES</span>
            <span className="about__value">English, Filipino, Elven, Draconic</span>
          </div>
          <div className="about__row">
            <span className="about__label">CODE</span>
            <span className="about__tags">
              {["Java", "JavaScript", "TypeScript", "SQL", "Python", "HTML", "CSS", "PHP", "Visual Basic"].map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </span>
          </div>
          <div className="about__row">
            <span className="about__label">STACK</span>
            <span className="about__tags">
              {["SpringBoot", "React", "ExpressJS", "Fastify", "Node", "Angular", "MySQL", "PostgreSQL", "MongoDB", "Firebase"].map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </span>
          </div>
          <div className="about__row">
            <span className="about__label">INTERESTS</span>
            <span className="about__tags">
              {["Backend Development", "Game Development", "Pixel Art", "Gaming", "Anime", "D&D", "Magic: the Gathering"].map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </span>
          </div>
        </Window>
      </div>
    </section>
  )
}

export default AboutMe
