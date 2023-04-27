import { DItem } from "./models";
import Blog from "../img/blog pages/page-blog.webp";
import BlogLeft from "../img/blog pages/page-blog-left-sidebar.webp";
import BlogRight from "../img/blog pages/page-blog-right-sidebar.webp";
import BlogLeftDetails from "../img/blog pages/page-blog-details.webp";
import BlogRightDetails from "../img/blog pages/page-blog-details-right-sidebar.webp";
import BlogNoDetails from "../img/blog pages/page-blog-details-no-sidebar.webp";

// const homeOne = "/homeOne";
// const homeTwo = "/homeTwo"

export const ItemsBlog: DItem[] = [
    {
        id: 13,
        title: "Blog",
        image: `${Blog}`,
        link: "",
    },
    {
        id: 14,
        title: "Blog Left Sidebar",
        image: `${BlogLeft}`,
        link: "",
    },
    {
        id: 15,
        title: "Blog Right Sidebar",
        image: `${BlogRight}`,
        link: "",
    },
    {
        id: 16,
        title: "Blog Details Left Sidebar",
        image: `${BlogLeftDetails}`,
        link: "",
    },
    {
        id: 17,
        title: "Blog Details Right Sidebar",
        image: `${BlogRightDetails}`,
        link: "",
    },
    {
        id: 18,
        title: "Blog Details No Sidebar",
        image: `${BlogNoDetails}`,
        link: "",
    },
]


