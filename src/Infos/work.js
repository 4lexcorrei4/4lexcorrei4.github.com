import {externalUrls} from "./urls";

export const work = [
    {
        "company": "Caixa Mágica Software",
        "url": externalUrls.caixaMagicaSoftware(),
        "logo": "/assets/work/caixa_magica_software.jpeg",
        "location": "Lisbon, Portugal",
        "positions": [
            {
                "role": "Software Engineer",
                "dates": {
                    "start": Date.parse("2022-10"),
                    "end": undefined
                },
                "description": [
                    "Web development using front-end with React and AngularJS, back-end with Node.js, Python and Django, and database management with Python, Neo4J and Elasticsearch. The projects I have been most involved with are:",
                    "- Digitarq: where my focus has been on the front-end, which I am responsible for and team coordinator;",
                    "- CAP: where my focus has been on supporting the whole compatibility of the content management platform with the new content access point version.",
                    "Responsible for technical interviews for recruiting summer internship candidates."
                ]
            }
        ]
    },
    {
        "company": "Happy Code Portugal",
        "url": externalUrls.happyCodePortugal(),
        "logo": "/assets/work/happy_code.jpeg",
        "location": "Lisbon, Portugal",
        "positions": [
            {
                "role": "Webmaster",
                "dates": {
                    "start": Date.parse("2016-11"),
                    "end": Date.parse("2022-07")
                },
                "description": [
                    "Development and maintenance of the company's main website, using WordPress."
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
        "logo": "/assets/work/betacode.jpeg",
        "location": "Setúbal, Portugal",
        "positions": [
            {
                "role": "Intern",
                "dates": {
                    "start": Date.parse("2020-03"),
                    "end": Date.parse("2020-07")
                },
                "description": [
                    "Full stack development of a content management platform, WordBucket, using a back-end with Python, a front-end with React, a command line interface with Node.js and database management using SQLite."
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
                    "Development of the company’s community/ambassador website, Forall Family, using WordPress."
                ]
            }
        ]
    }
];