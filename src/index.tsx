import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import BagGray from './Components/Bag';
import Header from './Components/Header';
import FeatureSection from './Components/FeatureSection';
import Footer from './Components/Footer';
/* // импорт шрифтов из файла fonts.scss  */
// import "../src/fonts"; 
/* // импорт обнуления стилей страницы  */
// import "nullstyle";
/* // импорт иконок ( шрифтовых изображений )  */
import "../src/scss/iconstyle.css"; 
import { HeaderTwo } from './Components/HeaderTwo';
import App from './App';
import HeaderThree from './Components/HeaderThree';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Header/> */}
    {/* <App/> */}
    {/* <HeaderTwo/> */}
    <HeaderThree/>
    <BagGray/>
    <FeatureSection/>
    <Footer/>
  </React.StrictMode>
);
reportWebVitals();
