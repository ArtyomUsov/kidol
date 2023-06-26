import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeOne } from './Pages/Home/HomeOne';
import { HomeTwo } from './Pages/Home/HomeTwo';
import { Demo } from './Pages/Demo';
import { About } from './Pages/About';
import { ComingSoon } from './Pages/ComingSoon';
import { Contact } from './Pages/Contacts';
import { NotFound } from './Pages/NotFound';
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

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../src/Components/ScrollToTop';

function App() {
	return (
		<>
			{/* <Router> */}
			<ScrollToTop />
			<Routes>
				<Route path='/kidol_react' element={<Demo />} />
				<Route path='/HomeOne' element={<HomeOne />} />
				<Route path='/HomeTwo' element={<HomeTwo />} />
				<Route path='/About' element={<About />} />
				<Route path='/NotFound' element={<NotFound />} />
				<Route path='/ComingSoon' element={<ComingSoon />} />
				<Route path='/Contact' element={<Contact />} />
				<Route path='/ShopNoSidebar' element={<ShopNoSidebar />} />
				<Route path='/Shop3Column' element={<Shop3Column />} />
				<Route path='/Shop4Column' element={<Shop4Column />} />
				<Route path='/ShopLeftSidebar' element={<ShopLeftSidebar />} />
				<Route path='/ShopRightSidebar' element={<ShopRightSidebar />} />
				<Route path='/ProductDetails' element={<ProductDetails />} />
				<Route path='/ProductVariable' element={<ProductVariable />} />
				<Route path='/ProductGrouped' element={<ProductGrouped />} />
				<Route path='/BlogNoSidebar' element={<BlogNoSidebar />} />
				<Route path='/Blog3Column' element={<Blog3Column />} />
				<Route path='/Blog4Column' element={<Blog4Column />} />
				<Route path='/BlogLeftSidebar' element={<BlogLeftSidebar />} />
				<Route path='/BlogRightSidebar' element={<BlogRightSidebar />} />
				<Route path='/BlogDetailsLeftSidebar' element={<BlogDetailsLeftSidebar />} />
				<Route path='/BlogDetailsRightSidebar' element={<BlogDetailsRightSidebar />} />
				<Route path='/BlogDetailsNoSidebar' element={<BlogDetailsNoSidebar />} />
			</Routes>
			{/* </Router> */}
		</>
	);
}
export default App;
