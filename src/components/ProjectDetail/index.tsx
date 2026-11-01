import "./style.css";
import parser from "html-react-parser";
import { IoCalendarClear, IoEyeOffOutline, IoGlobeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Project } from "../../infos/projects";
import { internalUrls } from "../../infos/urls";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatMonth = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

type ProjectDetailProps = {
    project: Project;
};

const ProjectDetail = ({ project }: ProjectDetailProps) => (
    <article className="project-detail">
        <div className="header">
            <div
                className="logo"
                style={{ backgroundImage: `url(${project.logo ?? "/assets/white_square.jpg"})` }}
            />
            <div className="header-copy">
                <p className="name">{project.name}</p>
                <div className="info">
                    <span>
                        <IoCalendarClear />
                        {formatMonth(project.dates.start)}
                        &nbsp;-&nbsp;
                        {project.dates.end ? formatMonth(project.dates.end) : "Present"}
                    </span>
                    {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="url">
                            <IoGlobeOutline />
                            {project.urlLabel ?? project.url}
                        </a>
                    )}
                </div>
            </div>
            <Link
                to={internalUrls.projects()}
                className="header-close"
                aria-label="Close project details"
            >
                <IoEyeOffOutline />
            </Link>
        </div>
        {project.description.length > 0 && (
            <>
                <h3>Description</h3>
                <div className="description">
                    {project.description.map((desc, idx) => <p key={idx}>{parser(desc)}</p>)}
                </div>
            </>
        )}
        {project.screenshots?.length ? (
            <Swiper className="carousel" modules={[Navigation]} navigation>
                {project.screenshots.map((screenshot, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="img-wrapper">
                            <img src={screenshot} alt={`${project.name} screenshot ${idx + 1}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        ) : null}
    </article>
);

export default ProjectDetail;
