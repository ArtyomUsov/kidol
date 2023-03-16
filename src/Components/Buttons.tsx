import React from 'react';
// import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function Buttons() {
    return (
      <>
        <div
            className=''
            style={{
                textAlign: "center",
                backgroundColor: "transparent",
                // border: "none",
                border: "2px solid #ffffff",
                borderRadius: "50px",
                color: "#ffffff",
                display: "block",
                fontSize: "13px",
                fontWeight: "500",
                height: "auto",
                lineHeight: "24px",
                marginTop: "0",
                padding: "6px 17px",
                textTransform: "uppercase",
            }}
        >
            <a 
                rel="noreferrer"
                className="buy-btn top-btn smooth-scroll-link" 
                style={{
                    boxSizing: "content-box",
                    transition: "all 0.3s ease 0s",
                    textDecoration: "none",
                }}
                target="_blank"  
                href="https://1.envato.market/c/417168/275988/4415?subId1=hastheme&amp;subId2=demo&amp;subId3=https%3A%2F%2Fthemeforest.net%2Fuser%2Fcodecarnival%2Fportfolio&amp;u=https%3A%2F%2Fthemeforest.net%2Fuser%2Fcodecarnival%2Fportfolio"
            >
                buy kidol
            </a>
        </div>
      </>
    )
}
    
export default Buttons;