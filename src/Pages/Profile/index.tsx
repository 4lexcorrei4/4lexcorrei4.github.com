import React from "react";
import "./style.css"
import {externalUrls, internalUrls} from "../../Infos/urls";

const Profile = () => {
    return <div id="profile" className="page bgcolor">
        <div id="about">
            <img id="picture" src="/assets/profile.png" />
            <p id="description">I have always been very passionate about computers and I am a Software Engineer focused in the development of web applications, which includes back-end, database management and front-end. Also, I enjoy incorporating machine learning in the projects I develop, whenever needed.</p>
        </div>
        <h2>Interests</h2>
        <ul className="cols-4">
            <li><img src="/assets/interests/web_applications.svg" />Web Applications</li>
            <li><img src="/assets/interests/mobile_applications.svg" />Mobile Applications</li>
            <li><img src="/assets/interests/distributed_systems.svg" />Distributed Systems</li>
            <li><img src="/assets/interests/machine_learning.svg" />Machine Learning</li>
        </ul>
        <h2>Hobbies</h2>
        <ul className="cols-4">
            <li><img src="/assets/hobbies/hiking.svg" />Hiking</li>
            <li><img src="/assets/hobbies/photography.svg" />Photography</li>
            <li><img src="/assets/hobbies/music.svg" />Music</li>
            <li><img src="/assets/hobbies/sailing.svg" />Sailing</li>
        </ul>
    </div>
};

export default Profile;