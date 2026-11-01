import { externalUrls } from "./urls";

export type category = 'web-development' | 'machine-learning' | 'photography' | 'video';
export interface Category {
    icon: string,
    label: string
}
export const categories: Record<category, Category> = {
    'web-development': {
        icon: "🛜",
        label: "Web Development"
    },
    'machine-learning': {
        icon: "🤖",
        label: "Machine Learning"
    },
    'photography': {
        icon: "📷",
        label: "Photography"
    },
    'video': {
        icon: "🎬",
        label: "Video"
    }
};

export type projectGroup = 'technology' | 'photography' | 'video';

export const projectGroups: Record<projectGroup, { label: string }> = {
    technology: {
        label: 'Technology',
    },
    photography: {
        label: 'Photography',
    },
    video: {
        label: 'Video',
    },
};

export const projectGroupFor = (projectCategories: category[]): projectGroup => {
    if (projectCategories.includes('video')) {
        return 'video';
    }
    return projectCategories.includes('photography') ? 'photography' : 'technology';
};

export interface Project {
    name: string,
    codename: string,
    dates: {
        start: number,
        end?: number
    },
    url?: string,
    urlLabel?: string,
    logo?: string,
    categories: category[],
    description: string[],
    screenshots?: string[],
}

const stills = (codename: string, count: number) =>
    Array.from({ length: count }, (_, index) => `/assets/projects/${codename}/screenshot${index + 1}.png`);

