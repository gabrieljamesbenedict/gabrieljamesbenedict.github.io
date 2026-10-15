import "../styles/Header.css"
import { selectWorkspaceFile } from "../components/workspaceBus"

const Header = () => {
  const go = (path: string) => () => selectWorkspaceFile(path);

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Hello World</h1>
        <nav className="header__nav">
          <a className="header__link" href="#workspace" onClick={go("~/about/me.md")}>About Me</a>
          <a className="header__link" href="#workspace" onClick={go("~/projects/riel-armory.json")}>Projects</a>
          <a className="header__link" href="#workspace" onClick={go("~/skills/languages.ts")}>Skills</a>
          <a className="header__link" href="#workspace" onClick={go("~/education/log")}>Education</a>
        </nav>
        <nav>
          <a className="header__link--special" href="#workspace" onClick={go("~/contact.sh")}>Contact Me</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
