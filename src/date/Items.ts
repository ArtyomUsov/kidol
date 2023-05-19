import { IItem } from "./models";
import Index1 from "../img/pages/page-index1.webp";
import Index2 from "../img/pages/page-index2.webp";
import PageAbout from "../img/pages/page-about.webp";
import PageNotFound from "../img/pages/page-not-found.webp";
import PageComingSoon from "../img/pages/page-coming-soon.webp";
import PageContact from "../img/pages/page-contact.webp";
import Shop from "../img/shop pages/page-shop.webp";
import ShopLeft from "../img/shop pages/page-shop-left-sidebar.webp";
import ShopRight from "../img/shop pages/page-shop-right-sidebar.webp";
import ProductDetails from "../img/shop pages/page-shop-single-product.webp";
import ProductVariable from "../img/shop pages/page-product-details-variable.webp";
import ProductGrouped from "../img/shop pages/page-product-details-grouped.webp";
import Blog from "../img/blog pages/page-blog.webp";
import BlogLeft from "../img/blog pages/page-blog-left-sidebar.webp";
import BlogRight from "../img/blog pages/page-blog-right-sidebar.webp";
import BlogLeftDetails from "../img/blog pages/page-blog-details.webp";
import BlogRightDetails from "../img/blog pages/page-blog-details-right-sidebar.webp";
import BlogNoDetails from "../img/blog pages/page-blog-details-no-sidebar.webp";

export const HomeOne = "/HomeOne"
export const HomeTwo = "/HomeTwo"
export const About = "/About"
export const NotFound = "/NotFound"
export const ComingSoon = "/ComingSoon"
export const Contact = "/Contact"



export const Items: IItem[] = [
    {
        id: 1,
        title: "Home one",
        image: `${Index1}`,
        link: HomeOne,
    },
    {
        id: 2,
        title: "Home Two",
        image: `${Index2}`,
        link: HomeTwo,
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
    {
        id: 7,
        title: "Shop",
        image: `${Shop}`,
        link: "",
    },
    {
        id: 8,
        title: "Shop Left Sidebar",
        image: `${ShopLeft}`,
        link: "",
    },
    {
        id: 9,
        title: "Shop Right Sidebar",
        image: `${ShopRight}`,
        link: "",
    },
    {
        id: 10,
        title: "Product Details",
        image: `${ProductDetails}`,
        link: "",
    },
    {
        id: 11,
        title: "Product Variable",
        image: `${ProductVariable}`,
        link: "",
    },
    {
        id: 12,
        title: "Product Grouped",
        image: `${ProductGrouped}`,
        link: "",
    },
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


