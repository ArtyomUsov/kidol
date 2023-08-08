import React, { useState } from 'react';
import { IProduct } from '../date/models';
import { Products } from '../date/Products';
import { CartPage, Compare, Wishlist } from '../date/Path';
import { Link } from 'react-router-dom';

// interface ProductProps {
// 	product: IProduct;
// 	className: string;
// }
interface ProductSlideProps {
	product: IProduct;
	handleAddToCart: (product: IProduct) => void;
	cartItems: IProduct[];
	handleRemoveFromCart: (productId: number) => void;
}

export function ProductSlide({ product, handleAddToCart, cartItems, handleRemoveFromCart }: ProductSlideProps) {
	const addToCart = () => {
		handleAddToCart(product);
	};
	const [ActiveTab, setActiveTab] = useState(false);

	const handleClick = () => {
		setActiveTab(prev => !prev);
	};
	return (
		<>
			<div className='slide'>
				<div className='product-item '>
					<div className='product-thumb'>
						<img src={product.image} alt='Image' />
						<div className='product-action'>
							<a className='action-quick-view'>
								<i className='ion-ios-cart' onClick={addToCart}></i>
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
							<span className='price'>{product.price}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductSlide;
