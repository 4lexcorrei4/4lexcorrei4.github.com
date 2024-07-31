import {externalUrls, internalUrls} from "./urls";

export const projects = [
    {
        "name": "Digitarq",
        "codename": "digitarq",
        "details": internalUrls.project("digitarq"),
        "dates": {
            "start": Date.parse("2022-10"),
            "end": Date.parse("2024-08")
        },
        "url": externalUrls.projectDigitarq(),
        "logo": undefined,
        "description": [
            "Web development of a platform to efficiently search through the hundreds of thousands of documents the Portuguese Government archives, using a front-end with React, a back-end with Node.js and database management with Python, Neo4J and Elasticsearch. My focus has been on the front-end."
        ]
    },
    {
        "name": "CAP",
        "codename": "cap",
        "details": internalUrls.project("cap"),
        "dates": {
            "start": Date.parse("2024-04"),
            "end": Date.parse("2024-05")
        },
        "url": undefined,
        "logo": undefined,
        "description": [
            "Web development support and integration of a content management platform into a content access point in order to understand the effective reach of technology in Kenya's education system and correlate this data with the students academic performance, using a front-end with AngularJS and a back-end with Python and Django. My focus has been on supporting the whole compatibility of the content management platform with JPIK's new content access point version."
        ]
    },
    {
        "name": "Thesis",
        "codename": "thesis",
        "details": internalUrls.project("thesis"),
        "dates": {
            "start": Date.parse("2021-07"),
            "end": Date.parse("2022-09")
        },
        "url": externalUrls.projectThesis(),
        "logo": "/assets/projects/thesis/logo.svg",
        "description": [
            "In partnership with Farfetch, CMU Portugal and Técnico, Farfetch is developing its own conversational assistant with the goal of having a virtual assistant that can mimic the Farfetch's in-store experience, being the assistant able to offer a more natural and personalized experience than the traditional conversational assistants.",
            "My thesis focused on efficiently retrieving the user's desired product, achieved by generating a sequence of clarifying questions and giving recommendations, using Python, PyTorch and PyTorch Lightning. The clarifying questions are chosen before each interaction with the user and are capable of narrowing down the search space in various directions: minimizing the number of interactions, minimizing the repetitiveness of used questions and minimizing the repetitiveness of used questions according to their feedback times.",
        ],
        "screenshots": [
            "/assets/projects/thesis/screenshot1.png"
        ]
    },
    {
        "name": "Schedule Simulator",
        "codename": "simulador-horarios",
        "details": internalUrls.project("simulador-horarios"),
        "dates": {
            "start": Date.parse("2021-02"),
            "end": Date.parse("2022-07")
        },
        "url": undefined,
        "logo": "/assets/projects/simulador-horarios/logo.png",
        "description": [
            `Web development of a platform that allows <a href=\"${externalUrls.fctNova()}\" target=\"_blank\" rel=\"noopener noreferrer\">FCT NOVA</a> students to easily check the available schedule options and build an optimized and personalized timetable, using a front-end with React and a back-end with Python and Flask, but also database management with MySQL and information extraction through crawling with Scrapy.`
        ],
        "screenshots": [
            "/assets/projects/simulador-horarios/screenshot1.png",
            "/assets/projects/simulador-horarios/screenshot2.png"
        ]
    },
    {
        "name": "Aquarium Management",
        "codename": "aquarium-management",
        "details": internalUrls.project("aquarium-management"),
        "dates": {
            "start": Date.parse("2022-03"),
            "end": Date.parse("2022-06")
        },
        "url": undefined,
        "logo": "/assets/projects/aquarium-management/logo.svg",
        "description": [
            "Development of a platform that provides the user an easy and intuitive way to, not only access each aquarium conditions in real-time, but also allows him to set, in real-time, some of the characteristics of the aquarium(s) either locally (same network) or remotely (different networks), using a physical simulator with ESP32 and C++, a mobile application for Android and data management with Firebase Realtime Database."
        ],
        "screenshots": [
            "/assets/projects/aquarium-management/screenshot1.png",
            "/assets/projects/aquarium-management/screenshot2.svg"
        ]
    },
    {
        "name": "CLIP Curricular Units",
        "codename": "clip-cadeiras",
        "details": internalUrls.project("clip-cadeiras"),
        "dates": {
            "start": Date.parse("2019-02"),
            "end": Date.parse("2021-07")
        },
        "url": undefined,
        "logo": "/assets/projects/clip-cadeiras/logo.png",
        "description": [
            `Web development of a platform that provides the students of <a href=\"${externalUrls.fctNova()}\" target=\"_blank\" rel=\"noopener noreferrer\">FCT NOVA</a> with easy access to all the relevant information about each of the curricular units of the courses they are enrolled in, using a front-end together with a back-end with PHP, and database management with MySQL.`
        ],
        "screenshots": [
            "/assets/projects/clip-cadeiras/screenshot1.png",
            "/assets/projects/clip-cadeiras/screenshot2.png",
            "/assets/projects/clip-cadeiras/screenshot3.png",
            "/assets/projects/clip-cadeiras/screenshot4.png",
            "/assets/projects/clip-cadeiras/screenshot5.png",
            "/assets/projects/clip-cadeiras/screenshot6.png",
            "/assets/projects/clip-cadeiras/screenshot7.png",
            "/assets/projects/clip-cadeiras/screenshot8.png"
        ]
    },
    {
        "name": "Fashion Product Search",
        "codename": "fashion-product-search",
        "details": internalUrls.project("fashion-product-search"),
        "dates": {
            "start": Date.parse("2021-03"),
            "end": Date.parse("2021-06")
        },
        "url": undefined,
        "logo": undefined,
        "description": [
            "Web development of an efficient luxury product search using either a description or an image showing the desired characteristics, using a back-end to serve as an API of the developed machine learning model with Python, PyTorch and Faiss, and data management with Elasticsearch."
        ],
        "screenshots": [
            "/assets/projects/fashion-product-search/screenshot1.png"
        ]
    },
    {
        "name": "Samucar Website",
        "codename": "samucar-website",
        "details": internalUrls.project("samucar-website"),
        "dates": {
            "start": Date.parse("2020-10"),
            "end": Date.parse("2021-02")
        },
        "url": externalUrls.projectSamucar(),
        "logo": "/assets/projects/samucar-website/logo.png",
        "description": [
            "Web development of a website for Samucar stand, allowing their costumers to easily and intuitively check for their next vehicle, with a redesigned website and with some new useful features (e.g. specifications comparison), using a front-end with HTML, CSS and JavaScript, and with information provided by Standvirtual's API (XML)."
        ],
        "screenshots": [
            "/assets/projects/samucar-website/screenshot1.png",
            "/assets/projects/samucar-website/screenshot2.png",
            "/assets/projects/samucar-website/screenshot3.png",
            "/assets/projects/samucar-website/screenshot4.png",
            "/assets/projects/samucar-website/screenshot5.png"
        ]
    },
    {
        "name": "WordBucket",
        "codename": "wordbucket",
        "details": internalUrls.project("wordbucket"),
        "dates": {
            "start": Date.parse("2020-03"),
            "end": Date.parse("2020-07")
        },
        "url": externalUrls.projectWordbucket(),
        "logo": "/assets/projects/wordbucket/logo.ico",
        "description": [
            "Full stack development of a content management platform, using a back-end with Python, a front-end with React, a command line interface with Node.js and database management using SQLite."
        ],
        "screenshots": [
            "/assets/projects/wordbucket/screenshot1.png",
            "/assets/projects/wordbucket/screenshot2.png",
            "/assets/projects/wordbucket/screenshot3.png"
        ]
    },
    {
        "name": "Forall Family",
        "codename": "forall-family",
        "details": internalUrls.project("forall-family"),
        "dates": {
            "start": Date.parse("2018-04"),
            "end": Date.parse("2018-06")
        },
        "url": externalUrls.projectForallFamily(),
        "logo": "/assets/projects/forall-family/logo.ico",
        "description": [
            "Development of the company’s community/ambassador website, using WordPress."
        ],
        "screenshots": [
            "/assets/projects/forall-family/screenshot1.png"
        ]
    }
];