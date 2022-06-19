import React from "react";
import "./style.css"
import {externalUrls, internalUrls} from "../../Infos/urls";
import {NavLink} from "react-router-dom";
import {Location} from "react-ionicons";
import {work} from "../../Infos/work";
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