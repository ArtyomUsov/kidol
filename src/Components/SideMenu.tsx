import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
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

interface SideMenuProps {
	setActive1: React.Dispatch<React.SetStateAction<boolean>>;
}
export function SideMenu({ setActive1 }: SideMenuProps) {
	const [active1] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	const handleToggle1 = () => {
		setIsOpen1(!isOpen1);
	};
	const handleToggle2 = () => {
		setIsOpen(!isOpen2);
	};
	const handleToggle3 = () => {
		setIsOpen1(!isOpen3);
	};
	const handleClick = () => {
		setActive1((prev: boolean) => !prev);
	};
	return (
		<>
			<aside className={` ${active1 ? 'off-canvas-wrapper active' : 'off-canvas-wrapper'}`}>
				<div className='off-canvas-inner'>
					<div className='off-canvas-overlay d-none'></div>
					{/* <!-- Start Off Canvas Content Wrapper --> */}
					<div className='off-canvas-content'>
						{/* <!-- Off Canvas Header --> */}
						<div className='off-canvas-header'>
							<div className='close-action'>
								<button className='btn-close'>
									<i className='pe-7s-close' onClick={handleClick}></i>
								</button>
							</div>
						</div>

						<div className='off-canvas-item'>
							{/* <!-- Start Mobile Menu Wrapper --> */}
							<div className='res-mobile-menu'>
								{/* <!-- Note Content Auto Generate By Jquery From Main Menu --> */}
								<div className='slicknav_menu'>
									<a
										href='#'
										aria-haspopup='true'
										role='button'
										tabIndex={0}
										className='slicknav_btn slicknav_collapsed'
										style={{ outline: 'none' }}
									>
										<span className='slicknav_menutxt'>MENU</span>
										<span className='slicknav_icon'>
											<span className='slicknav_icon-bar'></span>
											<span className='slicknav_icon-bar'></span>
											<span className='slicknav_icon-bar'></span>
										</span>
									</a>
									<ul
										className='slicknav_nav slicknav_hidden'
										style={{ display: 'none' }}
										aria-hidden='true'
										role='menu'
									>
										<li className='slicknav_collapsed slicknav_parent'>
											{/* slicknav_open */}
											<a
												href='#'
												role='menuitem'
												aria-haspopup='true'
												tabIndex={-1}
												className='slicknav_item slicknav_row'
												style={{ outline: 'none' }}
											>
												<a href='index.html' tabIndex={-1}>
													Home
												</a>
												<span className='slicknav_arrow'>
													<i className={`fa ${isOpen ? 'fa-angle-up' : 'fa-angle-down'}`} onClick={handleToggle}></i>
												</span>
											</a>
											<Collapse in={isOpen}>
												<ul>
													<li>
														<Link to={HomeOne}>Home One</Link>
													</li>
													<li>
														<Link to={HomeTwo}>Home Two</Link>
													</li>
												</ul>
											</Collapse>
										</li>
										<li>
											<a href='about.html' role='menuitem' tabIndex={-1}>
												About
											</a>
										</li>
										<li className='slicknav_collapsed slicknav_parent'>
											<a
												href='#'
												role='menuitem'
												aria-haspopup='true'
												tabIndex={-1}
												className='slicknav_item slicknav_row'
												style={{ outline: 'none' }}
											>
												<a href='index.html' tabIndex={-1}>
													Pages
												</a>
												<span className='slicknav_arrow'>
													<i className='fa fa-angle-down'></i>
												</span>
											</a>
											<ul role='menu' className='slicknav_hidden' style={{ display: 'none' }} aria-hidden='true'>
												<li>
													<a href='shop-cart.html' role='menuitem' tabIndex={-1}>
														Cart page
													</a>
												</li>
												<li>
													<a href='shop-checkout.html' role='menuitem' tabIndex={-1}>
														Checkout
													</a>
												</li>
												<li>
													<a href='my-account.html' role='menuitem' tabIndex={-1}>
														My Account
													</a>
												</li>
												<li>
													<a href='shop-wishlist.html' role='menuitem' tabIndex={-1}>
														Wishlist
													</a>
												</li>
												<li>
													<a href='shop-compare.html' role='menuitem' tabIndex={-1}>
														Compare
													</a>
												</li>
												<li>
													<a href='login-register.html' role='menuitem' tabIndex={-1}>
														Login / Register
													</a>
												</li>
												<li>
													<a href='coming-soon.html' role='menuitem' tabIndex={-1}>
														Coming soon
													</a>
												</li>
												<li>
													<a href='page-not-found.html' role='menuitem' tabIndex={-1}>
														404
													</a>
												</li>
											</ul>
										</li>
										<li className='slicknav_collapsed slicknav_parent'>
											<a
												href='#'
												role='menuitem'
												aria-haspopup='true'
												tabIndex={-1}
												className='slicknav_item slicknav_row'
												style={{ outline: 'none' }}
											>
												<a href='shop.html' tabIndex={-1}>
													Shop
												</a>
												<span className='slicknav_arrow'>
													<i className='fa fa-angle-down'></i>
												</span>
											</a>
											<ul role='menu' className='slicknav_hidden' style={{ display: 'none' }} aria-hidden='true'>
												<li>
													<a href='shop-3-column.html' role='menuitem' tabIndex={-1}>
														Shop 3 Column
													</a>
												</li>
												<li>
													<a href='shop.html' role='menuitem' tabIndex={-1}>
														Shop 4 Column
													</a>
												</li>
												<li>
													<a href='shop-left-sidebar.html' role='menuitem' tabIndex={-1}>
														Shop Left Sidebar
													</a>
												</li>
												<li>
													<a href='shop-right-sidebar.html' role='menuitem' tabIndex={-1}>
														Shop Right Sidebar
													</a>
												</li>
												<li>
													<a href='shop.html' role='menuitem' tabIndex={-1}>
														Shop No Sidebar
													</a>
												</li>
												<li>
													<a href='shop-single-product.html' role='menuitem' tabIndex={-1}>
														Product Details
													</a>
												</li>
												<li>
													<a href='shop-single-product-variable.html' role='menuitem' tabIndex={-1}>
														Product Variable
													</a>
												</li>
												<li>
													<a href='shop-single-product-grouped.html' role='menuitem' tabIndex={-1}>
														Product Grouped
													</a>
												</li>
											</ul>
										</li>
										<li className='slicknav_collapsed slicknav_parent'>
											<a
												href='#'
												role='menuitem'
												aria-haspopup='true'
												tabIndex={-1}
												className='slicknav_item slicknav_row'
												style={{ outline: 'none' }}
											>
												<a href='blog.html' tabIndex={-1}>
													Blog
												</a>
												<span className='slicknav_arrow'>
													<i className='fa fa-angle-down'></i>
												</span>
											</a>
											<ul role='menu' className='slicknav_hidden' style={{ display: 'none' }} aria-hidden='true'>
												<li>
													<a href='blog.html' role='menuitem' tabIndex={-1}>
														Blog 3 Column
													</a>
												</li>
												<li>
													<a href='blog-4-column.html' role='menuitem' tabIndex={-1}>
														Blog 4 Column
													</a>
												</li>
												<li>
													<a href='blog-left-sidebar.html' role='menuitem' tabIndex={-1}>
														Blog Left Sidebar
													</a>
												</li>
												<li>
													<a href='blog-right-sidebar.html' role='menuitem' tabIndex={-1}>
														Blog Right Sidebar
													</a>
												</li>
												<li>
													<a href='blog.html' role='menuitem' tabIndex={-1}>
														Blog No Sidebar
													</a>
												</li>
												<li>
													<a href='blog-details.html' role='menuitem' tabIndex={-1}>
														Blog Details Left Sidebar
													</a>
												</li>
												<li>
													<a href='blog-details-right-sidebar.html' role='menuitem' tabIndex={-1}>
														Blog Details Right Sidebar
													</a>
												</li>
												<li>
													<a href='blog-details-no-sidebar.html' role='menuitem' tabIndex={-1}>
														Blog Details No Sidebar
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a href='contact.html' role='menuitem' tabIndex={-1}>
												Contact
											</a>
										</li>
									</ul>
								</div>
							</div>
							{/* <!-- End Mobile Menu Wrapper --> */}
						</div>
						{/* <!-- Off Canvas Footer --> */}
						<div className='off-canvas-footer'></div>
					</div>
					{/* <!-- End Off Canvas Content Wrapper --> */}
				</div>
			</aside>
		</>
	);
}
