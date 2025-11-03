import { useState } from "react";
import "./style.css"
import { categories, category, projects } from "../../Infos/projects";
import { internalUrls } from "../../Infos/urls";
import Head from "../../Head";
import { Link } from "react-router-dom";

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<category | undefined>();
    const shownProjects = projects.filter((project) => selectedCategory ? project.categories.includes(selectedCategory) : true).sort((a, b) => (b.dates.end ?? b.dates.start) - (a.dates.end ?? a.dates.start));

    return <>
        <Head
            title={'Projects - Alexandre Correia'}
            description={'Projects'}
        />
        <div className="projects page bgcolor">
            <div className="filters">
                <ul>
                    {
                        (Object.keys(categories) as category[]).map((cat) => <li key={`category-${cat}`} className={selectedCategory === cat ? 'selected' : ''} onClick={() => setSelectedCategory(selectedCategory === cat ? undefined : cat)}><span>{categories[cat].icon}</span> {categories[cat].label}</li>)
                    }
                </ul>
            </div>
            <div id="projects" className="content">
                    <ul className="navigation">
                        {
                            shownProjects.map((project, idx) => (
                                <li key={`list-${project.codename}`}>
                                    <Link to={internalUrls.project(project.codename)}>
                                        <div
                                            className="logo"
                                            style={{ backgroundImage: `url(${project.logo ?? "/assets/white_square.jpg"})` }}
                                        />
                                        <div className="info">
                                            {project.name}
                                            <span className="categories">{project.categories.filter((cat) => cat !== selectedCategory).map((cat) => categories[cat].icon)}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
            </div>
        </div >
    </>
};

export default Projects;