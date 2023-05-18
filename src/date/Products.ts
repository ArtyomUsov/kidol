import { IProduct } from "./models";
import shop1 from "../img/shop/1.webp"
import shop2 from "../img/shop/2.webp"
import shop3 from "../img/shop/3.webp"
import shop4 from "../img/shop/4.webp"
import shop5 from "../img/shop/5.webp"
import shop6 from "../img/shop/6.webp"
import shop7 from "../img/shop/7.webp"
import shop8 from "../img/shop/8.webp"
import nine from "../img/shop/9.webp";
import ten from "../img/shop/10.webp";
import eleven from "../img/shop/11.webp";
import twelve from "../img/shop/12.webp";

const homeOne = "/homeOne"
const homeTwo = "/homeTwo"
const About = "/About"
const NotFound = "/NotFound"
const ComingSoon = "/ComingSoon"
const Contact = "/Contact"


export const Products: IProduct[] = [
    {
        id: 1,
        title: "Funskool Teddy",
        image: `${shop1}`,
        link: homeOne,
        price: "$102.12",
        rating: "star",
    },
    {
        id: 2,
        title: "Baby Play Sets",
        image: `${shop2}`,
        link: homeTwo,
        price: "$112.12",
        rating: "star",
    },
    {
        id: 3,
        title: "Jigsaw Puzzles For Kids",
        image: `${shop3}`,
        link: About,
        price: "$122.12",
        rating: "star",
    },
    {
        id: 4,
        title: "Abstract Girl Dress",
        image: `${shop4}`,
        link: NotFound,
        price: "$132.12",
        rating: "star",
    },
    {
        id: 5,
        title: "Bruder Toys Mini Ships",
        image: `${shop5}`,
        link: ComingSoon,
        price: "$142.12",
        rating: "star",
    },
    {
        id: 6,
        title: "Abstract Boy Dress",
        image: `${shop6}`,
        link: Contact,
        price: "$152.12",
        rating: "star",
    },
    {
        id: 7,
        title: "Funskool Teddy Pink",
        image: `${shop7}`,
        link: Contact,
        price: "$162.12",
        rating: "star",
    },
    {
        id: 8,
        title: "Toys Box For Baby",
        image: `${shop8}`,
        link: Contact,
        price: "$172.12",
        rating: "star",
    },
    {
        id: 9,
        title: "Funskool Teddy Brown",
        image: `${nine}`,
        link: Contact,
        price: "$182.12",
        rating: "star",
    },
    {
        id: 10,
        title: "Newborn Kit Set",
        image: `${ten}`,
        link: Contact,
        price: "$192.12",
        rating: "star",
    },
    {
        id: 11,
        title: "Classic Fisher Gift",
        image: `${eleven}`,
        link: Contact,
        price: "$202.12",
        rating: "star",
    },
    {
        id: 12,
        title: "Sassy Crib and Floor Mirror",
        image: `${twelve}`,
        link: Contact,
        price: "$212.12",
        rating: "star",
    },
]
