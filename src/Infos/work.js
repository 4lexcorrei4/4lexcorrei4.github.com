import {externalUrls} from "./urls";

/*
{
        "company": "Caixa Mágica Software",
        "url": externalUrls.caixaMagicaSoftware(),
        "logo": "/img/work/caixa_magica_software.jpg",
        "location": "Lisbon, Portugal",
        "positions": [
            {
                "role": "Software Engineer",
                "dates": {
                    "start": Date.parse("2022-10"),
                    "end": undefined
                },
                "description": [

                ]
            }
        ]
    },
*/

export const work = [
    {
        "company": "Happy Code Portugal",
        "url": externalUrls.happyCodePortugal(),
        "logo": "/img/work/happy_code.jpg",
        "location": "Lisbon, Portugal",
        "positions": [
            {
                "role": "Webmaster",
                "dates": {
                    "start": Date.parse("2016-11"),
                    "end": Date.parse("2022-07")
                },
                "description": [
                    "Development and maintenance of the company's main website, https://www.happycode.pt, using WordPress."
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
        "logo": "/img/work/betacode.jpg",
        "location": "Setúbal, Portugal",
        "positions": [
            {
                "role": "Intern",
                "dates": {
                    "start": Date.parse("2020-03"),
                    "end": Date.parse("2020-07")
                },
                "description": [
                    "Full stack development of a content management platform, WordBucket (https://word-bucket.com).",
                    "Development of a back-end with Python, a front-end with React, a command line interface with Node.js and database management using SQLite."
                ]
            }
        ]
    },
    {
        "company": "Forall Phones",
        "url": externalUrls.forallPhones(),
        "logo": "/img/work/forall_phones.jpg",
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
                    "Development of the company’s community/ambassador website, Forall Family (https://www.forallfamily.com)."
                ]
            }
        ]
    }
];