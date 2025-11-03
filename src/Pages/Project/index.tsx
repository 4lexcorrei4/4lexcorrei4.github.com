import "./style.css"
import { projects } from "../../Infos/projects";
import { IoCalendarClear, IoGlobeOutline } from "react-icons/io5";
import parser from "html-react-parser";
import Carousel from "react-material-ui-carousel";
import { Link, Navigate, useParams } from "react-router-dom";
import Head from "../../Head";
import { internalUrls } from "../../Infos/urls";

const Project = () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const { codename } = useParams();
    const selectedProject = projects.find((p) => p.codename === codename);

    return selectedProject ? <>
        <Head
            title={`Project ${selectedProject.name} - Alexandre Correia`}
            description={`Projects ${selectedProject.name}`}
            image={selectedProject.logo}
        />
        <div className="project page bgcolor">
            <Link to={internalUrls.projects()} className="back">&larr; Projects list</Link>
            <div className="header">
                <div
                    className="logo"
                    style={{ backgroundImage: `url(${selectedProject.logo ?? "/assets/white_square.jpg"})` }}
                />
                <div>
                    <p className="name">{selectedProject.name}</p>
                    <div className="info">
                        <span>
                            <IoCalendarClear />
                            {monthNames[new Date(selectedProject.dates.start).getMonth()]} {new Date(selectedProject.dates.start).getFullYear()}
                            &nbsp;-&nbsp;
                            {
                                selectedProject.dates.end
                                    ? <>{monthNames[new Date(selectedProject.dates.end).getMonth()]} {new Date(selectedProject.dates.end).getFullYear()}</>
                                    : <>Present</>
                            }
                        </span>
                        {selectedProject.url && <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="url"><IoGlobeOutline />{selectedProject.urlLabel ?? selectedProject.url}</a>}
                    </div>
                </div>
            </div>
            {
                selectedProject.description && <>
                    <h3>Description</h3>
                    <div className="description">
                        {
                            selectedProject.description.map(desc => <p>{parser(desc)}</p>)
                        }
                    </div>
                </>
            }
            {
                selectedProject.screenshots?.length
                    ? <Carousel className="carousel" navButtonsAlwaysVisible indicators={false}>
                        {
                            selectedProject.screenshots?.map((screenshot, idx) =>
                                <div className="img-wrapper">
                                    <img src={screenshot} alt={`${selectedProject.name} screenshot ${idx + 1}`} />
                                </div>
                            )
                        }
                    </Carousel>
                    : <></>
            }
        </div>
    </>
    : <Navigate to={""} />
};

export default Project;