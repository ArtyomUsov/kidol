import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import "../Components/Item.css";
import React from 'react';
import { DItem } from '../date/models';
import { Items } from '../date/Items';
import { Link } from 'react-router-dom';


interface ItemProps {
    item: DItem
}

export function Item({ item }: ItemProps) {


    return(
        <>
            <div className="col-4 mb-50">
                <div className="demo-item">
                    <Link to={item.link}>
                        <img  
                            className="img-fluid image"
                            src={ item.image }
                            alt={ item.title }
                        />
                    </Link>
                    <i className=""></i>
                    <h4 className="text-capitalize title">
                    <Link to={item.link}><a>{ item.title }</a></Link>
                    </h4>
                </div>
            </div>
        </>
    )
}
export default Item;


