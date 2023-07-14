import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import nav1 from '../img/shop/nav1.webp';
import nav2 from '../img/shop/nav2.webp';
import { CartPage, Checkout, ProductDetails } from '../date/Path';

interface ProductQuickViewProps {
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export function ProductQuickView({ setActive }: ProductQuickViewProps) {
	const [active] = useState<boolean>(true);

	const handleClick = () => {
		setActive((prev: boolean) => !prev);
	};
	return (
		<>
			<aside className='product-quick-view-modal active'>
				<div className='product-quick-view-inner'>
					<div className='product-quick-view-content'>
						<button type='button' className='btn-close' onClick={handleClick}>
							<span className='pe-7s-close'>
								<i className='lastudioicon-e-remove'></i>
							</span>
						</button>
						<div className='row row-gutter-0'>
							<div className='col-lg-6 col-md-6 col-12'>
								<div className='thumb'>
									<img src='assets/img/shop/quick-view1.jpg' alt='Image' />
								</div>
							</div>
							<div className='col-lg-6 col-md-6 col-12'>
								<div className='single-product-info'>
									<h4 className='title'>Jigsaw Puzzles For Kids</h4>
									<div className='prices'>
										<span className='price'>$120.59</span>
									</div>
									<div className='product-rating'>
										<div className='rating'>
											<span className='fa fa-star'></span>
											<span className='fa fa-star'></span>
											<span className='fa fa-star'></span>
											<span className='fa fa-star'></span>
											<span className='fa fa-star'></span>
										</div>
										<div className='review'>
											<a href='#/'>( 5 Customer Review )</a>
										</div>
									</div>
									<div className='single-product-featured'>
										<ul>
											<li>
												<i className='fa fa-check'></i> Free Shipping
											</li>
											<li>
												<i className='fa fa-check'></i> Support 24/7
											</li>
											<li>
												<i className='fa fa-check'></i> Money Return
											</li>
										</ul>
									</div>
									<p className='product-desc'>
										Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quisll exercitation ullamco laboris nisi ut aliquip ex
										ea commodo consequat. Duisol aute irure dolor in reprehenderit.
									</p>
									<div className='quick-product-action'>
										<div className='action-top'>
											<div className='pro-qty'>
												<input type='text' id='quantity' title='Quantity' value='01' />
												<a href='#' className='inc qty-btn'>
													<i className='fa fa-plus'></i>
												</a>
												<a href='#' className='dec qty-btn'>
													<i className='fa fa-minus'></i>
												</a>
											</div>
											<button className='btn btn-theme'>Add to Cart</button>
											<a className='btn-wishlist' href='shop-wishlist.html'>
												Add to Wishlist
											</a>
										</div>
									</div>
									<div className='widget'>
										<h3 className='title'>SKU:</h3>
										<div className='widget-tags'>
											<span>Ch-256xl</span>
										</div>
									</div>
									<div className='widget'>
										<h3 className='title'>Categories:</h3>
										<div className='widget-tags'>
											<a href='blog.html'>Toys.</a>
											<a href='blog.html'>Dresss</a>
										</div>
									</div>
									<div className='widget'>
										<h3 className='title'>Tag:</h3>
										<div className='widget-tags'>
											<a href='blog.html'>Toys,</a>
											<a href='blog.html'>Dress</a>
										</div>
									</div>
									<div className='widget'>
										<h3 className='title'>Share:</h3>
										<div className='widget-tags widget-share'>
											<span className='fa fa-facebook'></span>
											<span className='fa fa-dribbble'></span>
											<span className='fa fa-pinterest-p'></span>
											<span className='fa fa-twitter'></span>
											<span className='fa fa-linkedin'></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='canvas-overlay'></div>
			</aside>
		</>
	);
}
