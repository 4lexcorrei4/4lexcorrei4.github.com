import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import {internalUrls} from "../../Infos/urls";
import {LogoFacebook, LogoGithub, LogoInstagram, LogoLinkedin} from "react-ionicons";

const Home = () => {
    const scrollTo = (id:string) => {
        // @ts-ignore
        window.scrollTo(0, document.getElementById(id).offsetTop);
    };

    return <div id="home" className="page">
        <div id="welcome">Welcome, I'm</div>
        <div id="name">Alexandre Correia</div>
        <div id="social">
            <a href={"https://www.linkedin.com/in/4lexcorrei4/"} target="_blank" rel="noopener noreferrer"><LogoLinkedin /></a>
            <a href={"https://www.facebook.com/4lexcorrei4/"} target="_blank" rel="noopener noreferrer"><LogoFacebook /></a>
            <a href={"https://www.instagram.com/4lexcorrei4/"} target="_blank" rel="noopener noreferrer"><LogoInstagram /></a>
            <a href={"https://github.com/4lexcorrei4/"} target="_blank" rel="noopener noreferrer"><LogoGithub /></a>
        </div>
    </div>
};

export default Home;