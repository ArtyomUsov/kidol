import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/Header.css";
import landing from "../img/slider-landing.jpg"
import logo from "../img/logo.webp"

const Header = () => {
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
    const stickyClass = scrollTop >= 300 ? "stick" : "";
    setSticky(stickyClass);
  };

  const classes = `header-section section pt-4 ${sticky}`;

  return (
    <>
        <div className={classes}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header-top">
                            <div className="logo">
                                <a 
                                    href="index.html" 
                                >
                                    <img src={logo} alt=""/>
                                </a>
                            </div>
                            <div className="button-buy">
                                <a 
                                    rel='noreferrer'
                                    className="buy-btn top-btn smooth-scroll-link" 
                                    target="_blank" 
                                    href="https://www.google.com/?hl=RU"
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
                        className="hero-content text-center col-12">
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
  );
};

export default Header;