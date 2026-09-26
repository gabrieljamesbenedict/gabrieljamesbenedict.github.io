import "../styles/Projects.css";
import { ProjectData } from "../data/ProjectData";

const Projects = () => {

    const GithubIcon = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"

    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <h2 className="projects__title">Stuff I've Worked On</h2>
                <div className="projects__grid">
                    {Object.entries(ProjectData).map(([title, data]) => (
                        <div key={title} className="projects__card">
                            <h2 className="projects__card-title">{title}</h2>
                            <img className="projects__card-img" src={data.image} alt={title} />
                            <p className="projects__card-description">{data.description}</p>
                            <div className="projects__card-tags">
                                {data.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            <a className="projects__card-github" href={data.github}>
                                <img className="projects__card-github-icon" src={GithubIcon} alt="" />
                                GitHub
                            </a>
                        </div>
                    ))}
                </div>
                {/* <a href="/projects">
                    <div className="projects__more-projects-btn">
                        More Projects
                    </div>
                </a> */}
            </div>
        </section>
    );
};

export default Projects;

// {ProjectData.slice(0, 6).map((project, index) => (
// <article key={index} className="project-card">
//     <div className="project-card__image-container">
//         <img className="project-card__image" src={project.projectImagePath} alt={project.projectName} />
//     </div>
//     <div className="project-card__content">
//         <h3 className="project-card__title">{project.projectName}</h3>
//         <p className="project-card__description">{project.projectDescription}</p>
//         <div className="project-card__tags">
//             {project.projectTags?.map((tag, i) => (
//             <span key={i} className="project-card__tag">{tag}</span>
//             ))}
//         </div>
//     </div>
// </article>
// ))}