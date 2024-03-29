import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import three from '../../img/homeOne/3.webp';
import five from '../../img/homeOne/5.webp';
import four from '../../img/homeOne/4.webp';
import one from '../../img/homeOne/1.webp';
import two from '../../img/homeOne/2.webp';
import itemOne from '../../img/1.webp';
import itemTwo from '../../img/2.webp';
import itemThree from '../../img/3.webp';
import background from '../../img/homeOne/background.webp';
import divider1 from '../../img/divider/divider1.webp';
import divider2 from '../../img/divider/divider2.webp';
import collection1 from '../../img/category/4.webp';
import collection2 from '../../img/category/5.webp';
import blog1 from '../../img/blog/1.webp';
import blog2 from '../../img/blog/2.webp';
import blog3 from '../../img/blog/3.webp';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/Footer';
import ButtonScrollTop from '../../Components/ButtonScrollTop';
import { Link } from 'react-router-dom';
import { BlogLeftSidebar, ShopNoSidebar } from '../../date/Path';
import BgShape1 from '../../img/divider/shape1.webp';
import BgShape2 from '../../img/divider/shape2.webp';
import { ProductFilter } from '../../Components/ProductFilter';
import { Carouse } from '../../Components/Carouse';
import { CarouseOne } from '../../Components/CarouseOne';
import { Slider } from '../../Components/Slider';
// import Cart from '../../Components/Cart';
import ProductSlide from '../../Components/ProductSlide';
import { IProduct } from '../../date/models';
import { Products } from '../../date/Products';
import Product from '../../Components/Product';

