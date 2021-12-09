import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

// import logo from './assets/logo.png';

const Navbar = () => {
    // const logo = '/src/assets/logo.png';

    return (
        <>
            <header>
                <div className="logo">
                    {/* <img src={logo} alt="" srcset=""/> */}
                </div>
                <div className="nav-links">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/help">Help</Link>
                </div>
                <div className="bttns">
                    <button>Create an Account</button>
                    <button>Log in</button>
                </div>
                <div className="icon">
                    <GiHamburgerMenu /> 
                </div>
            </header>
        </>
    );
}
 
export default Navbar;