import React, { useState } from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/Footer';
import one from '../../img/homeOne/1.webp';
import { Link } from 'react-router-dom';
import { HomeOne, MyAccount } from '../../date/Path';
import ButtonScrollTop from '../../Components/ButtonScrollTop';

export function LoginRegister() {
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
								<h2 className='title h2'>My Account</h2>
								<div className='bread-crumbs'>
									<Link to={HomeOne}>Home</Link>
									<span className='breadcrumb-sep'> // </span>
									<span className='active'> My Account</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='login-register-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-5 login-register-border'>
							<div className='login-register-content'>
								<div className='login-register-title mb-30'>
									<h2>Login</h2>
									<p>Welcome back! Please enter your username and password to login. </p>
								</div>
								<div className='login-register-style login-register-pr'>
									<form action='#' method='post'>
										<div className='login-register-input'>
											<input type='text' name='user-name' placeholder='Username or email address' />
										</div>
										<div className='login-register-input'>
											<input type='password' name='user-password' placeholder='Password' />
											<div className='forgot'>
												<a href='#'>Forgot?</a>
											</div>
										</div>
										<div className='remember-me-btn'>
											<input type='checkbox' />
											<label>Remember me</label>
										</div>
										<div className='btn-style-3'>
											<Link to={MyAccount}>
												<button className='btn' type='button'>
													Login
												</button>
											</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className='col-md-7'>
							<div className='login-register-content login-register-pl'>
								<div className='login-register-title mb-30'>
									<h2>Register</h2>
									<p>Create new account today to reap the benefits of a personalized shopping experience. </p>
								</div>
								<div className='login-register-style'>
									<form action='#' method='post'>
										<div className='login-register-input'>
											<input type='text' name='user-name' placeholder='Username' />
										</div>
										<div className='login-register-input'>
											<input type='text' name='user-name' placeholder='E-mail address' />
										</div>
										<div className='login-register-input'>
											<input type='password' name='user-password' placeholder='Password' />
										</div>
										<div className='login-register-paragraph'>
											<p>
												Your personal data will be used to support your experience throughout this website, to manage
												access to your account, and for other purposes described in our <a href='#'>privacy policy.</a>
											</p>
										</div>
										<div className='btn-style-3'>
											<Link to={MyAccount}>
												<button className='btn' type='button'>
													Register
												</button>
											</Link>
										</div>
									</form>
									<div className='register-benefits'>
										<h3>Sign up today and you will be able to :</h3>
										<p>
											The Loke Buyer Protection has you covered from click to delivery. Sign up <br />
											or sign in and you will be able to:
										</p>
										<ul>
											<li>
												<i className='pe-7s-check icons'></i> Speed your way through checkout
											</li>
											<li>
												<i className='pe-7s-check icons'></i> Track your orders easily
											</li>
											<li>
												<i className='pe-7s-check icons'></i> Keep a record of all your purchases
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<FooterMain />
			<ButtonScrollTop />
		</>
	);
}
