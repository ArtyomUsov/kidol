import React from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/Footer';
import one from '../../img/homeOne/1.webp';
import { Link } from 'react-router-dom';
import { CartPage, HomeOne, ProductDetails } from '../../date/Path';
import ButtonScrollTop from '../../Components/ButtonScrollTop';
import Product1 from '../../img/shop/290x290-1.webp';
import Product2 from '../../img/shop/290x290-2.webp';
import Product3 from '../../img/shop/290x290-3.webp';

export function Compare() {
	return (
		<>
			<HeaderMain />
			<section className='page-title-area'>
				<div className='shape-top'>
					<img className='bg-img' src={one} alt='White semicircles in a row' />
				</div>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-12 m-auto'>
							<div className='page-title-content text-center'>
								<h2 className='title h2'>Compare</h2>
								<div className='bread-crumbs'>
									<Link to={HomeOne}>Home</Link>
									<span className='breadcrumb-sep'> // </span>
									<span className='active'> Compare</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='product-area compare-page-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 m-auto'>
							<div className='section-title text-center'>
								<h2 className='title'>Compare</h2>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='compare-page-content-wrap'>
								<div className='compare-table table-responsive'>
									<table className='table table-bordered mb-0'>
										<tbody>
											<tr>
												<td className='first-column'>Product</td>
												<td className='product-image-title'>
													<Link to={ProductDetails} className='image'>
														<img className='img-fluid' src={Product1} />
													</Link>
													<a href='#' className='category'>
														Puzzles
													</a>
													<a href='shop-single-product.html' className='title'>
														Jigsaw Puzzles For Kids
													</a>
												</td>
												<td className='product-image-title'>
													<Link to={ProductDetails} className='image'>
														<img className='img-fluid' src={Product2} />
													</Link>
													<a href='#' className='category'>
														Ships
													</a>
													<a href='shop-single-product.html' className='title'>
														{' '}
														Bruder Toys Mini Ships
													</a>
												</td>
												<td className='product-image-title'>
													<Link to={ProductDetails} className='image'>
														<img className='img-fluid' src={Product3} />
													</Link>
													<a href='#' className='category'>
														Mirror
													</a>
													<a href='shop-single-product.html' className='title'>
														{' '}
														Sassy Crib and Floor Mirror
													</a>
												</td>
											</tr>
											<tr>
												<td className='first-column'>Description</td>
												<td className='pro-desc'>
													<p>
														Samsome Note Book Pro 5 is an the best Laptop on this budgeted. You can satisfied after
														usign this laptop.{' '}
													</p>
												</td>
												<td className='pro-desc'>
													<p>
														Samsome Note Book Pro 5 is an the best Laptop on this budgeted. You can satisfied after
														usign this laptop.{' '}
													</p>
												</td>
												<td className='pro-desc'>
													<p>
														Samsome Note Book Pro 5 is an the best Laptop on this budgeted. You can satisfied after
														usign this laptop.{' '}
													</p>
												</td>
											</tr>
											<tr>
												<td className='first-column'>Price</td>
												<td className='pro-price'>$295</td>
												<td className='pro-price'>$275</td>
												<td className='pro-price'>$395</td>
											</tr>
											<tr>
												<td className='first-column'>Color</td>
												<td className='pro-color'>Black</td>
												<td className='pro-color'>Red</td>
												<td className='pro-color'>Blue</td>
											</tr>
											<tr>
												<td className='first-column'>Stock</td>
												<td className='pro-stock'>In Stock</td>
												<td className='pro-stock'>Stock Out</td>
												<td className='pro-stock'>In Stock</td>
											</tr>
											<tr>
												<td className='first-column'>Add to cart</td>
												<td>
													<Link to={CartPage}>
														<a className='check-btn'>Add to Cart</a>
													</Link>
												</td>
												<td>
													<Link to={CartPage}>
														<a className='check-btn disabled'>Add to Cart</a>
													</Link>
												</td>
												<td>
													<Link to={CartPage}>
														<a className='check-btn'>Add to Cart</a>
													</Link>
												</td>
											</tr>
											<tr>
												<td className='first-column'>Rating</td>
												<td className='pro-ratting'>
													<i className='fa fa-star'></i>
													<i className='fa fa-star'></i>
													<i className='fa fa-star'></i>
													<i className='fa fa-star'></i>
													<i className='fa fa-star'></i>
												</td>
												<td className='pro-ratting'>
													<i className='fa fa-star'></i>
													<i className='fa fa-star'></i>
													<i className='fa fa-star'></i>
													<i className='fa fa-star'></i>
													<i className='fa fa-star'></i>
												</td>
												<td className='pro-ratting'>
													<i className='fa fa-star'></i>
													<i className='fa fa-star'></i>
													<i className='fa fa-star'></i>
													<i className='fa fa-star'></i>
													<i className='fa fa-star'></i>
												</td>
											</tr>
											<tr>
												<td className='first-column'>Remove</td>
												<td className='pro-remove'>
													<button>
														<i className='ion-ios-trash'></i>
													</button>
												</td>
												<td className='pro-remove'>
													<button>
														<i className='ion-ios-trash'></i>
													</button>
												</td>
												<td className='pro-remove'>
													<button>
														<i className='ion-ios-trash'></i>
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<FooterMain />
			<ButtonScrollTop />
		</>
	);
}
