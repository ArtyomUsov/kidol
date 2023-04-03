import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Item from './Item';
import "../Components/BgSection.css";
import { Items } from '../date/Items'




function BgSection() {
    return (
      <div className='section'>
        <div className='bg-gray'>
            <div className="container pb-70 pt-120">
                <div className="row">
                { Items.map( item => <Item item={item} key={item.id}/> ) }
                </div>
            </div>
        </div>
        <div className='bg-white'>
            <div className="container pb-70 pt-120">
                <div className="row">
                { Items.map( item => <Item item={item} key={item.id}/> ) }
                </div>
            </div>
        </div>
        <div className='bg-gray'>
            <div className="container pb-70 pt-120">
                <div className="row">
                { Items.map( item => <Item item={item} key={item.id}/> ) }
                </div>
            </div>
        </div>
      </div>
      )
  }
  
  export default BgSection;


