import { useEffect, useState } from "react";
import "./style.css"
import { categories, category, projects } from "../../Infos/projects";
import { IoCalendarClear, IoGlobeOutline } from "react-icons/io5";
import { internalUrls } from "../../Infos/urls";
import parser from "html-react-parser";
import Carousel from "react-material-ui-carousel";
import { IoList, IoClose } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import Head from "../../Head";
import { Link } from "react-router-dom";

const Projects = () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [selectedCategory, setSelectedCategory] = useState<category | undefined>();
    const shownProjects = projects.filter((project) => selectedCategory ? project.categories.includes(selectedCategory) : true).sort((a, b) => (b.dates.end ?? b.dates.start) - (a.dates.end ?? a.dates.start));
    const [menuIsOpen, setMenuIsOpen] = useState(true);

    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 500;

    const [searchParams] = useSearchParams();
    const projectCodename = searchParams.get('p');
    useEffect(() => {
        if (!projectCodename) return;
        const anchor = document.getElementById(projectCodename);
        if (!anchor) return;
        anchor.scrollIntoView({ behavior: 'smooth' });
    }, [projectCodename]);

    const selectedProject = projects.find((p) => p.codename === projectCodename);

    return <>
        <Head
            title={`${selectedProject ? `Project ${selectedProject.name}` : 'Projects'} - Alexandre Correia`}
            description={selectedProject ? `Project ${selectedProject.name}` : 'Projects'}
            image={selectedProject?.logo}
        />
        <div className="projects page bgcolor">
            <div className="filters">
                <ul>
                    {
                        (Object.keys(categories) as category[]).map((cat) => <li className={selectedCategory === cat ? 'selected' : ''} onClick={() => setSelectedCategory(selectedCategory === cat ? undefined : cat)}><span>{categories[cat].icon}</span> {categories[cat].label}</li>)
                    }
                </ul>
            </div>
            <div className="content">
                {!menuIsOpen && <div id="list-open" onClick={() => setMenuIsOpen((currentState) => !currentState)}><IoList /></div>}
                {menuIsOpen && <div id="list-close" onClick={() => setMenuIsOpen((currentState) => !currentState)}><IoClose /></div>}
                {
                    menuIsOpen && <ul className="navigation">
                        {
                            shownProjects.map((project, idx) => (
                                <li>
                                    <Link
                                        to={internalUrls.project(project.codename)}
                                        onClick={() => { if (isMobile) setMenuIsOpen(false) }}
                                        className={
                                            (projectCodename && project?.codename === projectCodename) || (!projectCodename && idx === 0) ? 'selected' : ''
                                        }
                                    >
                                        <div
                                            className="logo"
                                            style={{ backgroundImage: `url(${project.logo ?? "/assets/white_square.jpg"})` }}
                                        />
                                        {project.name}
                                        <span className="categories">{project.categories.filter((cat) => cat !== selectedCategory).map((cat) => categories[cat].icon)}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                }
                <ul className="projects-list">
                    {
                        shownProjects.map((project) => <li id={project.codename} className="project">
                            <div className="header">
                                <div
                                    className="logo"
                                    style={{ backgroundImage: `url(${project.logo ?? "/assets/white_square.jpg"})` }}
                                />
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
                                        {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="url"><IoGlobeOutline />{project.urlLabel ?? project.url}</a>}
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
                                project.screenshots?.length
                                    ? <Carousel className="carousel" navButtonsAlwaysVisible indicators={false}>
                                        {
                                            project.screenshots?.map((screenshot, idx) =>
                                                <div className="img-wrapper">
                                                    <img src={screenshot} alt={`${project.name} screenshot ${idx + 1}`} />
                                                </div>
                                            )
                                        }
                                    </Carousel>
                                    : <></>
                            }
                            {/* {
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
                                    project.screenshots.map((image, index) => <li className={index == screenshot ? "active" : ""} onClick={() => setScreenshot(index)}>{index + 1}</li>)
                                }
                                <li onClick={() => {
                                    if (screenshot < project.screenshots.length - 1) {
                                        setScreenshot(screenshot + 1);
                                    } else {
                                        setScreenshot(0);
                                    }
                                }}>&#8594;</li>
                            </ul>
                            <img id="screenshot" src={project.screenshots[screenshot]} />
                        </>
                    } */}
                        </li>
                        )
                    }
                </ul>
            </div>
            {/* {
            projects.map(project => {
                return <NavLink to={internalUrls.workProject(project.codename)}>
                    <div>
                        <img src={project.logo || "/assets/white_square.jpg"} />
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
        } */}
        </div >
    </>
};

export default Projects;