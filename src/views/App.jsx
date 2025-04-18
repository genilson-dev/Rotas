import React from "react";
import './App.css';
import Menu from "../components/layout/Menu.jsx";

export default props => {
    return(
        <div className="App">
            <h1>App children</h1>
            <Menu />
           
        </div>
    )
}