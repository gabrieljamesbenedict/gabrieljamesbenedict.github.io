import "../styles/Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Hello World</h1>
        <nav className="header__nav">
          <a className="header__link" href="#aboutme">About Me</a>
          <a className="header__link" href="#projects">Projects</a>
          <a className="header__link" href="#skills">Skills</a>
          <a className="header__link" href="#education">Education</a>
        </nav>
        <nav>
          <a className="header__link--special" href="#contactme">Contact Me</a>
        </nav>
      </div>
    </header>
  )
}

export default Header