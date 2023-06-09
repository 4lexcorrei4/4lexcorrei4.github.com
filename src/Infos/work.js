import {externalUrls} from "./urls";

export const work = [
    {
        "company": "Caixa Mágica Software",
        "url": externalUrls.caixaMagicaSoftware(),
        "logo": "/assets/work/caixa_magica_software.jpg",
        "location": "Lisbon, Portugal",
        "positions": [
            {
                "role": "Software Engineer",
                "dates": {
                    "start": Date.parse("2022-10"),
                    "end": undefined
                },
                "description": [
                    `Web development of a platform, Digitarq (<a href=\"${externalUrls.projectDigitarq()}\" target=\"_blank\" rel=\"noopener noreferrer\">${externalUrls.projectDigitarq()}</a>), to efficiently search through the hundreds of thousands of documents the Portuguese Government archives, using a front-end with React, a back-end with Node.js and database management with Python, Neo4J and Elasticsearch.`,
                    'Technical interviews for choosing summer internship candidates.'
                ]
            }
        ]
    },
    {
        "company": "Happy Code Portugal",
        "url": externalUrls.happyCodePortugal(),
        "logo": "/assets/work/happy_code.jpg",
        "location": "Lisbon, Portugal",
        "positions": [
            {
                "role": "Webmaster",
                "dates": {
                    "start": Date.parse("2016-11"),
                    "end": Date.parse("2022-07")
                },
                "description": [
                    `Development and maintenance of the company's main website, <a href=\"${externalUrls.projectHappyCode()}\" target=\"_blank\" rel=\"noopener noreferrer\">${externalUrls.projectHappyCode()}</a>, using WordPress.`
                ]
            },{
                "role": "Content Developer",
                "dates": {
                    "start": Date.parse("2021-02"),
                    "end": Date.parse("2021-09")
                },
                "description": [
                    "Planning and development of a new course: Web Development Kids."
                ]
            },
            {
                "role": "Teacher",
                "dates": {
                    "start": Date.parse("2020-08"),
                    "end": Date.parse("2021-07")
                },
                "description": [
                    "Programming teacher of Python, Unity and Web to children and teenagers between 7 and 17 years old."
                ]
            }
        ]
    },
    {
        "company": "Betacode",
        "url": externalUrls.betacode(),
        "logo": "/assets/work/betacode.jpg",
        "location": "Setúbal, Portugal",
        "positions": [
            {
                "role": "Intern",
                "dates": {
                    "start": Date.parse("2020-03"),
                    "end": Date.parse("2020-07")
                },
                "description": [
                    `Full stack development of a content management platform, WordBucket (<a href=\"${externalUrls.projectWordbucket()}\" target=\"_blank\" rel=\"noopener noreferrer\">${externalUrls.projectWordbucket()}</a>), using a back-end with Python, a front-end with React, a command line interface with Node.js and database management using SQLite.`
                ]
            }
        ]
    },
    {
        "company": "Forall Phones",
        "url": externalUrls.forallPhones(),
        "logo": "/assets/work/forall_phones.jpg",
        "location": "Lisbon, Portugal",
        "positions": [
            {
                "role": "Shaper/Ambassador",
                "dates": {
                    "start": Date.parse("2018-03"),
                    "end": Date.parse("2018-11")
                },
                "description": [
                    "Selling of iPhones and some of its accessories."
                ]
            },
            {
                "role": "IT Team Member",
                "dates": {
                    "start": Date.parse("2018-04"),
                    "end": Date.parse("2018-06")
                },
                "description": [
                    `Development of the company’s community/ambassador website, Forall Family (<a href=\"${externalUrls.projectForallFamily()}\" target=\"_blank\" rel=\"noopener noreferrer\">${externalUrls.projectForallFamily()}</a>), using WordPress.`
                ]
            }
        ]
    }
];