import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/FooterMain';
import one from '../../img/homeOne/1.webp';
import { Link } from 'react-router-dom';
import { HomeOne, LoginRegister } from '../../date/Items';
import ButtonScrollTop from '../../Components/ButtonScrollTop';

export function MyAccount() {
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
									My Account
								</h2>
								<div className='bread-crumbs' style={{}}>
									<Link to={HomeOne}>Home</Link>
									<span className='breadcrumb-sep' style={{}}>
										{' '}
										//{' '}
									</span>
									<span className='active' style={{}}>
										{' '}
										My Account
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='my-account-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 m-auto'>
							<div className='section-title text-center'>
								<h2 className='title'>My account</h2>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='myaccount-page-wrapper'>
								<div className='row'>
									<div className='col-lg-3 col-md-4'>
										<nav>
											<div className='myaccount-tab-menu nav nav-tabs' id='nav-tab' role='tablist'>
												<button
													className='nav-link active'
													id='dashboad-tab'
													data-bs-toggle='tab'
													data-bs-target='#dashboad'
													type='button'
													role='tab'
													aria-controls='dashboad'
													aria-selected='true'
												>
													Dashboard
												</button>
												<button
													className='nav-link'
													id='orders-tab'
													data-bs-toggle='tab'
													data-bs-target='#orders'
													type='button'
													role='tab'
													aria-controls='orders'
													aria-selected='false'
												>
													{' '}
													Orders
												</button>
												<button
													className='nav-link'
													id='download-tab'
													data-bs-toggle='tab'
													data-bs-target='#download'
													type='button'
													role='tab'
													aria-controls='download'
													aria-selected='false'
												>
													Download
												</button>
												<button
													className='nav-link'
													id='payment-method-tab'
													data-bs-toggle='tab'
													data-bs-target='#payment-method'
													type='button'
													role='tab'
													aria-controls='payment-method'
													aria-selected='false'
												>
													Payment Method
												</button>
												<button
													className='nav-link'
													id='address-edit-tab'
													data-bs-toggle='tab'
													data-bs-target='#address-edit'
													type='button'
													role='tab'
													aria-controls='address-edit'
													aria-selected='false'
												>
													address
												</button>
												<button
													className='nav-link'
													id='account-info-tab'
													data-bs-toggle='tab'
													data-bs-target='#account-info'
													type='button'
													role='tab'
													aria-controls='account-info'
													aria-selected='false'
												>
													Account Details
												</button>
												<Link to={LoginRegister}>
													<button className='nav-link' type='button'>
														Logout
													</button>
												</Link>
											</div>
										</nav>
									</div>
									<div className='col-lg-9 col-md-8'>
										<div className='tab-content' id='nav-tabContent'>
											<div
												className='tab-pane fade show active'
												id='dashboad'
												role='tabpanel'
												aria-labelledby='dashboad-tab'
											>
												<div className='myaccount-content'>
													<h3>Dashboard</h3>
													<div className='welcome'>
														<p>
															Hello, <strong>Alex Tuntuni</strong> (If Not <strong>Tuntuni !</strong>
															<Link to={LoginRegister}>
																<a className='logout'> Logout</a>
															</Link>
															)
														</p>
													</div>
													<p className='mb-0'>
														From your account dashboard. you can easily check &amp; view your recent orders, manage your
														shipping and billing addresses and edit your password and account details.
													</p>
												</div>
											</div>
											<div className='tab-pane fade' id='orders' role='tabpanel' aria-labelledby='orders-tab'>
												<div className='myaccount-content'>
													<h3>Orders</h3>
													<div className='myaccount-table table-responsive text-center'>
														<table className='table table-bordered'>
															<thead className='thead-light'>
																<tr>
																	<th>Order</th>
																	<th>Date</th>
																	<th>Status</th>
																	<th>Total</th>
																	<th>Action</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>1</td>
																	<td>Aug 22, 2018</td>
																	<td>Pending</td>
																	<td>$3000</td>
																	<td>
																		<a href='shop-cart.html' className='check-btn sqr-btn '>
																			View
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>2</td>
																	<td>July 22, 2018</td>
																	<td>Approved</td>
																	<td>$200</td>
																	<td>
																		<a href='shop-cart.html' className='check-btn sqr-btn '>
																			View
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>3</td>
																	<td>June 12, 2017</td>
																	<td>On Hold</td>
																	<td>$990</td>
																	<td>
																		<a href='shop-cart.html' className='check-btn sqr-btn '>
																			View
																		</a>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
											<div className='tab-pane fade' id='download' role='tabpanel' aria-labelledby='download-tab'>
												<div className='myaccount-content'>
													<h3>Downloads</h3>
													<div className='myaccount-table table-responsive text-center'>
														<table className='table table-bordered'>
															<thead className='thead-light'>
																<tr>
																	<th>Product</th>
																	<th>Date</th>
																	<th>Expire</th>
																	<th>Download</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>Kidol - Kids Toys Store eCommerce Template</td>
																	<td>Aug 22, 2022</td>
																	<td>Yes</td>
																	<td>
																		<a href='#/' className='check-btn sqr-btn'>
																			<i className='fa fa-cloud-download'></i> Download File
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>HasTech - Profolio Business Template</td>
																	<td>Sep 12, 2022</td>
																	<td>Never</td>
																	<td>
																		<a href='#/' className='check-btn sqr-btn'>
																			<i className='fa fa-cloud-download'></i> Download File
																		</a>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
											<div
												className='tab-pane fade'
												id='payment-method'
												role='tabpanel'
												aria-labelledby='payment-method-tab'
											>
												<div className='myaccount-content'>
													<h3>Payment Method</h3>
													<p className='saved-message'>You Can't Saved Your Payment Method yet.</p>
												</div>
											</div>
											<div
												className='tab-pane fade'
												id='address-edit'
												role='tabpanel'
												aria-labelledby='address-edit-tab'
											>
												<div className='myaccount-content'>
													<h3>Billing Address</h3>
													<address>
														<p>
															<strong>Alex Tuntuni</strong>
														</p>
														<p>
															1355 Market St, Suite 900 <br />
															San Francisco, CA 94103
														</p>
														<p>Mobile: (123) 456-7890</p>
													</address>
													<a href='#/' className='check-btn sqr-btn'>
														<i className='fa fa-edit'></i> Edit Address
													</a>
												</div>
											</div>
											<div
												className='tab-pane fade'
												id='account-info'
												role='tabpanel'
												aria-labelledby='account-info-tab'
											>
												<div className='myaccount-content'>
													<h3>Account Details</h3>
													<div className='account-details-form'>
														<form action='#'>
															<div className='row'>
																<div className='col-lg-6'>
																	<div className='single-input-item'>
																		<label
																			// for="first-name"
																			className='required'
																		>
																			First Name
																		</label>
																		<input type='text' id='first-name' />
																	</div>
																</div>
																<div className='col-lg-6'>
																	<div className='single-input-item'>
																		<label
																			// for="last-name"
																			className='required'
																		>
																			Last Name
																		</label>
																		<input type='text' id='last-name' />
																	</div>
																</div>
															</div>
															<div className='single-input-item'>
																<label
																	// for="display-name"
																	className='required'
																>
																	Display Name
																</label>
																<input type='text' id='display-name' />
															</div>
															<div className='single-input-item'>
																<label
																	// for="email"
																	className='required'
																>
																	Email Addres
																</label>
																<input type='email' id='email' />
															</div>
															<fieldset>
																<legend>Password change</legend>
																<div className='single-input-item'>
																	<label
																		// for="current-pwd"
																		className='required'
																	>
																		Current Password
																	</label>
																	<input type='password' id='current-pwd' />
																</div>
																<div className='row'>
																	<div className='col-lg-6'>
																		<div className='single-input-item'>
																			<label
																				// for="new-pwd"
																				className='required'
																			>
																				New Password
																			</label>
																			<input type='password' id='new-pwd' />
																		</div>
																	</div>
																	<div className='col-lg-6'>
																		<div className='single-input-item'>
																			<label
																				// for="confirm-pwd"
																				className='required'
																			>
																				Confirm Password
																			</label>
																			<input type='password' id='confirm-pwd' />
																		</div>
																	</div>
																</div>
															</fieldset>
															<div className='single-input-item'>
																<button className='check-btn sqr-btn'>Save Changes</button>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
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
