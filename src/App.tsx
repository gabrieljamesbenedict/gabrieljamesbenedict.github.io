import "./styles/index.css"
import Header from "./sections/Header.tsx"
import Hero from "./sections/Hero.tsx"
import AboutMe from "./sections/AboutMe.tsx"
import Projects from "./sections/Projects.tsx"
import Skills from "./sections/Skills.tsx"
import Education from "./sections/Education.tsx"
import Contact from "./sections/Contact.tsx"
import Footer from "./sections/Footer.tsx"

const App = () => {

  return (
    <>
      <Header/>
      <div className="app__container">
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Education/>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App