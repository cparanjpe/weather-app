import React from "react";


export default function Navbar(){

    return(
        
        <ul className="nav">
            <li className="logo">Weather App🌦️</li>
            <li className="nav-components"><a href="index.html">Home</a></li>
            <li className="nav-components"><a href="https://cparanjpe.github.io/Portfolio">About</a></li>
            <li className="nav-components"><a href="https://www.linkedin.com/in/chaitanya-paranjpe-304114229">Contact</a></li>
        </ul>
    );
}