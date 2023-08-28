import React, { useEffect, useState } from 'react';
import { Products } from '../date/Products';
// import { IProduct, CartProps } from '../date/models';

// function Cart({ cartItems: propsCartItems, handleAddToCart }: CartProps) {
// 	const [cartItems, setCartItems] = useState<IProduct[]>(() => {
// 		const savedCartItems = localStorage.getItem('cartItems');
// 		const parsedCartItems = savedCartItems ? JSON.parse(savedCartItems) : [];
// 		return [...parsedCartItems, ...propsCartItems];
// 	});

// 	console.log(cartItems);
// 	useEffect(() => {
// 		localStorage.setItem('cartItems', JSON.stringify(cartItems));
// 	}, [cartItems]);

// 	const handleRemoveFromCart = (itemId: number) => {
// 		const updatedCartItems = cartItems.filter(item => item.id !== itemId);
// 		setCartItems(updatedCartItems);
// 	};

// 	const renderCartItems = () => {
// 		const firstThreeItems = Products.slice(0, 3);
// 		console.log(renderCartItems);
// 		return firstThreeItems.map((item: IProduct) => (
// 			<tr key={item.id}>
// 				<td className='product-thumbnail'>
// 					<a>
// 						<img src={item.image} alt='описание товара' />
// 					</a>
// 				</td>
// 				<td className='product-name'>
// 					<h5>
// 						<a href='shop-single-product.html'>{item.title}</a>
// 					</h5>
// 				</td>
// 				<td className='product-price'>
// 					<span className='amount'>{item.price}</span>
// 				</td>
// 				<td className='cart-quality'>
// 					<div className='product-details-quality'>
// 						<input
// 							type='number'
// 							className='input-text qty text'
// 							step='1'
// 							min='1'
// 							max='100'
// 							name='quantity'
// 							value='1'
// 							title='Qty'
// 							placeholder=''
// 						/>
// 					</div>
// 				</td>
// 				<td className='product-total'>
// 					<span>{item.price}</span>
// 				</td>
// 				<td className='product-remove'>
// 					<a>
// 						<i className='ion-ios-trash' onClick={() => handleRemoveFromCart(item.id)}></i>
// 					</a>
// 				</td>
// 			</tr>
// 		));
// 	};

// 	const calculateTotal = () => {
// 		const total = cartItems.reduce((accumulator, item) => accumulator + item.price, 0); // Суммируем цены всех товаров в корзине
// 		return total.toFixed(2); // Округляем до двух знаков после запятой
// 	};

// 	return (
// 		<div>
// 			<section className='product-area cart-page-area'>
// 				<div className='container'>
// 					<div className='row'>
// 						<div className='col-lg-6 m-auto'>
// 							<div className='section-title text-center'>
// 								<h2 className='title'>Cart</h2>
// 							</div>
// 						</div>
// 					</div>
// 					<div className='row'>
// 						<div className='col-lg-12'>
// 							<div className='cart-table-wrap'>
// 								<div className='cart-table table-responsive'>
// 									<table>
// 										<thead>
// 											<tr>
// 												<th className='width-thumbnail'></th>
// 												<th className='width-name'>Product</th>
// 												<th className='width-price'> Price</th>
// 												<th className='width-quantity'>Quantity</th>
// 												<th className='width-subtotal'>Subtotal</th>
// 												<th className='width-remove'></th>
// 											</tr>
// 										</thead>
// 										<tbody>
// 											{cartItems.length > 0 ? (
// 												<>{renderCartItems()}</>
// 											) : (
// 												<tr className='section-title'>
// 													<td className='text-center'>
// 														<i className='ion-ios-cart'></i>
// 													</td>
// 													<td> Your cart is empty</td>
// 												</tr>
// 											)}
// 										</tbody>
// 									</table>
// 								</div>
// 							</div>
// 							<div className='cart-shiping-update-wrapper'>
// 								<div className='cart-shiping-btn continure-btn'>
// 									<a className='btn btn-link' href='shop.html'>
// 										<i className='ion-ios-arrow-back'></i> Back To Shop
// 									</a>
// 								</div>
// 								<div className='cart-shiping-btn update-btn'>
// 									<a className='btn btn-link' href='shop.html'>
// 										<i className='ion-ios-refresh'></i> Back To Shop
// 									</a>
// 								</div>
// 							</div>
// 						</div>
// 						<div className='col-lg-4'></div>
// 					</div>
// 					<div className='row'>
// 						<div className='col-md-6 col-lg-4'>
// 							<div className='cart-calculate-discount-wrap mb-40'>
// 								<h4>Calculate shipping </h4>
// 								<div className='calculate-discount-content'>
// 									<div className='select-style'>
// 										<select className='select-active'>
// 											<option>Bangladesh</option>
// 											<option>Bahrain</option>
// 											<option>Azerbaijan</option>
// 											<option>Barbados</option>
// 											<option>Barbados</option>
// 										</select>
// 									</div>
// 									<div className='select-style'>
// 										<select className='select-active'>
// 											<option>State / County</option>
// 											<option>Bahrain</option>
// 											<option>Azerbaijan</option>
// 											<option>Barbados</option>
// 											<option>Barbados</option>
// 										</select>
// 									</div>
// 									<div className='input-style'>
// 										<input type='text' placeholder='Town / City' />
// 									</div>
// 									<div className='input-style'>
// 										<input type='text' placeholder='Postcode / ZIP' />
// 									</div>
// 									<div className='calculate-discount-btn'>
// 										<a className='btn btn-link' href='#/'>
// 											Update
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className='col-md-6 col-lg-4'>
// 							<div className='cart-calculate-discount-wrap mb-40'>
// 								<h4>Coupon Discount </h4>
// 								<div className='calculate-discount-content'>
// 									<p>Enter your coupon code if you have one.</p>
// 									<div className='input-style'>
// 										<input type='text' placeholder='Coupon code' />
// 									</div>
// 									<div className='calculate-discount-btn'>
// 										<a className='btn btn-link' href='#/'>
// 											Apply Coupon
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className='col-md-12 col-lg-4'>
// 							<div className='grand-total-wrap'>
// 								<div className='grand-total-content'>
// 									<h3>
// 										Subtotal <span>{calculateTotal()}</span>
// 									</h3>
// 									<div className='grand-shipping'>
// 										<span>Shipping</span>
// 										<ul>
// 											<li>
// 												<input type='radio' name='shipping' value='info' />
// 												<label>Free shipping</label>
// 											</li>
// 											<li>
// 												<input type='radio' name='shipping' value='info' />
// 												<label>
// 													Flat rate: <span>$100.00</span>
// 												</label>
// 											</li>
// 											<li>
// 												<input type='radio' name='shipping' value='info' />
// 												<label>
// 													Local pickup: <span>$120.00</span>
// 												</label>
// 											</li>
// 										</ul>
// 									</div>
// 									<div className='shipping-country'>
// 										<p>Shipping to Bangladesh</p>
// 									</div>
// 									<div className='grand-total'>
// 										<h4>
// 											Total <span>добавить функцию учёта скидок и акций</span>
// 										</h4>
// 									</div>
// 								</div>
// 								<div className='grand-total-btn'>
// 									<a className='btn btn-link' href='shop-checkout.html'>
// 										Proceed to checkout
// 									</a>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</div>
// 	);
// }

// export default Cart;
