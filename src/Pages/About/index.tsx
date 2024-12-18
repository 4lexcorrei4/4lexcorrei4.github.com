import React from "react";
import "./style.css"
import { externalUrls, internalUrls } from "../../Infos/urls";
import { Link } from "react-router-dom";
import Head from "../../Head";

const About = () => {
    const languages = [
        { level: "Native proficiency", label: "Portuguese", short: 'PT' },
        { level: "Professional working proficiency", label: "English", short: 'EN' },
    ];
    const strengths = ["Knowledge lover", "Open-minded", "Ready-to-learn", "Resilient", "Responsible", "Team worker"];

    return <div id="profile" className="page bgcolor">
        <Head
            title={'About - Alexandre Correia'}
            description={'About'}
        />
        <div id="about">
            <img id="picture" src="/assets/profile.png" />
            <div id="description">
                <p>I have always been very passionate about technology and arts, particularly in areas like software development and photography.</p>
                <p>As a Software Engineer, I specialize in the development of web applications, handling everything from back-end and database management to front-end. Also, I enjoy incorporating machine learning into projects, whenever it adds value.</p>
                <p>Beyond technology, I have a keen interest for photography, with a particular focus on street and landscape scenes. My passion for photography comes from a desire to capture and preserve the beauty and fleeting moments of everyday life.</p>
            </div>
        </div>
        <ul className="cols-2 languages">
            {
                languages.map((lang) => <li>
                    <span className="short">{lang.short}</span>
                    <span className="lang-level">
                        <span className="lang">{lang.label}</span>
                        <span className="level">{lang.level}</span>
                    </span>
                </li>)
            }
        </ul>
        <ul className="carousel strengths">
            {
                strengths.map((strength) => <li>{strength}</li>)
            }
        </ul>
        <h2>Interests</h2>
        <ul className="cols-4">
            <li><img src="/assets/interests/web_applications.svg" />Web Applications</li>
            <li><img src="/assets/interests/mobile_applications.svg" />Mobile Applications</li>
            <li><img src="/assets/interests/distributed_systems.svg" />Distributed Systems</li>
            <li><img src="/assets/interests/machine_learning.svg" />Machine Learning</li>
        </ul>
        <h2>Hobbies</h2>
        <ul className="cols-5 over-effect">
            <li><img src="/assets/hobbies/hiking.svg" />Hiking</li>
            <li><img src="/assets/hobbies/photography.svg" />Photography</li>
            <li><img src="/assets/hobbies/music.svg" />Music</li>
            <li><img src="/assets/hobbies/dancing.svg" />Dancing</li>
            <li><img src="/assets/hobbies/sailing.svg" />Sailing</li>
        </ul>
    </div>
};

export default About;