import React, { useEffect } from "react";
import "./style.css"
import { externalUrls, internalUrls } from "../../Infos/urls";
import { gallery, themes } from "../../Infos/photography";
import { NavLink } from "react-router-dom";

const Photography = () => {
    return <><div id="photography" className="page bgcolor">
        <ul className="gallery">
            {
                gallery.map((theme) => (
                    <li>
                        <a className="theme" href={internalUrls.photographyProject(theme.codename)}>
                        <img src={theme.cover} alt={`${theme.name} photos`} />
                        <p>{theme.name}</p>
                        </a>
                    </li>
                ))
            }
        </ul>
        {/* <ul className="gallery cols-5">
            {
                themes.map((theme) => (
                    <li>
                        <a className="theme" href={internalUrls.photographyProject(theme.codename)}>
                            <img src={theme.photos[0]} alt={`${theme.name} photos`} />
                            <p>{theme.name}</p>
                        </a>
                    </li>
                ))
            }
        </ul> */}
        {/* <h2>Collaborative Projects</h2>
        <ul className="collaborative-projects">
            <li>
                <img src="https://drive.google.com/thumbnail?id=1-8aaLT9jTTpKz4UJ44i1DPQj3Lkfhsx5" />
                <b>Three photowalks in the estuary of Tejo</b>: https://framadrive.org/s/SKJWGC3KXML7yBB https://drive.google.com/file/d/18irGpqldzFWr4PMDUU3CRDjuPs2itzvZ/view?usp=sharing</li>
        </ul> */}
    </div>
        {/* {
            themes.map(theme => {
                return <NavLink to={internalUrls.project(theme.codename)}>
                    <div>
                        <img style={{ height: '40px', width: '40px', objectFit: 'cover' }} src={theme.photos[0] || "/assets/white_square.jpg"} />
                        <div>
                            <span className="name">{theme.name}</span>
                            <span className="description">
                                {theme.photos.length} photo(s)
                            </span>
                        </div>
                    </div>
                    <span className="button">&#8594;</span>
                </NavLink>
            })
        } */}
    </>
};

export default Photography;