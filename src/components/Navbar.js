import React from 'react';
import "../styles/Navbar.css";
import logo from '../images/GR_logo.png'
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

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

    const scrollToFooter = () => {
        document?.querySelector('.footer').scrollIntoView({ behavior: "smooth" });
    }

    const scrollToHeader = () => {
        document?.querySelector('.header').scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="navbar">
            <div className="navbar--left" onClick={scrollTop}>
                <img src={logo} alt="" />
            </div>
            <div className="navbar--middle">
                <p onClick={scrollToResults}>Vehicles</p>
                <p onClick={scrollToFeatured}>Discover</p>
                <p onClick={scrollToFinance}>Finance</p>
                <p onClick={scrollToResults}>Shop</p>
            </div>
            <div className="navbar--right">
                <p>
                    <HelpOutlineOutlinedIcon sx={{ fontSize: '24px', color: 'black' }} onClick={() => scrollToFooter()} />
                </p>
                <p>
                    <LanguageOutlinedIcon sx={{ fontSize: '24px', color: 'black' }} onClick={() => scrollToFeatured()} />
                </p>
                <p>
                    <AccountCircleOutlinedIcon sx={{ fontSize: '24px', color: 'black' }} onClick={() => scrollToHeader()} />
                </p>
            </div>
        </div>
    );
}

export default Navbar;
