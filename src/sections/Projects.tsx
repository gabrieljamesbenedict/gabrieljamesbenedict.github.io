import { useState } from "react";
import "../styles/Projects.css";
import Window from "../components/Window";
import { ProjectData } from "../data/ProjectData";

const GithubIcon = "/icons/github-white-icon.png";
const HyperlinkIcon = "/icons/hyperlink-white-icon.png";

const projectNames = Object.keys(ProjectData);

const Projects = () => {
    const [selected, setSelected] = useState(projectNames[0]);
    const data = ProjectData[selected];

    return (
        <section className="section projects" id="projects">
            <div className="section__container">
                <h2 className="section__title">Stuff I&apos;ve Worked On</h2>
                <Window
                  accent="sky"
                  tabs={
                    <div className="window__tab window__tab--active" role="tab" aria-selected="true">
                      ~/projects
                      <span className="window__tab-close">×</span>
                    </div>
                  }
                >
                  <div className="projects__split">
                      <div className="projects__list">
                          {projectNames.map((name) => (
                              <button
                                key={name}
                                className={`projects__item ${selected === name ? "projects__item--active" : ""}`}
                                onClick={() => setSelected(name)}
                                aria-current={selected === name ? "true" : undefined}
                              >
                                  {name}
                                  <span className="projects__item-tags">{ProjectData[name].tags.slice(0, 2).join(" · ")}</span>
                              </button>
                          ))}
                      </div>
                      <div className="projects__detail">
                          <h3 className="projects__detail-title">{selected}</h3>
                          <p className="projects__detail-description">{data.description}</p>
                          <div className="projects__detail-tags">
                              {data.tags.map((tag) => (
                                  <span key={tag} className="tag-pill">{tag}</span>
                              ))}
                          </div>
                          <div className="projects__links">
                              <a className="projects__link" href={data.github} target="_blank" rel="noreferrer">
                                  <img className="projects__link-icon" src={GithubIcon} alt="GitHub" />
                                  GitHub
                              </a>
                              {data.url !== "" && (
                                  <a className="projects__link" href={data.url} target="_blank" rel="noreferrer">
                                      <img className="projects__link-icon" src={HyperlinkIcon} alt="Live site" />
                                      Link
                                  </a>
                              )}
                          </div>
                      </div>
                  </div>
                </Window>
            </div>
        </section>
    );
};

export default Projects;
