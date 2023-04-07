import React from "react";
import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <nav className="navigation"
            style={{
                backgroundColor: "black",
                color: "white",
                width: "100%",
                height: "100px"
            }}>
            <p>Навигация</p>
            <span>
                <Link to="/" >Demo</Link>
                <Link to="/homeOne">HomeOne</Link>
                <Link to="/homeTwo">HomeTwo</Link>
            </span>
        </nav>
    )
}