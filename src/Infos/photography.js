import {externalUrls, internalUrls} from "./urls";

const info = {
    night: {
        name: "Night",
        codename: "night",
    },
    cityscape: {
        name: "Cityscape",
        codename: "cityscape",
    },
};

export const gallery = [
    {
        ...info.night,
        cover: "/assets/hobbies/photography/night/01.jpg",
    },
    {
        ...info.cityscape,
        cover: "/assets/hobbies/photography/cityscape/01.jpg",
    },
    {
        ...info.night,
        cover: "/assets/hobbies/photography/night/01.jpg",
    },
    {
        ...info.cityscape,
        cover: "/assets/hobbies/photography/cityscape/01.jpg",
    },
    {
        ...info.night,
        cover: "/assets/hobbies/photography/night/01.jpg",
    },
    {
        ...info.cityscape,
        cover: "/assets/hobbies/photography/cityscape/01.jpg",
    },
];

export const themes = [
    {
        "name": "Night",
        "codename": "night",
        "photos": [
            "/assets/hobbies/photography/night/01.jpg",
            "/assets/hobbies/photography/night/02.jpg",
        ]
    },
    {
        "name": "Cityscape",
        "codename": "cityscape",
        "photos": [
            "/assets/hobbies/photography/cityscape/01.jpg",
        ]
    },
    {
        "name": "eBooks",
        "codename": "ebooks",
        "photos": [
            "/assets/hobbies/photography/books/ocafédafoto-estuary-final-cover.png",
        ]
    },
];