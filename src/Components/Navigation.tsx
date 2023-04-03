import React from "react";
import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <nav className="navigation">
            <p>Free Returns and Free Shipping</p>
            <span>
                <Link to="/homeOne">HomeOne</Link>
                <Link to="/homeTwo">HomeTwo</Link>
            </span>
        </nav>
    )
}