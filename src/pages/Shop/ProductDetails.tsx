import React, { useState } from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/Footer';
import one from '../../img/homeOne/1.webp';
import { Link } from 'react-router-dom';
import { HomeOne } from '../../date/Path';
import ButtonScrollTop from '../../Components/ButtonScrollTop';
import { Slider } from '../../Components/Slider';
import { SingleSlider } from '../../Components/SingleSlider';

export function ProductDetails() {
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
									<h3 className='title'>Share: </h3>
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
												className='nav-link active'
												id='product-desc-tab'
												data-bs-toggle='tab'
												data-bs-target='#productDesc'
												type='button'
												role='tab'
												aria-controls='productDesc'
												aria-selected='true'
											>
												Description
											</button>
										</li>
										<li className='nav-item' role='presentation'>
											<button
												className='nav-link'
												id='product-review-tab'
												data-bs-toggle='tab'
												data-bs-target='#productReview'
												type='button'
												role='tab'
												aria-controls='productReview'
												aria-selected='false'
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
										<div
											className='tab-pane fade active show'
											id='productDesc'
											role='tabpanel'
											aria-labelledby='product-desc-tab'
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
										<div
											className='tab-pane fade'
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
			{/* zoom slider */}
			{/* <div
				className='fancybox-container fancybox-is-open fancybox-is-zoomable fancybox-can-zoomIn'
				role='dialog'
				// tabindex="-1"
				id='fancybox-container-1'
				// style="transition-duration: 366ms;"
			>
				<div className='fancybox-bg'></div>
				<div className='fancybox-inner'>
					<div className='fancybox-infobar'>
						<span data-fancybox-index=''>3</span>&nbsp;/&nbsp;<span data-fancybox-count=''>3</span>
					</div>
					<div className='fancybox-toolbar'>
						<button data-fancybox-zoom='' className='fancybox-button fancybox-button--zoom' title='Zoom'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z'></path>
							</svg>
						</button>
						<button data-fancybox-play='' className='fancybox-button fancybox-button--play' title='Start slideshow'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M6.5 5.4v13.2l11-6.6z'></path>
							</svg>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z'></path>
							</svg>
						</button>
						<button data-fancybox-thumbs='' className='fancybox-button fancybox-button--thumbs' title='Thumbnails'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z'></path>
							</svg>
						</button>
						<button data-fancybox-close='' className='fancybox-button fancybox-button--close' title='Close'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z'></path>
							</svg>
						</button>
					</div>
					<div className='fancybox-navigation'>
						<button data-fancybox-prev='' className='fancybox-button fancybox-button--arrow_left' title='Previous'>
							<div>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
									<path d='M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z'></path>
								</svg>
							</div>
						</button>
						<button
							data-fancybox-next=''
							className='fancybox-button fancybox-button--arrow_right'
							title='Next'
							// disabled=""
						>
							<div>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
									<path d='M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z'></path>
								</svg>
							</div>
						</button>
					</div>
					<div className='fancybox-stage'>
						<div
							className='fancybox-slide fancybox-slide--image'
							// style=""
						>
							<div
								className='fancybox-content'
								// style="transform: translate(488px, 44px); width: 558.037px; height: 634.4px;"
							>
								<img className='fancybox-image' src={fourteen} />
							</div>
						</div>
						<div
							className='fancybox-slide fancybox-slide--image fancybox-slide--current fancybox-slide--complete'
							// style=""
						>
							<div
								className='fancybox-content'
								// style="transform: translate(488px, 44px); width: 558.037px; height: 634.4px;"
							>
								<img className='fancybox-image' src={fifteen} />
							</div>
						</div>
					</div>
					<div className='fancybox-caption fancybox-caption--separate'>
						<div className='fancybox-caption__body'></div>
					</div>
					<div className='fancybox-progress'></div>
				</div>
			</div> */}
			<Slider />
			<FooterMain />
			<ButtonScrollTop />
		</>
	);
}
