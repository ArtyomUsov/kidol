import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/FooterMain';
import one from '../../img/homeOne/1.webp';
import { Link } from 'react-router-dom';
import { HomeOne } from '../../date/Items';
import ButtonScrollTop from '../../Components/ButtonScrollTop';
import { Products } from '../../date/Products';
import Product from '../../Components/Product';
import { Sidebar } from '../../Components/Sidebar';

export function ShopRightSidebar() {
	const [activeTab, setActiveTab] = useState(1);

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
			<section className='product-area product-grid-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 order-0 order-lg-1'>
							<Sidebar />
						</div>
						<div className='col-lg-9 order-1 order-lg-0'>
							<div className='shop-toolbar-wrap'>
								<div className='product-showing-status'>
									<p className='count-result'>
										<span>12 </span> Product Found of <span> 30</span>
									</p>
								</div>
								<div className='product-view-mode'>
									<nav>
										<div className='nav nav-tabs active' id='nav-tab' role='tablist'>
											<button
												className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
												onClick={() => setActiveTab(1)}
												type='button'
											>
												<i className='fa fa-th'></i>
											</button>

											<button
												className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
												onClick={() => setActiveTab(2)}
												type='button'
											>
												<i className='fa fa-list'></i>
											</button>

											<button
												className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
												onClick={() => setActiveTab(3)}
												type='button'
											>
												<i className='fa fa-th-large'></i>
											</button>
										</div>
									</nav>
								</div>
								<div className='product-sorting-menu product-sorting'>
									<span className='current'>
										Sort By :{' '}
										<span>
											{' '}
											Default <i className='fa fa-angle-down'></i>
										</span>
									</span>
									<ul>
										<li className='active'>
											<a href='' className='active'>
												Sort by Default
											</a>
										</li>
										<li>
											<a href=''>Sort by Popularity</a>
										</li>
										<li>
											<a href=''>Sort by Rated</a>
										</li>
										<li>
											<a href=''>Sort by Latest</a>
										</li>
										<li>
											<a href=''>
												Sort by Price: <i className='lastudioicon-arrow-up'></i>
											</a>
										</li>
										<li>
											<a href=''>
												Sort by Price: <i className='lastudioicon-arrow-down'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='tab-content' id='nav-tabContent'>
								{activeTab === 1 && (
									<div className='tab-pane fade show active'>
										<div className='row'>
											{Products.map(product => (
												<div className='col-lg-4 col-md-4 col-sm-6'>
													<Product product={product} key={product.id} className='' />
												</div>
											))}
										</div>
									</div>
								)}
							</div>
							<div className='tab-content' id='nav-tabContent'>
								{activeTab === 2 && (
									<div className='tab-pane fade show active'>
										<div className='row'>
											{Products.map(product => (
												<div className='col-12 product-items-list'>
													<Product product={product} key={product.id} className='d-block' />
												</div>
											))}
										</div>
									</div>
								)}
							</div>
							<div className='tab-content' id='nav-tabContent'>
								{activeTab === 3 && (
									<div className='tab-pane fade show active'>
										<div className='row'>
											{Products.map(product => (
												<div className='col-sm-6'>
													<Product product={product} key={product.id} className='' />
												</div>
											))}
										</div>
									</div>
								)}
							</div>
							<div className='row'>
								<div className='col-lg-12'>
									<div className='pagination-area'>
										<nav>
											<ul className='page-numbers'>
												<li>
													<a className='page-number active' href=''>
														1
													</a>
												</li>
												<li>
													<a className='page-number' href=''>
														2
													</a>
												</li>
												<li>
													<a className='page-number' href=''>
														3
													</a>
												</li>
												<li>
													<a className='page-number next' href=''>
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
			</section>
			<FooterMain />
			<ButtonScrollTop />
		</>
	);
}
