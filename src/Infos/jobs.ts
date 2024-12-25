import {externalUrls, internalUrls} from "./urls";

interface Job {
    company: string,
    url: string,
    logo: string,
    location: string,
    positions: {
        role: string,
        dates: {
            start: number,
            end?: number
        },
        description: string[]
    }[]
}
export const jobs: Job[] = [
    {
        company: "Sky Portugal",
        url: externalUrls.skyPortugal(),
        logo: "/assets/work/sky.png",
        location: "Lisbon, Portugal",
        positions: [
            {
                role: "Software Engineer",
                dates: {
                    start: Date.parse("2024-09"),
                },
                description: [
                    "Web development using front-end with React, back-end with Spring and Kotlin, and database management with Couchbase and Kafka. The project I have been most involved with is <a href='" + internalUrls.project('channel-manager') + "'>Channel Manager</a>, where my focus has been on the front-end.",
                    "Partipation on the November 2024's Global Streaming Hackathon where my team was selected for developing a trivia mode on Peacock's streaming content, to enhance costumer engagement, by generating questions related to the content being watched."
                ]
            }
        ]
    },
    {
        company: "Caixa Mágica Software",
        url: externalUrls.caixaMagicaSoftware(),
        logo: "/assets/work/caixa_magica_software.jpeg",
        location: "Lisbon, Portugal",
        positions: [
            {
                role: "Software Engineer",
                dates: {
                    start: Date.parse("2022-10"),
                    end: Date.parse("2024-08")
                },
                description: [
                    "Web development using front-end with React and AngularJS, back-end with Node.js, Python and Django, and database management with Python, Neo4J and Elasticsearch. The projects I have been most involved with are:",
                    "- <a href='" + internalUrls.project('digitarq') + "'>Digitarq</a>: where my focus has been on the front-end, which I am responsible for and team coordinator;",
                    "- <a href='" + internalUrls.project('cap') + "'>CAP</a>: where my focus has been on supporting the whole compatibility of the content management platform with the new content access point version.",
                    "Responsible for technical interviews for recruiting summer internship candidates."
                ]
            }
        ]
    },
    {
        company: "Happy Code Portugal",
        url: externalUrls.happyCodePortugal(),
        logo: "/assets/work/happy_code.jpeg",
        location: "Lisbon, Portugal",
        positions: [
            {
                role: "Webmaster",
                dates: {
                    start: Date.parse("2016-11"),
                    end: Date.parse("2022-07")
                },
                description: [
                    "Development and maintenance of the company's main website, using WordPress."
                ]
            },{
                role: "Content Developer",
                dates: {
                    start: Date.parse("2021-02"),
                    end: Date.parse("2021-09")
                },
                description: [
                    "Planning and development of a new course: Web Development Kids."
                ]
            },
            {
                role: "Teacher",
                dates: {
                    start: Date.parse("2020-08"),
                    end: Date.parse("2021-07")
                },
                description: [
                    "Programming teacher of Python, Unity and Web to children and teenagers between 7 and 17 years old."
                ]
            }
        ]
    },
    {
        company: "Betacode",
        url: externalUrls.betacode(),
        logo: "/assets/work/betacode.jpeg",
        location: "Setúbal, Portugal",
        positions: [
            {
                role: "Intern",
                dates: {
                    start: Date.parse("2020-03"),
                    end: Date.parse("2020-07")
                },
                description: [
                    "Full stack development of a content management platform, <a href='" + internalUrls.project('wordbucket') + "'>WordBucket</a>, using a back-end with Python, a front-end with React, a command line interface with Node.js and database management using SQLite."
                ]
            }
        ]
    },
    {
        company: "Forall Phones",
        url: externalUrls.forallPhones(),
        logo: "/assets/work/forall_phones.jpg",
        location: "Lisbon, Portugal",
        positions: [
            {
                role: "Shaper/Ambassador",
                dates: {
                    start: Date.parse("2018-03"),
                    end: Date.parse("2018-11")
                },
                description: [
                    "Selling of iPhones and some of its accessories."
                ]
            },
            {
                role: "IT Team Member",
                dates: {
                    start: Date.parse("2018-04"),
                    end: Date.parse("2018-06")
                },
                description: [
                    "Development of the company’s community/ambassador website, <a href='" + internalUrls.project('forall-family') + "'>Forall Family</a>, using WordPress."
                ]
            }
        ]
    }
];