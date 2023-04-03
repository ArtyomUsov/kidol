import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import "../Components/Item.css";
import React, {useState} from 'react';
import { DItem } from '../date/models';
import { Items } from '../date/Items';



interface ItemProps {
    item: DItem
}

export function Item({ item }: ItemProps) {


    return(
        <>
            <div className="col-4 mb-50">
                <div className="demo-item">
                    <a href={ item.link } className="">
                    <img  
                        className="img-fluid image"
                        src={ item.image }
                        alt={ item.title }
                    />
                    <i className=""></i>
                    </a>
                    <h4 className="text-capitalize title">
                    <a href={ item.link }>{ item.title }</a>
                    </h4>
                </div>
            </div>
        </>
    )
}
export default Item;


