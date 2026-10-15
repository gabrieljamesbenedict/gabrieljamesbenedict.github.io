import "../styles/Education.css"
import Window from "../components/Window"
import { EducationData } from "../data/EducationData"

const Education = () => {
  const commits = Object.values(EducationData);

  return (
    <section className="section education" id="education">
      <div className="section__container">
        <h2 className="section__title">Education</h2>

        <Window
          accent="sky"
          tabs={
            <div className="window__tab window__tab--active" role="tab" aria-selected="true">
              ~/mapua/education
              <span className="window__tab-close">×</span>
            </div>
          }
        >
          <div className="education__timeline">
            {commits.map((commit, index) => {
              const isLast = index === commits.length - 1;
              const isFeat = commit.message.startsWith("feat");
              const isRefactor = commit.message.startsWith("refactor");

              return (
                <div className="education__commit" key={commit.shortHash}>
                  <div className="education__branch">
                    <div className={`education__node ${isFeat ? "education__node--feat" : isRefactor ? "education__node--refactor" : ""}`}></div>
                    {!isLast && <div className="education__line"></div>}
                  </div>

                  <div className={`education__info ${isLast ? "education__info--last" : ""}`}>
                    <span className="education__date">{commit.date}</span>
                    <span className={`education__hash ${isFeat ? "education__hash--feat" : isRefactor ? "education__hash--refactor" : ""}`}>
                      {commit.shortHash}
                    </span>
                    <div className="education__details">
                      <span className="education__institution">{commit.message}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Window>
      </div>
    </section>
  )
}

export default Education
