import "../styles/Projects.css";
import { ProjectModel, fetchProjects } from "../data/ProjectData";

const Projects = ({ projects }: { projects: ProjectModel[] }) => {
  return (
    <section className="projects">
        <div className="projects__container">
            <h2 className="projects__title">Stuff I've Worked On</h2>
            <div className="projects__grid">
                {projects.slice(0, 6).map((project, index) => (
                <article key={index} className="project-card">
                    <div className="project-card__image-container">
                        <img className="project-card__image" src={project.projectImagePath} alt={project.projectName} />
                    </div>
                    <div className="project-card__content">
                        <h3 className="project-card__title">{project.projectName}</h3>
                        <p className="project-card__description">{project.projectDescription}</p>
                        <div className="project-card__tags">
                            {project.projectTags?.map((tag, i) => (
                            <span key={i} className="project-card__tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </article>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Projects;