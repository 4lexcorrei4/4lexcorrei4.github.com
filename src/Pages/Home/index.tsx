import React from "react";
import "./style.css";
import {IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin} from "react-icons/io5";
import Head from "../../Head";

const Home = () => {
    return <div id="home" className="page">
        <Head
            title={'Alexandre Correia'}
            description={'Home'}
        />
        <div id="name">Alexandre Correia</div>
        <div id="about">Living with a smile &#128515;</div>
    </div>
};

export default Home;