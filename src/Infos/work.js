import {externalUrls} from "./urls";

export const work = [
    {
        "company": "Happy Code Portugal",
        "url": externalUrls.happyCodePortugal(),
        "logo": "https://media-exp1.licdn.com/dms/image/C4D0BAQF5I1ceR7ycqQ/company-logo_200_200/0/1661542791373?e=1669852800&v=beta&t=fYTcNBGIusjS1aJOdKkexh6cKG8AwVy_JfVVxmqwyFc",
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
        "logo": "https://media-exp1.licdn.com/dms/image/C4D0BAQEDqOB4PFvJ6A/company-logo_200_200/0/1563456798428?e=1669852800&v=beta&t=RLoVbn1MMBgzBXzUFSHesITUQoskLPvGYB_bGjE_Bw4",
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
        "logo": "https://media-exp1.licdn.com/dms/image/C4D0BAQFHOhkWpv_3Lg/company-logo_200_200/0/1586794762866?e=1669852800&v=beta&t=LZJK-W4aLH7WIyOLLy_JnOXEcN1E6Wd3sFDTMnzmSHE",
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