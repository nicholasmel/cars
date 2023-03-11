import React from 'react';
import "../styles/Navbar.css";
import logo from '../images/GR_logo.png'

function Navbar() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToResults = () => {
        document?.querySelector('.results').scrollIntoView({ behavior: "smooth", block: 'start' });
    }

    const scrollToFeatured = () => {
        document?.querySelector('.featured').scrollIntoView({ behavior: "smooth" });
    }

    const scrollToFinance = () => {
        document?.querySelector('.finance').scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="navbar">
            <div className="navbar--left" onClick={scrollTop}>
                <img src={logo} alt="" />
            </div>
            <div className="navbar--middle">
                <p onClick={scrollToResults}>INVENTORY</p>
                <p onClick={scrollToFeatured}>FEATURED CARS</p>
                <p onClick={scrollToFinance}>FINANCE</p>
            </div>
            <div className="navbar--right">
                <p></p>
            </div>
        </div>
    );
}

export default Navbar;