export function HomeOne() {
	const [cartItems, setCartItems] = useState<IProduct[]>([]);
	const filteredDress = Products.filter(product => product.category === 'Baby Dress');
	const filteredToys = Products.filter(product => product.category === 'Baby Toys');

	// const addToCart = () => {
	// 	handleAddToCart(product);
	// };

	const handleAddToCart = (product: IProduct) => {
		setCartItems(prevItems => [...prevItems, product]);
	};

	const handleRemoveFromCart = (productId: number) => {
		setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
	};
	return (
		<>
			<HeaderMain />
			<section className='home-slider-area slider-default'>
				<div className='home-slider-content'>
					<div className='swiper-container home-slider-container swiper-container-fade swiper-container-initialized swiper-container-horizontal'>
						<div className='swiper-wrapper'>
							<div
								className='swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev'
								data-swiper-slide-index='0'
								// style={{
								//     width: "1663px",
								//     opacity: "0",
								//     transform: "translate3d(0px, 0px, 0px)",
								//     transitionDuration: "0ms",}}
							>
								<div className='home-slider-item'>
									<div
										className='thumb-one'
										// data-bg-img={background}
									>
										<Image className='bg-img' src={background} alt='turquoise color background' />
									</div>
									<div className='slider-content-area'>
										<div className='container'>
											<div className='row'>
												<div className='col-sm-6'>
													<div className='content'>
														<div className='inner-content'>
															<h2 className='h2'>Best Kids Store &amp; Online Shop</h2>
															<p>Give The Gift Of Your Children Everyday</p>
															<Link to={ShopNoSidebar} className='btn-theme'>
																Shop This Now
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
										<Image className='thumb-two' src={four} alt='boy in a helmet with wings' />
										<Image className='thumb-three' src={three} alt='cloud' />
										<Image className='thumb-four' src={five} alt='toy car' />
									</div>
									<div
										className='shape-top'
										// data-bg-img={one}
									>
										<Image className='bg-img' src={one} alt='White semicircles in a row' />
									</div>
									<div
										className='shape-bottom'
										// data-bg-img={two}
									>
										<Image className='shape-bottom bg-img' src={two} alt='white waves' />
									</div>
								</div>
							</div>
							<div
								className='swiper-slide swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev'
								data-swiper-slide-index='0'
								// style="width: 1663px; opacity: 1; transform: translate3d(-1663px, 0px, 0px); transition-duration: 0ms;"
							></div>
							<div
								className='swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next'
								data-swiper-slide-index='0'
								// style="width: 1663px; opacity: 0; transform: translate3d(-3326px, 0px, 0px); transition-duration: 0ms;"
							></div>
						</div>
						<span className='swiper-notification' aria-live='assertive' aria-atomic='true'></span>
					</div>
				</div>
			</section>
			<section
				className='category-area product-category1-area aos-init aos-animate'
				// data-aos="fade-up" data-aos-duration="1000"
			>
				<div className='container'>
					<div className='row category-items1'>
						<div className='col-sm-6 col-md-4'>
							<div className='category-item'>
								<div className='thumb thumb-style1'>
									<img src={itemOne} alt='baby drees' />
									<div className='content'>
										<div className='contact-info'>
											<h2 className='h2 title'>Baby Dress</h2>
											<h4 className='h4 price'>$32.00</h4>
										</div>
										<a className='btn-link' href='shop.html'>
											Shop Now
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4'>
							<div className='category-item mt-xs-25'>
								<div className='thumb thumb-style2'>
									<img src={itemTwo} alt='baby toy' />
									<div className='content'>
										<div className='contact-info'>
											<h2 className='h2 title'>Baby Toys</h2>
											<h4 className='h4 price'>$25.00</h4>
										</div>
										<a className='btn-link' href='shop.html'>
											Shop Now
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4'>
							<div className='category-item mt-sm-25'>
								<div className='thumb thumb-style3'>
									<img src={itemThree} alt='teddy bear' />
									<div className='content'>
										<div className='contact-info'>
											<h2 className='h2 title'>Teddy Bear</h2>
											<h4 className='h4 price'>$18.00</h4>
										</div>
										<a className='btn-link' href='shop.html'>
											Shop Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} /> */}
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
			<section
				className='divider-area divider-style1-area bg-img aos-init aos-animate'
				// data-bg-img={bg1}
				data-aos='fade-up'
				data-aos-duration='1000'
			>
				<div className='container position-relative'>
					<div className='row'>
						<div className='col-lg-6 m-auto'>
							<div className='divider-content'>
								<h2 className='title'>Deal Of The Day</h2>
								<p>
									<span>UPTO 35% OFF </span> On All Other Baby Products
								</p>
								<div className='countdown-content'>
									<ul className='countdown-timer' style={{ display: 'none' }}>
										<li>
											<span className='days'>00</span>
											<p className='days_text'>Days</p>
										</li>
										<li>
											<span className='hours'>00</span>
											<p className='hours_text'>Hours</p>
										</li>
										<li>
											<span className='minutes'>00</span>
											<p className='minutes_text'>MINUTES</p>
										</li>
										<li>
											<span className='seconds'>00</span>
											<p className='seconds_text'>SECONDS</p>
										</li>
									</ul>
								</div>
								<Link to={ShopNoSidebar}>
									<a className='btn-theme'>Shop Now</a>
								</Link>
							</div>
						</div>
					</div>
					<div className='shape-group'>
						<div className='shape-style3'>
							<img src={divider1} alt='boy with apple and selfie stick' />
						</div>
						<div className='shape-style4'>
							<img src={divider2} alt='girl standing on one leg' />
						</div>
					</div>
				</div>
				<div className='shape-group'>
					<div className='shape-style1'>
						<img src={BgShape1} alt='White semicircles in a row' />
					</div>
					<div className='shape-style2'>
						<img src={BgShape2} alt='White semicircles in a row' />
					</div>
				</div>
			</section>
			<section
				className='category-area product-category2-area aos-init aos-animate'
				data-aos='fade-up'
				data-aos-duration='1000'
			>
				<div className='container'>
					<div className='row category-items2'>
						<div className='col-md-6'>
							<div className='category-item'>
								<div className='thumb'>
									<img className='w-100' src={collection1} alt='baby with rattles' />
									<div className='content'>
										<div className='contact-info'>
											<h2 className='title text-white'>Collection</h2>
											<h4 className='price text-white'>
												Flat <span>20%</span> Off
											</h4>
										</div>
										<Link to={ShopNoSidebar}>
											<a className='btn-theme'>Shop Now</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='category-item mt-sm-50'>
								<div className='thumb'>
									<img className='w-100' src={collection2} alt='boy with wooden construction set' />
									<div className='content'>
										<div className='contact-info'>
											<h2 className='title'>Collection</h2>
											<h4 className='price'>
												Flat <span>30%</span> Off
											</h4>
										</div>
										<Link to={ShopNoSidebar}>
											<a className='btn-theme'>Shop Now</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* {Products.map(product => ( */}
			<Carouse
			// key={product.id}
			// product={product}
			// handleAddToCart={handleAddToCart}
			// cartItems={[]}
			// handleRemoveFromCart={handleRemoveFromCart}
			/>
			{/* ))} */}
			{/* <CarouseOne /> */}
			{/* <Slider /> */}
			<section className='blog-area blog-default-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 col-lg-6 m-auto'>
							<div
								className='section-title text-center aos-init aos-animate'
								data-aos='fade-up'
								data-aos-duration='1000'
							>
								<h2 className='title'>Latest Blog</h2>
								<div className='desc'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et
										dolore magna aliqua.{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='row aos-init aos-animate' data-aos='fade-up' data-aos-duration='1300'>
						<div className='col-lg-4 col-md-6 col-sm-6'>
							{/* <!--== Start Blog Post Item ==--> */}
							<div className='post-item'>
								<div className='thumb'>
									<a href='blog-details.html'>
										<img src={blog1} alt='kids with plastic construction set' />
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
						<div className='col-lg-4 col-md-6 col-sm-6'>
							{/* <!--== Start Blog Post Item ==--> */}
							<div className='post-item mt-xs-30'>
								<div className='thumb'>
									<a href='blog-details.html'>
										<img src={blog2} alt='boy with wooden construction set' />
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
						<div className='col-lg-4 col-md-6 col-sm-6'>
							{/* <!--== Start Blog Post Item ==--> */}
							<div className='post-item mt-md-30'>
								<div className='thumb'>
									<a href='blog-details.html'>
										<img src={blog3} alt='girl with a wooden constructor' />
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
				</div>
			</section>
			<ButtonScrollTop />
			<FooterMain />
		</>
	);
}
