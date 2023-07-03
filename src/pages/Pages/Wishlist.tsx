import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/FooterMain';
import one from '../../img/homeOne/1.webp';
import { Link } from 'react-router-dom';
import { CartPage, HomeOne, ProductDetails } from '../../date/Items';
import ButtonScrollTop from '../../Components/ButtonScrollTop';
import nav1 from '../../img/shop/nav1.webp';
import nav2 from '../../img/shop/nav2.webp';
import nav3 from '../../img/shop/nav3.webp';

export function Wishlist() {
	return (
		<>
			<HeaderMain />
			<section className='page-title-area' style={{}}>
				<div className='shape-top'>
					<img className='bg-img' src={one} />
				</div>
				<div className='container' style={{}}>
					<div className='row align-items-center' style={{}}>
						<div className='col-lg-12 m-auto' style={{}}>
							<div className='page-title-content text-center' style={{}}>
								<h2 className='title h2' style={{}}>
									Wishlist
								</h2>
								<div className='bread-crumbs' style={{}}>
									<Link to={HomeOne}>Home</Link>
									<span className='breadcrumb-sep' style={{}}>
										{' '}
										//{' '}
									</span>
									<span className='active' style={{}}>
										{' '}
										Wishlist
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='product-area wishlist-page-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 m-auto'>
							<div className='section-title text-center'>
								<h2 className='title'>Wishlist</h2>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<form action='#'>
								<div className='wishlist-table-content'>
									<div className='table-content table-responsive'>
										<table>
											<thead>
												<tr>
													<th className='width-remove'></th>
													<th className='width-thumbnail'></th>
													<th className='width-name'>Product</th>
													<th className='width-price'> Unit price </th>
													<th className='width-stock-status'> Stock status </th>
													<th className='width-wishlist-cart'></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className='product-remove'>
														<a href='#'>×</a>
													</td>
													<td className='product-thumbnail'>
														<Link to={ProductDetails}>
															<img src={nav1} />
														</Link>
													</td>
													<td className='product-name'>
														<h5>
															<Link to={ProductDetails}>
																<a>Jigsaw Puzzles For Kids</a>
															</Link>
														</h5>
													</td>
													<td className='product-price'>
														<span className='amount'>$120.00</span>
													</td>
													<td className='stock-status'>
														<span>
															<i className='fa fa-check'></i> In Stock
														</span>
													</td>
													<td className='wishlist-cart'>
														<Link to={CartPage}>
															<a>Add to Cart</a>
														</Link>
													</td>
												</tr>
												<tr>
													<td className='product-remove'>
														<a href='#'>×</a>
													</td>
													<td className='product-thumbnail'>
														<Link to={ProductDetails}>
															<img src={nav2} />
														</Link>
													</td>
													<td className='product-name'>
														<h5>
															<Link to={ProductDetails}>
																<a>Bruder Toys Mini Ships</a>
															</Link>
														</h5>
													</td>
													<td className='product-price'>
														<span className='amount'>$120.00</span>
													</td>
													<td className='stock-status'>
														<span>
															<i className='fa fa-check'></i> In Stock
														</span>
													</td>
													<td className='wishlist-cart'>
														<Link to={CartPage}>
															<a>Add to Cart</a>
														</Link>
													</td>
												</tr>
												<tr>
													<td className='product-remove'>
														<a href='#'>×</a>
													</td>
													<td className='product-thumbnail'>
														<Link to={ProductDetails}>
															<img src={nav3} />
														</Link>
													</td>
													<td className='product-name'>
														<h5>
															<Link to={ProductDetails}>
																<a>Sassy Crib and Floor Mirror</a>
															</Link>
														</h5>
													</td>
													<td className='product-price'>
														<span className='amount'>$120.00</span>
													</td>
													<td className='stock-status'>
														<span>
															<i className='fa fa-check'></i> In Stock
														</span>
													</td>
													<td className='wishlist-cart'>
														<Link to={CartPage}>
															<a>Add to Cart</a>
														</Link>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<FooterMain />
			<ButtonScrollTop />
		</>
	);
}
