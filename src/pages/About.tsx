import React from 'react';
import HeaderMain from '../Components/HeaderMain';
import { FooterMain } from '../Components/Footer';
import brand1 from '../img/brand-logo/1.webp';
import brand2 from '../img/brand-logo/2.webp';
import brand3 from '../img/brand-logo/3.webp';
import brand4 from '../img/brand-logo/4.webp';
import brand5 from '../img/brand-logo/5.webp';
import brand6 from '../img/brand-logo/6.webp';
import photo1 from '../img/homeTwo/photo1.webp';
import photo2 from '../img/homeTwo/photo2.webp';
import photo3 from '../img/homeTwo/photo3.webp';
import quotes from '../img/homeTwo/quotes.webp';
import shape1 from '../img/homeTwo/shape1.webp';
import two from '../img/homeOne/2.webp';
import four from '../img/homeOne/5.webp';
import ButtonScrollTop from '../Components/ButtonScrollTop';
import one from '../img/homeOne/1.webp';
import kids4 from '../img/about/4.webp';
import team1 from '../img/about/1.webp';
import team2 from '../img/about/2.webp';
import team3 from '../img/about/3.webp';
import { Link } from 'react-router-dom';
import { HomeOne } from '../date/Path';

export function About() {
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
								<h2 className='title h2'>About Us</h2>
								<div className='bread-crumbs'>
									<Link to={HomeOne}>Home</Link>
									<span className='breadcrumb-sep'> // </span>
									<span className='active'>About Us</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='divider-area divider-style3-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 col-lg-6 aos-init aos-animate' data-aos='fade-right' data-aos-duration='1000'>
							<div className='thumb'>
								<img src={kids4} alt='boy with a girl on a pink background' />
								<div className='shape-group'>
									<div className='shape-style1'>
										<img src={four} alt='toy car' />
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-lg-6 aos-init aos-animate' data-aos='fade-up' data-aos-duration='1000'>
							<div className='divider-content'>
								<h4 className='subtitle h4'>Hello there!</h4>
								<h2 className='title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed dolo</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo temp incidi ut labore et
									dolore magna aliqua. Ut enim ad minim veniam quis nostru exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duislpl aute irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugial nulla pariatur. Excepteur sint occaecat.
								</p>
								<a className='btn-theme' href='contact.html'>
									Contact Us
								</a>
							</div>
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
			<section className='team-area team-default-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 col-lg-6 m-auto'>
							<div
								className='section-title text-center aos-init aos-animate'
								data-aos='fade-up'
								data-aos-duration='1000'
							>
								<h2 className='title'>Team Member</h2>
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
						<div className='col-md-4'>
							<div className='team-member'>
								<div className='thumb'>
									<img src={team1} alt='client photo' />
									<div className='member-icons'>
										<a href='#/'>
											<i className='fa fa-facebook'></i>
										</a>
										<a href='#/'>
											<i className='fa fa-dribbble'></i>
										</a>
										<a href='#/'>
											<i className='fa fa-pinterest-p'></i>
										</a>
										<a href='#/'>
											<i className='fa fa-twitter'></i>
										</a>
									</div>
								</div>
								<div className='content'>
									<div className='member-info'>
										<h4 className='name'>
											<a href='#/'>Phoenix Walker</a>
										</h4>
										<h6 className='designation'>Customer</h6>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='team-member mt-sm-50'>
								<div className='thumb'>
									<img src={team2} alt='client photo' />
									<div className='member-icons'>
										<a href='#/'>
											<i className='fa fa-facebook'></i>
										</a>
										<a href='#/'>
											<i className='fa fa-dribbble'></i>
										</a>
										<a href='#/'>
											<i className='fa fa-pinterest-p'></i>
										</a>
										<a href='#/'>
											<i className='fa fa-twitter'></i>
										</a>
									</div>
								</div>
								<div className='content'>
									<div className='member-info'>
										<h4 className='name'>
											<a href='#/'>Alyana Thomson</a>
										</h4>
										<h6 className='designation'>Customer</h6>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='team-member mt-sm-50'>
								<div className='thumb style-two'>
									<img src={team3} alt='client photo' />
									<div className='member-icons'>
										<a href='#/'>
											<i className='fa fa-facebook'></i>
										</a>
										<a href='#/'>
											<i className='fa fa-dribbble'></i>
										</a>
										<a href='#/'>
											<i className='fa fa-pinterest-p'></i>
										</a>
										<a href='#/'>
											<i className='fa fa-twitter'></i>
										</a>
									</div>
								</div>
								<div className='content'>
									<div className='member-info'>
										<h4 className='name'>
											<a href='#/'>Oscar Thomsen</a>
										</h4>
										<h6 className='designation'>Customer</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
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
			<section
				className='divider-area divider-style4-area aos-init aos-animate'
				data-aos='fade-up'
				data-aos-duration='1000'
			>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div
								className='divider-wrap bg-img'
								data-bg-img='assets/img/photos/bg1.png'
								// style="background-image: url(&quot;assets/img/photos/bg1.png&quot;);"
							>
								<div className='row align-items-center'>
									<div className='col-lg-6 position-relative'>
										<div className='content'>
											<h2>Subscribe for Exclusive Sales &amp; News</h2>
										</div>
										<div className='shape-group'>
											<span></span>
											<span></span>
											<span></span>
										</div>
									</div>
									<div className='col-lg-6'>
										<div className='newsletter-form'>
											<form action='#'>
												<input className='form-control' type='email' placeholder='Enter Your Email' />
												<button className='btn btn-theme' type='submit'>
													Subscribe
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ButtonScrollTop />
			<FooterMain />
		</>
	);
}
