import React, { useState } from 'react';
import { Products } from '../date/Products';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartPage, Compare, Wishlist } from '../date/Path';
import { ProductQuickView } from './ProductQuickView';

export function Carouse() {
	const [ActiveTab, setActiveTab] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	// const [index, setIndex] = useState(0);

	const handleClick = () => {
		setActiveTab(prev => !prev);
	};

	// const handleNext = () => {
	// Увеличить индекс на +1, начать массив сначала при достижении конца
	// 	setActiveIndex((activeIndex + 1 + Products.length) % Products.length);
	// };

	// const handlePrev = () => {
	// Уменьшить индекс на -1, продолжить массив с конца при достижении начала
	// 	setActiveIndex((activeIndex - 1 + Products.length) % Products.length);
	// };

	const handleNext = () => {
		setActiveIndex(activeIndex => (activeIndex + 1 + Products.length) % Products.length);
	};

	const handlePrev = () => {
		setActiveIndex(activeIndex => (activeIndex - 1 + Products.length) % Products.length);
	};

	return (
		<div className='container col-12'>
			<div className='row'>
				<div className='product-tab1-slider'>
					<div className='col-12' style={{ display: 'flex', justifyContent: 'center' }}>
						<Carousel
							activeIndex={activeIndex}
							onSelect={() => {}}
							nextIcon={
								<button className='slick-next slick-arrow' aria-label='Next' type='button' onClick={handleNext}>
									Next
								</button>
							}
							prevIcon={
								<button className='slick-prev slick-arrow' aria-label='Previous' type='button' onClick={handlePrev}>
									Previous
								</button>
							}
						>
							<Carousel.Item>
								<div className='d-flex'>
									{Products.slice(activeIndex % Products.length).map((product, index) => (
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
								</div>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
}
