import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Footer.css';

export default class Footer extends Component {
	render() {
		return (
			<>
				<div className='footer-section section pt-65 pb-50'>
					<div className='container'>
						<div className='row'>
							<div className='col-12 d-flex justify-content-between flex-md-row flex-column text-center'>
								<h1>Make your website come to life quickly.</h1>
								<a rel='noreferrer' className='buy-btn bottom-btn' target='_blank' href='https://www.google.com/?hl=RU'>
									buy kidol
								</a>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
