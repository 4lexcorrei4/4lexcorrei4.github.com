import React from "react";
import "./style.css"
import {externalUrls, internalUrls} from "../../Infos/urls";
import {Link} from "react-router-dom";

const Profile = () => {
    return <div id="profile" className="page bgcolor">
        <img id="profile-picture" src="/img/profile.png" />
        <p>I am an Incoming Software Engineer at <a href={externalUrls.currentCompany()} target="_blank" rel="noopener noreferrer">Caixa Mágica Software</a>, where I will belong to a back-end team.</p>
        <p>I have always been very passionate about computers and lately the area that I have been focusing the most is the development of (Distributed) Web Applications, which includes back-end, front-end, database management and information extraction (e.g. through crawling). Also, I enjoy incorporating some machine learning in the projects I develop, whenever needed.</p>
        <h2>Interests</h2>
        <ul className="cols-3">
            <li><img src="/img/web_applications.svg" />(Distributed) Web Applications</li>
            <li><img src="/img/mobile_applications.svg" />Mobile Applications</li>
            <li><img src="/img/machine_learning.svg" />Machine Learning</li>
        </ul>
        <h2>Main Hobbies</h2>
        <ul className="cols-2">
            <li><img src="/img/hicking.svg" />Hiking</li>
            <li><img src="/img/sailing.svg" />Sailing</li>
        </ul>
    </div>
};

export default Profile;