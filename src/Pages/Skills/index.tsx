import React from "react";
import "./style.css"
import {technicalSkills} from "../../Infos/skills";

const Skills = () => {
    return <div id="skills" className="page bgcolor">
        <h2>Technical</h2>
        {
            technicalSkills.map(({type, skills}) => {
                return (
                    <>
                        <h3>{type}</h3>
                        <ul className="carousel">
                            {
                                skills.map(({logo, name}) => <li><img src={logo}/><p>{name}</p></li>)
                            }
                        </ul>
                    </>
                )
            })
        }
        <h2>Soft</h2>
        <h3>Strengths</h3>
        <ul className="cols cols-3">
            <li>Knowledge lover</li>
            <li>Open-minded</li>
            <li>Ready-to-learn</li>
            <li>Resilient</li>
            <li>Responsible</li>
            <li>Team worker</li>
        </ul>
        <h3>Languages</h3>
        <ul className="cols cols-2">
            <li><span>Portuguese</span>Native Language</li>
            <li><span>English</span>First Certificate in English</li>
        </ul>
    </div>
};

export default Skills;
