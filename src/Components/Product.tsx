import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import "../Components/Item.css";
import React from 'react';
import { IProduct } from '../date/models';
import { Products } from '../date/Products';
import { Link } from 'react-router-dom';


interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {


    return(
        <>
            <div className="col-lg-3 col-md-4 col-sm-6">
                {/* Start Product Item  */}
                <div className="product-item">
                <div className="product-thumb">
                    <img src={ product.image } alt="Image"/>
                        <div className="product-action">
                            <a className="action-quick-view" href="shop-cart.html"><i className="ion-ios-cart"></i></a>
                            <a className="action-quick-view" href="javascript:void(0)"><i className="ion-ios-expand"></i></a>
                            <a className="action-quick-view" href="shop-wishlist.html"><i className="ion-ios-heart"></i></a>
                            <a className="action-quick-view" href="shop-compare.html"><i className="ion-ios-shuffle"></i></a>
                        </div>
                    </div>
                    <div className="product-info">
                        <div className="rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        </div>
                        <h4 className="title"><Link to={product.link}><a>{ product.title }</a></Link></h4>
                        {/* <a href="shop-single-product.html">Funskool Teddy</a> */}
                        <div className="prices">
                        <span className="price">$190.12</span>
                        </div>
                    </div>
                </div>
                {/*End Product Item*/}
            </div>
        </>
    )
}

export default Product;
