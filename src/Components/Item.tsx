import React from 'react';
// import '../App.css';
import PageIndex1 from "../img/pages/page-index1.webp";
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap.bundle.js';
import $ from 'jquery';
import {Image} from "react-bootstrap"
import "../Components/Item.css"

function Item() {
    return (
      <>
        <div className="col-4 mb-50">
            <div  
                className=""
                style={{
                    boxShadow: "0 0 15px rgb(0 0 0 / 15%)",
                    color: "#000000",
                    fontSize: "18px",
                    fontWeight: "500",
                }}
            >
                <a href="kidol/index.html" className="">
                    <Image  
                        className="img-fluid"
                        src={PageIndex1} 
                        alt="Image"
                    />
                    <i className=""></i>
                </a>
                <h4 className="text-capitalize" 
                    style={{
                        padding: "20px 0",
                        textAlign: "center"
                    }}>
                    <a href="kidol/index.html">home one</a>
                </h4>
            </div>
        </div>
      </>
      )
  }
      
  export default Item;