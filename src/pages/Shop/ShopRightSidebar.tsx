import React, { useState } from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/Footer';
import one from '../../img/homeOne/1.webp';
import { Link } from 'react-router-dom';
import { HomeOne } from '../../date/Path';
import ButtonScrollTop from '../../Components/ButtonScrollTop';
import { Products } from '../../date/Products';
import Product from '../../Components/Product';
import Nouislider from 'nouislider-react';

export const ShopRightSidebar = () => {
	const [activeTab, setActiveTab] = useState(1);
	const [selectedValue, setSelectedValue] = useState('Radio1');
	const [selectedValue1, setSelectedValue1] = useState('Radio5');
	const [minPrice, setMinPrice] = useState(16);
	const [maxPrice, setMaxPrice] = useState(306);

	const FilteredProducts = Products.filter(product => {
		return product.price >= minPrice && product.price <= maxPrice;
	});

	const handleSliderChange = (values: number[]) => {
		setMinPrice(Math.round(values[0]));
		setMaxPrice(Math.round(values[1]));
	};
	const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedValue(event.target.value);
	};
	const handleChange1 = (event: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedValue1(event.target.value);
	};

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
								<h2 className='title h2'>Product</h2>
								<div className='bread-crumbs'>
									<Link to={HomeOne}>Home</Link>
									<span className='breadcrumb-sep'> // </span>
									<span className='active'> Product</span>
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
							<div className='sidebar-area shop-sidebar-area'>
								<div className='widget-item'>
									<div className='widget-title'>
										<h3 className='title'>Product Categories</h3>
									</div>
									<div className='widget-body'>
										<div className='widget-categories'>
											<ul>
												<li>
													<a href='shop.html'>
														Accesasories <span>(6)</span>
													</a>
												</li>
												<li>
													<a href='shop.html'>
														Computer <span>(4)</span>
													</a>
												</li>
												<li>
													<a href='shop.html'>
														Covid-19 <span>(2)</span>
													</a>
												</li>
												<li>
													<a href='shop.html'>
														Electronics <span>(6)</span>
													</a>
												</li>
												<li>
													<a href='shop.html'>
														Frame Sunglasses <span>(12)</span>
													</a>
												</li>
												<li>
													<a href='shop.html'>
														Furniture <span>(7)</span>
													</a>
												</li>
												<li>
													<a href='shop.html'>
														Genuine Leather <span>(9)</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='widget-item'>
									<div className='widget-filter'>
										<div className='widget-title'>
											<h3 className='title'>Price Filter</h3>
										</div>
										<div className='widget-body'>
											<div className='widget-price-filter'>
												<div className='slider-labels'>
													<div className='caption'>
														<span id='slider-range-value1'>${minPrice}</span>
													</div>
													<span className='range-separator'></span>
													<div className='caption'>
														<span id='slider-range-value2'>${maxPrice}</span>
													</div>
												</div>
												<Nouislider
													range={{ min: 16, max: 400 }}
													start={[minPrice, maxPrice]}
													connect
													onSlide={handleSliderChange}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className='widget-item'>
									<div className='widget-title'>
										<h3 className='title'>Color</h3>
									</div>
									<div className='widget-body'>
										<div className='widget-color'>
											<div className='form-check'>
												<input
													className='form-check-input red'
													type='radio'
													value='Radio1'
													checked={selectedValue === 'Radio1'}
													onChange={handleChange}
												/>
												<label className='form-check-label'>Red (12)</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input black'
													type='radio'
													value='Radio2'
													checked={selectedValue === 'Radio2'}
													onChange={handleChange}
												/>
												<label className='form-check-label'>Light Black (09)</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input blue'
													type='radio'
													value='Radio3'
													checked={selectedValue === 'Radio3'}
													onChange={handleChange}
												/>
												<label className='form-check-label'>Dark Blue (07)</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input gray'
													type='radio'
													value='Radio4'
													checked={selectedValue === 'Radio4'}
													onChange={handleChange}
												/>
												<label className='form-check-label'>Gray (11)</label>
											</div>
										</div>
									</div>
								</div>
								<div className='widget-item mb-md-0'>
									<div className='widget-title'>
										<h3 className='title'>Size</h3>
									</div>
									<div className='widget-body'>
										<div className='widget-size'>
											<div className='form-check'>
												<input
													className='form-check-input black'
													type='radio'
													value='Radio5'
													checked={selectedValue1 === 'Radio5'}
													onChange={handleChange1}
												/>
												<label className='form-check-label'>M (12)</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input black'
													type='radio'
													value='Radio6'
													checked={selectedValue1 === 'Radio6'}
													onChange={handleChange1}
												/>
												<label className='form-check-label'>L (09)</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input black'
													type='radio'
													value='Radio7'
													checked={selectedValue1 === 'Radio7'}
													onChange={handleChange1}
												/>
												<label className='form-check-label'>XL (07)</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input black'
													type='radio'
													value='Radio8'
													checked={selectedValue1 === 'Radio8'}
													onChange={handleChange1}
												/>
												<label className='form-check-label'>XXL (11)</label>
											</div>
										</div>
									</div>
								</div>
							</div>
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
											{FilteredProducts.map(product => (
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
											{FilteredProducts.map(product => (
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
											{FilteredProducts.map(product => (
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
};
