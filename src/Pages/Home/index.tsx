import React from "react";
import "./style.css";
import {IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin} from "react-icons/io5";

const Home = () => {
    return <div id="home" className="page">
        <div id="welcome">Hello, I am</div>
        <div id="name">Alexandre Correia</div>
        <div id="social">
            <a href={"https://www.linkedin.com/in/4lexcorrei4/"} target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a>
            <a href={"https://www.instagram.com/4lexcorrei4/"} target="_blank" rel="noopener noreferrer"><IoLogoInstagram /></a>
            <a href={"https://github.com/4lexcorrei4/"} target="_blank" rel="noopener noreferrer"><IoLogoGithub /></a>
            <a href={"https://www.facebook.com/4lexcorrei4/"} target="_blank" rel="noopener noreferrer"><IoLogoFacebook /></a>
        </div>
    </div>
};

export default Home;