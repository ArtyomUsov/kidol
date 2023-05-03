import React from "react";
import "../../pages/Home/HomeOne.css"
// import "../../pages/Home/Shop.css"
import { Image } from "react-bootstrap";
import three from "../../img/homeOne/3.webp";
import five from "../../img/homeOne/5.webp";
import four from "../../img/homeOne/4.webp";
import one from "../../img/homeOne/1.webp";
import two from "../../img/homeOne/2.webp";
import itemOne from "../../img/1.webp";
import itemTwo from "../../img/2.webp";
import itemThree from "../../img/3.webp";
import background from "../../img/homeOne/background.webp";
import HeaderMain from "../../Components/HeaderMain";
import { FooterMain } from "../../Components/FooterMain";
import Product from "../../Components/Product";
import { Products } from "../../date/Products";

export function HomeOne() {
    return (
        <>
            <HeaderMain/>
            <section className="home-slider-area slider-default">
                <div className="home-slider-content">
                    <div className="swiper-container home-slider-container swiper-container-fade swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" 
                            // style={{transitionDuration: "0ms"}}
                            >
                                <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" 
                                        data-swiper-slide-index="0" 
                                        // style={{
                                        //     width: "1663px", 
                                        //     opacity: "0", 
                                        //     transform: "translate3d(0px, 0px, 0px)", 
                                        //     transitionDuration: "0ms",}}
                                        >
                        {/* Start Slide Item */}
                        <div className="home-slider-item">
                            <div className="thumb-one" 
                                    // data-bg-img={background} 
                                    // style={{backgroundImage: `${background}`}}
                                    ><Image className="bg-img" src={background}/>
                            </div>
                            <div className="slider-content-area">
                            <div className="container">
                                <div className="row">
                                <div className="col-sm-6">
                                    <div className="content">
                                    <div className="inner-content">
                                        <h2 className="h2">Best Kids Store &amp; Online Shop</h2>
                                        <p>Give The Gift Of Your Children Everyday</p>
                                        <a href="shop.html" className="btn-theme">Shop This Now</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <Image className="thumb-two" 
                                    src={four}
                                    alt="Image"/>
                            <Image className="thumb-three" src={three} alt="Image"/>
                            <Image className="thumb-four" src={five} alt="Image"/>
                            </div>
                            <div className="shape-top"  
                                    // data-bg-img={one} 
                                    ><Image className="bg-img" src={one}/>
                            </div>
                            <div className="shape-bottom" 
                                    // data-bg-img={two} 
                                    ><Image className="shape-bottom bg-img" src={two}/>   
                            </div>
                        </div>
                        {/* End Slide Item */}
                        </div>
                        <div className="swiper-slide swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev" 
                                data-swiper-slide-index="0" 
                                // style="width: 1663px; opacity: 1; transform: translate3d(-1663px, 0px, 0px); transition-duration: 0ms;"
                                >
                        </div>
                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next" 
                            data-swiper-slide-index="0" 
                            // style="width: 1663px; opacity: 0; transform: translate3d(-3326px, 0px, 0px); transition-duration: 0ms;"
                            >
                        </div></div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>
        </section>
        <section className="category-area product-category1-area aos-init aos-animate" 
        // data-aos="fade-up" data-aos-duration="1000"
        >
            <div className="container">
                <div className="row category-items1">
                <div className="col-sm-6 col-md-4">
                    <div className="category-item">
                    <div className="thumb thumb-style1">
                        <img src={itemOne} alt="Image"/>
                        <div className="content">
                        <div className="contact-info">
                            <h2 className="h2 title">Baby Dress</h2>
                            <h4 className="h4 price">$32.00</h4>
                        </div>
                        <a className="btn-link" href="shop.html">Shop Now</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="category-item mt-xs-25">
                    <div className="thumb thumb-style2">
                        <img src={itemTwo} alt="Image"/>
                        <div className="content">
                        <div className="contact-info">
                            <h2 className="h2 title">Baby Toys</h2>
                            <h4 className="h4 price">$25.00</h4>
                        </div>
                        <a className="btn-link" href="shop.html">Shop Now</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="category-item mt-sm-25">
                    <div className="thumb thumb-style3">
                        <img src={itemThree} alt="Image"/>
                        <div className="content">
                        <div className="contact-info">
                            <h2 className="h2 title">Teddy Bear</h2>
                            <h4 className="h4 price">$18.00</h4>
                        </div>
                        <a className="btn-link" href="shop.html">Shop Now</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="product-area product-style1-area">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="section-title text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                        <h2 className="h2 title">New Products</h2>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="product-tab-content">
                        <ul className="nav nav-tabs aos-init aos-animate" id="myTab" role="tablist" data-aos="fade-up" data-aos-duration="1000">
                            <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="our-features-tab" data-bs-toggle="tab" data-bs-target="#our-features" type="button" role="tab" aria-controls="our-features" aria-selected="true">All Items</button>
                            </li>
                            <li className="nav-item" role="presentation">
                            <button className="nav-link" id="best-sellers-tab" data-bs-toggle="tab" data-bs-target="#best-sellers" type="button" role="tab" aria-controls="best-sellers" aria-selected="false">Baby Dress</button>
                            </li>
                            <li className="nav-item" role="presentation">
                            <button className="nav-link mr-0" id="new-items-tab" data-bs-toggle="tab" data-bs-target="#new-items" type="button" role="tab" aria-controls="new-items" aria-selected="false">Baby Toys</button>
                            </li>
                        </ul>

                        <div className="tab-content aos-init aos-animate" id="myTabContent" data-aos="fade-up" data-aos-duration="1300">
                            <div className="tab-pane fade show active" id="our-features" role="tabpanel" aria-labelledby="our-features-tab">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="product">
                                    <div className="row">
                                        { Products.map( (product) => <Product product={product} key={product.id}/> ) }
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="best-sellers" role="tabpanel" aria-labelledby="best-sellers-tab">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="product">
                                    <div className="row">
                                        { Products.map( (product) => <Product product={product} key={product.id}/> ) }
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="new-items" role="tabpanel" aria-labelledby="new-items-tab">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="product">
                                    <div className="row">
                                        { Products.map( (product) => <Product product={product} key={product.id}/> ) }
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
        <FooterMain/>
    </>
    )
}