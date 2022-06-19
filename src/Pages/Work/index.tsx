import React from "react";
import "./style.css"
import {externalUrls, internalUrls} from "../../Infos/urls";
import {Link} from "react-router-dom";
import {Location} from "react-ionicons";
import {work} from "../../Infos/work";

const Work = () => {
    return <div id="work" className="page bgcolor">
        {
            work.map(company => {
                return <>
                <div className="company">
                    <img src={company.logo}/>
                    <div>
                        <a href={company.url} target="_blank" rel="noopener noreferrer" className="name">{company.company}</a>
                        <p className="location"><Location />{company.location}</p>
                    </div>
                </div>
                    <ul className="positions">
                    {
                        company.positions.map(position => {
                            return <li>
                                    <h3 className="role">{position.role}</h3>
                                    <ul className="description">
                                        {
                                            position.description.map(desc => <li>{desc}</li>)
                                        }
                                    </ul>
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