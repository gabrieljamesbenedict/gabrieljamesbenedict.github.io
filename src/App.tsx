import "./styles/index.css"
import Header from "./sections/Header.tsx"
import Hero from "./sections/Hero.tsx"
import AboutMe from "./sections/AboutMe.tsx"

const App = () => {
  return (
    <>
      <Header/>
      <div className="app__container">
        <Hero/>
        <AboutMe/>
      </div>
    </>
  )
}

export default App