export const projects: Project[] = [
    {
        name: "Channel Manager",
        codename: "channel-manager",
        dates: {
            start: Date.parse("2024-09")
        },
        logo: "/assets/projects/channel-manager/logo.png",
        categories: [
            'web-development',
        ],
        description: [
            "The tool Sky uses to view, edit, and create channels and their lineups. I shipped the React editing flows against Spring and Kotlin services, with MongoDB holding the channel data and Kafka carrying updates to the rest of the platform."
        ]
    },
    {
        name: "Aqua2Value",
        codename: "aqua2value",
        dates: {
            start: Date.parse("2026-10"),
            end: Date.parse("2026-10")
        },
        url: externalUrls.projectAqua2Value(),
        logo: "/assets/projects/aqua2value/logo.png",
        categories: [
            'web-development',
        ],
        description: [
            "A web application where someone reviews a waste stream, sees the data, and records how that stream becomes a resource. I built the workflows and the charts for that decision. Built with React UI, Flask for serving and editing data, and Google Firebase for storing the data."
        ],
        screenshots: stills("aqua2value", 3)
    },
    {
        name: "Taxonomy Feedback Loop Dashboard",
        codename: "taxonomy-feedback-loop-dashboard",
        dates: {
            start: Date.parse("2026-07"),
            end: Date.parse("2026-09")
        },
        logo: "/assets/projects/taxonomy-feedback-loop-dashboard/logo.png",
        categories: [
            'web-development',
        ],
        description: [
            "A place to investigate the behaviour of automated tagging. Editors and model owners see accuracy per tag, notice when quality drifts, and tell a model error apart from a taxonomy or guideline problem, which is what decides the next change. Built with React UI, Spring and Kotlin services, and MongoDB and Kafka for carrying updates to the rest of the platform."
        ]
    },
    {
        name: "Clérigos Tower Hyperlapse",
        codename: "clerigos-tower-hyperlapse",
        dates: {
            start: Date.parse("2026-07"),
            end: Date.parse("2026-07")
        },
        url: "https://www.instagram.com/reel/DaPboO-sU_Z/",
        urlLabel: "Video",
        logo: "/assets/projects/clerigos-tower-hyperlapse/logo.png",
        categories: [
            'video',
        ],
        description: [
            "A hyperlapse that lifts Porto's Clérigos Tower from the lawn and the trees out front all the way up to the clock and the bells, blending a garden full of life with stone that holds perfectly still."
        ],
        screenshots: stills("clerigos-tower-hyperlapse", 3)
    },
    {
        name: "Dance Overboard Shortfilm",
        codename: "dance-overboard-shortfilm",
        dates: {
            start: Date.parse("2026-06"),
            end: Date.parse("2026-06")
        },
        url: "https://www.instagram.com/p/DaIPlGVKXoy/",
        urlLabel: "Video",
        logo: "/assets/projects/dance-overboard-shortfilm/logo.png",
        categories: [
            'video',
        ],
        description: [
            "Filmed and photographed across the whole scene: a bachata danced overboard on a lagoon, blending the closeness of the partnership with the thrill of holding balance on a board in open water."
        ],
        screenshots: stills("dance-overboard-shortfilm", 3)
    },
    {
        name: "Nomad Bar Ad",
        codename: "nomad-bar-ad",
        dates: {
            start: Date.parse("2025-10"),
            end: Date.parse("2025-10")
        },
        url: "https://www.instagram.com/p/DQcSoiCjSyU/",
        urlLabel: "Video",
        logo: "/assets/projects/nomad-bar-ad/logo.png",
        categories: [
            'video',
        ],
        description: [
            "Cast in a short, lively ad for Nomad Ocean Bar, the mobile bar that comes straight to the gathering. In a park the party stalls over phones and unopened bottles until a bright yellow bar arrives, cocktails go out, and a quiet lawn turns into a toast."
        ],
        screenshots: stills("nomad-bar-ad", 3)
    },
    {
        name: "Memory Shortfilm",
        codename: "memory-shortfilm",
        dates: {
            start: Date.parse("2025-08"),
            end: Date.parse("2025-08")
        },
        url: "https://www.instagram.com/p/DNi-INyNUnp/",
        urlLabel: "Video",
        logo: "/assets/projects/memory-shortfilm/logo.png",
        categories: [
            'video',
        ],
        description: [
            "Cast in Nightsteel, a short film that forges memory into something you can feel, cold in one light and radiant in the next. Under a tree in a park a phone is taken and the afternoon breaks into a chase and a laugh, then that same spot returns at night with only the screen still glowing, blending the warmth of the company with the chill of remembering it alone."
        ],
        screenshots: stills("memory-shortfilm", 3)
    },
    {
        name: "Remission Shortfilm",
        codename: "remission-shortfilm",
        dates: {
            start: Date.parse("2025-02"),
            end: Date.parse("2025-02")
        },
        url: "https://www.instagram.com/p/DGjHUODtl1H/",
        urlLabel: "Video",
        logo: "/assets/projects/remission-shortfilm/logo.png",
        categories: [
            'video',
        ],
        description: [
            "Behind the scenes on the trailer for Remission, where a quiet conversation on a bench by the river suddenly turns charged. Under the 25 de Abril bridge a package is carried along the promenade, then dropped as someone runs and a gun is drawn, blending the calm of the water with a conflict ready to break."
        ],
        screenshots: stills("remission-shortfilm", 3)
    },
    {
        name: "Fruitless Shortfilm",
        codename: "fruitless-shortfilm",
        dates: {
            start: Date.parse("2024-11"),
            end: Date.parse("2024-11")
        },
        url: "https://www.instagram.com/p/DCHonmoN81q/",
        urlLabel: "Video",
        logo: "/assets/projects/fruitless-shortfilm/logo.png",
        categories: [
            'video',
        ],
        description: [
            "Production assistant on the teaser for Fruitless, a short film that leaves Faith surviving alone in a ruined, graffiti-covered passage until a stranger, Erik, steps in. She runs the wreckage as the title card promises the film is coming, blending her isolation with the jolt of someone she never expected."
        ],
        screenshots: stills("fruitless-shortfilm", 3)
    },
    {
        name: "Avenue Statues Hyperlapse",
        codename: "avenue-statues-hyperlapse",
        dates: {
            start: Date.parse("2024-10"),
            end: Date.parse("2024-10")
        },
        url: "https://www.instagram.com/reel/DCTdaOFo9ld/",
        urlLabel: "Video",
        logo: "/assets/projects/avenue-statues-hyperlapse/logo.png",
        categories: [
            'video',
        ],
        description: [
            "A hyperlapse that races the statues of Lisbon's Liberty Avenue, from the Marquês de Pombal column down to the monuments further along, including the Grande Guerra memorial, blending stone that holds still with traffic and people rushing past."
        ],
        screenshots: stills("avenue-statues-hyperlapse", 3)
    },
    {
        name: "Digitarq",
        codename: "digitarq",
        dates: {
            start: Date.parse("2022-10"),
            end: Date.parse("2024-08")
        },
        url: externalUrls.projectDigitarq(),
        logo: "/assets/projects/digitarq/logo.png",
        categories: [
            'web-development',
        ],
        description: [
            "Search over the Portuguese government archives, hundreds of thousands of documents. I built the React search experience on a Node API, with Python jobs feeding Neo4j and Elasticsearch so an archivist can find a record without knowing which collection holds it."
        ],
        screenshots: stills("digitarq", 3)
    },
    {
        name: "CAP",
        codename: "cap",
        dates: {
            start: Date.parse("2024-04"),
            end: Date.parse("2024-05")
        },
        logo: "/assets/projects/cap/logo.png",
        categories: [
            'web-development',
        ],
        description: [
            "Integration of a content platform into JPIK's content access point, so the team could see how far the technology reached in Kenya's schools and line that up with students' results. I owned compatibility between the existing AngularJS and Django platform and the new access-point version."
        ]
    },
    {
        name: "Estuary of Tejo",
        codename: "estuary-of-tejo",
        dates: {
            start: Date.parse("2024-04"),
            end: Date.parse("2024-05")
        },
        url: "/assets/projects/estuary-of-tejo/ocafédafoto-estuary-final.pdf",
        urlLabel: "Ebook",
        logo: "/assets/projects/estuary-of-tejo/screenshot2.png",
        categories: [
            'photography',
        ],
        description: [
            "The first zine from o café da fotografia: three photowalks on the Tejo estuary in April and May 2024, from Vila Franca de Xira, Póvoa de Santa Iria, and the Salinas do Samouco."
        ],
        screenshots: stills("estuary-of-tejo", 3)
    },
    {
        name: "Thesis",
        codename: "thesis",
        dates: {
            start: Date.parse("2021-07"),
            end: Date.parse("2022-09")
        },
        url: externalUrls.projectThesis(),
        logo: "/assets/projects/thesis/logo.png",
        description: [
            "A conversational shopping assistant for Farfetch, with Técnico and CMU Portugal, meant to feel closer to a guided in-store conversation. PyTorch models retrieve products and ask one clarifying question when the query is ambiguous, so the shopper reaches a relevant item in fewer turns."
        ],
        categories: [
            'machine-learning',
        ],
        screenshots: stills("thesis", 3)
    },
    {
        name: "Schedule Simulator",
        codename: "simulador-horarios",
        dates: {
            start: Date.parse("2021-02"),
            end: Date.parse("2022-07")
        },
        logo: "/assets/projects/simulador-horarios/logo.png",
        description: [
            "A timetable builder for FCT NOVA students. React and Flask on MySQL, with Scrapy pulling the real course offerings, so a student can compare feasible schedules and keep one that fits their constraints."
        ],
        categories: [
            'web-development',
        ],
        screenshots: [
            "/assets/projects/simulador-horarios/screenshot1.png",
            "/assets/projects/simulador-horarios/screenshot2.png"
        ]
    },
    {
        name: "Aquarium Management",
        codename: "aquarium-management",
        dates: {
            start: Date.parse("2022-03"),
            end: Date.parse("2022-06")
        },
        logo: "/assets/projects/aquarium-management/logo.png",
        description: [
            "Live view and control of one or more aquariums, on the same network or from outside it. An ESP32 simulator in C++ stands in for the tank, an Android app reads the conditions and changes them, and Firebase Realtime Database keeps the device and the app in sync."
        ],
        categories: [
            'web-development',
        ],
        screenshots: [
            "/assets/projects/aquarium-management/screenshot1.png",
            "/assets/projects/aquarium-management/screenshot2.svg"
        ]
    },
    {
        name: "CLIP Curricular Units",
        codename: "clip-cadeiras",
        dates: {
            start: Date.parse("2019-02"),
            end: Date.parse("2021-07")
        },
        logo: "/assets/projects/clip-cadeiras/logo.png",
        description: [
            "A place for FCT NOVA students to open a course they are enrolled in and see the information that matters for that unit. PHP for the pages and the server, MySQL for the course data."
        ],
        categories: [
            'web-development',
        ],
        screenshots: [
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
        name: "Fashion Product Search",
        codename: "fashion-product-search",
        dates: {
            start: Date.parse("2021-03"),
            end: Date.parse("2021-06")
        },
        logo: "/assets/projects/fashion-product-search/screenshot1.png",
        description: [
            "Search for a luxury product from a written description or from a photo of the look you want. A Python API serves a PyTorch model, Faiss handles similarity, and Elasticsearch holds the catalogue."
        ],
        categories: [
            'machine-learning',
        ],
        screenshots: [
            "/assets/projects/fashion-product-search/screenshot1.png"
        ]
    },
    {
        name: "Samucar Website",
        codename: "samucar-website",
        dates: {
            start: Date.parse("2020-10"),
            end: Date.parse("2021-02")
        },
        url: externalUrls.projectSamucar(),
        logo: "/assets/projects/samucar-website/logo.png",
        description: [
            "The site for the Samucar dealership, where a customer can look for their next car and compare specifications. Rebuilt in HTML, CSS, and JavaScript, with vehicle data from Standvirtual's XML API."
        ],
        categories: [
            'web-development',
        ],
        screenshots: stills("samucar-website", 3)
    },
    {
        name: "WordBucket",
        codename: "wordbucket",
        dates: {
            start: Date.parse("2020-03"),
            end: Date.parse("2020-07")
        },
        logo: "/assets/projects/wordbucket/screenshot1.png",
        description: [
            "A content management platform for editing and publishing site content. Python on the server, React for the interface, a Node.js command-line client, and SQLite for storage."
        ],
        categories: [
            'web-development',
        ],
        screenshots: [
            "/assets/projects/wordbucket/screenshot1.png",
            "/assets/projects/wordbucket/screenshot2.png",
            "/assets/projects/wordbucket/screenshot3.png"
        ]
    },
    {
        name: "Forall Family",
        codename: "forall-family",
        dates: {
            start: Date.parse("2018-04"),
            end: Date.parse("2018-06")
        },
        url: externalUrls.projectForallFamily(),
        logo: "/assets/projects/forall-family/logo.png",
        description: [
            "The community and ambassador site for Forall Phones, built in WordPress so ambassadors had one place to follow the company's community."
        ],
        categories: [
            'web-development',
        ],
        screenshots: [
            "/assets/projects/forall-family/screenshot1.png"
        ]
    }
];
