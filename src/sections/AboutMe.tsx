import "../styles/AboutMe.css"

const AboutMe = () => {

  const aboutMe =
`Hello World!

My name is Gabriel James Benedict M Loslos. Currently, I am a Computer Science major from Mapua University.

Designing and programming software has always been my passion ever since I was young. I first started coding in Scratch.

My primary skill is Backend Development and my favorite framework to use is Spring Boot. I can also do Frontend Development and I've used React and Angular before.`
  return (
    <section className="about" id="aboutme">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <div className="about__bento">
          
          <div className="bento__card bento__card--col-span-2 bento__card--row-span-2">
            <h3>Who I Am</h3>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {aboutMe}
            </p>
          </div>

          <div className="bento__card bento__card--col-span-2">
            <h3>Programming Languages</h3>
            <div className="bento__tags">
              <span>Java</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>SQL</span>
              <span>Python</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>PHP</span>
              <span>Visual Basic</span>
            </div>
          </div>

          <div className="bento__card bento__card--col-span-2">
            <h3>Tech Stack</h3>
            <div className="bento__tags">
              <span>SpringBoot</span>
              <span>React</span>
              <span>ExpressJS</span>
              <span>Fastify</span>
              <span>Node</span>
              <span>Angular</span>
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Firebase</span>
            </div>
          </div>

          <div className="bento__card bento__card--col-span-2">
            <h3>Interests</h3>
            <div className="bento__tags">
              <span>Backend Development</span>
              <span>Game Development</span>
              <span>Pixel Art</span>
              <span>Gaming</span>
              <span>Anime</span>
              <span>D&D</span>
              <span>Magic: the Gathering</span>
            </div>
          </div>

          <div className="bento__card">
            <h3>Education</h3>
            <p>BS Computer Science</p>
            <p>Mapua University</p>
          </div>

          <div className="bento__card">
            <h3>Languages</h3>
            <p>English, Filipino, Elven, Draconic</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutMe