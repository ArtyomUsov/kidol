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
import { SingleSlider } from '../../Components/SingleSlider';
import nav1 from '../../img/shop/nav1.webp';
import nav2 from '../../img/shop/nav2.webp';
import nav3 from '../../img/shop/nav3.webp';

export function ProductGrouped() {
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
						<SingleSlider />
						<div className='col-lg-6'>
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
								<div className='group-product-list'>
									<span className='info-text'>
										Buy this bundle and get off to <span className='text-primary'>25%</span> of all prices.
									</span>
									<table>
										<tbody>
											<tr>
												<td className='choose'>
													<input type='checkbox' checked={true} disabled={true} />
												</td>
												<td className='quantity'></td>
												<td className='thumb'>
													<img src={nav1} />
												</td>
												<td className='title'>
													This item: <span>Aluminum Equestrian</span>
												</td>
												<td className='price'>
													<span className='pro-price'>
														<span>£100.00</span>
													</span>
												</td>
											</tr>
											<tr>
												<td className='choose'>
													<input type='checkbox' />
												</td>
												<td className='quantity'>1</td>
												<td className='thumb'>
													<img src={nav2} />
												</td>
												<td className='title'>
													<a href='#/'>Porcelain Small Bowls</a>
												</td>
												<td className='price'>
													<span className='pro-price'>
														<span className='old'>£120.00</span>
														<span className='new'>£96.00</span>
													</span>
												</td>
											</tr>
											<tr>
												<td className='choose'>
													<input type='checkbox' />
												</td>
												<td className='quantity'>1</td>
												<td className='thumb'>
													<img src={nav3} />
												</td>
												<td className='title'>
													<a href='#/'>Walnut Cutting Board</a>
												</td>
												<td className='price'>
													<span className='pro-price'>
														<span className='old'>£100.00</span>
														<span className='new'>£95.00</span>
													</span>
												</td>
											</tr>
										</tbody>
									</table>
									<div className='info-text'>Products are available in limited quantities.</div>
								</div>
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
