import React, { useState } from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/Footer';
import ButtonScrollTop from '../../Components/ButtonScrollTop';
import one from '../../img/homeOne/1.webp';
import two from '../../img/homeOne/2.webp';
import brand1 from '../../img/brand-logo/1.webp';
import brand2 from '../../img/brand-logo/2.webp';
import brand3 from '../../img/brand-logo/3.webp';
import brand4 from '../../img/brand-logo/4.webp';
import brand5 from '../../img/brand-logo/5.webp';
import brand6 from '../../img/brand-logo/6.webp';
import f1 from '../../img/homeTwo/f1.webp';
import f2 from '../../img/homeTwo/f2.webp';
import f3 from '../../img/homeTwo/f3.webp';
import f4 from '../../img/homeTwo/f4.webp';
import f5 from '../../img/homeTwo/f5.webp';
import f6 from '../../img/homeTwo/f6.webp';
import photo1 from '../../img/homeTwo/photo1.webp';
import photo2 from '../../img/homeTwo/photo2.webp';
import photo3 from '../../img/homeTwo/photo3.webp';
import quotes from '../../img/homeTwo/quotes.webp';
import background2 from '../../img/homeTwo/3.webp';
import shape1 from '../../img/homeTwo/shape1.webp';
import divider1 from '../../img/divider/divider1.webp';
import divider2 from '../../img/divider/divider2.webp';
import collection1 from '../../img/category/4.webp';
import collection2 from '../../img/category/5.webp';
import blog1 from '../../img/blog/1.webp';
import blog2 from '../../img/blog/2.webp';
import blog3 from '../../img/blog/3.webp';
import BgShape1 from '../../img/divider/shape1.webp';
import BgShape2 from '../../img/divider/shape2.webp';
import { Link } from 'react-router-dom';
import { BlogLeftSidebar, ShopNoSidebar } from '../../date/Path';
import { ProductFilter } from '../../Components/ProductFilter';
import { Carouse } from '../../Components/Carouse';
import { Products } from '../../date/Products';
import { IProduct } from '../../date/models';

