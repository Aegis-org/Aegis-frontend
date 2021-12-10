import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <header className="font-montserrart px-16">
        <div className="logo"></div>
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
          <button className="font-montserrart font-medium">
            Create an Account
          </button>
          <button className="font-montserrart font-medium">Log in</button>
        </div>
        <div className="icon">
          <GiHamburgerMenu />
        </div>
      </header>
    </>
  );
};

export default Navbar;
