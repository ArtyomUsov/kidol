import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Components/FeatureSection.css"



function FeatureSection() {
    return (
      <>
        <div className="feature-section section pt-150 pb-100">
        <div className="container">
            <div className="row">
                <div className="section-title-demo col-12 mb-70">
                    <h1>Kidol Features</h1>
                </div>

                <div className="single-feature col-lg-4 col-md-6 col-12 mb-50">
                    <span className="icon float-left"><i className="icon-mobile"></i></span>
                    <div className="content fix">
                        <h4>Responsive Design</h4>
                        <p className="Open-sans">Kidol is supper responsive &amp; work perfectly in all devices.</p>
                    </div>
                </div>
                <div className="single-feature col-lg-4 col-md-6 col-12 mb-50">
                    <span className="icon float-left"><i className="icon-profile-male"></i></span>
                    <div className="content fix">
                        <h4>User Friendly</h4>
                        <p className="Open-sans">Kidol easy to use for any technical &amp; nontechnical People.</p>
                    </div>
                </div>
                <div className="single-feature col-lg-4 col-md-6 col-12 mb-50">
                    <span className="icon float-left"><i className="icon-beaker"></i></span>
                    <div className="content fix">
                        <h4>Modern Design</h4>
                        <p className="Open-sans">It comes with modern &amp; smart design layout.</p>
                    </div>
                </div>
                <div className="single-feature col-lg-4 col-md-6 col-12 mb-50">
                    <span className="icon float-left"><i className="icon-puzzle"></i></span>
                    <div className="content fix">
                        <h4>Icon Font</h4>
                        <p className="Open-sans">It comes with most popular FontAwesome.</p>
                    </div>
                </div>
                <div className="single-feature col-lg-4 col-md-6 col-12 mb-50">
                    <span className="icon float-left"><i className="icon-genius"></i></span>
                    <div className="content fix">
                        <h4>Google Font</h4>
                        <p className="Open-sans">600 Google Fonts. You can change font for all elements easily.</p>
                    </div>
                </div>
                <div className="single-feature col-lg-4 col-md-6 col-12 mb-50">
                    <span className="icon float-left"><i className="icon-envelope"></i></span>
                    <div className="content fix">
                        <h4>Ajax Contact Form</h4>
                        <p className="Open-sans">It comes with ajax contact form which makes messaging much more quicker.</p>
                    </div>
                </div>
                <div className="single-feature col-lg-4 col-md-6 col-12 mb-50">
                    <span className="icon float-left"><i className="icon-search"></i></span>
                    <div className="content fix">
                        <h4>Clean Markup</h4>
                        <p className="Open-sans">We developed it followed by W3C Markup.</p>
                    </div>
                </div>
                <div className="single-feature col-lg-4 col-md-6 col-12 mb-50">
                    <span className="icon float-left"><i className="icon-upload"></i></span>
                    <div className="content fix">
                        <h4>Free Updates</h4>
                        <p className="Open-sans">Purchase once &amp; get life-time free updates.</p>
                    </div>
                </div>
                <div className="single-feature col-lg-4 col-md-6 col-12 mb-50">
                    <span className="icon float-left"><i className="icon-megaphone"></i></span>
                    <div className="content fix">
                        <h4>Real Support</h4>
                        <p className="Open-sans">We provide 7 days a week one by one real support.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
      </>
    )
}
    
export default FeatureSection;
