import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOne, ProductDetails } from '../date/Path';
import nav3 from '../img/shop/nav3.webp';

interface ProductProps {
	product: {
		id: number;
		title: string;
		image: string;
		description: string;
		link: string;
		price: number;
		rating: string;
		category: string;
	};
}

function Cart() {
	const [cartItems, setCartItems] = React.useState<ProductProps[]>([]); // Используем хук состояния с типом ProductProps[]

	const handleAddToCart = (item: ProductProps) => {
		setCartItems([...cartItems, item]); // Добавляем товар в корзину
	};

	const handleRemoveItem = (itemId: number) => {
		setCartItems(cartItems.filter(item => item.product.id !== itemId)); // Удаляем товар из корзины по его ID
	};

	const renderCartItems = () => {
		return cartItems.map(item => (
			<div key={item.product.id}>
				<h3>{item.product.title}</h3>
				<p>{item.product.price}</p>
				<button onClick={() => handleRemoveItem(item.product.id)}>Remove</button>
				<tr>
					<td className='product-thumbnail'>
						<Link to={ProductDetails}>
							<img src={nav3} />
						</Link>
					</td>
					<td className='product-name'>
						<h5>
							<a href='shop-single-product.html'>Sassy Crib and Floor Mirror</a>
						</h5>
					</td>
					<td className='product-price'>
						<span className='amount'>$120.00</span>
					</td>
					<td className='cart-quality'>
						<div className='product-details-quality'>
							<input
								type='number'
								className='input-text qty text'
								step='1'
								min='1'
								max='100'
								name='quantity'
								value='1'
								title='Qty'
								placeholder=''
							/>
						</div>
					</td>
					<td className='product-total'>
						<span>$120.00</span>
					</td>
					<td className='product-remove'>
						<a>
							<i className='ion-ios-trash' onClick={() => handleRemoveItem(item.product.id)}></i>
						</a>
					</td>
				</tr>
			</div>
		));
	};

	const calculateTotal = () => {
		const total = cartItems.reduce((accumulator, item) => accumulator + item.product.price, 0); // Суммируем цены всех товаров в корзине
		return total.toFixed(2); // Округляем до двух знаков после запятой
	};

	return (
		<section className='product-area cart-page-area'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 m-auto'>
						<div className='section-title text-center'>
							<h2 className='title'>Cart</h2>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='cart-table-wrap'>
							<div className='cart-table table-responsive'>
								<table>
									<thead>
										<tr>
											<th className='width-thumbnail'></th>
											<th className='width-name'>Product</th>
											<th className='width-price'> Price</th>
											<th className='width-quantity'>Quantity</th>
											<th className='width-subtotal'>Subtotal</th>
											<th className='width-remove'></th>
										</tr>
									</thead>
									<tbody>{cartItems.length > 0 ? <>{renderCartItems()}</> : <p>Your cart is empty.</p>}</tbody>
								</table>
							</div>
						</div>
						<div className='cart-shiping-update-wrapper'>
							<div className='cart-shiping-btn continure-btn'>
								<a className='btn btn-link' href='shop.html'>
									<i className='ion-ios-arrow-back'></i> Back To Shop
								</a>
							</div>
							<div className='cart-shiping-btn update-btn'>
								<a className='btn btn-link' href='shop.html'>
									<i className='ion-ios-refresh'></i> Back To Shop
								</a>
							</div>
						</div>
					</div>
					<div className='col-lg-4'></div>
				</div>
				<div className='row'>
					<div className='col-md-6 col-lg-4'>
						<div className='cart-calculate-discount-wrap mb-40'>
							<h4>Calculate shipping </h4>
							<div className='calculate-discount-content'>
								<div className='select-style'>
									<select className='select-active'>
										<option>Bangladesh</option>
										<option>Bahrain</option>
										<option>Azerbaijan</option>
										<option>Barbados</option>
										<option>Barbados</option>
									</select>
								</div>
								<div className='select-style'>
									<select className='select-active'>
										<option>State / County</option>
										<option>Bahrain</option>
										<option>Azerbaijan</option>
										<option>Barbados</option>
										<option>Barbados</option>
									</select>
								</div>
								<div className='input-style'>
									<input type='text' placeholder='Town / City' />
								</div>
								<div className='input-style'>
									<input type='text' placeholder='Postcode / ZIP' />
								</div>
								<div className='calculate-discount-btn'>
									<a className='btn btn-link' href='#/'>
										Update
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-6 col-lg-4'>
						<div className='cart-calculate-discount-wrap mb-40'>
							<h4>Coupon Discount </h4>
							<div className='calculate-discount-content'>
								<p>Enter your coupon code if you have one.</p>
								<div className='input-style'>
									<input type='text' placeholder='Coupon code' />
								</div>
								<div className='calculate-discount-btn'>
									<a className='btn btn-link' href='#/'>
										Apply Coupon
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-12 col-lg-4'>
						<div className='grand-total-wrap'>
							<div className='grand-total-content'>
								<h3>
									Subtotal <span>{calculateTotal()}</span>
								</h3>
								<div className='grand-shipping'>
									<span>Shipping</span>
									<ul>
										<li>
											<input type='radio' name='shipping' value='info' />
											<label>Free shipping</label>
										</li>
										<li>
											<input type='radio' name='shipping' value='info' />
											<label>
												Flat rate: <span>$100.00</span>
											</label>
										</li>
										<li>
											<input type='radio' name='shipping' value='info' />
											<label>
												Local pickup: <span>$120.00</span>
											</label>
										</li>
									</ul>
								</div>
								<div className='shipping-country'>
									<p>Shipping to Bangladesh</p>
								</div>
								<div className='grand-total'>
									<h4>
										Total <span>добавить функцию учёта скидок и акций</span>
									</h4>
								</div>
							</div>
							<div className='grand-total-btn'>
								<a className='btn btn-link' href='shop-checkout.html'>
									Proceed to checkout
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cart;
