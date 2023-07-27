import React, { useEffect, useState } from 'react';
import { Products } from '../date/Products';
import { ProductSlide } from '../Components/ProductSlide';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartPage, Compare, Wishlist } from '../date/Path';
import { ProductQuickView } from './ProductQuickView';

export function Slider() {
	const [index, setIndex] = useState(0);
	const [ActiveTab, setActiveTab] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [addIndex, setAddIndex] = useState(4);
	const handleNext = () => {
		setIndex((index + 1) % Products.length);
	};
	const handlePrev = () => {
		setIndex((index - 1 + Products.length) % Products.length);
	};
	const handleClick = () => {
		setActiveTab(prev => !prev);
	};
	useEffect(() => {
		const updateAddIndex = () => {
			const windowWidth = window.innerWidth;
			let newIndex = 4;
			if (windowWidth <= 768) {
				newIndex = 1;
			} else if (windowWidth <= 991) {
				newIndex = 2;
			} else if (windowWidth <= 1200) {
				newIndex = 3;
			}
			setAddIndex(newIndex);
		};

		window.addEventListener('resize', updateAddIndex);
		updateAddIndex();

		return () => window.removeEventListener('resize', updateAddIndex);
	}, []);

	return (
		<>
			<section className='product-area product-style2-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 m-auto'>
							<div
								className='section-title text-center aos-init aos-animate'
								data-aos='fade-up'
								data-aos-duration='1000'
							>
								<h2 className='title'>Trending Product</h2>
								<div className='desc'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et
										dolore magna aliqua.{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<div
								className='product-tab1-slider aos-init slick-initialized slick-slider aos-animate'
								data-aos='fade-up'
								data-aos-duration='1500'
							>
								<button className='slick-prev slick-arrow' aria-label='Previous' type='button' onClick={handlePrev}>
									Previous
								</button>
								<div className='slick-list draggable'>
									<div
										className='slick-track'
										style={{
											opacity: '1',
											minWidth: '300px',
											alignItems: 'center',
										}}
									>
										<Carousel activeIndex={activeIndex} onSelect={() => {}}>
											<Carousel.Item>
												{Products.slice(index, index + addIndex).map(product => (
													<>
														<div key={product.id} className='product-item col-12 col-lg-3 col-md-4 col-sm-6 slide-item'>
															<div className='product-thumb'>
																<img src={product.image} alt='Image' />
																<div className='product-action'>
																	<Link to={CartPage} className='action-quick-view'>
																		<i className='ion-ios-cart'></i>
																	</Link>
																	<Link to={''} className='action-quick-view' onClick={handleClick}>
																		<i className='ion-ios-expand'></i>
																	</Link>
																	<Link to={Wishlist} className='action-quick-view'>
																		<i className='ion-ios-heart'></i>
																	</Link>
																	<Link to={Compare} className='action-quick-view'>
																		<i className='ion-ios-shuffle'></i>
																	</Link>
																</div>
															</div>
															<div className='product-info'>
																<div className='rating'>
																	<span className='fa fa-star'></span>
																	<span className='fa fa-star'></span>
																	<span className='fa fa-star'></span>
																	<span className='fa fa-star'></span>
																	<span className='fa fa-star'></span>
																</div>
																<h4 className='title'>
																	<Link to={product.link}>
																		<a>{product.title}</a>
																	</Link>
																</h4>
																<div className='prices'>
																	<span className='price'>{product.price}</span>
																</div>
															</div>
														</div>
														<div>{ActiveTab && <ProductQuickView setActive={setActiveTab} />}</div>
													</>
												))}
											</Carousel.Item>
										</Carousel>
									</div>
								</div>
								<button className='slick-next slick-arrow' aria-label='Next' type='button' onClick={handleNext}>
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
