import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/FooterMain';
import one from '../../img/homeOne/1.webp';
import { Link } from 'react-router-dom';
import { HomeOne } from '../../date/Items';
import ButtonScrollTop from '../../Components/ButtonScrollTop';
import '../../Components/Sidebar.css';
import mini1 from '../../img/blog/mini1.webp';
import mini2 from '../../img/blog/mini2.webp';
import mini3 from '../../img/blog/mini3.webp';
import mini4 from '../../img/blog/mini4.webp';
import photo8 from '../../img/blog/max8.webp';
import photo4 from '../../img/blog/4.webp';
import photo6 from '../../img/blog/6.webp';
import photo7 from '../../img/blog/7.webp';
import photo1 from '../../img/blog/photo1.webp';
import photo2 from '../../img/blog/photo2.webp';
import photo3 from '../../img/blog/photo3.webp';

export const BlogDetailsRightSidebar = () => {
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
									Blog
								</h2>
								<div className='bread-crumbs' style={{}}>
									<Link to={HomeOne}>Home</Link>
									<span className='breadcrumb-sep' style={{}}>
										{' '}
										//{' '}
									</span>
									<span className='active' style={{}}>
										{' '}
										Blog
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='blog-area blog-grid-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 order-1 order-lg-0'>
							<div className='post-details-content'>
								<div className='post-details-body'>
									<div className='thumb'>
										<img className='w-100' src={photo8} alt='Image' />
									</div>
									<div className='content'>
										<div className='meta'>
											By,{' '}
											<a className='author' href='blog.html'>
												June Cha{' '}
											</a>
											<span className='dots'></span>
											<span className='post-date'>25 May, 2021</span>
										</div>
										<h4 className='title'>Lorem ipsum dolor sit amet, consecte adipisicing elit sed doeiusm</h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut
											labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolol
											laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu
											velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide
											sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
											natus error sit voluptatem accusantium
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut
											labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco labori nisi
											ut aliquip ex ea commodo conseq Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur.{' '}
										</p>
										<div className='blockquote-area'>
											<blockquote className='blockquote-style'>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt</p>
												<div className='icon'>
													<img src={photo4} alt='Icon' />
												</div>
											</blockquote>
										</div>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut
											labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolol
											laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu
											velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide
											sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
											natus error sit voluptatem accusantium
										</p>
										<div className='row'>
											<div className='col-md-6'>
												<div className='thumb-inner'>
													<img className='w-100' src={photo6} alt='Image' />
												</div>
											</div>
											<div className='col-md-6'>
												<div className='thumb-inner mb-sm-30'>
													<img className='w-100' src={photo7} alt='Image' />
												</div>
											</div>
										</div>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut
											labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco labori nisi
											ut aliquip ex ea commodo conseq Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur.
										</p>
									</div>
								</div>
							</div>
							<div className='comment-area'>
								<div className='row'>
									<div className='col-lg-12'>
										<div className='comment-view-area'>
											<h2 className='title h2'>3 Comments</h2>
											<div className='comment-content'>
												<div className='single-comment'>
													<div className='author-info'>
														<div className='thumb'>
															<img src={photo1} alt='Image' />
														</div>
														<div className='author-details border-bottom'>
															<ul>
																<li>
																	Aidyn Cody <span> - 25 May, 2121</span>
																</li>
															</ul>
															<p>
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
																incididun ut labore et dolore magna aliqua.
															</p>
															<a className='btn-theme' href='#/'>
																Reply
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className='comment-content comment-content-style2'>
												<div className='single-comment'>
													<div className='author-info'>
														<div className='thumb'>
															<img src={photo2} alt='Image' />
														</div>
														<div className='author-details'>
															<ul>
																<li>
																	Jivan Cody <span> - 25 May, 2121</span>
																</li>
															</ul>
															<p>
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
																incididun ut labore et dolore magna aliqua.
															</p>
															<a className='btn-theme' href='#/'>
																Reply
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className='comment-content'>
												<div className='single-comment'>
													<div className='author-info'>
														<div className='thumb pt-38'>
															<img src={photo3} alt='Image' />
														</div>
														<div className='author-details border-top pt-37'>
															<ul>
																<li>
																	Rose Cody <span> - 25 May, 2121</span>
																</li>
															</ul>
															<p>
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
																incididun ut labore et dolore magna aliqua.
															</p>
															<a className='btn-theme' href='#/'>
																Reply
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='comment-form-wrap mb-lg-0'>
											<form
												className='comment-form-wrapper'
												id='comment-form'
												action='https://whizthemes.com/mail-php/raju/arden/mail.php'
												method='post'
											>
												<div className='row'>
													<div className='col-lg-12'>
														<div className='section-title m-0'>
															<h2 className='title'>Leave a Comment</h2>
														</div>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-12'>
														<div className='row'>
															<div className='col-md-6'>
																<div className='form-group'>
																	<input className='form-control' type='text' placeholder='Name *' />
																</div>
															</div>
															<div className='col-md-6'>
																<div className='form-group'>
																	<input className='form-control' type='email' placeholder='Email *' />
																</div>
															</div>
															<div className='col-md-12'>
																<div className='form-group'>
																	<input className='form-control' type='text' placeholder='Subject (Optinal)' />
																</div>
															</div>
															<div className='col-md-12'>
																<div className='form-group'>
																	<textarea className='form-control' placeholder='Message'></textarea>
																</div>
															</div>
															<div className='col-md-12'>
																<div className='form-group'>
																	<button className='btn btn-theme' type='submit'>
																		Send a Comment
																	</button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4 order-0 order-lg-1'>
							<div className='sidebar-area blog-sidebar-area'>
								<div className='widget-item'>
									<div className='widget-body'>
										<div className='widget-search-box'>
											<form action='#' method='post'>
												<div className='form-input-item'>
													<label
														// for="search2"
														className='sr-only'
													>
														Search
													</label>
													<input type='text' id='search2' placeholder='Search' />
													<button type='submit' className='btn-src'>
														<i className='fa fa-search'></i>
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div className='widget-item widget-item2'>
									<div className='widget-title blog-post-title'>
										<h3 className='title h3'>Archives</h3>
									</div>
									<div className='widget-body'>
										<div className='widget-archives'>
											<ul>
												<li>
													<a href='blog.html'>January 2018</a>
												</li>
												<li>
													<a href='blog.html'>February 2019</a>
												</li>
												<li>
													<a href='blog.html'>March 2020</a>
												</li>
												<li>
													<a href='blog.html'>April 2021</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='widget-item'>
									<div className='widget-title blog-post-title'>
										<h3 className='title h3'>Recent Post</h3>
									</div>
									<div className='widget-body'>
										<div className='widget-blog-post'>
											<div className='thumb'>
												<a href='blog-details.html'>
													<img src={mini1} alt='Image' />
												</a>
											</div>
											<div className='content'>
												<span>25 May, 2121</span>
												<h4>
													<a href='blog-details.html'>Baby Planet's toys to makes learning easy</a>
												</h4>
											</div>
										</div>
										<div className='widget-blog-post'>
											<div className='thumb'>
												<a href='blog-details.html'>
													<img src={mini2} alt='Image' />
												</a>
											</div>
											<div className='content'>
												<span>25 May, 2121</span>
												<h4>
													<a href='blog-details.html'>Lorem ipsum dolor sit conse tetur adipis.</a>
												</h4>
											</div>
										</div>
										<div className='widget-blog-post'>
											<div className='thumb'>
												<a href='blog-details.html'>
													<img src={mini3} alt='Image' />
												</a>
											</div>
											<div className='content'>
												<span>25 May, 2121</span>
												<h4>
													<a href='blog-details.html'>Mother revolves around her children</a>
												</h4>
											</div>
										</div>
										<div className='widget-blog-post'>
											<div className='thumb'>
												<a href='blog-details.html'>
													<img src={mini4} alt='Image' />
												</a>
											</div>
											<div className='content'>
												<span>25 May, 2121</span>
												<h4>
													<a href='blog-details.html'>Learn while you grow toys Baby Planet</a>
												</h4>
											</div>
										</div>
									</div>
								</div>
								<div className='widget-item widget-item2'>
									<div className='widget-title blog-post-title'>
										<h3 className='title h3'>Categories</h3>
									</div>
									<div className='widget-body'>
										<div className='widget-categories'>
											<ul>
												<li>
													<a href='blog.html'>Baby Toys</a>
												</li>
												<li>
													<a href='blog.html'>Baby Dress</a>
												</li>
												<li>
													<a href='blog.html'>Baby Dayper</a>
												</li>
												<li>
													<a href='blog.html'>Baby Book</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='widget-item'>
									<div className='widget-title blog-post-title'>
										<h3 className='title h3'>Subscribe</h3>
									</div>
									<div className='widget-body'>
										<div className='widget-newsletter'>
											<div className='newsletter-form'>
												<form action='#'>
													<input className='form-control' type='email' placeholder='Enter Your Email' />
													<button className='btn btn-theme' type='submit'>
														Subscribe Now
													</button>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className='widget-item widget-item2 mb-md-0'>
									<div className='widget-title blog-post-title'>
										<h3 className='title h3'>Tags</h3>
									</div>
									<div className='widget-body'>
										<div className='widget-tags'>
											<ul>
												<li>
													<a href='blog.html'>Baby</a>
												</li>
												<li>
													<a className='babyfashion' href='blog.html'>
														BabyFashion
													</a>
												</li>
												<li>
													<a className='toy' href='blog.html'>
														Toy
													</a>
												</li>
												<li>
													<a href='blog.html'>Baby Toy</a>
												</li>
											</ul>
										</div>
									</div>
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
};
