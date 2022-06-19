import React from "react";
import "./style.css"
import {NavLink} from "react-router-dom";
import {projects} from "../../Infos/projects";

const Projects = () => {
    return <div id="projects" className="page bgcolor">
        {
            projects.map(project => {
                return <NavLink to={project.details}>
                    <div>
                        <img src={project.logo ? project.logo : "/img/white_square.jpg"}/>
                        <span>{project.name}</span>
                    </div>
                    <span className="button">&#8594;</span>
                </NavLink>
            })
        }
    </div>
};

export default Projects;