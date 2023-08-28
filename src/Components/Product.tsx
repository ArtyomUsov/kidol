import React, { useState } from 'react';
import { IProduct, ProductProps } from '../date/models';
import { Products } from '../date/Products';
import { Link } from 'react-router-dom';
import { Compare, Wishlist } from '../date/Path';
import { ProductQuickView } from './ProductQuickView';

export const ProductArea: IProduct[] = Products.filter(product => product.id < 9);

// export function Product({ product, className, handleAddToCart, cartItems, handleRemoveFromCart }: ProductProps) {
// 	const addToCart = () => {
// 		handleAddToCart(product);
// 	};
export function Product({ product, className }: ProductProps) {
	const [ActiveTab, setActiveTab] = useState(false);

	const handleClick = () => {
		setActiveTab(prev => !prev);
	};
	return (
		<>
			<div className='product-item'>
				<div className='product-thumb'>
					<img src={product.image} />
					<div className='product-action'>
						<a className='action-quick-view'>
							<i
								className='ion-ios-cart'
								// onClick={addToCart}
							></i>
						</a>
						<Link to={''} className='action-quick-view' onClick={handleClick}>
							<i className='ion-ios-expand'></i>
						</Link>
						<Link to={Wishlist} className='action-quick-view'>
							<i className='ion-ios-heart'></i>
						</Link>
						<Link to={Compare} className='action-quick-view'>
							<i className='ion-ios-shuffle'></i>
						</Link>
					</div>
				</div>
				<div className='product-info'>
					<div className='rating'>
						<span className='fa fa-star'></span>
						<span className='fa fa-star'></span>
						<span className='fa fa-star'></span>
						<span className='fa fa-star'></span>
						<span className='fa fa-star'></span>
					</div>
					<h4 className='title'>
						<Link to={product.link}>
							<a>{product.title}</a>
						</Link>
					</h4>
					<div className='prices'>
						<span className='price'>${product.price}</span>
					</div>
					<p className={`product-item-description ${className}`}>{product.description}</p>
				</div>
			</div>
			<div>{ActiveTab && <ProductQuickView setActive={setActiveTab} />}</div>
		</>
	);
}

export default Product;
