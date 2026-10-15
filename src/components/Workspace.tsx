import { useEffect, useState } from "react";
import Window from "./Window";
import { onWorkspaceSelect } from "./workspaceBus";
import { ProjectData } from "../data/ProjectData";
import { skillsData } from "../data/SkillsData";
import { EducationData } from "../data/EducationData";
import "../styles/Skills.css";
import "../styles/Education.css";
import "../styles/Workspace.css";

const ABOUT_FILE = "~/about/me.md";
const EDUCATION_FILE = "~/education/log";
const CONTACT_FILE = "~/contact.sh";
const SKILLS_PREFIX = "~/skills/";

const GithubIcon = "/icons/github-white-icon.png";
const HyperlinkIcon = "/icons/hyperlink-white-icon.png";
const EmailIcon = "/icons/email-envelope-white-icon.png";
const LinkedInIcon = "/icons/linkedin-app-white-icon.png";

const skillFiles = Object.keys(skillsData);
const projectNames = Object.keys(ProjectData);

const slug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const projectFile = (name: string): string => `~/projects/${slug(name)}.json`;

const projectForFile = (path: string): string | undefined =>
  projectNames.find((name) => projectFile(name) === path);

const CONTACTS = [
  { label: "Email", command: "open --email", url: "mailto:benok.loslos@gmail.com", icon: EmailIcon, alt: "Email" },
  { label: "LinkedIn", command: "open --linkedin", url: "https://www.linkedin.com/in/gjbmloslos/", icon: LinkedInIcon, alt: "LinkedIn" },
  { label: "GitHub", command: "open --github", url: "https://github.com/gabrieljamesbenedict", icon: GithubIcon, alt: "GitHub" },
];

