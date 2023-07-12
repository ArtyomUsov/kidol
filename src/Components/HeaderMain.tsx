import React, { useContext, useEffect, useState } from 'react';
// import '../Components/HeaderMain.css';
import logo from '../img/logo.webp';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
	About,
	ComingSoon,
	Contact,
	HomeOne,
	HomeTwo,
	NotFound,
	ShopNoSidebar,
	Shop3Column,
	Shop4Column,
	ShopLeftSidebar,
	ShopRightSidebar,
	ProductDetails,
	ProductVariable,
	ProductGrouped,
	BlogNoSidebar,
	Blog3Column,
	Blog4Column,
	BlogLeftSidebar,
	BlogRightSidebar,
	BlogDetailsLeftSidebar,
	BlogDetailsRightSidebar,
	BlogDetailsNoSidebar,
	CartPage,
	Checkout,
	Compare,
	LoginRegister,
	MyAccount,
	Wishlist,
} from '../date/Path';
import { CartModal } from './CartModal';
import { SideMenu } from './SideMenu';

const HeaderMain = () => {
	const [sticky, setSticky] = useState('');
	const [ActiveTab, setActiveTab] = useState(false);
	const [ActiveTab1, setActiveTab1] = useState(false);

	const handleClick = () => {
		setActiveTab(prev => !prev);
	};
	const handleClick1 = () => {
		setActiveTab1(prev => !prev);
	};

	useEffect(() => {
		window.addEventListener('scroll', isSticky);
		return () => {
			window.removeEventListener('scroll', isSticky);
		};
	}, []);

	const isSticky = () => {
		const scrollTop = window.scrollY;
		const stickyClass = scrollTop >= 100 ? 'sticky' : '';
		setSticky(stickyClass);
	};
	const classes = ['header-area header-default sticky-header', sticky];

	return (
		<>
			<div className='header-wrapper'>
				<div className='header-top-main'>
					<div className='container'>
						<div className='row'>
							<div className='col-xs-12 col-sm-5 col-md-4 col-lg-6'>
								<div className='header-info-left'>
									<p style={{ marginBottom: '0' }}>Free Returns and Free Shipping</p>
								</div>
							</div>
							<div className='col-xs-12 col-sm-7 col-md-8 col-lg-6 sm-pl-0 xs-pl-15 header-top-main-right'>
								<div className='header-info'>
									<a href='tel://+00123456789'>
										<i className='fa fa-phone'></i>+00 123 456 789
									</a>
									<a href='mailto://demo@example.com'>
										<i className='fa fa-envelope'></i>demo@example.com
									</a>
									<a href='login-register.html'>
										<i className='fa fa-user'></i>Account
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='header-middle'>
					<div className='container'>
						<div className='row row-gutter-0 align-items-center'>
							<div className='col-12'>
								<div className='header-align'>
									<div className='header-align-left'>
										<div className='header-logo-area'>
											<a href='/homeOne'>
												<img className='logo-main' src={logo} alt='Logo' />
											</a>
										</div>
									</div>
									<div className='header-align-center'>
										<div className='header-search-box'>
											<form action='#' method='post'>
												<div className='form-input-item'>
													<label htmlFor='search' className='sr-only'>
														Search Everything
													</label>
													<input type='text' id='search' placeholder='Search Everything' />
													<button type='submit' className='btn-src'>
														<i className='pe-7s-search'></i>
													</button>
												</div>
											</form>
										</div>
									</div>
									<div className='header-align-right'>
										<div className='header-action-area'>
											<div className='header-action-wishlist'>
												<button
													className='btn-wishlist'
													// onclick="window.location.href='shop-wishlist.html'"
												>
													<i className='pe-7s-like'></i>
												</button>
											</div>
											<div className='header-action-cart'>
												<button className='btn-cart cart-icon' onClick={handleClick}>
													<span className='cart-count'>01</span>
													<i className='pe-7s-shopbag'></i>
												</button>
											</div>
											<button className='btn-menu d-md-none'>
												<i className='fa fa-bars' onClick={handleClick1}></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={classes.join(' ')}>
					<div className='container'>
						<div className='row row-gutter-0 align-items-center'>
							<div className='col-4 col-sm-6 col-lg-2'>
								<div className='header-logo-area'>
									<Link to={HomeOne}>
										<img className='logo-main' src={logo} alt='Logo' />
										<img className='logo-light' src={logo} alt='Logo' />
									</Link>
								</div>
							</div>
							<div className='col-lg-8 sticky-md-none'>
								<div className='header-navigation-area d-md-block'>
									<ul className='main-menu nav position-relative'>
										<li className='has-submenu'>
											<Link to={HomeOne}>Home</Link>
											<ul className='submenu-nav'>
												<li>
													<Link to={HomeOne}>Home One</Link>
												</li>
												<li>
													<Link to={HomeTwo}>Home Two</Link>
												</li>
											</ul>
										</li>
										<li>
											<Link to={About}>About</Link>
										</li>
										<li className='has-submenu'>
											<Link to={HomeOne}>Pages</Link>
											<ul className='submenu-nav'>
												<li>
													<Link to={CartPage}>Cart page</Link>
												</li>
												<li>
													<Link to={Checkout}>Checkout</Link>
												</li>
												<li>
													<Link to={MyAccount}>My Account</Link>
												</li>
												<li>
													<Link to={Wishlist}>Wishlist</Link>
												</li>
												<li>
													<Link to={Compare}>Compare</Link>
												</li>
												<li>
													<Link to={LoginRegister}>Login / Register</Link>
												</li>
												<li>
													<Link to={ComingSoon}>Coming soon</Link>
												</li>
												<li>
													<Link to={NotFound}>404</Link>
												</li>
											</ul>
										</li>
										<li className='has-submenu'>
											<Link to={ShopNoSidebar}>Shop</Link>
											<ul className='submenu-nav'>
												<li>
													<Link to={Shop3Column}>Shop 3 Column</Link>
												</li>
												<li>
													<Link to={Shop4Column}>Shop 4 Column</Link>
												</li>
												<li>
													<Link to={ShopLeftSidebar}>Shop Left Sidebar</Link>
												</li>
												<li>
													<Link to={ShopRightSidebar}>Shop Right Sidebar</Link>
												</li>
												<li>
													<Link to={ShopNoSidebar}>Shop No Sidebar</Link>
												</li>
												<li>
													<Link to={ProductDetails}>Product Details</Link>
												</li>
												<li>
													<Link to={ProductVariable}>Product Variable</Link>
												</li>
												<li>
													<Link to={ProductGrouped}>Product Grouped</Link>
												</li>
											</ul>
										</li>
										<li className='has-submenu'>
											<Link to={BlogNoSidebar}>Blog</Link>
											<ul className='submenu-nav'>
												<li>
													<Link to={Blog3Column}>Blog 3 Column</Link>
												</li>
												<li>
													<Link to={Blog4Column}>Blog 4 Column</Link>
												</li>
												<li>
													<Link to={BlogLeftSidebar}>Blog Left Sidebar</Link>
												</li>
												<li>
													<Link to={BlogRightSidebar}>Blog Right Sidebar</Link>
												</li>
												<li>
													<Link to={BlogNoSidebar}>Blog No Sidebar</Link>
												</li>
												<li>
													<Link to={BlogDetailsLeftSidebar}>Blog Details Left Sidebar</Link>
												</li>
												<li>
													<Link to={BlogDetailsRightSidebar}>Blog Details Right Sidebar</Link>
												</li>
												<li>
													<Link to={BlogDetailsNoSidebar}>Blog Details No Sidebar</Link>
												</li>
											</ul>
										</li>
										<li>
											<Link to={Contact}>Contact</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-8 col-sm-6 col-lg-2'>
								<div className='header-action-area'>
									<div className='header-action-search'>
										<button className='btn-search btn-search-menu'>
											<i className='pe-7s-search'></i>
										</button>
									</div>
									<div className='header-action-login'>
										<button
											className='btn-login'
											// onclick="window.location.href='login-register.html'"
										>
											<i className='pe-7s-users'></i>
										</button>
									</div>
									<div className='header-action-wishlist'>
										<button
											className='btn-wishlist'
											// onclick="window.location.href='shop-wishlist.html'"
										>
											<i className='pe-7s-like'></i>
										</button>
									</div>
									<div className='header-action-cart'>
										<button className='btn-cart cart-icon' onClick={handleClick}>
											<span className='cart-count'>01</span>
											<i className='pe-7s-shopbag'></i>
										</button>
									</div>
									<button className='btn-menu d-lg-none'>
										<i className='fa fa-bars' onClick={handleClick1}></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>{ActiveTab && <CartModal setActive={setActiveTab} />}</div>
			<div>{ActiveTab1 && <SideMenu setActive1={setActiveTab1} />}</div>
		</>
	);
};

export default HeaderMain;
