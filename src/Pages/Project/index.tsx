import React, {useEffect, useState} from "react";
import "./style.css"
import {externalUrls, internalUrls} from "../../Infos/urls";
import {Link, NavLink} from "react-router-dom";
import {Globe} from "react-ionicons";
import {projects} from "../../Infos/projects";

// @ts-ignore
const Project = ({codename}) => {
    const project = projects.filter(p => p.codename == codename)[0]
    const [screenshot, setScreenshot] = useState(0)

    useEffect(
        () => {
            setScreenshot(0)
        },
        [codename]
    )

    return <div id="project" className="page bgcolor">
        <NavLink to={internalUrls.projects()} id="back">&#8592;Projects</NavLink>
        <div className="header">
            <img src={project.logo ? project.logo : "/img/white_square.jpg"}/>
            <div>
                <p className="name">{project.name}</p>
                {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="url"><Globe />{project.url}</a>}
            </div>
        </div>
        <h3>Description</h3>
        <ul className="description">
        {
            project.description.map(desc => {
                return <li>{desc}</li>
            })
        }
        </ul>
        {
            project.screenshots && <>
                <h3>Screenshots</h3>
                <ul id="screenshot-pagination">
                    <li onClick={() => {
                        if (screenshot > 0) {
                            setScreenshot(screenshot - 1);
                        } else {
                            setScreenshot(project.screenshots.length - 1);
                        }
                    }}>&#8592;</li>
                    {
                        project.screenshots.map((image, index) => <li className={index == screenshot ? "active": ""} onClick={() => setScreenshot(index)}>{index + 1}</li>)
                    }
                    <li onClick={() => {
                        if (screenshot < project.screenshots.length - 1) {
                            setScreenshot(screenshot + 1);
                        } else {
                            setScreenshot(0);
                        }
                    }}>&#8594;</li>
                </ul>
                <img id="screenshot" src={project.screenshots[screenshot]}/>
            </>
        }
    </div>
};

export default Project;