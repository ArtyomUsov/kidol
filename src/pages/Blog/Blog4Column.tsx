import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/FooterMain';
import one from '../../img/homeOne/1.webp';
import { Link } from 'react-router-dom';
import { HomeOne, BlogLeftSidebar } from '../../date/Items';
import ButtonScrollTop from '../../Components/ButtonScrollTop';
import blog1 from '../../img/blog/1.webp';
import blog2 from '../../img/blog/2.webp';
import blog3 from '../../img/blog/3.webp';

export function Blog4Column() {
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
			<section className='blog-area blog-grid-area blog-grid-4column'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='blog-content-area'>
								<div className='row'>
									<div className='col-sm-6 col-md-4 col-lg-3'>
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
												<Link to={BlogLeftSidebar}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6 col-md-4 col-lg-3'>
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
												<Link to={BlogLeftSidebar}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6 col-md-4 col-lg-3'>
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
												<Link to={BlogLeftSidebar}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6 col-md-4 col-lg-3'>
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
												<Link to={BlogLeftSidebar}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6 col-md-4 col-lg-3'>
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
												<Link to={BlogLeftSidebar}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6 col-md-4 col-lg-3'>
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
												<Link to={BlogLeftSidebar}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6 col-md-4 col-lg-3'>
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
												<Link to={BlogLeftSidebar}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6 col-md-4 col-lg-3'>
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
												<Link to={BlogLeftSidebar}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6 col-md-4 col-lg-3'>
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
												<Link to={BlogLeftSidebar}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6 col-md-4 col-lg-3'>
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
												<Link to={BlogLeftSidebar}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6 col-md-4 col-lg-3'>
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
												<Link to={BlogLeftSidebar}>
													<a className='btn-theme'>Read More</a>
												</Link>
											</div>
										</div>
										{/* <!--== End Blog Post Item ==--> */}
									</div>
									<div className='col-sm-6 col-md-4 col-lg-3'>
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
												<Link to={BlogLeftSidebar}>
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
					</div>
				</div>
			</section>
			<FooterMain />
			<ButtonScrollTop />
		</>
	);
}
