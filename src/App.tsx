import React from "react";
import  "./App.css";
import {Route, Routes} from "react-router-dom";
import { Navigation } from "./Components/Navigation";
import { HomeOne } from "./pages/Home/HomeOne";
import { HomeTwo } from "./pages/Home/HomeTwo";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
            <Route path="/homeOne" element={ <HomeOne/>}/>
            <Route path="/homeTwo" element={ <HomeTwo/>}/>
            </Routes>
        </>
    )
}
export default App;