import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import nav1 from '../img/shop/nav1.webp';
import nav2 from '../img/shop/nav2.webp';
import { CartPage, Checkout, ProductDetails } from '../date/Path';

interface CartModalProps {
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export function CartModal({ setActive }: CartModalProps) {
	const [active] = useState<boolean>(true);

	const handleClick = () => {
		setActive((prev: boolean) => !prev);
	};
	return (
		<>
			<aside className={`sidebar-cart-modal ${active ? 'sidebar-cart-active' : ''}`}>
				<div className='sidebar-cart-inner'>
					<div className='sidebar-cart-content'>
						<a className='cart-close' onClick={handleClick}>
							<i className='pe-7s-close'></i>
						</a>
						<div className='sidebar-cart-all'>
							<div className='cart-header'>
								<h3 className='h3'>Shopping Cart</h3>
								<div className='close-style-wrap'>
									<span className='close-style close-style-width-1 cart-close'></span>
								</div>
							</div>
							<div className='cart-content cart-content-padding'>
								<ul>
									<li className='single-product-cart'>
										<div className='cart-img'>
											<Link to={ProductDetails}>
												<img src={nav1} />
											</Link>
										</div>
										<div className='cart-title'>
											<h4>
												<Link to={ProductDetails} className='h4'>
													Jigsaw Puzzles For Kids
												</Link>
											</h4>
											<span>
												{' '}
												1 × <span className='price'> $12.00 </span>
											</span>
										</div>
										<div className='cart-delete'>
											<a href='#/'>
												<i className='pe-7s-trash icons'></i>
											</a>
										</div>
									</li>
									<li className='single-product-cart'>
										<div className='cart-img'>
											<Link to={ProductDetails}>
												<img src={nav2} />
											</Link>
										</div>
										<div className='cart-title'>
											<h4>
												<Link to={ProductDetails} className='h4'>
													Bruder Toys Mini Ships
												</Link>
											</h4>
											<span>
												{' '}
												1 × <span className='price'> $59.00 </span>
											</span>
										</div>
										<div className='cart-delete'>
											<a href='#/'>
												<i className='pe-7s-trash icons'></i>
											</a>
										</div>
									</li>
								</ul>
								<div className='cart-total'>
									<h4 className='h4'>
										Subtotal: <span>$278.90</span>
									</h4>
								</div>
								<div className='cart-checkout-btn'>
									<Link to={CartPage} className='cart-btn'>
										view cart
									</Link>
									<Link to={Checkout} className='checkout-btn'>
										checkout
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside>
			<div className='sidebar-cart-overlay show'></div>
		</>
	);
}
