import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import "../Components/Item.css";
import React from 'react';
import { IItem } from '../date/models';
import { Items } from '../date/Items';
import { Link } from 'react-router-dom';


interface ItemProps {
    item: IItem
}
export const BgSection1: IItem[] = Items.slice(0, 6);
export const BgSection2: IItem[] = Items.slice(6, 12);
export const BgSection3: IItem[] = Items.slice(12, 18);

export function Item({ item }: ItemProps) {


    return(
        <>
            <div className="col-lg-4 col-md-6 col-12 mb-50">
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
