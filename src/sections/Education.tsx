import "../styles/Education.css"
import { EducationData } from "../data/EducationData"

const Education = () => {
  const commits = Object.values(EducationData);

  return (
    <section className="education">
      <div className="education__container">
        <h2 className="education__section-title">Education</h2>

        <div className="education__window">
          <div className="education__header">
            <div className="education__controls">
              <div className="education__control education__control--close"></div>
              <div className="education__control education__control--minimize"></div>
              <div className="education__control education__control--maximize"></div>
            </div>
            <div className="education__tabs">
              <button className="education__tab education__tab--active">
                ~/mapua/education
                <span className="education__tab-close">×</span>
              </button>
            </div>
          </div>

          <div className="education__body">
            
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education