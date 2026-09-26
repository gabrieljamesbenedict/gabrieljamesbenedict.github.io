import "./styles/index.css"
import Header from "./sections/Header.tsx"
import Hero from "./sections/Hero.tsx"
import AboutMe from "./sections/AboutMe.tsx"
import Projects from "./sections/Projects.tsx"
import Skills from "./sections/Skills.tsx"
import { ProjectModel } from "./data/ProjectData.ts"

const App = () => {

  const sampleProjects: ProjectModel[] = [
    new ProjectModel(
      "Lorem Ipsum",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "/images/lorem1.png",
      ["Lorem", "Ipsum"],
      "https://github.com/lorem/1",
      "https://lorem1.com"
    ),
    new ProjectModel(
      "Dolor Sit Amet",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "/images/lorem2.png",
      ["Dolor", "Sit"],
      "https://github.com/lorem/2",
      "https://lorem2.com"
    ),
    new ProjectModel(
      "Consectetur Adipiscing",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "/images/lorem3.png",
      ["Amet", "Elit"],
      "https://github.com/lorem/3",
      "https://lorem3.com"
    ),
    new ProjectModel(
      "Sed Do Eiusmod",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "/images/lorem4.png",
      ["Sed", "Do"],
      "https://github.com/lorem/4",
      "https://lorem4.com"
    ),
    new ProjectModel(
      "Tempor Incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "/images/lorem5.png",
      ["Eiusmod", "Tempor"],
      "https://github.com/lorem/5",
      "https://lorem5.com"
    ),
    new ProjectModel(
      "Labore Et Dolore",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "/images/lorem6.png",
      ["Labore", "Dolore"],
      "https://github.com/lorem/6",
      "https://lorem6.com"
    )
  ];

  return (
    <>
      <Header/>
      <div className="app__container">
        <Hero/>
        <AboutMe/>
        <Projects projects={sampleProjects}/>
        <Skills/>
      </div>
    </>
  )
}

export default App