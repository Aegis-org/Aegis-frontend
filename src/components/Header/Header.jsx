import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <header className="font-montserrart px-16 py-6">
        <div className="logo"></div>
        <div className="font-medium nav-links transition-all">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/features">Features</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/help">Help</Link>
        </div>
        <div className="bttns flex items-center gap-x-8">
          <Link
            to="/signup"
            className="font-medium bg-pry-clr text-white text-sm rounded-full px-4 py-2 hover:text-pry-clr hover:bg-pry-accent transition-colors"
          >
            Create an Account
          </Link>
          <Link
            to="/login"
            className="font-bold border-2 border-pry-clr rounded-full px-4 py-1 hover:bg-pry-clr hover:text-white transition-colors"
          >
            Log in
          </Link>
        </div>
        <div className="icon">
          <GiHamburgerMenu />
        </div>
      </header>
    </>
  );
};

export default Navbar;
