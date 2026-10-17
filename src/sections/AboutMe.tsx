import "../styles/AboutMe.css"
import Window from "../components/Window"
import { profile } from "../data/ProfileData"

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
          <h3 className="about__lead">{profile.fullName}</h3>
          {profile.bio.map((paragraph, index) => (
            <p key={index} className="about__bio">
              {paragraph}
            </p>
          ))}
          <div className="about__row">
            <span className="about__label">EDUCATION</span>
            <span className="about__value">{profile.education}</span>
          </div>
          <div className="about__row">
            <span className="about__label">LANGUAGES</span>
            <span className="about__value">{profile.languages}</span>
          </div>
          <div className="about__row">
            <span className="about__label">CODE</span>
            <span className="about__tags">
              {profile.code.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </span>
          </div>
          <div className="about__row">
            <span className="about__label">STACK</span>
            <span className="about__tags">
              {profile.stack.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </span>
          </div>
          <div className="about__row">
            <span className="about__label">INTERESTS</span>
            <span className="about__tags">
              {profile.interests.map((tag) => (
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
