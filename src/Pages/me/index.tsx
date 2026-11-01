import { useLayoutEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./style.css";
import Head from "../../components/Head";
import { IntroDescription, IntroPhoto } from "../../components/Intro";
import PhraseLine from "../../components/PhraseLine";
import MonogramList from "../../components/MonogramList";
import PillList from "../../components/PillList";
import IconLabelRow from "../../components/IconLabelRow";

const headline = "Full-Stack Engineer | React, TypeScript, Node.js, Python - AI when it helps";

const paragraphs = [
    "I build full-stack products from the interface through the API, the data, and the architecture. I care about work that feels obvious to use and holds up in production, and I use AI when it makes the product better, leaving it out when a simpler design is enough. I like working with design, product, and other engineers, and I enjoy mentoring.",
    "When I'm away from the keyboard, you'll usually find me behind a camera, on a hiking trail, dancing, or out sailing.",
];

const skills = ["Full-Stack Development", "Software Architecture", "Generative AI"];

const languages = [
    { short: "PT", label: "Portuguese", level: "Native or bilingual proficiency" },
    { short: "EN", label: "English", level: "Professional working proficiency" },
];

const strengths = ["Knowledge lover", "Open-minded", "Ready-to-learn", "Resilient", "Responsible", "Team worker"];

const hobbies = [
    { src: "/assets/hobbies/hike.svg", label: "Hike" },
    { src: "/assets/hobbies/photography.svg", label: "Photography" },
    { src: "/assets/hobbies/dance.svg", label: "Dance" },
    { src: "/assets/hobbies/music.svg", label: "Music" },
    { src: "/assets/hobbies/sail.svg", label: "Sail" },
];

type MeTab = "about" | "profile";

const tabFromSearch = (value: string | null): MeTab => value === "profile" ? "profile" : "about";

const Me = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tab = tabFromSearch(searchParams.get("tab"));
    const aboutRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const [panelHeight, setPanelHeight] = useState<number>();

    useLayoutEffect(() => {
        const node = tab === "about" ? aboutRef.current : profileRef.current;
        if (!node) return;

        const update = () => setPanelHeight(node.scrollHeight);
        update();
        if (typeof ResizeObserver === "undefined") return;
        const observer = new ResizeObserver(update);
        observer.observe(node);
        return () => observer.disconnect();
    }, [tab]);

    const selectTab = (next: MeTab) => {
        if (next === tab) return;
        setSearchParams((current) => {
            const params = new URLSearchParams(current);
            params.set("tab", next);
            return params;
        });
    };

    return (
        <div id="me-page" className="page">
            <Head
                title={"Me - Alexandre Correia"}
                description={"Me"}
            />
            <div className="me">
                <IntroPhoto image="/img/profile.jpg" />
                <p className="me-headline">{headline}</p>
                <div className="me-tabs" role="tablist" aria-label="About and profile">
                    <button
                        type="button"
                        role="tab"
                        id="me-tab-about"
                        aria-selected={tab === "about"}
                        aria-controls="me-panel-about"
                        tabIndex={tab === "about" ? 0 : -1}
                        onClick={() => selectTab("about")}
                    >
                        About
                    </button>
                    <button
                        type="button"
                        role="tab"
                        id="me-tab-profile"
                        aria-selected={tab === "profile"}
                        aria-controls="me-panel-profile"
                        tabIndex={tab === "profile" ? 0 : -1}
                        onClick={() => selectTab("profile")}
                    >
                        Profile
                    </button>
                </div>
                <div
                    className="me-panels"
                    style={panelHeight === undefined ? undefined : { height: panelHeight }}
                >
                    <div
                        ref={aboutRef}
                        role="tabpanel"
                        id="me-panel-about"
                        aria-labelledby="me-tab-about"
                        className={tab === "about" ? "is-active" : undefined}
                        aria-hidden={tab !== "about"}
                        inert={tab !== "about"}
                    >
                        <div className="me-about">
                            <IntroDescription paragraphs={paragraphs} />
                            <IconLabelRow items={hobbies} />
                        </div>
                    </div>
                    <div
                        ref={profileRef}
                        role="tabpanel"
                        id="me-panel-profile"
                        aria-labelledby="me-tab-profile"
                        className={tab === "profile" ? "is-active" : undefined}
                        aria-hidden={tab !== "profile"}
                        inert={tab !== "profile"}
                    >
                        <div className="me-profile">
                            <PhraseLine items={skills} />
                            <MonogramList items={languages} />
                            <PillList items={strengths} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Me;
