import React from "react";
import "./style.css"
import {externalUrls, internalUrls} from "../../Infos/urls";

const Profile = () => {
    return <div id="profile" className="page bgcolor">
        <img id="picture" src="/assets/profile.png" />
        <div id="description">
            <p>I am a Software Engineer at <a href={externalUrls.currentCompany()} target="_blank" rel="noopener noreferrer">Caixa Mágica Software</a>, where I am doing web development.</p>
            <p>I have always been very passionate about computers and lately the area that I have been focusing the most is the development of Web Applications, which includes (distributed) back-end, front-end, database management and information extraction (e.g. through crawling). Also, I enjoy incorporating machine learning in the projects I develop, whenever needed.</p>
        </div>
        <h2>Interests</h2>
        <ul className="cols-4">
            <li><img src="/assets/interests/web_applications.svg" />Web Applications</li>
            <li><img src="/assets/interests/mobile_applications.svg" />Mobile Applications</li>
            <li><img src="/assets/interests/machine_learning.svg" />Machine Learning</li>
            <li><img src="/assets/interests/distributed_systems.svg" />Distributed Systems</li>
        </ul>
        <h2>Hobbies</h2>
        <ul className="cols-4">
            <li><img src="/assets/hobbies/hiking.svg" />Hiking</li>
            <li><img src="/assets/hobbies/sailing.svg" />Sailing</li>
            <li><img src="/assets/hobbies/photography.svg" />Photography</li>
            <li><img src="/assets/hobbies/music.svg" />Music</li>
        </ul>
    </div>
};

export default Profile;