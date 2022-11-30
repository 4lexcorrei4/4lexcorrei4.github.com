import {externalUrls, internalUrls} from "./urls";

export const projects = [
    {
        "name": "Digitarq",
        "codename": "digitarq",
        "details": internalUrls.project("digitarq"),
        "dates": {
            "start": Date.parse("2022-10"),
            "end": undefined
        },
        "url": undefined,
        "logo": undefined
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
        "logo": "/img/projects/thesis/logo.svg",
        "description": [
            "In partnership with Farfetch, CMU Portugal and Técnico, Farfetch is developing its own conversational assistant with the goal of having a virtual assistant that can mimic the Farfetch's in-store experience, being the assistant able to offer a more natural and personalized experience than the traditional conversational assistants.",
            "My thesis focuses on efficiently retrieving the user's desired product, achieved by generating a sequence of clarifying questions and giving recommendations. The clarifying questions are chosen before each interaction with the user and are capable of narrowing down the search space in various directions: minimizing the number of interactions, minimizing the repetitiveness of used questions and minimizing the repetitiveness of used questions according to their feedback times."
        ],
        "screenshots": [
            "/img/projects/thesis/screenshot1.png"
        ]
    },
    {
        "name": "Simulador de Horários",
        "codename": "simulador-horarios",
        "details": internalUrls.project("simulador-horarios"),
        "dates": {
            "start": Date.parse("2021-02"),
            "end": Date.parse("2022-07")
        },
        "url": externalUrls.projectSimuladorHorarios(),
        "logo": "/img/projects/simulador-horarios/logo.png",
        "description": [
            "Allows FCT NOVA students to easily check the available schedule options and build an optimized and personalized timetable.",
            "Development of a front-end (React) and a back-end (Python and Flask), but also database management (MySQL) and information extraction through crawling (Scrapy)."
        ],
        "screenshots": [
            "/img/projects/simulador-horarios/screenshot1.png",
            "/img/projects/simulador-horarios/screenshot2.png"
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
        "logo": "/img/projects/aquarium-management/logo.svg",
        "description": [
            "Provides the user an easy and intuitive way to, not only access each aquarium conditions in real-time, but also allows him to set, in real-time, some of the characteristics of the aquarium(s) either locally (same network) or remotely (different networks).",
            "Development of the physical simulator (ESP32 and C++), of the mobile application (Android) and data management (Firebase Realtime Database)."
        ],
        "screenshots": [
            "/img/projects/aquarium-management/screenshot1.png",
            "/img/projects/aquarium-management/screenshot2.svg"
        ]
    },
    {
        "name": "CLIP Cadeiras",
        "codename": "clip-cadeiras",
        "details": internalUrls.project("clip-cadeiras"),
        "dates": {
            "start": Date.parse("2019-02"),
            "end": Date.parse("2021-07")
        },
        "url": externalUrls.projectCLIPCadeiras(),
        "logo": "/img/projects/clip-cadeiras/logo.png",
        "description": [
            "Provides the students of FCT NOVA with easy access to all the relevant information about each of the curricular units of the courses they are enrolled in.",
            "Development of a front-end together with a back-end (PHP) and database management (MySQL)."
        ],
        "screenshots": [
            "/img/projects/clip-cadeiras/screenshot1.png",
            "/img/projects/clip-cadeiras/screenshot2.png",
            "/img/projects/clip-cadeiras/screenshot3.png",
            "/img/projects/clip-cadeiras/screenshot4.png",
            "/img/projects/clip-cadeiras/screenshot5.png",
            "/img/projects/clip-cadeiras/screenshot6.png",
            "/img/projects/clip-cadeiras/screenshot7.png",
            "/img/projects/clip-cadeiras/screenshot8.png"
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
            "Provides the user an efficient luxury product search using either a description or an image showing the desired characteristics.",
            "Development of a back-end to serve as an API of the developed machine learning model (Python, PyTorch and Faiss) and data management (Elasticsearch)."
        ],
        "screenshots": [
            "/img/projects/fashion-product-search/screenshot1.png"
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
        "logo": "/img/projects/samucar-website/logo.png",
        "description": [
            "Allows the costumers of Samucar stand to easily and intuitively check for their next vehicle, with a redesigned website and with some new useful features (e.g. specifications comparison).",
            "Development of a front-end (HTML, CSS and JavaScript) using information provided by Standvirtual's API (XML)."
        ],
        "screenshots": [
            "/img/projects/samucar-website/screenshot1.png",
            "/img/projects/samucar-website/screenshot2.png",
            "/img/projects/samucar-website/screenshot3.png",
            "/img/projects/samucar-website/screenshot4.png",
            "/img/projects/samucar-website/screenshot5.png"
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
        "logo": "/img/projects/wordbucket/logo.ico",
        "description": [
            "Content management platform, allowing to store and control the contents of a project or app.",
            "Development of a back-end (Python), a front-end (React), a command line interface (Node.js) and database management (SQLite)."
        ],
        "screenshots": [
            "/img/projects/wordbucket/screenshot1.png",
            "/img/projects/wordbucket/screenshot2.png",
            "/img/projects/wordbucket/screenshot3.png"
        ]
    }
];