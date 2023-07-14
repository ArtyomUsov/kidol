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
		setIsOpen2(!isOpen2);
	};
	const handleToggle3 = () => {
		setIsOpen3(!isOpen3);
	};
	const handleClick = () => {
		setActive1((prev: boolean) => !prev);
	};
	return (
		<>
			<aside className={` ${active1 ? 'off-canvas-wrapper active' : 'off-canvas-wrapper'}`}>
				<div className='off-canvas-inner'>
					<div className='off-canvas-overlay d-none'></div>
					<div className='off-canvas-content'>
						<div className='off-canvas-header'>
							<div className='close-action'>
								<button className='btn-close'>
									<i className='pe-7s-close' onClick={handleClick}></i>
								</button>
							</div>
						</div>
						<div className='off-canvas-item'>
							<div className='res-mobile-menu'>
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
												<Link to={HomeOne} className={`${isOpen ? 'hover' : ''}`}>
													Home
												</Link>
												<span className='slicknav-arrow'>
													<i
														className={`fa ${isOpen ? 'fa-angle-up hover' : 'fa-angle-down'}`}
														onClick={handleToggle}
													></i>
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
											<Link to={About}>About</Link>
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
												<Link to={HomeOne} className={`${isOpen1 ? 'hover' : ''}`}>
													Pages
												</Link>
												<span className='slicknav-arrow'>
													<i
														className={`fa ${isOpen1 ? 'fa-angle-up hover' : 'fa-angle-down'}`}
														onClick={handleToggle1}
													></i>
												</span>
											</a>
											<Collapse in={isOpen1}>
												<ul>
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
											</Collapse>
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
												<Link to={ShopNoSidebar} className={`${isOpen2 ? 'hover' : ''}`}>
													Shop
												</Link>
												<span className='slicknav-arrow'>
													<i
														className={`fa ${isOpen2 ? 'fa-angle-up hover' : 'fa-angle-down'}`}
														onClick={handleToggle2}
													></i>
												</span>
											</a>
											<Collapse in={isOpen2}>
												<ul>
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
											</Collapse>
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
												<Link to={BlogNoSidebar} className={`${isOpen3 ? 'hover' : ''}`}>
													Blog
												</Link>
												<span className='slicknav-arrow'>
													<i
														className={`fa ${isOpen3 ? 'fa-angle-up hover' : 'fa-angle-down'}`}
														onClick={handleToggle3}
													></i>
												</span>
											</a>
											<Collapse in={isOpen3}>
												<ul>
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
											</Collapse>
										</li>
										<li>
											<Link to={Contact}>Contact</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
}