const AboutBody = () => (
  <div className="ws-about">
    <h3 className="ws-about__lead">Gabriel James Benedict M Loslos</h3>
    <p className="ws-about__bio">
      Hello World! I am a Computer Science major from Mapua University.
    </p>
    <p className="ws-about__bio">
      Designing and programming software has always been my passion ever since I was young.
      I first started coding in Scratch. My primary skill is Backend Development and my favorite
      framework to use is Spring Boot. I can also do Frontend Development and I&apos;ve used
      React and Angular before.
    </p>
    <div className="ws-about__row">
      <span className="ws-about__label">EDUCATION</span>
      <span className="ws-about__value">BS Computer Science — Mapua University</span>
    </div>
    <div className="ws-about__row">
      <span className="ws-about__label">LANGUAGES</span>
      <span className="ws-about__value">English, Filipino, Elven, Draconic</span>
    </div>
    <div className="ws-about__row">
      <span className="ws-about__label">CODE</span>
      <span className="ws-about__tags">
        {["Java", "JavaScript", "TypeScript", "SQL", "Python", "HTML", "CSS", "PHP", "Visual Basic"].map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </span>
    </div>
    <div className="ws-about__row">
      <span className="ws-about__label">STACK</span>
      <span className="ws-about__tags">
        {["SpringBoot", "React", "ExpressJS", "Fastify", "Node", "Angular", "MySQL", "PostgreSQL", "MongoDB", "Firebase"].map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </span>
    </div>
    <div className="ws-about__row">
      <span className="ws-about__label">INTERESTS</span>
      <span className="ws-about__tags">
        {["Backend Development", "Game Development", "Pixel Art", "Gaming", "Anime", "D&D", "Magic: the Gathering"].map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </span>
    </div>
  </div>
);

const ProjectsBody = ({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (name: string) => void;
}) => {
  const data = ProjectData[selected];
  return (
    <div className="ws-projects">
      <div className="ws-projects__list">
        {projectNames.map((name) => (
          <button
            key={name}
            className={`ws-projects__item ${selected === name ? "ws-projects__item--active" : ""}`}
            onClick={() => onSelect(name)}
            aria-current={selected === name ? "true" : undefined}
          >
            {name}
            <span className="ws-projects__item-tags">{ProjectData[name].tags.slice(0, 2).join(" · ")}</span>
          </button>
        ))}
      </div>
      <div className="ws-projects__detail">
        <h3 className="ws-projects__detail-title">{selected}</h3>
        <p className="ws-projects__detail-description">{data.description}</p>
        <div className="ws-projects__detail-tags">
          {data.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
        <div className="ws-projects__links">
          <a className="ws-projects__link" href={data.github} target="_blank" rel="noreferrer">
            <img className="ws-projects__link-icon" src={GithubIcon} alt="GitHub" />
            GitHub
          </a>
          {data.url !== "" && (
            <a className="ws-projects__link" href={data.url} target="_blank" rel="noreferrer">
              <img className="ws-projects__link-icon" src={HyperlinkIcon} alt="Live site" />
              Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SkillsBody = ({ file }: { file: string }) => {
  const rows = skillsData[file] ?? skillsData[skillFiles[0]];
  const maxLength = Math.max(...rows.map((s) => s[0].length)) + 5;
  return (
    <div className="skills__body">
      <div className="skills__line-numbers">
        {Array.from({ length: rows.length + 2 }, (_, i) => (
          <span key={i + 1}>{i + 1}</span>
        ))}
      </div>
      <div className="skills__content">
        <div className="skills__code-line">
          <span className="skills__keyword">const</span>
          <span className="skills__variable">skills</span> = [
        </div>
        <div className="skills__tags">
          {rows.map((skill, index) => (
            <div key={index} className="skills__code-line skills__code-line--indented">
              <span className="skills__tag" style={{ minWidth: `${maxLength}ch`, display: "inline-block" }}>
                {skill[0]}{index < rows.length - 1 ? "," : ""}
              </span>
              <span className="skills__comment">// {skill[1]}</span>
            </div>
          ))}
        </div>
        <div className="skills__code-line">];</div>
      </div>
    </div>
  );
};

const EducationBody = () => {
  const commits = Object.values(EducationData);
  return (
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
  );
};

const ContactBody = () => (
  <div className="ws-contact">
    {CONTACTS.map((contact) => (
      <a
        key={contact.label}
        className="ws-contact__cmd"
        href={contact.url}
        target={contact.url.startsWith("mailto:") ? undefined : "_blank"}
        rel="noreferrer"
      >
        <span className="ws-contact__prompt">$</span>
        <img className="contact__icon" src={contact.icon} alt={contact.alt} />
        {contact.command} {contact.label}
        <span className="ws-contact__url">{contact.url}</span>
      </a>
    ))}
  </div>
);

const Workspace = () => {
  const [activeFile, setActiveFile] = useState(ABOUT_FILE);
  const [selectedProject, setSelectedProject] = useState(projectNames[0]);

  const openFile = (path: string): void => {
    setActiveFile(path);
    const project = projectForFile(path);
    if (project) setSelectedProject(project);
  };

  useEffect(() => onWorkspaceSelect((path) => {
    setActiveFile(path);
    const project = projectForFile(path);
    if (project) setSelectedProject(project);
  }), []);

  const inSkills = activeFile.startsWith(SKILLS_PREFIX);
  const activeSkillFile = inSkills ? activeFile.slice(SKILLS_PREFIX.length) : null;
  const skillFile = activeSkillFile && activeSkillFile in skillsData ? activeSkillFile : skillFiles[0];
  const accent = activeFile.startsWith("~/projects/") || activeFile.startsWith("~/education/") ? "sky" : "purple";

  const fileButton = (path: string, label: string) => (
    <button
      key={path}
      className={`ws-side__file ${activeFile === path ? "ws-side__file--active" : ""}`}
      aria-current={activeFile === path ? "page" : undefined}
      onClick={() => openFile(path)}
    >
      {label}
    </button>
  );

  return (
    <section className="section workspace" id="workspace">
      <div className="section__container">
        <Window
          accent={accent}
          tabs={
            inSkills ? (
              <>
                {skillFiles.map((file) => (
                  <button
                    key={file}
                    className={`window__tab ${skillFile === file ? "window__tab--active" : ""}`}
                    onClick={() => openFile(`${SKILLS_PREFIX}${file}`)}
                  >
                    {file}
                    {skillFile === file && <span className="window__tab-close">×</span>}
                  </button>
                ))}
              </>
            ) : (
              <div className="window__tab window__tab--active">
                {activeFile}
                <span className="window__tab-close">×</span>
              </div>
            )
          }
          bodyClassName="ws-body"
        >
          <div className="ws-layout">
            <aside className="ws-side">
              <div className="ws-side__heading">EXPLORER</div>
              <div className="ws-side__group">
                <div className="ws-side__group-title">ABOUT</div>
                {fileButton(ABOUT_FILE, "me.md")}
              </div>
              <div className="ws-side__group">
                <div className="ws-side__group-title">PROJECTS</div>
                {projectNames.map((name) => fileButton(projectFile(name), `${slug(name)}.json`))}
              </div>
              <div className="ws-side__group">
                <div className="ws-side__group-title">SKILLS</div>
                {skillFiles.map((file) => fileButton(`${SKILLS_PREFIX}${file}`, file))}
              </div>
              <div className="ws-side__group">
                <div className="ws-side__group-title">EDUCATION</div>
                {fileButton(EDUCATION_FILE, "log")}
              </div>
              <div className="ws-side__group">
                <div className="ws-side__group-title">CONTACT</div>
                {fileButton(CONTACT_FILE, "contact.sh")}
              </div>
            </aside>
            <div className="ws-main">
              {activeFile === ABOUT_FILE && <AboutBody />}
              {activeFile.startsWith("~/projects/") && (
                <ProjectsBody selected={selectedProject} onSelect={setSelectedProject} />
              )}
              {inSkills && <SkillsBody file={skillFile} />}
              {activeFile === EDUCATION_FILE && <EducationBody />}
              {activeFile === CONTACT_FILE && <ContactBody />}
            </div>
          </div>
        </Window>
      </div>
    </section>
  );
};

export default Workspace;
