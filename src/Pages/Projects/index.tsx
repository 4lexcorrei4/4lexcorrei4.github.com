import { ReactNode, useEffect, useState } from "react";
import "./style.css";
import { categories, projectGroup, projectGroupFor, projectGroups, projects, Project } from "../../infos/projects";
import { internalUrls } from "../../infos/urls";
import Head from "../../components/Head";
import PillList from "../../components/PillList";
import CardGrid from "../../components/CardGrid";
import LinkCard from "../../components/LinkCard";
import ProjectDetail from "../../components/ProjectDetail";
import { IoCameraOutline, IoCodeSlashOutline, IoEyeOffOutline, IoFilmOutline } from "react-icons/io5";
import { Link, Navigate, useParams } from "react-router-dom";

const groupFilters: { id: projectGroup; icon: ReactNode }[] = [
    { id: "technology", icon: <IoCodeSlashOutline /> },
    { id: "photography", icon: <IoCameraOutline /> },
    { id: "video", icon: <IoFilmOutline /> },
];
const paneMotionMs = 450;

const motionReduced = () =>
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

const Projects = () => {
    const { codename } = useParams();
    const [selectedGroups, setSelectedGroups] = useState<projectGroup[]>([]);
    const selectedProject = codename ? projects.find((project) => project.codename === codename) : undefined;
    const [paneProject, setPaneProject] = useState<Project | undefined>(selectedProject);
    const [trackedCodename, setTrackedCodename] = useState(selectedProject?.codename);
    const [detailFades, setDetailFades] = useState(false);

    if (selectedProject && paneProject?.codename !== selectedProject.codename) {
        setPaneProject(selectedProject);
    } else if (!selectedProject && paneProject && motionReduced()) {
        setPaneProject(undefined);
    }

    if (trackedCodename !== selectedProject?.codename) {
        setTrackedCodename(selectedProject?.codename);
        setDetailFades(Boolean(trackedCodename && selectedProject));
    }

    useEffect(() => {
        if (selectedProject || !paneProject || motionReduced()) return;
        const timeout = window.setTimeout(() => setPaneProject(undefined), paneMotionMs);
        return () => window.clearTimeout(timeout);
    }, [selectedProject, paneProject]);

    const shownProjects = projects
        .filter((project) => selectedGroups.length === 0 || selectedGroups.includes(projectGroupFor(project.categories)))
        .sort((a, b) => (b.dates.end ?? Number.POSITIVE_INFINITY) - (a.dates.end ?? Number.POSITIVE_INFINITY));

    const toggleGroup = (label: string) => {
        const next = groupFilters.find((group) => projectGroups[group.id].label === label)?.id;
        if (!next) return;
        setSelectedGroups((current) =>
            current.includes(next) ? current.filter((id) => id !== next) : [...current, next]
        );
    };

    if (codename && !selectedProject) {
        return <Navigate to={internalUrls.home()} />;
    }

    return <>
        <Head
            title={selectedProject ? `Project ${selectedProject.name} - Alexandre Correia` : "Projects - Alexandre Correia"}
            description={selectedProject ? `Projects ${selectedProject.name}` : "Projects"}
            image={selectedProject?.logo}
        />
        <div className={selectedProject ? "projects page is-open" : "projects page"}>
            <PillList
                items={groupFilters.map((group) => ({
                    label: projectGroups[group.id].label,
                    icon: group.icon,
                }))}
                selected={selectedGroups.map((id) => projectGroups[id].label)}
                onSelect={toggleGroup}
                onClear={() => setSelectedGroups([])}
            />
            <Link
                to={internalUrls.projects()}
                className="project-back"
                tabIndex={selectedProject ? undefined : -1}
            >
                &larr; Projects list
            </Link>
            <div id="projects" className="projects-body">
                <div className="project-index">
                    <CardGrid>
                        {shownProjects.map((project) => (
                            <li key={project.codename}>
                                <div
                                    className={
                                        project.codename === selectedProject?.codename
                                            ? "project-card is-open"
                                            : "project-card"
                                    }
                                >
                                    <LinkCard
                                        to={internalUrls.project(project.codename)}
                                        image={project.logo}
                                        title={project.name}
                                        meta={project.categories.map((cat) => categories[cat].icon)}
                                        selected={project.codename === selectedProject?.codename}
                                    />
                                    {project.codename === selectedProject?.codename && (
                                        <Link
                                            to={internalUrls.projects()}
                                            className="project-card-close"
                                            aria-label="Hide project details"
                                        >
                                            <IoEyeOffOutline />
                                        </Link>
                                    )}
                                </div>
                            </li>
                        ))}
                    </CardGrid>
                </div>
                <div
                    className="project-pane"
                    aria-hidden={selectedProject ? undefined : true}
                    inert={selectedProject ? undefined : true}
                >
                    <div className={detailFades ? "project-pane-scroll is-fading" : "project-pane-scroll"}>
                        {paneProject && (
                            <ProjectDetail key={paneProject.codename} project={paneProject} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Projects;
