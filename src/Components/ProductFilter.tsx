import React, { useState } from 'react';
import { Product } from '../Components/Product';
import { Products } from '../date/Products';
import { IProduct} from '../date/models';

export function ProductFilter() {
	const filteredDress = Products.filter(product => product.category === 'Baby Dress');
	const filteredToys = Products.filter(product => product.category === 'Baby Toys');

	// const addToCart = () => {
	// 	handleAddToCart(product);
	// };
	return (
		<>
			<section className='product-area product-style1-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 m-auto'>
							<div
								className='section-title text-center aos-init aos-animate'
								data-aos='fade-up'
								data-aos-duration='1000'
							>
								<h2 className='h2 title'>New Products</h2>
								<div className='desc'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et
										dolore magna aliqua
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-12'>
							<div className='product-tab-content'>
								<ul
									className='nav nav-tabs aos-init aos-animate'
									id='myTab'
									role='tablist'
									data-aos='fade-up'
									data-aos-duration='1000'
								>
									<li className='nav-item' role='presentation'>
										<button
											className='nav-link active'
											id='our-features-tab'
											data-bs-toggle='tab'
											data-bs-target='#our-features'
											type='button'
											role='tab'
											aria-controls='our-features'
											aria-selected='true'
										>
											All Items
										</button>
									</li>
									<li className='nav-item' role='presentation'>
										<button
											className='nav-link'
											id='Baby-Dress-tab'
											data-bs-toggle='tab'
											data-bs-target='#Baby-Dress'
											type='button'
											role='tab'
											aria-controls='Baby-Dress'
											aria-selected='false'
										>
											Baby Dress
										</button>
									</li>
									<li className='nav-item' role='presentation'>
										<button
											className='nav-link mr-0'
											id='Baby-Toys-tab'
											data-bs-toggle='tab'
											data-bs-target='#Baby-Toys'
											type='button'
											role='tab'
											aria-controls='Baby-Toys'
											aria-selected='false'
										>
											Baby Toys
										</button>
									</li>
								</ul>

								<div
									className='tab-content aos-init aos-animate'
									id='myTabContent'
									data-aos='fade-up'
									data-aos-duration='1300'
								>
									<div
										className='tab-pane fade show active'
										id='our-features'
										role='tabpanel'
										aria-labelledby='our-features-tab'
									>
										<div className='row'>
											<div className='col-lg-12'>
												<div className='product'>
													<div className='row'>
														{Products.slice(0, 4).map(product => (
															<div className='col-lg-3 col-md-4 col-sm-6'>
																<Product
																	key={product.id}
																	product={product}
																	// handleAddToCart={handleAddToCart}
																	// cartItems={[]}
																	// handleRemoveFromCart={handleRemoveFromCart}
																	className=''
																/>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='tab-pane fade' id='Baby-Dress' role='tabpanel' aria-labelledby='Baby-Dress-tab'>
										<div className='row'>
											<div className='col-lg-12'>
												<div className='row'>
													{filteredDress.slice(0, 4).map(product => (
														<div className='col-lg-3 col-md-4 col-sm-6'>
															<Product
																key={product.id}
																product={product}
																// handleAddToCart={handleAddToCart}
																// cartItems={[]}
																// handleRemoveFromCart={handleRemoveFromCart}
																className=''
															/>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
									<div className='tab-pane fade' id='Baby-Toys' role='tabpanel' aria-labelledby='Baby-Toys-tab'>
										<div className='row'>
											<div className='col-lg-12'>
												<div className='row'>
													{filteredToys.slice(0, 4).map(product => (
														<div className='col-lg-3 col-md-4 col-sm-6'>
															<Product
																key={product.id}
																product={product}
																// handleAddToCart={handleAddToCart}
																// cartItems={[]}
																// handleRemoveFromCart={handleRemoveFromCart}
																className=''
															/>
														</div>
													))}
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
		</>
	);
}
