import "./styles/index.css"
import Header from "./sections/Header.tsx"
import Hero from "./sections/Hero.tsx"

const App = () => {
  return (
    <>
      <Header/>
      <div className="app__container">
        <Hero/>
      </div>
    </>
  )
}

export default App