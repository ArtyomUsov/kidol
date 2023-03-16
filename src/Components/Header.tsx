import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/scss/bootstrap";
import "../Components/Header.css";
import landing from "../img/slider-landing.jpg"

export default class Header extends Component {
    render() {
        return (
            <>
                <div className="header-section section pt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-top">
                                    <div className="logo">
                                        <a 
                                            href="index.html" 
                                            // className="non-sticky"
                                        >
                                        <img src={"https://template.hasthemes.com/kidol/p2/img/logo.png"} alt=""
                                        />
                                        </a>
                                        <a 
                                            href="index.html" 
                                            className="sticky-logo"
                                        >
                                        <img src={"p2/img/logo-2.png"} alt=""
                                        />
                                        </a>
                                    </div>
                                    <div className="button-buy">
                                        <a 
                                            rel="noopener"
                                            className="buy-btn top-btn smooth-scroll-link" 
                                            // target="_blank" 
                                            href="https://1.envato.market/c/417168/275988/4415?subId1=hastheme&amp;subId2=demo&amp;subId3=https%3A%2F%2Fthemeforest.net%2Fuser%2Fcodecarnival%2Fportfolio&amp;u=https%3A%2F%2Fthemeforest.net%2Fuser%2Fcodecarnival%2Fportfolio"
                                        >
                                            buy kidol
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                    className="hero-section section overlay"
                    style={{backgroundImage: `url(${landing})`}}
                    // alt=''
                    >
                    <div className="container">
                        <div className="row">
                            <div 
                                className="hero-content text-center col-12"
                                >
                                <h1><strong>Kidol</strong></h1>
                                <h1> Kidol - Kids Toys Store eCommerce HTML Template</h1>
                                <p>
                                    Kidol - Kids Toys Store eCommerce HTML Template for Store websites. Nice and clean design.</p>
                                <a 
                                    className="buy-btn" 
                                    href="#section-demo"
                                    >
                                        View Demo
                                    </a>
                            </div>
                        </div>
                    </div>

                </div>
            </>
          )
    }
};


window.onscroll = function() {
    const elem = document.querySelectorAll( '.header-section' );
    const arrElem = Array.prototype.slice.call(elem, 0)
    
    if (document.documentElement.scrollTop > 250) {
        arrElem[0].classList.toggle('stick');
    } else {
        if (arrElem[0].classList.contains("stick")) {
            arrElem[0].classList.remove('stick');
        }
    }
};
