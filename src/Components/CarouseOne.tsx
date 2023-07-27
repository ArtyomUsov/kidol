import React, { useEffect, useState } from 'react';
import { Products } from '../date/Products';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartPage, Compare, Wishlist } from '../date/Path';
import { ProductQuickView } from './ProductQuickView';

export function CarouseOne() {
	const [index, setIndex] = useState(0);
	const [ActiveTab, setActiveTab] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [addIndex, setAddIndex] = useState(4);
	const handleNext = () => {
		setIndex((index + 4) % Products.length);
	};
	const handlePrev = () => {
		setIndex((index - 4 + Products.length) % Products.length);
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
	// const [display, setDisplay] = useState('');

	// useEffect(() => {
	// 	window.addEventListener('resize', Display);
	// 	return () => {
	// 		window.removeEventListener('resize', Display);
	// 	};
	// }, []);

	// const Display = () => {
	// 	const windowWidth = window.innerWidth;
	// 	const displayClass = windowWidth >= 575 ? '' : 'd-none';
	// 	setDisplay(displayClass);

	// 	if (windowWidth >= 575) {
	// 		setDisplay('');
	// 	}
	// };

	// const handleNext = () => {
	// Увеличить индекс на +1, начать массив сначала при достижении конца
	// 	setActiveIndex((activeIndex + 1 + Products.length) % Products.length);
	// };

	// const handlePrev = () => {
	// Уменьшить индекс на -1, продолжить массив с конца при достижении начала
	// 	setActiveIndex((activeIndex - 1 + Products.length) % Products.length);
	// };

	// const handleNext = () => {
	// 	setActiveIndex(activeIndex => (activeIndex + 4 + Products.length) % Products.length);
	// };

	// const handlePrev = () => {
	// 	setActiveIndex(activeIndex => (activeIndex - 4 + Products.length) % Products.length);
	// };

	return (
		<div className='container col-12'>
			<div className='row'>
				<div className='product-tab1-slider'>
					<div className='col-12' style={{ display: 'flex', justifyContent: 'center' }}>
						<Carousel
							activeIndex={index}
							onSelect={() => {}}
							// onSlid={() => {}}
							prevIcon={
								<button className='slick-prev slick-arrow' aria-label='Previous' type='button' onClick={handlePrev}>
									Previous
								</button>
							}
							nextIcon={
								<button className='slick-next slick-arrow' aria-label='Next' type='button' onClick={handleNext}>
									Next
								</button>
							}
						>
							{/* {Products.slice((activeIndex + Products.length) % Products.length, (activeIndex + 4 + Products.length) % Products.length).map((product, index) => ( */}
							{/* {Products.map((product, _id) => ( */}

							<Carousel.Item>
								{Products.slice(index, index + addIndex).map((product, _id) => (
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
							<Carousel.Item>
								{Products.slice(index, index + addIndex).map((product, _id) => (
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
			</div>
		</div>
	);
}
