import React, { useEffect, useState } from 'react';
import { Products } from '../date/Products';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Compare, Wishlist } from '../date/Path';
import { ProductQuickView } from './ProductQuickView';
import { IProduct } from '../date/models';

// export function Carouse({ product, handleRemoveFromCart }: CarouseProps) {
export function Carouse() {
	const [cartItems, setCartItems] = useState<IProduct[]>([]);
	const [ActiveTab, setActiveTab] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [display, setDisplay] = useState('');

	// const addToCart = () => {
	// 	handleAddToCart(product);
	// };
	const handleAddToCart = (product: IProduct) => {
		setCartItems(prevItems => [...prevItems, product]);
	};

	const handleClick = () => {
		setActiveTab(prev => !prev);
	};

	const handleSelect = (activeIndex: React.SetStateAction<number>) => {
		setActiveIndex(activeIndex);
	};

	// const handleNext = () => {
	// 	const nextIndex = (activeIndex + 4 + Products.length) % Products.length;
	// 	handleSelect(nextIndex);
	// };

	// const handlePrev = () => {
	// 	const prevIndex = (activeIndex - 4 + Products.length) % Products.length;
	// 	handleSelect(prevIndex);
	// };

	useEffect(() => {
		window.addEventListener('resize', Display);
		return () => {
			window.removeEventListener('resize', Display);
		};
	}, []);

	const Display = () => {
		const windowWidth = window.innerWidth;
		const displayClass = windowWidth >= 575 ? '' : 'd-none';
		setDisplay(displayClass);

		if (windowWidth >= 575) {
			setDisplay('');
		}
	};
	const handleNext = () => {
		setActiveIndex((activeIndex + 4 + Products.length) % Products.length);
	};
	const handlePrev = () => {
		setActiveIndex((activeIndex - 4 + Products.length) % Products.length);
	};

	return (
		<div className='container col-12'>
			<div className='row'>
				<div className='product-tab1-slider'>
					<div className='col-12' style={{ display: 'flex', justifyContent: 'center' }}>
						<Carousel
							activeIndex={activeIndex}
							onSelect={handleSelect}
							prevIcon={
								<button className='slick-prev slick-arrow' aria-label='Previous' type='button' onClick={handlePrev}>
									Previous
								</button>
							}
						>
							{Products.map(product => (
								<Carousel.Item key={product.id}>
									<div className='product-item col-12 slide-item'>
										<div className='product-thumb'>
											<img src={product.image} alt='Image' />
											<div className='product-action'>
												<a className='action-quick-view'>
													<i
														className='ion-ios-cart'
														// onClick={addToCart}
													></i>
												</a>
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
								</Carousel.Item>
							))}
						</Carousel>
						{window.innerWidth >= 575 && (
							<Carousel activeIndex={activeIndex + 1} onSelect={handleSelect} className={display}>
								{Products.map(product => (
									<Carousel.Item key={product.id}>
										<div className='product-item col-12 slide-item'>
											<div className='product-thumb'>
												<img src={product.image} alt='Image' />
												<div className='product-action'>
													<a className='action-quick-view'>
														<i
															className='ion-ios-cart'
															// onClick={addToCart}
														></i>
													</a>
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
									</Carousel.Item>
								))}
							</Carousel>
						)}
						{window.innerWidth >= 768 && (
							<Carousel activeIndex={activeIndex + 2} onSelect={handleSelect}>
								{Products.map(product => (
									<Carousel.Item key={product.id}>
										<div className='product-item col-12 slide-item'>
											<div className='product-thumb'>
												<img src={product.image} alt='Image' />
												<div className='product-action'>
													<a className='action-quick-view'>
														<i
															className='ion-ios-cart'
															// onClick={addToCart}
														></i>
													</a>
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
									</Carousel.Item>
								))}
							</Carousel>
						)}
						{window.innerWidth >= 1024 && (
							<Carousel
								activeIndex={activeIndex + 3}
								onSelect={handleSelect}
								nextIcon={
									<button className='slick-next slick-arrow' aria-label='Next' type='button' onClick={handleNext}>
										Next
									</button>
								}
							>
								{Products.map(product => (
									<Carousel.Item key={product.id}>
										<div className='product-item col-12 slide-item'>
											<div className='product-thumb'>
												<img src={product.image} alt='Image' />
												<div className='product-action'>
													<a className='action-quick-view'>
														<i
															className='ion-ios-cart'
															// onClick={addToCart}
														></i>
													</a>
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
									</Carousel.Item>
								))}
							</Carousel>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
