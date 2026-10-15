import { useState } from "react"
import { skillsData } from "../data/SkillsData"
import Window from "../components/Window"
import "../styles/Skills.css"

const Skills = () => {

    const [activeTab, setActiveTab] = useState("languages.ts")
    const maxLength = Math.max(...skillsData[activeTab].map(s => s[0].length)) + 5;

    return (
        <section className="section skills" id="skills">
        <div className="section__container">
            <h2 className="section__title">My Skills</h2>
            <Window
              accent="purple"
              tabs={
                <>
                  {Object.keys(skillsData).map((tab) => (
                    <button
                      key={tab}
                      role="tab"
                      aria-selected={activeTab === tab}
                      className={`window__tab ${activeTab === tab ? "window__tab--active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                      {activeTab === tab && <span className="window__tab-close">×</span>}
                    </button>
                  ))}
                </>
              }
            >
              <div className="skills__body">
                  <div className="skills__line-numbers">
                  {Array.from({ length: skillsData[activeTab].length + 2 }, (_, i) => (
                      <span key={i + 1}>{i + 1}</span>
                  ))}
                  </div>
                  <div className="skills__content">
                  <div className="skills__code-line">
                      <span className="skills__keyword">const</span>
                      <span className="skills__variable">skills</span> = [
                  </div>
                  <div className="skills__tags">
                      {skillsData[activeTab].map((skill, index) => (
                      <div key={index} className="skills__code-line skills__code-line--indented">
                          <span className="skills__tag" style={{ minWidth: `${maxLength}ch`, display: "inline-block" }}>
                              {skill[0]}{index < skillsData[activeTab].length - 1 ? "," : ""}
                          </span>
                          <span className="skills__comment">// {skill[1]}</span>
                      </div>
                      ))}
                  </div>
                  <div className="skills__code-line">];</div>
                  </div>
              </div>
            </Window>
        </div>
        </section>
    )
}

export default Skills
