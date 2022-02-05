import React from 'react';
import "../styles/Navbar.css";
import logo from '../images/GR_logo.svg'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar--left">
                <img src={logo} alt="" />
            </div>
            <div className="navbar--middle">
                <p>FEATURED CARS</p>
                <p>FIND CARS</p>
                <p>FINANCING</p>
            </div>
            <div className="navbar--right">
                <p>SIGN IN</p>
            </div>
        </div>
    );
}

export default Navbar;
