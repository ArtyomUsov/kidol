import { IItem } from './models';
import Index1 from '../img/pages/page-index1.webp';
import Index2 from '../img/pages/page-index2.webp';
import PageAbout from '../img/pages/page-about.webp';
import PageNotFound from '../img/pages/page-not-found.webp';
import PageComingSoon from '../img/pages/page-coming-soon.webp';
import PageContact from '../img/pages/page-contact.webp';
import Shop from '../img/shop pages/page-shop.webp';
import ShopLeft from '../img/shop pages/page-shop-left-sidebar.webp';
import ShopRight from '../img/shop pages/page-shop-right-sidebar.webp';
import ImgProductDetails from '../img/shop pages/page-shop-single-product.webp';
import ImgProductVariable from '../img/shop pages/page-product-details-variable.webp';
import ImgProductGrouped from '../img/shop pages/page-product-details-grouped.webp';
import Blog from '../img/blog pages/page-blog.webp';
import BlogLeft from '../img/blog pages/page-blog-left-sidebar.webp';
import BlogRight from '../img/blog pages/page-blog-right-sidebar.webp';
import BlogLeftDetails from '../img/blog pages/page-blog-details.webp';
import BlogRightDetails from '../img/blog pages/page-blog-details-right-sidebar.webp';
import BlogNoDetails from '../img/blog pages/page-blog-details-no-sidebar.webp';

export const HomeOne = '/home-one';
export const HomeTwo = '/home-two';
export const About = '/about';
export const CartPage = '/cart-page';
export const Checkout = '/checkout';
export const MyAccount = '/my-account';
export const Wishlist = '/wishlist';
export const Compare = '/compare';
export const LoginRegister = '/login-register';
export const NotFound = '/not-found';
export const ComingSoon = '/coming-soon';
export const ShopNoSidebar = '/shop-no-sidebar';
export const Shop3Column = '/shop-3-column';
export const Shop4Column = '/shop-4-column';
export const ShopLeftSidebar = '/shop-left-sidebar';
export const ShopRightSidebar = '/shop-right-sidebar';
export const ProductDetails = '/product-details';
export const ProductVariable = '/product-variable';
export const ProductGrouped = '/product-grouped';
export const BlogNoSidebar = '/blog-no-sidebar';
export const Blog3Column = '/blog-3-column';
export const Blog4Column = '/blog-4-column';
export const BlogLeftSidebar = '/blog-left-sidebar';
export const BlogRightSidebar = '/blog-right-sidebar';
export const BlogDetailsLeftSidebar = '/blog-details-left-sidebar';
export const BlogDetailsRightSidebar = '/blog-details-right-sidebar';
export const BlogDetailsNoSidebar = '/blog-details-no-sidebar';
export const Contact = '/contact';

export const Items: IItem[] = [
	{
		id: 1,
		title: 'Home one',
		image: `${Index1}`,
		link: HomeOne,
	},
	{
		id: 2,
		title: 'Home Two',
		image: `${Index2}`,
		link: HomeTwo,
	},
	{
		id: 3,
		title: 'About',
		image: `${PageAbout}`,
		link: About,
	},
	{
		id: 4,
		title: '404',
		image: `${PageNotFound}`,
		link: NotFound,
	},
	{
		id: 5,
		title: 'Coming soon',
		image: `${PageComingSoon}`,
		link: ComingSoon,
	},
	{
		id: 6,
		title: 'Contact',
		image: `${PageContact}`,
		link: Contact,
	},
	{
		id: 7,
		title: 'Shop',
		image: `${Shop}`,
		link: ShopNoSidebar,
	},
	{
		id: 8,
		title: 'Shop Left Sidebar',
		image: `${ShopLeft}`,
		link: ShopLeftSidebar,
	},
	{
		id: 9,
		title: 'Shop Right Sidebar',
		image: `${ShopRight}`,
		link: ShopRightSidebar,
	},
	{
		id: 10,
		title: 'Product Details',
		image: `${ImgProductDetails}`,
		link: ProductDetails,
	},
	{
		id: 11,
		title: 'Product Variable',
		image: `${ImgProductVariable}`,
		link: ProductVariable,
	},
	{
		id: 12,
		title: 'Product Grouped',
		image: `${ImgProductGrouped}`,
		link: ProductGrouped,
	},
	{
		id: 13,
		title: 'Blog',
		image: `${Blog}`,
		link: BlogNoSidebar,
	},
	{
		id: 14,
		title: 'Blog Left Sidebar',
		image: `${BlogLeft}`,
		link: BlogLeftSidebar,
	},
	{
		id: 15,
		title: 'Blog Right Sidebar',
		image: `${BlogRight}`,
		link: BlogRightSidebar,
	},
	{
		id: 16,
		title: 'Blog Details Left Sidebar',
		image: `${BlogLeftDetails}`,
		link: BlogDetailsLeftSidebar,
	},
	{
		id: 17,
		title: 'Blog Details Right Sidebar',
		image: `${BlogRightDetails}`,
		link: BlogDetailsRightSidebar,
	},
	{
		id: 18,
		title: 'Blog Details No Sidebar',
		image: `${BlogNoDetails}`,
		link: BlogDetailsNoSidebar,
	},
];
