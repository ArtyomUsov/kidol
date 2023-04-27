import { DItem } from "./models";
import Shop from "../img/shop pages/page-shop.webp";
import ShopLeft from "../img/shop pages/page-shop-left-sidebar.webp";
import ShopRight from "../img/shop pages/page-shop-right-sidebar.webp";
import ProductDetails from "../img/shop pages/page-shop-single-product.webp";
import ProductVariable from "../img/shop pages/page-product-details-variable.webp";
import ProductGrouped from "../img/shop pages/page-product-details-grouped.webp";

// const homeOne = "/homeOne";
// const homeTwo = "/homeTwo"

export const ItemsShop: DItem[] = [
    {
        id: 7,
        title: "Shop",
        image: `${Shop}`,
        link: Shop,
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
]


