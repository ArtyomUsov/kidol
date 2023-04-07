import React from "react";
// import  "./App.css";
import {Route, Routes} from "react-router-dom";
import { Navigation } from "./Components/Navigation";
import { HomeOne } from "./pages/Home/HomeOne";
import { HomeTwo } from "./pages/Home/HomeTwo";
import { Demo } from "./pages/Demo";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={ <Demo/> }/>
                <Route path="/HomeOne" element={ <HomeOne/> }/>
                <Route path="/HomeTwo" element={ <HomeTwo/> }/>
            </Routes>
        </>
    )
}
export default App;