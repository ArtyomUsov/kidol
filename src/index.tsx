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
import "../src/css/iconstyle.css"; 
// import App from './App';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>
    {/* <App/> */}
    <BagGray/>
    <FeatureSection/>
    <Footer/>
  </React.StrictMode>
);
reportWebVitals();
