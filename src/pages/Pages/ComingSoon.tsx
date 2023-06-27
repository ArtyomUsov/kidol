import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import logo from '../../img/logo.webp';
import ButtonScrollTop from '../../Components/ButtonScrollTop';
import { Link } from 'react-router-dom';
import { HomeOne } from '../../date/Items';

export function ComingSoon() {
	return (
		<>
			<header className='header-area header-default header-transparent header-style'>
				<div className='container'>
					<div className='row row-gutter-0 justify-content-center'>
						<div className='col-4 col-xs-3 col-sm-3 col-md-3 col-xl-3'>
							<div className='header-logo-area d-block'>
								<Link to={HomeOne}>
									<img className='logo-main' src={logo} alt='Logo' />
									<img className='logo-light' src={logo} alt='Logo' />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
			<section className='coming-soon-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 m-auto'>
							<div className='coming-soon-content text-center'>
								<h1 className='h1'>
									Left <span>215</span> Days
								</h1>
								<p>
									{' '}
									We’re working on a new and exciting product that we think you’ll really like! Enter your email address
									to be the fisrt to know when we lauch it..
								</p>
								<div className='subscribe-form'>
									<form>
										<i className='fa fa-envelope-o'></i>
										<div className='input-content'>
											<input
												className='email'
												type='email'
												// required=""
												placeholder='Enter your email...'
												name='EMAIL'
											/>
											<div className='submit-btn'>
												<input className='button' type='submit' name='subscribe' value='NOTIFY ME' />
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ButtonScrollTop />
		</>
	);
}
