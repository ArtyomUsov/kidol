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
			</Routes>
			{/* </Router> */}
		</>
	);
}
export default App;
