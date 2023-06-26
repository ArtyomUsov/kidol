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
import blog1 from '../../img/blog/1.webp';
import blog2 from '../../img/blog/2.webp';
import blog3 from '../../img/blog/3.webp';
import mini1 from '../../img/blog/mini1.webp';
import mini2 from '../../img/blog/mini2.webp';
import mini3 from '../../img/blog/mini3.webp';
import mini4 from '../../img/blog/mini4.webp';

export const BlogRightSidebar = () => {
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
							<div className='blog-content-area'>
								<div className='row'>
									<div className='col-sm-6'>
										{/* <!--== Start Blog Post Item ==--> */}
										<div className='post-item'>
											<div className='thumb'>
												<a href='blog-details.html'>
													<img src={blog1} alt='Image' />
												</a>
											</div>
											<div className='content'>
												<div className='meta'>
													By,{' '}
													<a className='author' href='#'>
														June Cha{' '}
													</a>
													<span className='dots'></span>
													<span className='post-date'>25 May, 2121</span>
												</div>
												<h4 className='title'>
													<a href='blog-details.html'>Baby Planet's toys makes learning so easy</a>
												</h4>
												<Link to={''}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6'>
										{/* <!--== Start Blog Post Item ==--> */}
										<div className='post-item mt-xs-30'>
											<div className='thumb'>
												<a href='blog-details.html'>
													<img src={blog2} alt='Image' />
												</a>
											</div>
											<div className='content'>
												<div className='meta'>
													By,{' '}
													<a className='author' href='#'>
														June Cha{' '}
													</a>
													<span className='dots'></span>
													<span className='post-date'>July 24, 2022</span>
												</div>
												<h4 className='title'>
													<a href='blog-details.html'>Mother revolves around her children</a>
												</h4>
												<Link to={''}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6'>
										{/* <!--== Start Blog Post Item ==--> */}
										<div className='post-item mt-md-30'>
											<div className='thumb'>
												<a href='blog-details.html'>
													<img src={blog3} alt='Image' />
												</a>
											</div>
											<div className='content'>
												<div className='meta'>
													By,{' '}
													<a className='author' href='#'>
														June Cha{' '}
													</a>
													<span className='dots'></span>
													<span className='post-date'>January 28, 2022</span>
												</div>
												<h4 className='title'>
													<a href='blog-details.html'>Learn while you grow toys Baby Planet</a>
												</h4>
												<Link to={''}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6'>
										{/* <!--== Start Blog Post Item ==--> */}
										<div className='post-item'>
											<div className='thumb'>
												<a href='blog-details.html'>
													<img src={blog1} alt='Image' />
												</a>
											</div>
											<div className='content'>
												<div className='meta'>
													By,{' '}
													<a className='author' href='#'>
														June Cha{' '}
													</a>
													<span className='dots'></span>
													<span className='post-date'>25 May, 2121</span>
												</div>
												<h4 className='title'>
													<a href='blog-details.html'>Baby Planet's toys makes learning so easy</a>
												</h4>
												<Link to={''}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6'>
										{/* <!--== Start Blog Post Item ==--> */}
										<div className='post-item mt-xs-30'>
											<div className='thumb'>
												<a href='blog-details.html'>
													<img src={blog2} alt='Image' />
												</a>
											</div>
											<div className='content'>
												<div className='meta'>
													By,{' '}
													<a className='author' href='#'>
														June Cha{' '}
													</a>
													<span className='dots'></span>
													<span className='post-date'>July 24, 2022</span>
												</div>
												<h4 className='title'>
													<a href='blog-details.html'>Mother revolves around her children</a>
												</h4>
												<Link to={''}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6'>
										{/* <!--== Start Blog Post Item ==--> */}
										<div className='post-item mt-md-30'>
											<div className='thumb'>
												<a href='blog-details.html'>
													<img src={blog3} alt='Image' />
												</a>
											</div>
											<div className='content'>
												<div className='meta'>
													By,{' '}
													<a className='author' href='#'>
														June Cha{' '}
													</a>
													<span className='dots'></span>
													<span className='post-date'>January 28, 2022</span>
												</div>
												<h4 className='title'>
													<a href='blog-details.html'>Learn while you grow toys Baby Planet</a>
												</h4>
												<Link to={''}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6'>
										{/* <!--== Start Blog Post Item ==--> */}
										<div className='post-item'>
											<div className='thumb'>
												<a href='blog-details.html'>
													<img src={blog1} alt='Image' />
												</a>
											</div>
											<div className='content'>
												<div className='meta'>
													By,{' '}
													<a className='author' href='#'>
														June Cha{' '}
													</a>
													<span className='dots'></span>
													<span className='post-date'>25 May, 2121</span>
												</div>
												<h4 className='title'>
													<a href='blog-details.html'>Baby Planet's toys makes learning so easy</a>
												</h4>
												<Link to={''}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6'>
										{/* <!--== Start Blog Post Item ==--> */}
										<div className='post-item mt-xs-30'>
											<div className='thumb'>
												<a href='blog-details.html'>
													<img src={blog2} alt='Image' />
												</a>
											</div>
											<div className='content'>
												<div className='meta'>
													By,{' '}
													<a className='author' href='#'>
														June Cha{' '}
													</a>
													<span className='dots'></span>
													<span className='post-date'>July 24, 2022</span>
												</div>
												<h4 className='title'>
													<a href='blog-details.html'>Mother revolves around her children</a>
												</h4>
												<Link to={''}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
								</div>
								<div className='row'>
									<div className='col-lg-12'>
										<div className='pagination-area'>
											<nav>
												<ul className='page-numbers'>
													<li>
														<a className='page-number active' href='#'>
															1
														</a>
													</li>
													<li>
														<a className='page-number' href='#'>
															2
														</a>
													</li>
													<li>
														<a className='page-number' href='#'>
															3
														</a>
													</li>
													<li>
														<a className='page-number next' href='#'>
															<i className='fa fa-angle-right'></i>
														</a>
													</li>
												</ul>
											</nav>
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
