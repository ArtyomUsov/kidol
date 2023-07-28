import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeOne } from './Pages/Home/HomeOne';
import { HomeTwo } from './Pages/Home/HomeTwo';
import { About } from './Pages/About';
import { ComingSoon } from './Pages/Pages/ComingSoon';
import { Contact } from './Pages/Contacts';
import { NotFound } from './Pages/Pages/NotFound';
import { ShopNoSidebar } from './Pages/Shop/ShopNoSidebar';
import { Shop3Column } from './Pages/Shop/Shop3Column';
import { Shop4Column } from './Pages/Shop/Shop4Column';
import { ShopLeftSidebar } from './Pages/Shop/ShopLeftSidebar';
import { ShopRightSidebar } from './Pages/Shop/ShopRightSidebar';
import { ProductDetails } from './Pages/Shop/ProductDetails';
import { ProductVariable } from './Pages/Shop/ProductVariable';
import { ProductGrouped } from './Pages/Shop/ProductGrouped';
import { BlogNoSidebar } from './Pages/Blog/BlogNoSidebar';
import { Blog3Column } from './Pages/Blog/Blog3Column';
import { Blog4Column } from './Pages/Blog/Blog4Column';
import { BlogLeftSidebar } from './Pages/Blog/BlogLeftSidebar';
import { BlogRightSidebar } from './Pages/Blog/BlogRightSidebar';
import { BlogDetailsLeftSidebar } from './Pages/Blog/BlogDetailsLeftSidebar';
import { BlogDetailsRightSidebar } from './Pages/Blog/BlogDetailsRightSidebar';
import { BlogDetailsNoSidebar } from './Pages/Blog/BlogDetailsNoSidebar';
import ScrollToTop from '../src/Components/ScrollToTop';
import { CartPage } from './Pages/Pages/CartPage';
import { Checkout } from './Pages/Pages/Checkout';
import { MyAccount } from './Pages/Pages/MyAccount';
import { Wishlist } from './Pages/Pages/Wishlist';
import { Compare } from './Pages/Pages/Compare';
import { LoginRegister } from './Pages/Pages/LoginRegister';

function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path='/kidol' element={<HomeOne />} />
				<Route path='/home-one' element={<HomeOne />} />
				<Route path='/home-two' element={<HomeTwo />} />
				<Route path='/about' element={<About />} />
				<Route path='/cart-page' element={<CartPage />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/my-account' element={<MyAccount />} />
				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='/compare' element={<Compare />} />
				<Route path='/login-register' element={<LoginRegister />} />
				<Route path='/not-found' element={<NotFound />} />
				<Route path='/coming-soon' element={<ComingSoon />} />
				<Route path='/shop-no-sidebar' element={<ShopNoSidebar />} />
				<Route path='/shop-3-column' element={<Shop3Column />} />
				<Route path='/shop-4-column' element={<Shop4Column />} />
				<Route path='/shop-left-sidebar' element={<ShopLeftSidebar />} />
				<Route path='/shop-right-sidebar' element={<ShopRightSidebar />} />
				<Route path='/product-details' element={<ProductDetails />} />
				<Route path='/product-variable' element={<ProductVariable />} />
				<Route path='/product-grouped' element={<ProductGrouped />} />
				<Route path='/blog-no-sidebar' element={<BlogNoSidebar />} />
				<Route path='/blog-3-column' element={<Blog3Column />} />
				<Route path='/blog-4-column' element={<Blog4Column />} />
				<Route path='/blog-left-sidebar' element={<BlogLeftSidebar />} />
				<Route path='/blog-right-sidebar' element={<BlogRightSidebar />} />
				<Route path='/blog-details-left-sidebar' element={<BlogDetailsLeftSidebar />} />
				<Route path='/blog-details-right-sidebar' element={<BlogDetailsRightSidebar />} />
				<Route path='/blog-details-no-sidebar' element={<BlogDetailsNoSidebar />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	);
}
export default App;
