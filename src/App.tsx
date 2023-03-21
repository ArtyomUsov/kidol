import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import React from 'react';
// import './App.css';
import {Button} from "react-bootstrap"
import React, { useState, Component,  } from 'react';


export default function App() {
  const [offset, setOffset] = React.useState(0);
  const setScroll = () => {
    setOffset(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  return (
    <div className="App" style={{ height: "1000px" }}>
      <h1>Hello CodeSandbox</h1>
      <div style={{ 
          top: "800px",
          right: "300px",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          textAlign: 'center',
      }}>{offset}</div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}