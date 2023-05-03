import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/HeaderMain.css";
import logo from "../img/logo.webp";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from "react-router-dom";

const HeaderMain = () => {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 100 ? "sticky" : "";
    setSticky(stickyClass);
  };

  const classes = ["header-area header-default sticky-header", sticky];

  return (
    <>
        <div className="header-wrapper">
            <div className="header-top-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-5 col-md-4 col-lg-6">
                            <div className="header-info-left">
                                <p>Free Returns and Free Shipping</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-7 col-md-8 col-lg-6 sm-pl-0 xs-pl-15 header-top-main-right" >
                            <div className="header-info">
                                <a href="tel://+00123456789"><i className="fa fa-phone"></i>+00 123 456 789</a>
                                <a href="mailto://demo@example.com"><i className="fa fa-envelope"></i>demo@example.com</a>
                                <a href="login-register.html"><i className="fa fa-user"></i>Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-middle">
                <div className="container">
                    <div className="row row-gutter-0 align-items-center">
                        <div className="col-12">
                            <div className="header-align">
                                <div className="header-align-left">
                                    <div className="header-logo-area">
                                        <a href="/homeOne">
                                            <img className="logo-main" src={logo} alt="Logo"/>
                                            {/* <img className="logo-light" src={logo} alt="Logo"/> */}
                                        </a>
                                    </div>
                                </div>
                                <div className="header-align-center">
                                    <div className="header-search-box">
                                        <form action="#" method="post">
                                            <div className="form-input-item">
                                                <label htmlFor="search" className="sr-only">Search Everything</label>
                                                <input type="text" id="search" placeholder="Search Everything"/>
                                                <button type="submit" className="btn-src">
                                                <i className="pe-7s-search"></i>
                                                {/* <FontAwesomeIcon icon={icon({name: 'search'})} className="pe-7s-" /> */}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="header-align-right">
                                    <div className="header-action-area">
                                    <div className="header-action-wishlist">
                                        <button className="btn-wishlist" 
                                            // onclick="window.location.href='shop-wishlist.html'"
                                            >
                                            <i className="pe-7s-like"></i>
                                            {/* <FontAwesomeIcon icon={icon({name: 'heart'})} className="pe-7s-" /> */}
                                        </button>
                                    </div>
                                    <div className="header-action-cart">
                                        <button className="btn-cart cart-icon">
                                        <span className="cart-count">01</span>
                                        <i className="pe-7s-shopbag"></i>
                                        {/* <FontAwesomeIcon icon={icon({name: 'bars'})}/> */}
                                        </button>
                                    </div>
                                    <button className="btn-menu d-md-none">
                                        <FontAwesomeIcon icon={icon({name: 'bars'})} />
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.join(' ')}>
                <div 
                className="container">
                    <div 
                    className="row row-gutter-0 align-items-center"
                    >
                        <div 
                        className="col-4 col-sm-6 col-lg-2"
                        >
                            <div 
                            className="header-logo-area"
                            >
                                <a href="/homeOne">
                                    <img className="logo-main" src={logo} alt="Logo"/>
                                    <img className="logo-light" src={logo} alt="Logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 sticky-md-none">
                            <div className="header-navigation-area d-md-block">
                                <ul className="main-menu nav position-relative">
                                    <li className="has-submenu"
                                        ><a className="ml--2" href="/homeOne">Home</a>
                                        <ul className="submenu-nav">
                                            <li><a href="/homeOne">Home One</a></li>
                                            <li><a href="/homeTwo">Home Two</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li className="has-submenu"><a href="index.html">Pages</a>
                                        <ul className="submenu-nav">
                                            <li><a href="shop-cart.html">Cart page</a></li>
                                            <li><a href="shop-checkout.html">Checkout</a></li>
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="shop-wishlist.html">Wishlist</a></li>
                                            <li><a href="shop-compare.html">Compare</a></li>
                                            <li><a href="login-register.html">Login / Register</a></li>
                                            <li><a href="coming-soon.html">Coming soon</a></li>
                                            <li><a href="page-not-found.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu"><a href="shop.html">Shop</a>
                                        <ul className="submenu-nav">
                                            <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                                            <li><a href="shop.html">Shop 4 Column</a></li>
                                            <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                            <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                            <li><a href="shop.html">Shop No Sidebar</a></li>
                                            <li><a href="shop-single-product.html">Product Details</a></li>
                                            <li><a href="shop-single-product-variable.html">Product Variable</a></li>
                                            <li><a href="shop-single-product-grouped.html">Product Grouped</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu"><a href="blog.html">Blog</a>
                                        <ul className="submenu-nav">
                                            <li><a href="blog.html">Blog 3 Column</a></li>
                                            <li><a href="blog-4-column.html">Blog 4 Column</a></li>
                                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                            <li><a href="blog.html">Blog No Sidebar</a></li>
                                            <li><a href="blog-details.html">Blog Details Left Sidebar</a></li>
                                            <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                                            <li><a href="blog-details-no-sidebar.html">Blog Details No Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-8 col-sm-6 col-lg-2">
                            <div className="header-action-area">
                            <div className="header-action-search">
                                <button className="btn-search btn-search-menu">
                                <i className="pe-7s-search"></i>
                                </button>
                            </div>
                            <div className="header-action-login">
                                <button className="btn-login" 
                                // onclick="window.location.href='login-register.html'"
                                >
                                <i className="pe-7s-users"></i>
                                </button>
                            </div>
                            <div className="header-action-wishlist">
                                <button className="btn-wishlist" 
                                // onclick="window.location.href='shop-wishlist.html'"
                                >
                                <i className="pe-7s-like"></i>
                                </button>
                            </div>
                            <div className="header-action-cart">
                                <button className="btn-cart cart-icon">
                                <span className="cart-count">01</span>
                                <i className="pe-7s-shopbag"></i>
                                </button>
                            </div>
                                <button className="btn-menu d-lg-none">
                                    <i className="fa fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default HeaderMain;
                