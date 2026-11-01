import "./style.css";
import parse from "html-react-parser";
import { IoCalendarClear, IoLocationSharp } from "react-icons/io5";
import { jobs } from "../../infos/jobs";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatMonth = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${monthNames[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
};

const formatRange = (start: number, end?: number) =>
    `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;

const JobList = () => (
    <div className="job-list">
        {jobs.map((company) => (
            <section className="job-company" key={company.company}>
                <div className="job-company-line">
                    <a className="job-company-link" href={company.url} target="_blank" rel="noopener noreferrer">
                        <img className="job-logo" src={company.logo} alt="" />
                        <span className="job-name">{company.company}</span>
                    </a>
                    <p className="job-location">
                        <IoLocationSharp aria-hidden="true" />
                        {company.location}
                    </p>
                </div>
                <ul className="job-positions">
                    {company.positions.map((position) => (
                        <li key={`${position.role}-${position.dates.start}`}>
                            <h3 className="job-role">
                                {position.role}
                                <span className="job-dates">
                                    <IoCalendarClear aria-hidden="true" />
                                    {formatRange(position.dates.start, position.dates.end)}
                                </span>
                            </h3>
                            <div className="job-description">
                                {position.description.map((desc, index) => (
                                    <p key={index}>{parse(desc)}</p>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        ))}
    </div>
);

export default JobList;
