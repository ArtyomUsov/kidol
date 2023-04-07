import React from "react";
import "../../pages/Home/Home.css"
import { Image } from "react-bootstrap";
import three from "../../img/homeOne/3.webp";
import five from "../../img/homeOne/5.webp";
import four from "../../img/homeOne/4.webp";
import one from "../../img/homeOne/1.webp";
import two from "../../img/homeOne/2.webp";
import background from "../../img/homeOne/background.webp";
import HeaderMain from "../../Components/HeaderMain";

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
                            <div className="thumb-one bg-img" 
                                    data-bg-img={background} 
                                    // style={{backgroundImage: `${background}`}}
                                    >
                            </div>
                            <div className="slider-content-area">
                            <div className="container">
                                <div className="row">
                                <div className="col-sm-6">
                                    <div className="content">
                                    <div className="inner-content">
                                        <h2>Best Kids Store &amp; Online Shop</h2>
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
                            <div className="shape-top bg-img"  
                                    data-bg-img={one} 
                                    // style={{backgroundImage: `${one}`}}
                                    >
                            </div>
                            <div className="shape-bottom bg-img" 
                                    data-bg-img={two} 
                                    // style={{backgroundImage: `${two}`}}
                                    >    
                            </div>
                        </div>
                        {/* End Slide Item */}
                        </div>
                        <div className="swiper-slide swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev" 
                                data-swiper-slide-index="0" 
                                // style="width: 1663px; opacity: 1; transform: translate3d(-1663px, 0px, 0px); transition-duration: 0ms;"
                                >
                        {/* Start Slide Item */}
                        {/* <div className="home-slider-item">
                            <div className="thumb-one bg-img" 
                                    data-bg-img="assets/img/slider/1.png" 
                                    // style="background-image: url(&quot;assets/img/slider/1.png&quot;);"
                                    >
                            </div>
                            <div className="slider-content-area">
                            <div className="container">
                                <div className="row">
                                <div className="col-sm-6">
                                    <div className="content">
                                    <div className="inner-content">
                                        <h2>Best Kids Store &amp; Online Shop</h2>
                                        <p>Give The Gift Of Your Children Everyday</p>
                                        <a href="shop.html" className="btn-theme">Shop This Now</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <img className="thumb-two" src="assets/img/slider/2.png" alt="Image"/>
                            <img className="thumb-three" src={three} alt="Image"/>
                            <img className="thumb-four" src="assets/img/photos/3.png" alt="Image"/>
                            </div>
                            <div className="shape-top bg-img" 
                                    data-bg-img="assets/img/photos/1.png" 
                                    // style="background-image: url(&quot;assets/img/photos/1.png&quot;);"
                                    >
                            </div>
                            <div className="shape-bottom bg-img" 
                                    data-bg-img="assets/img/photos/2.png" 
                                    // style="background-image: url(&quot;assets/img/photos/2.png&quot;);"
                                    >
                            </div>
                        </div> */}
                        {/* End Slide Item */}
                        </div>
                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next" 
                            data-swiper-slide-index="0" 
                            // style="width: 1663px; opacity: 0; transform: translate3d(-3326px, 0px, 0px); transition-duration: 0ms;"
                            >
                        {/* Start Slide Item */}
                        {/* <div className="home-slider-item">
                            <div className="thumb-one bg-img" 
                                    data-bg-img="assets/img/slider/1.png" 
                                    // style="background-image: url(&quot;assets/img/slider/1.png&quot;);"
                                    >
                            </div>
                            <div className="slider-content-area">
                            <div className="container">
                                <div className="row">
                                <div className="col-sm-6">
                                    <div className="content">
                                    <div className="inner-content">
                                        <h2>Best Kids Store &amp; Online Shop</h2>
                                        <p>Give The Gift Of Your Children Everyday</p>
                                        <a href="shop.html" className="btn-theme">Shop This Now</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <img className="thumb-two" src="assets/img/slider/2.png" alt="Image"/>
                            <img className="thumb-three" src="assets/img/slider/3.png" alt="Image"/>
                            <img className="thumb-four" src="assets/img/photos/3.png" alt="Image"/>
                            </div>
                            <div className="shape-top bg-img" 
                                    data-bg-img="assets/img/photos/1.png" 
                                    // style="background-image: url(&quot;assets/img/photos/1.png&quot;);"
                                    >
                            </div>
                            <div className="shape-bottom bg-img" 
                                data-bg-img="assets/img/photos/2.png" 
                                // style="background-image: url(&quot;assets/img/photos/2.png&quot;);"
                                >
                            </div>
                        </div> */}
                        {/* End Slide Item */}
                        </div></div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>
        </section>
    </>
    )
}