import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import HeaderMain from '../Components/HeaderMain';
import ButtonScrollTop from '../Components/ButtonScrollTop';
import { FooterMain } from '../Components/FooterMain';
import { Link } from 'react-router-dom';
import { HomeOne } from '../date/Items';

export function NotFound() {
	return (
		<>
			<HeaderMain />
			<section className='page-not-found-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 m-auto'>
							<div className='error-content text-center'>
								<h1>We Are Sorry, Page Not Found</h1>
								<p>
									Unfortunately the page you were looking for could not be found. It may be temporarily unavailable,
									moved or no longer exist. Check the Url you entered for any mistakes and try again.{' '}
									<Link to={HomeOne}>Back to Homepage</Link>
								</p>
								<div className='error-search'>
									<form action='#'>
										<input type='text' placeholder='Search for… ' />
										<button className='button-search'>
											<i className='pe-7s-search'></i>
										</button>
									</form>
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
