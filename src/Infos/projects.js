import {internalUrls} from "./urls";

export const projects = [
    {
        "name": "Thesis",
        "codename": "thesis",
        "details": internalUrls.projectThesis(),
        "url": undefined,
        "logo": "/projects/thesis/logo.svg",
        "description": [
            "Framework based on reinforcement learning which guides conversational assistants to get closer to the user’s target product, in the context of the iFetch project.",
            "Achieved by asking a sequence of clarifying questions and giving recommendations, which enables either the user or the assistant to get the initiative, i.e. if the user has the freedom to express its preferences or just answers a more specific question."
        ],
        "screenshots": [
            "/projects/thesis/screenshot1.png"
        ]
    },
    {
        "name": "Simulador de Horários",
        "codename": "simulador-horarios",
        "details": internalUrls.projectSimuladorHorarios(),
        "url": "https://horarios.bitsys.tech",
        "logo": "/projects/simulador-horarios/logo.png",
        "description": [
            "Allows FCT NOVA students to easily check the available schedule options and build an optimized and personalized timetable.",
            "Development of a front-end (React) and a back-end (Python and Flask), but also database management (MySQL) and information extraction through crawling (Scrapy)."
        ],
        "screenshots": [
            "/projects/simulador-horarios/screenshot1.png",
            "/projects/simulador-horarios/screenshot2.png"
        ]
    },
    {
        "name": "Aquarium Management",
        "codename": "aquarium-management",
        "details": internalUrls.projectAquariumManagement(),
        "url": undefined,
        "logo": "/projects/aquarium-management/logo.svg",
        "description": [
            "Provides the user an easy and intuitive way to, not only access each aquarium conditions in real-time, but also allows him to set, in real-time, some of the characteristics of the aquarium(s) either locally (same network) or remotely (different networks).",
            "Development of the physical simulator (ESP32 and C++), of the mobile application (Android) and data management (Firebase Realtime Database)."
        ],
        "screenshots": [
            "/projects/aquarium-management/screenshot1.png",
            "/projects/aquarium-management/screenshot2.svg"
        ]
    },
    {
        "name": "CLIP Cadeiras",
        "codename": "clip-cadeiras",
        "details": internalUrls.projectCLIPCadeiras(),
        "url": "https://clipcadeiras.bitsys.tech",
        "logo": "/projects/clip-cadeiras/logo.png",
        "description": [
            "Provides the students of FCT NOVA with easy access to all the relevant information about each of the curricular units of the courses they are enrolled in.",
            "Development of a front-end together with a back-end (PHP) and database management (MySQL)."
        ],
        "screenshots": [
            "/projects/clip-cadeiras/screenshot1.png",
            "/projects/clip-cadeiras/screenshot2.png",
            "/projects/clip-cadeiras/screenshot3.png",
            "/projects/clip-cadeiras/screenshot4.png",
            "/projects/clip-cadeiras/screenshot5.png",
            "/projects/clip-cadeiras/screenshot6.png",
            "/projects/clip-cadeiras/screenshot7.png",
            "/projects/clip-cadeiras/screenshot8.png"
        ]
    },
    {
        "name": "Fashion Product Search",
        "codename": "fashion-product-search",
        "details": internalUrls.projectFashionProductSearch(),
        "url": undefined,
        "logo": undefined,
        "description": [
            "Provides the user an efficient luxury product search using either a description or an image showing the desired characteristics.",
            "Development of a back-end to serve as an API of the developed machine learning model (Python, PyTorch and Faiss) and data management (Elasticsearch)."
        ],
        "screenshots": [
            "/projects/fashion-product-search/screenshot1.png"
        ]
    },
    {
        "name": "Samucar Website",
        "codename": "samucar-website",
        "details": internalUrls.projectSamucarWebsite(),
        "url": "https://samucar.pt",
        "logo": "/projects/samucar-website/logo.png",
        "description": [
            "Allows the costumers of Samucar stand to easily and intuitively check for their next vehicle, with a redesigned website and with some new useful features (e.g. specifications comparison).",
            "Development of a front-end (HTML, CSS and JavaScript) using information provided by Standvirtual's API (XML)."
        ],
        "screenshots": [
            "/projects/samucar-website/screenshot1.png",
            "/projects/samucar-website/screenshot2.png",
            "/projects/samucar-website/screenshot3.png",
            "/projects/samucar-website/screenshot4.png",
            "/projects/samucar-website/screenshot5.png"
        ]
    },
    {
        "name": "WordBucket",
        "codename": "wordbucket",
        "details": internalUrls.projectWordBucket(),
        "url": "https://word-bucket.com",
        "logo": "/projects/wordbucket/logo.ico",
        "description": [
            "Content management platform, allowing to store and control the contents of a project or app.",
            "Development of a back-end (Python), a front-end (React), a command line interface (Node.js) and database management (SQLite)."
        ],
        "screenshots": [
            "/projects/wordbucket/screenshot1.png",
            "/projects/wordbucket/screenshot2.png",
            "/projects/wordbucket/screenshot3.png"
        ]
    }
];