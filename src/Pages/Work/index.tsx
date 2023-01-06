import React from "react";
import "./style.css"
import {work} from "../../Infos/work";
import {IoCalendarClear, IoLocationSharp} from "react-icons/io5";
import parse from "html-react-parser";

const Work = () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return <div id="work" className="page bgcolor">
        {
            work.map(company => {
                return <>
                <div className="company">
                    <img src={company.logo}/>
                    <div>
                        <a href={company.url} target="_blank" rel="noopener noreferrer" className="name">{company.company}</a>
                        <p className="location"><IoLocationSharp />{company.location}</p>
                    </div>
                </div>
                    <ul className="positions">
                    {
                        company.positions.map(position => {
                            return <li>
                                    <h3 className="role">
                                        {position.role}
                                        <span>
                                            <IoCalendarClear />
                                            {monthNames[new Date(position.dates.start).getMonth()]} {new Date(position.dates.start).getFullYear()}
                                            &nbsp;-&nbsp;
                                            {
                                                position.dates.end
                                                    ? <>{monthNames[new Date(position.dates.end).getMonth()]} {new Date(position.dates.end).getFullYear()}</>
                                                    : <>Present</>
                                            }
                                        </span>
                                    </h3>
                                    <div className="description">
                                        {
                                            position.description.map(desc => <p>{parse(desc)}</p>)
                                        }
                                    </div>
                                </li>
                        })
                    }
                    </ul>
                </>
            })
        }
    </div>
};

export default Work;