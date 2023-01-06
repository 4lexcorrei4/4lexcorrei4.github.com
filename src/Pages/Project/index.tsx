import React, {useEffect, useState} from "react";
import "./style.css"
import {internalUrls} from "../../Infos/urls";
import {NavLink} from "react-router-dom";
import {projects} from "../../Infos/projects";
import {IoCalendarClear, IoGlobeOutline} from "react-icons/io5";
import parser from "html-react-parser";

// @ts-ignore
const Project = ({codename}) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const project = projects.filter(p => p.codename == codename)[0]
    const [screenshot, setScreenshot] = useState(0)

    useEffect(
        () => {
            setScreenshot(0)
        },
        [codename]
    )

    return <div id="project" className="page bgcolor">
        <NavLink to={internalUrls.projects()} id="back">&#8592;&nbsp;Projects</NavLink>
        <div className="header">
            <img src={project.logo || "/assets/white_square.jpg"}/>
            <div>
                <p className="name">{project.name}</p>
                <div className="info">
                    <span>
                        <IoCalendarClear />
                        {monthNames[new Date(project.dates.start).getMonth()]} {new Date(project.dates.start).getFullYear()}
                        &nbsp;-&nbsp;
                        {
                            project.dates.end
                                ? <>{monthNames[new Date(project.dates.end).getMonth()]} {new Date(project.dates.end).getFullYear()}</>
                                : <>Present</>
                        }
                    </span>
                    {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="url"><IoGlobeOutline />{project.url}</a>}
                </div>
            </div>
        </div>
        {
            project.description && <>
                <h3>Description</h3>
                <div className="description">
                {
                    project.description.map(desc => <p>{parser(desc)}</p>)
                }
                </div>
            </>
        }
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