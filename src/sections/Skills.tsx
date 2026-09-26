import { useState } from "react"
import { skillsData } from "../data/SkillsData"
import "../styles/Skills.css"

const Skills = () => {
    const [activeTab, setActiveTab] = useState("languages.ts")

    return (
        <section className="skills" id="skills">
        <div className="skills__container">
            <h2 className="skills__title">My Skills</h2>
            <div className="skills__editor">
            <div className="skills__header">
                <div className="skills__controls">
                <span className="skills__control skills__control--close"></span>
                <span className="skills__control skills__control--minimize"></span>
                <span className="skills__control skills__control--maximize"></span>
                </div>
                <div className="skills__tabs">
                {Object.keys(skillsData).map((tab) => (
                    <button
                    key={tab}
                    className={`skills__tab ${activeTab === tab ? "skills__tab--active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                    >
                    {tab}
                    {activeTab === tab && <span className="skills__tab-close">×</span>}
                    </button>
                ))}
                </div>
            </div>
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
                        <span className="skills__tag">
                            {/* <img src={JavaIcon} className="skills__icon" alt="" /> */}
                            {skill}
                        </span>
                        {index < skillsData[activeTab].length - 1 ? "," : ""}
                    </div>
                    ))}
                </div>
                <div className="skills__code-line">];</div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Skills