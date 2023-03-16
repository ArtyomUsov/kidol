import React from 'react';
// import '../App.css';
import PageIndex1 from "../img/pages/page-index1.webp";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Button} from "react-bootstrap";
import {Image} from "react-bootstrap"
import Item from './Item';
import "../Components/Bag.css";

function BagGray() {
    return (
      <>
        <div 
            className='section'
            style={{backgroundColor: "#f6f6f6"}}>
            <div className="container-sm pb-70 pt-120">
                <div className="row d-inline-flex">
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
        </div>
      </>
      )
  }
  
  export default BagGray;