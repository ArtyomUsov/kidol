import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Collapse } from 'react-bootstrap';
import React, { useState } from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/FooterMain';
import one from '../../img/homeOne/1.webp';
import payment3 from '../../img/payment-3.webp';
import { Link } from 'react-router-dom';
import { HomeOne } from '../../date/Items';
import ButtonScrollTop from '../../Components/ButtonScrollTop';

export function Checkout() {
	const [activeTab, setActiveTab] = useState(1);
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen1, setIsOpen1] = useState(false);
	const [selectedValue, setSelectedValue] = useState('Radio1');
	const [selectedValue1, setSelectedValue1] = useState('Radio4');
	const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedValue(event.target.value);
	};
	const handleChange1 = (event: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedValue1(event.target.value);
	};
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	const handleToggle1 = () => {
		setIsOpen1(!isOpen1);
	};
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
									Checkout
								</h2>
								<div className='bread-crumbs' style={{}}>
									<Link to={HomeOne}>Checkout</Link>
									<span className='breadcrumb-sep' style={{}}>
										{' '}
										//{' '}
									</span>
									<span className='active' style={{}}>
										{' '}
										Product
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='product-area shop-checkout-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 m-auto'>
							<div className='section-title text-center'>
								<h2 className='title'>Checkout</h2>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='checkout-coupon-wrap mb-65 mb-md-40'>
								<p className='cart-page-title'>
									<i className='ion-ios-pricetag'></i> Have a coupon?{' '}
									<a className='checkout-coupon-active' href='#/' onClick={handleToggle}>
										Click here to enter your code
									</a>
								</p>
								<Collapse in={isOpen}>
									<div className='checkout-coupon-content'>
										<form
										// form action="#"
										>
											<p>If you have a coupon code, please apply it below.</p>
											<input type='text' placeholder='Coupon code' />
											<button type='submit'>Apply coupon</button>
										</form>
									</div>
								</Collapse>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-7'>
							<div className='billing-info-wrap'>
								<h3>Billing Details</h3>
								<div className='row'>
									<div className='col-12'>
										<div className='billing-info mb-20'>
											<label>
												First name{' '}
												<abbr className='required' title='required'>
													*
												</abbr>
											</label>
											<input type='text' />
										</div>
									</div>
									<div className='col-12'>
										<div className='billing-info mb-20'>
											<label>
												Last name{' '}
												<abbr className='required' title='required'>
													*
												</abbr>
											</label>
											<input type='text' />
										</div>
									</div>
									<div className='col-12'>
										<div className='billing-info mb-20'>
											<label>
												Company name (optional){' '}
												<abbr className='required' title='required'>
													*
												</abbr>
											</label>
											<input type='text' />
										</div>
									</div>
									<div className='col-12'>
										<div className='billing-select mb-20'>
											<label>
												Country / Region{' '}
												<abbr className='required' title='required'>
													*
												</abbr>
											</label>
											<div className='select-style'>
												<select className='select-active'>
													<option>Bangladesh</option>
													<option>Bahrain</option>
													<option>Azerbaijan</option>
													<option>Barbados</option>
													<option>Barbados</option>
												</select>
											</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='billing-info mb-20'>
											<label>
												Street Address{' '}
												<abbr className='required' title='required'>
													*
												</abbr>
											</label>
											<input className='billing-address' placeholder='House number and street name' type='text' />
											<input placeholder='Apartment, suite, unit, etc. (optional)' type='text' />
										</div>
									</div>
									<div className='col-12'>
										<div className='billing-info mb-20'>
											<label>
												Town / City{' '}
												<abbr className='required' title='required'>
													*
												</abbr>
											</label>
											<input type='text' />
										</div>
									</div>
									<div className='col-12'>
										<div className='billing-select mb-20'>
											<label>
												District{' '}
												<abbr className='required' title='required'>
													*
												</abbr>
											</label>
											<div className='select-style'>
												<select className='select-active'>
													<option>Select an option…</option>
													<option>Barguna</option>
													<option>Bandarban</option>
													<option>Barbados</option>
													<option>Barbados</option>
												</select>
											</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='billing-info mb-20'>
											<label>
												Postcode / ZIP (optional){' '}
												<abbr className='required' title='required'>
													*
												</abbr>
											</label>
											<input type='text' />
										</div>
									</div>
									<div className='col-12'>
										<div className='billing-info mb-20'>
											<label>
												Phone{' '}
												<abbr className='required' title='required'>
													*
												</abbr>
											</label>
											<input type='text' />
										</div>
									</div>
									<div className='col-12'>
										<div className='billing-info mb-20'>
											<label>
												Email Address{' '}
												<abbr className='required' title='required'>
													*
												</abbr>
											</label>
											<input type='text' />
										</div>
									</div>
								</div>
								<div className='checkout-account'>
									<input className='checkout-toggle' type='checkbox' onChange={handleToggle1} />
									<span>Ship to a different address?</span>
								</div>
								<Collapse in={isOpen1}>
									<div className='mt-30'>
										<div className='row'>
											<div className='col-12'>
												<div className='billing-info mb-20'>
													<label>
														First name{' '}
														<abbr className='required' title='required'>
															*
														</abbr>
													</label>
													<input type='text' />
												</div>
											</div>
											<div className='col-12'>
												<div className='billing-info mb-20'>
													<label>
														Last name{' '}
														<abbr className='required' title='required'>
															*
														</abbr>
													</label>
													<input type='text' />
												</div>
											</div>
											<div className='col-12'>
												<div className='billing-info mb-20'>
													<label>
														Company name (optional){' '}
														<abbr className='required' title='required'>
															*
														</abbr>
													</label>
													<input type='text' />
												</div>
											</div>
											<div className='col-12'>
												<div className='billing-select mb-20'>
													<label>
														Country / Region{' '}
														<abbr className='required' title='required'>
															*
														</abbr>
													</label>
													<div className='select-style'>
														<select className='select-active'>
															<option>Bangladesh</option>
															<option>Bahrain</option>
															<option>Azerbaijan</option>
															<option>Barbados</option>
															<option>Barbados</option>
														</select>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='billing-info mb-20'>
													<label>
														Street Address{' '}
														<abbr className='required' title='required'>
															*
														</abbr>
													</label>
													<input className='billing-address' placeholder='House number and street name' type='text' />
													<input placeholder='Apartment, suite, unit, etc. (optional)' type='text' />
												</div>
											</div>
											<div className='col-12'>
												<div className='billing-info mb-20'>
													<label>
														Town / City{' '}
														<abbr className='required' title='required'>
															*
														</abbr>
													</label>
													<input type='text' />
												</div>
											</div>
											<div className='col-12'>
												<div className='billing-select mb-20'>
													<label>
														District{' '}
														<abbr className='required' title='required'>
															*
														</abbr>
													</label>
													<div className='select-style'>
														<select className='select-active'>
															<option>Select an option…</option>
															<option>Barguna</option>
															<option>Bandarban</option>
															<option>Barbados</option>
															<option>Barbados</option>
														</select>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='billing-info mb-20'>
													<label>
														Postcode / ZIP (optional){' '}
														<abbr className='required' title='required'>
															*
														</abbr>
													</label>
													<input type='text' />
												</div>
											</div>
											<div className='col-12'>
												<div className='billing-info mb-20'>
													<label>
														Phone{' '}
														<abbr className='required' title='required'>
															*
														</abbr>
													</label>
													<input type='text' />
												</div>
											</div>
											<div className='col-12'>
												<div className='billing-info mb-20'>
													<label>
														Email Address{' '}
														<abbr className='required' title='required'>
															*
														</abbr>
													</label>
													<input type='text' />
												</div>
											</div>
										</div>
									</div>
								</Collapse>
								<div className='additional-info-wrap'>
									<label>Order notes (optional)</label>
									<textarea
										placeholder='Notes about your order, e.g. special notes for delivery. '
										name='message'
									></textarea>
								</div>
							</div>
						</div>
						<div className='col-lg-5'>
							<div className='your-order-area'>
								<h3>Your order</h3>
								<div className='your-order-wrap'>
									<div className='your-order-info-wrap'>
										<div className='your-order-title'>
											<h4>
												Product <span>Subtotal</span>
											</h4>
										</div>
										<div className='your-order-product'>
											<ul>
												<li>
													Brother Hoodies in Grey × 4 <span>$140.00 </span>
												</li>
												<li>
													Enjoy The Rest T-Shirt × 1 <span>$39.59 </span>
												</li>
											</ul>
										</div>
										<div className='your-order-subtotal'>
											<h3>
												Subtotal <span>$617.59</span>
											</h3>
										</div>
										<div className='your-order-shipping'>
											<span>Shipping</span>
											<ul>
												<li>
													<input
														type='radio'
														name='shipping'
														value='Radio1'
														checked={selectedValue === 'Radio1'}
														onChange={handleChange}
													/>
													<label>Free shipping</label>
												</li>
												<li>
													<input
														type='radio'
														name='shipping'
														value='Radio2'
														checked={selectedValue === 'Radio2'}
														onChange={handleChange}
													/>
													<label>
														Flat rate: <span>$100.00</span>
													</label>
												</li>
												<li>
													<input
														type='radio'
														name='shipping'
														value='Radio3'
														checked={selectedValue === 'Radio3'}
														onChange={handleChange}
													/>
													<label>
														Local pickup: <span>$120.00</span>
													</label>
												</li>
											</ul>
										</div>
										<div className='your-order-total'>
											<h3>
												Total <span>$617.59 </span>
											</h3>
										</div>
									</div>
									<div className='payment-method'>
										<div className='sin-payment'>
											<input
												className='input-radio'
												type='radio'
												value='Radio4'
												checked={selectedValue1 === 'Radio4'}
												onChange={handleChange1}
												onClick={() => setActiveTab(1)}
											/>
											<label> Direct Bank Transfer </label>
											<Collapse in={activeTab === 1}>
												<div className='payment-box'>
													<p>
														Make your payment directly into our bank account. Please use your Order ID as the payment
														reference. Your order will not be shipped until the funds have cleared in our account.
													</p>
												</div>
											</Collapse>
										</div>
										<div className='sin-payment'>
											<input
												className='input-radio'
												type='radio'
												value='Radio5'
												checked={selectedValue1 === 'Radio5'}
												onChange={handleChange1}
												onClick={() => setActiveTab(2)}
											/>
											<label>Check payments</label>
											<Collapse in={activeTab === 2}>
												<div className='payment-box'>
													<p>
														Please send a check to Store Name, Store Street, Store Town, Store State / County, Store
														Postcode.
													</p>
												</div>
											</Collapse>
										</div>
										<div className='sin-payment'>
											<input
												className='input-radio'
												type='radio'
												value='Radio6'
												checked={selectedValue1 === 'Radio6'}
												onChange={handleChange1}
												onClick={() => setActiveTab(3)}
											/>
											<label>Cash on delivery </label>
											<Collapse in={activeTab === 3}>
												<div className='payment-box'>
													<p>Pay with cash upon delivery.</p>
												</div>
											</Collapse>
										</div>
										<div className='sin-payment sin-payment-3'>
											<input
												className='input-radio'
												type='radio'
												value='Radio7'
												checked={selectedValue1 === 'Radio7'}
												onChange={handleChange1}
												onClick={() => setActiveTab(4)}
											/>
											<label>
												PayPal <img src={payment3} />
												<a href='#'>What is PayPal?</a>
											</label>
											<Collapse in={activeTab === 4}>
												<div className='payment-box'>
													<p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
												</div>
											</Collapse>
										</div>
									</div>
									<div className='payment-condition'>
										<p>
											Your personal data will be used to process your order, support your experience throughout this
											website, and for other purposes described in our
											{/* for other purposes des */}
											<a href='#'> privacy policy</a>.
										</p>
									</div>
									<div className='payment-checkbox'>
										<input className='checkout-toggle' type='checkbox' onChange={handleToggle1} />
										<span>
											Ship to a different address? <a href='#'>terms and conditions *</a>
										</span>
									</div>
								</div>
								<div className='place-order'>
									<a href='#/'>Place Order</a>
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
