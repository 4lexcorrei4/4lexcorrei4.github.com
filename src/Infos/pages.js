import {internalUrls} from "./urls";

export const pages = [
    {
        "name": "Home",
        "link": internalUrls.home()
    },
    {
        "name": "About Me",
        "link": undefined,
        "subpages": [
            {
                "name": "Profile",
                "link": internalUrls.profile()
            },
            {
                "name": "Skills",
                "link": internalUrls.skills()
            }
        ]
    },
    {
        "name": "Experience",
        "link": undefined,
        "subpages": [
            {
                "name": "Work",
                "link": internalUrls.work()
            },
            {
                "name": "Projects",
                "link": internalUrls.projects()
            }
        ]
    }
];