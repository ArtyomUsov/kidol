import React from 'react';
import '../Components/HeaderMain.css';
import '../css/style.css';
import logoLight from '../img/logo-light.webp';
import payment from '../img/payment1.webp';
import { Link } from 'react-router-dom';
import { About, Contact, HomeOne, NotFound, ShopNoSidebar, BlogNoSidebar, LoginRegister } from '../date/Path';

export function FooterMain() {
	return (
		<>
			<footer className='footer-area default-style'>
				<div className='footer-main'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-5 col-lg-3'>
								<div className='widget-item item-style3'>
									<div className='about-widget'>
										<Link to={HomeOne} className='footer-logo'>
											<img src={logoLight} alt='Logo' />
										</Link>
										<p>
											Lorem ipsum dolor sit amet, consecl adipisicing elit, sed do eiusmod teml incididunt ut labore et
											dolore magna aliqua Ut enim
										</p>
										<div className='widget-social-icons'>
											<Link to={NotFound}>
												<i className='ion-logo-twitter'></i>
											</Link>
											<Link to={NotFound}>
												<i className='ion-logo-tumblr'></i>
											</Link>
											<Link to={NotFound}>
												<i className='ion-logo-facebook'></i>
											</Link>
											<Link to={NotFound}>
												<i className='ion-logo-instagram'></i>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-3 col-lg-2'>
								<div className='widget-item item-style1'>
									<h4 className='widget-title'>Quick Links</h4>
									<h4
										className='widget-title widget-collapsed-title collapsed'
										data-bs-toggle='collapse'
										data-bs-target='#dividerId-1'
									>
										Quick Links
									</h4>
									<div id='dividerId-1' className='collapse widget-collapse-body'>
										<nav className='widget-menu-wrap'>
											<ul className='nav-menu nav item-hover-style'>
												<li>
													<Link to={NotFound}>- Support</Link>
												</li>
												<li>
													<Link to={NotFound}>- Helpline</Link>
												</li>
												<li>
													<Link to={NotFound}>- Courses</Link>
												</li>
												<li>
													<Link to={About}>- About</Link>
												</li>
												<li>
													<Link to={NotFound}>- Event</Link>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
							<div className='col-md-4 col-lg-2'>
								<div className='widget-item item-style1'>
									<h4 className='widget-title'>Other Page</h4>
									<h4
										className='widget-title widget-collapsed-title collapsed'
										data-bs-toggle='collapse'
										data-bs-target='#dividerId-2'
									>
										Other Page
									</h4>
									<div id='dividerId-2' className='collapse widget-collapse-body'>
										<nav className='widget-menu-wrap item-hover-style'>
											<ul className='nav-menu nav'>
												<li>
													<Link to={About}>- About</Link>
												</li>
												<li>
													<Link to={BlogNoSidebar}>- Blog</Link>
												</li>
												<li>
													<Link to={NotFound}>- Speakers</Link>
												</li>
												<li>
													<Link to={Contact}>- Contact</Link>
												</li>
												<li>
													<Link to={NotFound}>- Tricket</Link>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
							<div className='col-md-5 col-lg-2'>
								<div className='widget-item item-style2'>
									<h4 className='widget-title'>Company</h4>
									<h4
										className='widget-title widget-collapsed-title collapsed'
										data-bs-toggle='collapse'
										data-bs-target='#dividerId-3'
									>
										Company
									</h4>
									<div id='dividerId-3' className='collapse widget-collapse-body'>
										<nav className='widget-menu-wrap item-hover-style'>
											<ul className='nav-menu nav'>
												<li>
													<Link to={NotFound}>- Jesco</Link>
												</li>
												<li>
													<Link to={ShopNoSidebar}>- Shop</Link>
												</li>
												<li>
													<Link to={Contact}>- Contact us</Link>
												</li>
												<li>
													<Link to={LoginRegister}>- Log in</Link>
												</li>
												<li>
													<Link to={NotFound}>- Help</Link>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
							<div className='col-md-7 col-lg-3'>
								<div className='widget-item'>
									<h4 className='widget-title'>Store Information.</h4>
									<h4
										className='widget-title widget-collapsed-title collapsed'
										data-bs-toggle='collapse'
										data-bs-target='#dividerId-4'
									>
										Store Information.
									</h4>
									<div id='dividerId-4' className='collapse widget-collapse-body'>
										<p className='widget-address'>
											2005 Your Address Goes Here. <br />
											896, Address 10010, HGJ
										</p>
										<ul className='widget-contact-info'>
											<li>
												Phone/Fax: <Link to='tel:0123456789'>0123456789</Link>
											</li>
											<li>
												Email: <Link to='mailto:demo@example.com'>demo@example.com</Link>
											</li>
										</ul>
										<div className='widget-payment-info'>
											<div className='thumb'>
												<Link to={NotFound}>
													<img src={payment} alt='Image' />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='footer-bottom'>
					<div className='container'>
						<div className='footer-bottom-content'>
							<div className='row text-center'>
								<div className='col-sm-12'>
									<div className='widget-copyright'>
										<p>
											<i className='fa fa-copyright'></i> 2023 <span>KIDOL. </span> Made with{' '}
											<i className='fa fa-heart'></i> by{' '}
											<Link target='_blank' to='https://github.com/ArtyomUsov'>
												Me
											</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='footer-shape bg-img'></div>
			</footer>
		</>
	);
}
