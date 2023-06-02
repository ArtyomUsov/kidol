import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import HeaderMain from '../Components/HeaderMain';
import { FooterMain } from '../Components/FooterMain';
import one from '../img/homeOne/1.webp';
import five from '../img/Contact Us/5.webp';
import six from '../img/Contact Us/6.webp';
import seven from '../img/Contact Us/7.webp';
import { Link } from 'react-router-dom';
import { HomeOne } from '../date/Items';

export function Contact() {
	return (
		<>
			<HeaderMain />
			<section className='page-title-area' style={{}}>
				<div className='shape-top'>
					<img className='bg-img' src={one} />
				</div>
				<div className='container' style={{}}>
					<div className='row align-items-center' style={{}}>
						<div className='col-lg-12 m-auto' style={{}}>
							<div className='page-title-content text-center' style={{}}>
								<h2 className='title h2' style={{}}>
									Contact Us
								</h2>
								<div className='bread-crumbs' style={{}}>
									<Link to={HomeOne}>Home</Link>
									<span className='breadcrumb-sep' style={{}}>
										{' '}
										//{' '}
									</span>
									<span className='active' style={{}}>
										{' '}
										Contact Us
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='contact-area' style={{}}>
				<div className='container' style={{}}>
					<div className='contact-page-wrap' style={{}}>
						<div className='row' style={{}}>
							<div className='col-lg-10 m-auto' style={{}}>
								<div className='contact-info-items text-center' style={{}}>
									<div className='row row-gutter-80' style={{}}>
										<div className='col-sm-6 col-md-4' style={{}}>
											<div className='contact-info-item' style={{}}>
												<div className='icon' style={{}}>
													<img className='icon-img' src={five} alt='Icon' style={{}} />
												</div>
												<h2 style={{}}>Address</h2>
												<div className='content' style={{}}>
													<p style={{}}>Your address goes here</p>
												</div>
											</div>
										</div>
										<div className='col-sm-6 col-md-4' style={{}}>
											<div className='contact-info-item mt-xs-30' style={{}}>
												<div className='icon' style={{}}>
													<img className='icon-img' src={six} alt='Icon' style={{}} />
												</div>
												<h2 style={{}}>Phone No</h2>
												<div className='content' style={{}}>
													<a href='tel://+00123456789' style={{}}>
														+ 00 123 456 789
													</a>
												</div>
											</div>
										</div>
										<div className='col-sm-6 col-md-4' style={{}}>
											<div className='contact-info-item mt-sm-30' style={{}}>
												<div className='icon' style={{}}>
													<img className='icon-img' src={seven} alt='Icon' style={{}} />
												</div>
												<h2 style={{}}>Email / Web</h2>
												<div className='content' style={{}}>
													<a href='mailto://demo@example.com' style={{}}>
														demo@example.com
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='row' style={{}}>
							<div className='col-lg-12' style={{}}>
								<div className='contact-map-area' style={{}}>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185374!2d144.95373631590425!3d-37.81720974201477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2ssg!4v1607294780661!5m2!1sen!2ssg'
										style={{}}
									></iframe>
								</div>
							</div>
						</div>
						<div className='row' style={{}}>
							<div className='col-lg-10 m-auto' style={{}}>
								<div className='contact-form' style={{}}>
									<form
										className='contact-form-wrapper'
										id='contact-form'
										action='https://whizthemes.com/mail-php/raju/arden/mail.php'
										method='post'
										style={{}}
									>
										<div className='row' style={{}}>
											<div className='col-lg-12' style={{}}>
												<div className='section-title' style={{}}>
													<h2 className='title' style={{}}>
														Send A Quest
													</h2>
												</div>
											</div>
										</div>
										<div className='row' style={{}}>
											<div className='col-lg-12' style={{}}>
												<div className='row' style={{}}>
													<div className='col-md-6' style={{}}>
														<div className='form-group' style={{}}>
															<input
																className='form-control'
																type='text'
																name='con_name'
																placeholder='Name *'
																style={{}}
															/>
														</div>
													</div>
													<div className='col-md-6' style={{}}>
														<div className='form-group' style={{}}>
															<input
																className='form-control'
																type='email'
																name='con_email'
																placeholder='Email *'
																style={{}}
															/>
														</div>
													</div>
													<div className='col-md-12' style={{}}>
														<div className='form-group' style={{}}>
															<input className='form-control' type='text' placeholder='Subject (Optinal)' style={{}} />
														</div>
													</div>
													<div className='col-md-12' style={{}}>
														<div className='form-group' style={{}}>
															<textarea
																className='form-control'
																name='con_message'
																placeholder='Message'
																style={{}}
															></textarea>
														</div>
													</div>
													<div className='col-md-12' style={{}}>
														<div className='form-group text-center' style={{}}>
															<button className='btn btn-theme' type='submit' style={{}}>
																Send Message
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
								<div className='form-message' style={{}}></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<FooterMain />
		</>
	);
}
