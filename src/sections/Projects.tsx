import "../styles/Projects.css";
import { ProjectData } from "../data/ProjectData";

const Projects = () => {

    const GithubIcon = "/icons/github-white-icon.png"
    const HyperlinkIcon = "/icons/hyperlink-white-icon.png"

    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <h2 className="projects__title">Stuff I've Worked On</h2>
                <div className="projects__grid">
                    {Object.entries(ProjectData).map(([title, data]) => (
                        <div key={title} className="projects__card">
                            <h2 className="projects__card-title">{title}</h2>
                            <p className="projects__card-description">{data.description}</p>
                            <div className="projects__card-tags">
                                {data.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            <div className="projects__card-links">
                                <a className="projects__card-github" href={data.github} target="_blank" rel="noreferrer">
                                    <img className="projects__card-github-icon" src={GithubIcon} alt="GitHub" />
                                    GitHub
                                </a>
                                {
                                    (data.url !== "") &&
                                    <a className="projects__card-link" href={data.url} target="_blank" rel="noreferrer">
                                        <img className="projects__card-link-icon" src={HyperlinkIcon} alt="Live site" />
                                        Link
                                    </a>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
