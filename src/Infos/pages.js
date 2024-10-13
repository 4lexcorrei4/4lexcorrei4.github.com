import { internalUrls } from "./urls";

export const pages = [
    {
        "name": "Home",
        "link": internalUrls.home()
    },
    {
        "name": "Me",
        "link": undefined,
        "subpages": [
            {
                "name": "About",
                "link": internalUrls.about(),
            },
        ],
    },
    {
        "name": "Work",
        "link": undefined,
        "subpages": [
            {
                "name": "Jobs",
                "link": internalUrls.workJobs()
            },
            {
                "name": "Projects",
                "link": internalUrls.workProjects()
            }
        ]
    },
    {
        "name": "Hobbies",
        "link": undefined,
        "subpages": [
            {
                "name": "Photography",
                "link": internalUrls.photography(),
            },
        ],
    },
];