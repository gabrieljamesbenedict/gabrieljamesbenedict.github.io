import "./styles/index.css"
import Header from "./sections/Header.tsx"
import Hero from "./sections/Hero.tsx"
import AboutMe from "./sections/AboutMe.tsx"
import Projects from "./sections/Projects.tsx"
import Skills from "./sections/Skills.tsx"
import Education from "./sections/Education.tsx"
import Contact from "./sections/Contact.tsx"
import Footer from "./sections/Footer.tsx"
import { useBackground } from "./hooks/useBackground.ts"

const App = () => {
  const { selected, selectedId, options, select, reduceMotion, vantaRef, backdropClass, backdropStyle } = useBackground();

  return (
    <div
      className={`app__background ${backdropClass}`.trim()}
      style={backdropStyle}
    >
      {selected.kind === "vanta" && (
        <div ref={vantaRef} className="app__vanta" aria-hidden="true" />
      )}
      <Header
        backgroundOptions={options}
        selectedBackgroundId={selectedId}
        onSelectBackground={select}
        reduceMotion={reduceMotion}
      />
      <div className="app__container">
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Education/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
