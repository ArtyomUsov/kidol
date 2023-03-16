import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/Header.css";
import landing from "../img/slider-landing.jpg"


interface HeaderProps {
    product: Headers
}


window.onscroll = function() {
    const elem = document.querySelectorAll( '.header-section' );
    const arrElem = Array.prototype.slice.call(elem, 0);
    // const heroSection = document.querySelectorAll( '.hero-section' );
    // const arrElemHS = Array.prototype.slice.call(heroSection, 0);
    
    if (document.documentElement.scrollTop > 250) {
        arrElem[0].classList.toggle('stick');
    } else {
        if (arrElem[0].classList.contains("stick")) {
            arrElem[0].classList.remove('stick');
        }
    }
};
// onscroll={() => setDetails(prev => !prev)} 

//     { details ? 'view Demo' : 'view Demo' }

export function HeaderTwo(){

    const [details, setDetails] = useState(false)

    const hSClassName = details ? '' : 'stick'

    const hSClasses = ["header-section section pt-4", hSClassName]
    

        return (
            <>
                <div 
                    className={hSClasses.join(' ')}            
                    >
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
                                    onClick={() => setDetails(prev => !prev)} 
                                    >
                                        { details ? 'view Demo' : 'view Demo' }
                                    </a>
                            </div>
                        </div>
                    </div>

                </div>
            </>
          )
    
          
};


// const [offset, setOffset] = React.useState(null);
// const setScroll = () => {
//   setOffset(window.scrollY);
// };

// React.useEffect(() => {
//   window.addEventListener("scroll", setScroll);
//   return () => {
//     window.removeEventListener("scroll", setScroll);
//   };
// }, []);

// export function HeaderTwo({ product }: HeaderProps) {

//     const [details, setDetails] = useState(false)

//     const btnBgClassName = details ? 'bg-blue-400' : 'bg-blue-200'

//     const btnClasses = ['py-2 px-4 border rounded', btnBgClassName]

//     return(
//         <div
//             className="border py-2 px-4 rounded flex flex-col items-center mb-2"
//         >
//             <img src={product.image} className="w-1/6" alt={product.title}/>
//             <p>{ product.title }</p>
//             <p className="font-bold">{product.price}</p>
//             <button 
//                 className={btnClasses.join(' ')}
//                 onClick={() => setDetails(prev => !prev)}
//             >
//                 { details ? 'Hide Details' : 'Show Details' }
//             </button>
//             {details && <div>
//                 <p>{product.description}</p>
//                 <p>Rate: <span style={{ fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
//             </div>}
//         </div>
//     )
// }
// window.onscroll = function() {
//     const elem = document.querySelectorAll( '.header-section' );
//     const arrElem = Array.prototype.slice.call(elem, 0)
    
//     if (document.documentElement.scrollTop > 250) {
//         arrElem[0].classList.toggle('stick');
//     } else {
//         if (arrElem[0].classList.contains("stick")) {
//             arrElem[0].classList.remove('stick');
//         }
//     }
// };