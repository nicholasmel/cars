import React from 'react';
import "../styles/Navbar.css";
import logo from '../images/GR_logo.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar--left">
                <img src={logo} alt="" />
            </div>
            <div className="navbar--middle">
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
            </div>
            <div className="navbar--right">
                <ShoppingCartIcon sx={{ color: "white" }} />
            </div>
        </div>
    );
}

export default Navbar;
