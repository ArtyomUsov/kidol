import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';

export const Sidebar = () => {
	const [selectedValue, setSelectedValue] = useState('Radio1');
	const [selectedValue1, setSelectedValue1] = useState('Radio5');

	const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedValue(event.target.value);
	};
	const handleChange1 = (event: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedValue1(event.target.value);
	};
	return (
		<>
			<div className='sidebar-area shop-sidebar-area'>
				<div className='widget-item'>
					<div className='widget-title'>
						<h3 className='title'>Product Categories</h3>
					</div>
					<div className='widget-body'>
						<div className='widget-categories'>
							<ul>
								<li>
									<a href='shop.html'>
										Accesasories <span>(6)</span>
									</a>
								</li>
								<li>
									<a href='shop.html'>
										Computer <span>(4)</span>
									</a>
								</li>
								<li>
									<a href='shop.html'>
										Covid-19 <span>(2)</span>
									</a>
								</li>
								<li>
									<a href='shop.html'>
										Electronics <span>(6)</span>
									</a>
								</li>
								<li>
									<a href='shop.html'>
										Frame Sunglasses <span>(12)</span>
									</a>
								</li>
								<li>
									<a href='shop.html'>
										Furniture <span>(7)</span>
									</a>
								</li>
								<li>
									<a href='shop.html'>
										Genuine Leather <span>(9)</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='widget-item'>
					<div className='widget-filter'>
						<div className='widget-title'>
							<h3 className='title'>Price Filter</h3>
						</div>
						<div className='widget-body'>
							<div className='widget-price-filter'>
								<div className='slider-labels'>
									<div className='caption'>
										<span id='slider-range-value1'>$16</span>
									</div>
									<span className='range-separator'></span>
									<div className='caption'>
										<span id='slider-range-value2'>$306</span>
									</div>
								</div>
								<div className='slider-range noUi-target noUi-ltr noUi-horizontal noUi-background' id='slider-range'>
									<div className='noUi-base'>
										<div className='noUi-origin noUi-connect' style={{ left: '0%' }}>
											<div className='noUi-handle noUi-handle-lower'></div>
										</div>
										<div className='noUi-origin noUi-background' style={{ left: '75.5208%' }}>
											<div className='noUi-handle noUi-handle-upper'></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='widget-item'>
					<div className='widget-title'>
						<h3 className='title'>Color</h3>
					</div>
					<div className='widget-body'>
						<div className='widget-color'>
							<div className='form-check'>
								<input
									className='form-check-input red'
									type='radio'
									value='Radio1'
									checked={selectedValue === 'Radio1'}
									onChange={handleChange}
								/>
								<label className='form-check-label'>Red (12)</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input black'
									type='radio'
									value='Radio2'
									checked={selectedValue === 'Radio2'}
									onChange={handleChange}
								/>
								<label className='form-check-label'>Light Black (09)</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input blue'
									type='radio'
									value='Radio3'
									checked={selectedValue === 'Radio3'}
									onChange={handleChange}
								/>
								<label className='form-check-label'>Dark Blue (07)</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input gray'
									type='radio'
									value='Radio4'
									checked={selectedValue === 'Radio4'}
									onChange={handleChange}
								/>
								<label className='form-check-label'>Gray (11)</label>
							</div>
						</div>
					</div>
				</div>
				<div className='widget-item mb-md-0'>
					<div className='widget-title'>
						<h3 className='title'>Size</h3>
					</div>
					<div className='widget-body'>
						<div className='widget-size'>
							<div className='form-check'>
								<input
									className='form-check-input black'
									type='radio'
									value='Radio5'
									checked={selectedValue1 === 'Radio5'}
									onChange={handleChange1}
								/>
								<label className='form-check-label'>M (12)</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input black'
									type='radio'
									value='Radio6'
									checked={selectedValue1 === 'Radio6'}
									onChange={handleChange1}
								/>
								<label className='form-check-label'>L (09)</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input black'
									type='radio'
									value='Radio7'
									checked={selectedValue1 === 'Radio7'}
									onChange={handleChange1}
								/>
								<label className='form-check-label'>XL (07)</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input black'
									type='radio'
									value='Radio8'
									checked={selectedValue1 === 'Radio8'}
									onChange={handleChange1}
								/>
								<label className='form-check-label'>XXL (11)</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
