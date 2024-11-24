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
        "name": "Experience",
        "link": undefined,
        "subpages": [
            {
                "name": "Jobs",
                "link": internalUrls.jobs()
            },
            {
                "name": "Projects",
                "link": internalUrls.projects()
            }
        ]
    },
];