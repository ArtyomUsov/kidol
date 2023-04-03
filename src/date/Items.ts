import { DItem } from "./models";
import Index1 from "../img/pages/page-index1.webp";
import Index2 from "../img/pages/page-index2.webp";
import About from "../img/pages/page-about.webp";
import NotFound from "../img/pages/page-not-found.webp";
import ComingSoon from "../img/pages/page-coming-soon.webp";
import Contact from "../img/pages/page-contact.webp";

export const Items: DItem[] = [
    {
        id: 1,
        title: "home one",
        image: `${Index1}`,
        link: "/indexTwo.tsx",
    },
    {
        id: 2,
        title: "Home Two",
        image: `${Index2}`,
        link: "",
    },
    {
        id: 3,
        title: "About",
        image: `${About}`,
        link: "",
    },
    {
        id: 4,
        title: "404",
        image: `${NotFound}`,
        link: "",
    },
    {
        id: 5,
        title: "Coming soon",
        image: `${ComingSoon}`,
        link: "",
    },
    {
        id: 6,
        title: "Contact",
        image: `${Contact}`,
        link: "",
    },
]


