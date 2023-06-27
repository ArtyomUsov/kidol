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

export const HomeOne = '/HomeOne';
export const HomeTwo = '/HomeTwo';
export const About = '/About';
export const NotFound = '/NotFound';
export const ComingSoon = '/ComingSoon';
export const Contact = '/Contact';
export const ShopNoSidebar = '/ShopNoSidebar';
export const Shop3Column = '/Shop3Column';
export const Shop4Column = '/Shop4Column';
export const ShopLeftSidebar = '/ShopLeftSidebar';
export const ShopRightSidebar = '/ShopRightSidebar';
export const ProductDetails = '/ProductDetails';
export const ProductVariable = '/ProductVariable';
export const ProductGrouped = '/ProductGrouped';
export const BlogNoSidebar = '/BlogNoSidebar';
export const Blog3Column = '/Blog3Column';
export const Blog4Column = '/Blog4Column';
export const BlogLeftSidebar = '/BlogLeftSidebar';
export const BlogRightSidebar = '/BlogRightSidebar';
export const BlogDetailsLeftSidebar = '/BlogDetailsLeftSidebar';
export const BlogDetailsRightSidebar = '/BlogDetailsRightSidebar';
export const BlogDetailsNoSidebar = '/BlogDetailsNoSidebar';
export const CartPage = '/CartPage';
export const Checkout = '/Checkout';
export const MyAccount = '/MyAccount';
export const Wishlist = '/Wishlist';
export const Compare = '/Compare';
export const LoginRegister = '/LoginRegister';

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
