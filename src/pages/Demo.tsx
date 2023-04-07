import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import Header from '../Components/Header';
import BgSection from '../Components/BgSection';
import FeatureSection from '../Components/FeatureSection';
import Footer from '../Components/Footer';


export function Demo() {
    return (
        <>
            <Header/>
            <BgSection/>
            <FeatureSection/>
            <Footer/>
        </>
    )
}