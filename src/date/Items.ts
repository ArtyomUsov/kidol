import { DItem } from "./models";
import Index1 from "../img/pages/page-index1.webp";
import Index2 from "../img/pages/page-index2.webp";
import PageAbout from "../img/pages/page-about.webp";
import PageNotFound from "../img/pages/page-not-found.webp";
import PageComingSoon from "../img/pages/page-coming-soon.webp";
import PageContact from "../img/pages/page-contact.webp";

const homeOne = "/homeOne"
const homeTwo = "/homeTwo"
const About = "/About"
const NotFound = "/NotFound"
const ComingSoon = "/ComingSoon"
const Contact = "/Contact"

export const Items: DItem[] = [
    {
        id: 1,
        title: "home one",
        image: `${Index1}`,
        link: homeOne,
    },
    {
        id: 2,
        title: "Home Two",
        image: `${Index2}`,
        link: homeTwo,
    },
    {
        id: 3,
        title: "About",
        image: `${PageAbout}`,
        link: About,
    },
    {
        id: 4,
        title: "404",
        image: `${PageNotFound}`,
        link: NotFound,
    },
    {
        id: 5,
        title: "Coming soon",
        image: `${PageComingSoon}`,
        link: ComingSoon,
    },
    {
        id: 6,
        title: "Contact",
        image: `${PageContact}`,
        link: Contact,
    },
]


