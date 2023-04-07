import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import '../../index.css';
import Header from '../../Components/Header';
import FeatureSection from '../../Components/FeatureSection';
import Footer from '../../Components/Footer';
import "../../css/iconstyle.css"; 
import BgSection from '../../Components/BgSection';
import { HomeOne } from '../../pages/Home/HomeOne';
import HeaderMain from '../../Components/HeaderMain';





export function HomeTwo() {
    
    return (
    <>
        <HeaderMain/>
    </>
    );
}