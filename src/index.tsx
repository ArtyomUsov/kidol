import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import FeatureSection from './Components/FeatureSection';
import Footer from './Components/Footer';
import "../src/css/iconstyle.css"; 
import BgSection from './Components/BgSection';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import HeaderMain from './Components/HeaderMain';
import "../src/css/iconstyleThree.css"; 






const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    {/* <App/> */}
    <HeaderMain/>
    <BgSection/>
    <FeatureSection/>
    <Footer/>
  </BrowserRouter>
);
reportWebVitals();
