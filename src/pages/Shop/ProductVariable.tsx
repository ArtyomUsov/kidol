import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/FooterMain';
import one from '../../img/homeOne/1.webp';
import { Link } from 'react-router-dom';
import { HomeOne } from '../../date/Items';
import ButtonScrollTop from '../../Components/ButtonScrollTop';
import { Slider } from '../../Components/Slider';

export function ProductVariable() {
	const [count, setCount] = useState(0);
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
									Product
								</h2>
								<div className='bread-crumbs' style={{}}>
									<Link to={HomeOne}>Home</Link>
									<span className='breadcrumb-sep' style={{}}>
										{' '}
										//{' '}
									</span>
									<span className='active' style={{}}>
										{' '}
										Product
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='product-single-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-0'>
							<div className='single-product-slider'>
								<div className='single-product-thumb'>
									<div className='swiper-container single-product-thumb-slider swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-free-mode'>
										<div
											className='swiper-wrapper'
											// style="transition-duration: 0ms;"
										>
											<div
												className='swiper-slide zoom zoom-hover'
												// style="width: 570px; opacity: 0; transform: translate3d(0px, 0px, 0px); position: relative; overflow: hidden; transition-duration: 0ms;"
											>
												<div className='thumb-item'>
													<a className='lightbox-image' data-fancybox='gallery' href='assets/img/shop/details/1.jpg'>
														<img src='assets/img/shop/details/1.jpg' alt='Image-HasTech' />
													</a>
												</div>
												<img
													role='presentation'
													alt=''
													src='https://template.hasthemes.com/kidol/kidol/assets/img/shop/details/1.jpg'
													className='zoomImg'
													// style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 570px; height: 648px; border: none; max-width: none; max-height: none;"
												/>
											</div>
											<div
												className='swiper-slide zoom zoom-hover swiper-slide-prev'
												// style="width: 570px; opacity: 0; transform: translate3d(-570px, 0px, 0px); position: relative; overflow: hidden; transition-duration: 0ms;"
											>
												<div className='thumb-item'>
													<a className='lightbox-image' data-fancybox='gallery' href='assets/img/shop/details/2.jpg'>
														<img src='assets/img/shop/details/2.jpg' alt='Image-HasTech' />
													</a>
												</div>
												<img
													role='presentation'
													alt=''
													src='https://template.hasthemes.com/kidol/kidol/assets/img/shop/details/2.jpg'
													className='zoomImg'
													// style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 570px; height: 648px; border: none; max-width: none; max-height: none;"
												/>
											</div>
											<div
												className='swiper-slide zoom zoom-hover swiper-slide-active'
												// style="width: 570px; opacity: 1; transform: translate3d(-1140px, 0px, 0px); position: relative; overflow: hidden; transition-duration: 0ms;"
											>
												<div className='thumb-item'>
													<a className='lightbox-image' data-fancybox='gallery' href='assets/img/shop/details/3.jpg'>
														<img src='assets/img/shop/details/3.jpg' alt='Image-HasTech' />
													</a>
												</div>
												<img
													role='presentation'
													alt=''
													src='https://template.hasthemes.com/kidol/kidol/assets/img/shop/details/3.jpg'
													className='zoomImg'
													// style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 570px; height: 648px; border: none; max-width: none; max-height: none;"
												/>
											</div>
										</div>
										<span className='swiper-notification' aria-live='assertive' aria-atomic='true'></span>
									</div>
								</div>
								<div className='single-product-nav'>
									<div className='swiper-container single-product-nav-slider swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-thumbs'>
										<div
											className='swiper-wrapper'
											// style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
										>
											<div
												className='swiper-slide swiper-slide-active'
												// style="width: 126.667px; margin-right: 11px;"
											>
												<div className='nav-item'>
													<img src='assets/img/shop/details/nav1.jpg' alt='Image-HasTech' />
												</div>
											</div>
											<div
												className='swiper-slide swiper-slide-next'
												// style="width: 126.667px; margin-right: 11px;"
											>
												<div className='nav-item'>
													<img src='assets/img/shop/details/nav2.jpg' alt='Image-HasTech' />
												</div>
											</div>
											<div
												className='swiper-slide swiper-slide-thumb-active'
												// style="width: 126.667px; margin-right: 11px;"
											>
												<div className='nav-item'>
													<img src='assets/img/shop/details/nav3.jpg' alt='Image-HasTech' />
												</div>
											</div>
										</div>
										<span className='swiper-notification' aria-live='assertive' aria-atomic='true'></span>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='single-product-info'>
								<h4 className='title'>Product Variable</h4>
								<div className='prices'>
									<span className='price'>$80.59</span>
									<span> – </span>
									<span className='price-old'>$120.59</span>
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
								<table className='table'>
									<tbody>
										<tr>
											<th scope='row'>Flaver:</th>
											<td>
												Orange Flaver <i className='fa fa-angle-down'></i>
											</td>
										</tr>
										<tr>
											<th scope='row'>Size:</th>
											<td>
												Medium Size With Tube <i className='fa fa-angle-down'></i>
											</td>
										</tr>
										<tr>
											<th scope='row'>Color:</th>
											<td>
												Red &amp; Black <i className='fa fa-angle-down'></i>
											</td>
										</tr>
									</tbody>
								</table>
								<p className='product-desc'>
									Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad minim veniam, quisll exercitation ullamco laboris nisi ut aliquip ex
									ea commodo consequat. Duisol aute irure dolor in reprehenderit.
								</p>
								<div className='quick-product-action'>
									<div className='action-top'>
										<div className='pro-qty'>
											<input type='text' id='quantity' title='Quantity' value={count} />
											<a className='inc qty-btn' onClick={() => setCount(count + 1)}>
												<i className='fa fa-plus'></i>
											</a>
											<a className='dec qty-btn' onClick={() => count > 0 && setCount(count - 1)}>
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
									<h3 className='title' style={{ marginRight: '5px' }}>
										SKU:
									</h3>
									<div className='widget-tags'>
										<span>Ch-256xl</span>
									</div>
								</div>
								<div className='widget'>
									<h3 className='title' style={{ marginRight: '5px' }}>
										Categories:
									</h3>
									<div className='widget-tags'>
										<a href='blog.html'>Toys.</a>
										<a href='blog.html'>Dresss</a>
									</div>
								</div>
								<div className='widget'>
									<h3 className='title' style={{ marginRight: '5px' }}>
										Tag:
									</h3>
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
						<div className='row'>
							<div className='col-lg-12'>
								<div className='product-description-review'>
									<ul className='nav nav-tabs product-description-tab-menu' id='myTab' role='tablist'>
										<li className='nav-item' role='presentation'>
											<button
												className='nav-link'
												id='product-aditional-tab'
												data-bs-toggle='tab'
												data-bs-target='#commentProduct'
												type='button'
												role='tab'
												aria-selected='false'
											>
												Information
											</button>
										</li>
										<li className='nav-item' role='presentation'>
											<button
												className='nav-link'
												id='product-desc-tab'
												data-bs-toggle='tab'
												data-bs-target='#productDesc'
												type='button'
												role='tab'
												aria-controls='productDesc'
												aria-selected='false'
											>
												Description
											</button>
										</li>
										<li className='nav-item' role='presentation'>
											<button
												className='nav-link active'
												id='product-review-tab'
												data-bs-toggle='tab'
												data-bs-target='#productReview'
												type='button'
												role='tab'
												aria-controls='productReview'
												aria-selected='true'
											>
												Reviews (03)
											</button>
										</li>
									</ul>
									<div className='tab-content product-description-tab-content' id='myTabContent'>
										<div
											className='tab-pane fade'
											id='commentProduct'
											role='tabpanel'
											aria-labelledby='product-aditional-tab'
										>
											<div className='product-desc'>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut
													labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco
													laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
													voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
													non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed utlo
													perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
													totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
													vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
													aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
												</p>
											</div>
										</div>
										<div className='tab-pane fade' id='productDesc' role='tabpanel' aria-labelledby='product-desc-tab'>
											<div className='product-desc'>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut
													labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco
													laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
													voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
													non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed utlo
													perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
													totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
													vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
													aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
												</p>
											</div>
										</div>
										<div
											className='tab-pane fade active show'
											id='productReview'
											role='tabpanel'
											aria-labelledby='product-review-tab'
										>
											<div className='product-review'>
												<div className='review-header'>
													<h4 className='title'>Customer Reviews</h4>
													<div className='review-info'>
														<ul className='review-rating'>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star-o'></i>
															</li>
														</ul>
														<span className='review-caption'>Based on 1 review</span>
														<span className='review-write-btn'>Write a review</span>
													</div>
												</div>
												<div className='product-review-form'>
													<h4 className='title'>Write a review</h4>
													<form action='#' method='post'>
														<div className='review-form-content'>
															<div className='row'>
																<div className='col-md-12'>
																	<div className='form-group'>
																		<label htmlFor='reviewFormName'>Name</label>
																		<input
																			className='form-control'
																			id='reviewFormName'
																			type='text'
																			placeholder='Enter your name'
																			// required=""
																		/>
																	</div>
																</div>
																<div className='col-md-12'>
																	<div className='form-group'>
																		<label htmlFor='reviewFormEmail'>Email</label>
																		<input
																			className='form-control'
																			id='reviewFormEmail'
																			type='email'
																			placeholder='john.smith@example.com'
																			// required=""
																		/>
																	</div>
																</div>
																<div className='col-md-12'>
																	<div className='rating'>
																		<span className='rating-title'>Rating</span>
																		<span>
																			<a className='fa fa-star-o' href='#/'></a>
																			<a className='fa fa-star-o' href='#/'></a>
																			<a className='fa fa-star-o' href='#/'></a>
																			<a className='fa fa-star-o' href='#/'></a>
																			<a className='fa fa-star-o' href='#/'></a>
																		</span>
																	</div>
																</div>
																<div className='col-md-12'>
																	<div className='form-group'>
																		<label htmlFor='reviewReviewTitle'>Review Title</label>
																		<input
																			className='form-control'
																			id='reviewReviewTitle'
																			type='text'
																			placeholder='Give your review a title'
																			// required=""
																		/>
																	</div>
																</div>
																<div className='col-md-12'>
																	<div className='form-group'>
																		<label htmlFor='reviewFormTextarea'>
																			Body of Review <span>(1500)</span>
																		</label>
																		<textarea
																			className='form-control textarea'
																			id='reviewFormTextarea'
																			name='comment'
																			// rows="7"
																			placeholder='Write your comments here'
																			// required=""
																		></textarea>
																	</div>
																</div>
															</div>
															<div className='row'>
																<div className='col-md-12'>
																	<div className='form-group pull-right'>
																		<button className='btn btn-theme' type='submit'>
																			Submit Review
																		</button>
																	</div>
																</div>
															</div>
														</div>
													</form>
												</div>
												<div className='review-content'>
													<div className='review-item'>
														<ul className='review-rating'>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star-o'></i>
															</li>
														</ul>
														<h4 className='title'>Cobus Bester</h4>
														<h5 className='review-date'>
															<span>Cobus Bester</span> on <span>Mar 03, 2021</span>
														</h5>
														<p>Can’t wait to start mixin’ with this one! Irba-irr-Up-up-up-up-date your theme!</p>
														<a className='review-report' href='#/'>
															Report as Inappropriate
														</a>
													</div>
												</div>
												<div className='review-content'>
													<div className='review-item'>
														<ul className='review-rating'>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star-o'></i>
															</li>
														</ul>
														<h4 className='title'>Cobus Bester</h4>
														<h5 className='review-date'>
															<span>Cobus Bester</span> on <span>Mar 05, 2021</span>
														</h5>
														<p>Can’t wait to start mixin’ with this one! Irba-irr-Up-up-up-up-date your theme!</p>
														<a className='review-report' href='#/'>
															Report as Inappropriate
														</a>
													</div>
												</div>
												<div className='review-content'>
													<div className='review-item'>
														<ul className='review-rating'>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star'></i>
															</li>
															<li>
																<i className='fa fa-star-o'></i>
															</li>
														</ul>
														<h4 className='title'>Cobus Bester</h4>
														<h5 className='review-date'>
															<span>Cobus Bester</span> on <span>Mar 07, 2021</span>
														</h5>
														<p>Can’t wait to start mixin’ with this one! Irba-irr-Up-up-up-up-date your theme!</p>
														<a className='review-report' href='#/'>
															Report as Inappropriate
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Slider />
			<FooterMain />
			<ButtonScrollTop />
		</>
	);
}
