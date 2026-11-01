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
                    `Led the UI for <a href='${internalUrls.project("channel-manager")}'>Channel Manager</a> and the <a href='${internalUrls.project("taxonomy-feedback-loop-dashboard")}'>Taxonomy Feedback Loop Dashboard</a>, turning stakeholder requirements into screens teams use to manage channels and taxonomy feedback.`,
                    "Took those features across the API boundary: shaped the requests, responses, and error states the UI needed, and followed the data into the Spring/Kotlin services, MongoDB, and Kafka topics behind them.",
                    "Built a Peacock trivia proof of concept at the 2024 Global Streaming Hackathon, generating questions from each title's Peacock metadata, closed captions, and frames with Azure OpenAI."
                ]
            }
        ]
    },
    {
        company: "Caixa Mágica Software",
        url: externalUrls.caixaMagicaSoftware(),
        logo: "/assets/work/caixa_magica_software.png",
        location: "Lisbon, Portugal",
        positions: [
            {
                role: "Software Engineer",
                dates: {
                    start: Date.parse("2022-10"),
                    end: Date.parse("2024-08")
                },
                description: [
                    `Led the React UI for the new <a href='${internalUrls.project("digitarq")}'>Digitarq</a>, the public catalog for Portugal's archives (Torre do Tombo, the district archives, and 100+ km of documents). It included search over Elasticsearch and Neo4j, preview of audio, video, and images, and the forms editors use to describe a document and approve or reject changes.`,
                    `Built the Content Access Point (<a href='${internalUrls.project("cap")}'>CAP</a>) full-stack for the on-site routers, from the interface through services and data, and migrated it to the newer hardware.`,
                    "Coordinated delivery with partner teams on integration and performance, and interviewed engineering candidates."
                ]
            }
        ]
    },
    {
        company: "Happy Code Portugal",
        url: externalUrls.happyCodePortugal(),
        logo: "/assets/work/happy_code.png",
        location: "Lisbon, Portugal",
        positions: [
            {
                role: "Webmaster",
                dates: {
                    start: Date.parse("2016-11"),
                    end: Date.parse("2022-07")
                },
                description: [
                    `Owned, built, and maintained the <a href='${externalUrls.happyCodePortugal()}' target='_blank' rel='noopener noreferrer'>company's public website</a> (WordPress, PHP, JavaScript), including course, location, and enrollment pages the team could update safely.`,
                    "Migrated the full website from the Brazil server to the Portugal server, and kept the live site fast and stable in production."
                ]
            },
            {
                role: "Content Developer",
                dates: {
                    start: Date.parse("2021-02"),
                    end: Date.parse("2021-09")
                },
                description: [
                    "Planned and developed the Web Development Kids programme, including the curriculum, learning materials, and practical exercises.",
                    "Introduced young learners to programming and web technologies through those exercises."
                ]
            },
            {
                role: "Teacher",
                dates: {
                    start: Date.parse("2020-08"),
                    end: Date.parse("2021-07")
                },
                description: [
                    "Taught Python, Unity, and Web Development to students aged 7–17, with practical courses tailored to each age group.",
                    "Designed project-based activities and mentored students in programming fundamentals, game development, and web technologies."
                ]
            }
        ]
    },
    {
        company: "Betacode",
        url: externalUrls.betacode(),
        logo: "/assets/work/betacode.png",
        location: "Setúbal, Portugal",
        positions: [
            {
                role: "Intern",
                dates: {
                    start: Date.parse("2020-03"),
                    end: Date.parse("2020-07")
                },
                description: [
                    `Developed <a href='${internalUrls.project("wordbucket")}'>WordBucket</a>, a content management platform, across the stack: Python and Node.js services, a React editor, SQLite persistence, and a CLI for managing content outside the UI.`
                ]
            }
        ]
    },
    {
        company: "Forall Phones",
        url: externalUrls.forallPhones(),
        logo: "/assets/work/forall_phones.png",
        location: "Lisbon, Portugal",
        positions: [
            {
                role: "Shaper / Ambassador",
                dates: {
                    start: Date.parse("2018-03"),
                    end: Date.parse("2018-11")
                },
                description: [
                    "Advised customers on iPhones and Apple accessories, matching products to their needs and explaining features in plain language."
                ]
            },
            {
                role: "IT Team Member",
                dates: {
                    start: Date.parse("2018-04"),
                    end: Date.parse("2018-06")
                },
                description: [
                    `Built and maintained the <a href='${internalUrls.project("forall-family")}'>Forall Family</a> community and ambassador website in WordPress, shipping features, content updates, and usability fixes that kept the site reliable for ambassadors.`
                ]
            }
        ]
    }
];