export function HomeTwo() {
	const [cartItems, setCartItems] = useState<IProduct[]>([]);

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
						<div
							className='swiper-wrapper'
							// style='transition-duration: 0ms;'
						>
							<div
								className='swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev'
								data-swiper-slide-index='0'
								// style='width: 1903px; transition-duration: 0ms; opacity: 0; transform: translate3d(0px, 0px, 0px);'
							>
								<div className='home-slider-item item-two'>
									<img className='bg-img' src={background2} alt='fashionista girl on a pink background' />
									<div className='slider-content-area'>
										<div className='container'>
											<div className='row'>
												<div className='col-sm-6 offset-sm-6'>
													<div className='content content2'>
														<div className='inner-content'>
															<h4 className='h4 subtitle'>New Arrivals</h4>
															<h2 className='h2'>Best Kids Store &amp; Online Shop</h2>
															<Link to={ShopNoSidebar}>
																<a className='btn-theme'>Discover Now</a>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='shape-top'>
										<img className='bg-img' src={one} alt='White semicircles in a row' />
									</div>
								</div>
							</div>

							<div
								className='swiper-slide '
								data-swiper-slide-index='0'
								// style='width: 1903px; transition-duration: 0ms; opacity: 0; transform: translate3d(-3806px, 0px, 0px);'
							></div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='brand-logo-area brand-logo-default-area'>
					<div className='container-fluid'>
						<div className='row align-items-center'>
							<div className='col-lg-12'>
								<div className='swiper-container brand-logo-slider-container swiper-container-initialized swiper-container-horizontal'>
									<div
										className='swiper-wrapper brand-logo-slider'
										//   style="transform: translate3d(-1552.5px, 0px, 0px); transition-duration: 0ms;"
									>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate swiper-slide-duplicate-next'
											data-swiper-slide-index='0'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand1} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate'
											data-swiper-slide-index='1'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand2} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate'
											data-swiper-slide-index='2'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand3} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate'
											data-swiper-slide-index='3'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand4} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate swiper-slide-prev'
											data-swiper-slide-index='4'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand5} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate swiper-slide-active'
											data-swiper-slide-index='5'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand6} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-next'
											data-swiper-slide-index='0'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand1} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item'
											data-swiper-slide-index='1'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand2} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item'
											data-swiper-slide-index='2'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand3} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item'
											data-swiper-slide-index='3'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand4} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate-prev'
											data-swiper-slide-index='4'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand5} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate-active'
											data-swiper-slide-index='5'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand6} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate swiper-slide-duplicate-next'
											data-swiper-slide-index='0'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand1} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate'
											data-swiper-slide-index='1'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand2} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate'
											data-swiper-slide-index='2'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand3} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate'
											data-swiper-slide-index='3'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand4} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate'
											data-swiper-slide-index='4'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand5} alt='Brand-Logo' />
											</a>
										</div>
										<div
											className='swiper-slide brand-logo-item swiper-slide-duplicate'
											data-swiper-slide-index='5'
											style={{ width: '310.5px' }}
										>
											<a href='#/'>
												<img src={brand6} alt='Brand-Logo' />
											</a>
										</div>
									</div>
									<span className='swiper-notification' aria-live='assertive' aria-atomic='true'></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				className='featured-area featured-default-area aos-init aos-animate'
				data-aos='fade-up'
				data-aos-duration='1000'
			>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-6 col-md-4'>
							<div className='featured-item'>
								<div className='icon'>
									<img src={f1} alt='delivery car' />
								</div>
								<div className='featured-info'>
									<h4 className='title h4'>Free Shipping</h4>
									<p>Lorem ipsum dolor sit amet consect adipiscing elit sed does</p>
								</div>
								<div className='shape-group'>
									<div className='shape-style1'>
										<img src={f4} alt='delivery car' />
									</div>
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4'>
							<div className='featured-item mt-xs-30'>
								<div className='icon'>
									<img src={f2} alt='support 24 hours' />
								</div>
								<div className='featured-info'>
									<h4 className='title h4'>Support 24/7</h4>
									<p>Lorem ipsum dolor sit amet consect adipiscing elit sed does</p>
								</div>
								<div className='shape-group'>
									<div className='shape-style1'>
										<img src={f5} alt='support 24 hours' />
									</div>
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4'>
							<div className='featured-item mt-sm-30'>
								<div className='icon'>
									<img src={f3} alt='Money Return' />
								</div>
								<div className='featured-info'>
									<h4 className='title h4'>Money Return</h4>
									<p>Lorem ipsum dolor sit amet consect adipiscing elit sed does</p>
								</div>
								<div className='shape-group'>
									<div className='shape-style1'>
										<img src={f6} alt='Money Return' />
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
			<ProductFilter
			// key={product.id}
			// product={product}
			// handleAddToCart={handleAddToCart}
			// cartItems={[]}
			// handleRemoveFromCart={handleRemoveFromCart}
			/>
			{/* ))} */}
			<section className='testimonial-area testimonial-default-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 m-auto'>
							<div
								className='section-title text-center aos-init aos-animate'
								data-aos='fade-up'
								data-aos-duration='1000'
							>
								<h2 className='title'>Testimonial</h2>
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
						<div className='col-lg-12'>
							<div className='swiper-container testimonial-slider-container swiper-container-initialized swiper-container-horizontal'>
								<div
									className='swiper-wrapper'
									// style="transform: translate3d(-1210px, 0px, 0px); transition-duration: 0ms;"
								>
									<div
										className='swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active'
										data-swiper-slide-index='0'
										style={{ width: '363.333px', marginRight: '40px' }}
									>
										<div className='testimonial-item'>
											<div className='client-content'>
												<div className='inner-content'>
													<div className='icon'>
														<img src={quotes} alt='quotes' />
													</div>
													<p>
														Lorem ipsum dolor sit amet, consect adipisi elit sed do eiusmod temporlo incidid ut labore
														et dolore magnalop aliquall Ut enim ad minim.
													</p>
												</div>
												<div className='shape-group'>
													<div className='shape-style1'>
														<img src={shape1} alt='white rounded corner' />
													</div>
												</div>
												<div className='shape-group'>
													<div className='shape-style1'>
														<img src={shape1} alt='white rounded corner' />
													</div>
												</div>
											</div>
											<div className='client-info'>
												<div className='thumb'>
													<img src={photo1} alt='client photo' />
												</div>
												<div className='desc'>
													<h4 className='title h4'>Dasia Lovell</h4>
													<p>Customer</p>
												</div>
											</div>
										</div>
									</div>
									<div
										className='swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next'
										data-swiper-slide-index='1'
										style={{ width: '363.333px', marginRight: '40px' }}
									>
										<div className='testimonial-item'>
											<div className='client-content'>
												<div className='inner-content'>
													<div className='icon'>
														<img src={quotes} alt='quotes' />
													</div>
													<p>
														There are many variations of passage of Lorem Ipsum available, but the on majority have
														suffered alteration in some form, by injected humour.
													</p>
												</div>
												<div className='shape-group'>
													<div className='shape-style1'>
														<img src={shape1} alt='white rounded corner' />
													</div>
												</div>
												<div className='shape-group'>
													<div className='shape-style1'>
														<img src={shape1} alt='white rounded corner' />
													</div>
												</div>
											</div>
											<div className='client-info'>
												<div className='thumb'>
													<img src={photo2} alt='client photo' />
												</div>
												<div className='desc'>
													<h4 className='title h4'>Dasia Lovell</h4>
													<p>Customer</p>
												</div>
											</div>
										</div>
									</div>
									<div
										className='swiper-slide swiper-slide-duplicate'
										data-swiper-slide-index='2'
										style={{ width: '363.333px', marginRight: '40px' }}
									>
										<div className='testimonial-item'>
											<div className='client-content'>
												<div className='inner-content'>
													<div className='icon'>
														<img src={quotes} alt='quotes' />
													</div>
													<p>
														Lorem ipsum dolor sit amet, consect adipisi elit sed do eiusmod temporlo incidid ut labore
														et dolore magnalop aliquall Ut enim ad minim.
													</p>
												</div>
												<div className='shape-group'>
													<div className='shape-style1'>
														<img src={shape1} alt='white rounded corner' />
													</div>
												</div>
												<div className='shape-group'>
													<div className='shape-style1'>
														<img src={shape1} alt='white rounded corner' />
													</div>
												</div>
											</div>
											<div className='client-info'>
												<div className='thumb'>
													<img src={photo3} alt='client photo' />
												</div>
												<div className='desc'>
													<h4 className='title h4'>Akhil Newman</h4>
													<p>Customer</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<span className='swiper-notification' aria-live='assertive' aria-atomic='true'></span>
							</div>
						</div>
					</div>
				</div>
				<img className='thumb-style bg-img' src={two} alt='white waves' />
			</section>
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
										<a className='author' href='blog.html'>
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
										<a className='author' href='blog.html'>
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
									<Link to={BlogLeftSidebar}>
										<img src={blog3} alt='girl with a wooden constructor' />
									</Link>
								</div>
								<div className='content'>
									<div className='meta'>
										By,{' '}
										<Link to={BlogLeftSidebar}>
											<a className='author'>June Cha </a>
										</Link>
										<span className='dots'></span>
										<span className='post-date'>January 28, 2022</span>
									</div>
									<h4 className='title'>
										<Link to={BlogLeftSidebar}>
											<a>Learn while you grow toys Baby Planet</a>
										</Link>
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
