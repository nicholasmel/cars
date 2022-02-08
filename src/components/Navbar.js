import React from 'react';
import "../styles/Navbar.css";
import logo from '../images/car-icon.png'

function Navbar() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="navbar">
            <div className="navbar--left" onClick={scrollTop}>
                <img src={logo} alt="" />
            </div>
            <div className="navbar--middle">
                <p>VIEW CARS</p>
                <p>FEATURED CARS</p>
                <p>FINANCE</p>
            </div>
            <div className="navbar--right">
                <p>SIGN IN</p>
            </div>
        </div>
    );
}

export default Navbar;
