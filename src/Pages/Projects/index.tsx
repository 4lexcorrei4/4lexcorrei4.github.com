import React from "react";
import "./style.css"
import {NavLink} from "react-router-dom";
import {projects} from "../../Infos/projects";
import {IoCalendarClear} from "react-icons/io5";

const Projects = () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return <div id="projects" className="page bgcolor">
        {
            projects.map(project => {
                return <NavLink to={project.details}>
                    <div>
                        <img src={project.logo || "/assets/white_square.jpg"}/>
                        <div>
                            <span className="name">{project.name}</span>
                            <span className="date">
                                <IoCalendarClear />&nbsp;
                                {monthNames[new Date(project.dates.start).getMonth()]} {new Date(project.dates.start).getFullYear()}
                                &nbsp;-&nbsp;
                                {
                                    project.dates.end
                                        ? <>{monthNames[new Date(project.dates.end).getMonth()]} {new Date(project.dates.end).getFullYear()}</>
                                        : <>Present</>
                                }
                            </span>
                        </div>
                    </div>
                    <span className="button">&#8594;</span>
                </NavLink>
            })
        }
    </div>
};

export default Projects;