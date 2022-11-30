import React from "react";
import "./style.css"
import {externalUrls, internalUrls} from "../../Infos/urls";

const Profile = () => {
    return <div id="profile" className="page bgcolor">
        <img id="profile-picture" src="/img/profile.png" />
        <p>I am a Software Engineer at <a href={externalUrls.currentCompany()} target="_blank" rel="noopener noreferrer">Caixa Mágica Software</a>, where I am doing web development.</p>
        <p>I have always been very passionate about computers and lately the area that I have been focusing the most is the development of Web Applications, which includes (distributed) back-end, front-end, database management and information extraction (e.g. through crawling). Also, I enjoy incorporating some machine learning in the projects I develop, whenever needed.</p>
        <h2>Interests</h2>
        <ul className="cols-4">
            <li><img src="/img/web_applications.svg" />Web Applications</li>
            <li><img src="/img/mobile_applications.svg" />Mobile Applications</li>
            <li><img src="/img/machine_learning.svg" />Machine Learning</li>
            <li><img src="/img/distributed_systems.svg" />Distributed Systems</li>
        </ul>
        <h2>Hobbies</h2>
        <ul className="cols-3">
            <li><img src="/img/hicking.svg" />Hiking</li>
            <li><img src="/img/sailing.svg" />Sailing</li>
            <li><img src="/img/music.svg" />Music</li>
        </ul>
    </div>
};

export default Profile;