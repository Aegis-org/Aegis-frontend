import React from "react";
import { GrFacebookOption, GrGithub, GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import FooterNavList from "./FooterNavList";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="container mx-auto px-5 mb-8 md:px-10 font-montserrart">
      <div className=" md:grid md:grid-cols-4 md:px-8 lg:px-14 ">
        <FooterNavList linkHeading="our product">
          <li>
            <Link to="/">Career</Link>
          </li>

          <li>
            <Link to="/">Models</Link>
          </li>
          <li>
            <Link to="/">Cars</Link>
          </li>
          <li>
            <Link to="/">Packages</Link>
          </li>
          <li>
            <Link to="/">Features</Link>
          </li>
          <li>
            <Link to="/">Priceline</Link>
          </li>
        </FooterNavList>
        <FooterNavList linkHeading="About Aegis">
          <li>
            <Link to="/">Career</Link>
          </li>

          <li>
            <Link to="/">Our Story</Link>
          </li>
          <li>
            <Link to="/">Investor Relations</Link>
          </li>
          <li>
            <Link to="/">Press Center</Link>
          </li>
          <li>
            <Link to="/">Advertise</Link>
          </li>
        </FooterNavList>
        <FooterNavList linkHeading="Resources">
          <li>
            <Link to="/">Request Demo</Link>
          </li>

          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">Guides</Link>
          </li>
          <li>
            <Link to="/">Developers</Link>
          </li>
          <li>
            <Link to="/">Mechanics</Link>
          </li>
          <li>
            <Link to="/">Help Center</Link>
          </li>
        </FooterNavList>
        <FooterNavList linkHeading="Extras">
          <li>
            <Link to="/">Secuirity Tips</Link>
          </li>

          <li>
            <Link to="/">News Offers</Link>
          </li>
          <li>
            <Link to="/">Hire Companies</Link>
          </li>
          <li>
            <Link to="/">Repair shop</Link>
          </li>
          <li>
            <Link to="/">Connect</Link>
          </li>
        </FooterNavList>
      </div>
      {/*     hr */}
      <div className="bg-hrcolor w-full h-1 mt-8"></div>
      {/* social */}
      <div className="  mt-5 md:flex md:justify-between md:px-14">
        <Link to="/">
          <img src={Logo} alt="Aegis-logo" className="w-12 h-10" />
        </Link>

        <div className="mt-5 md:mt-0 flex">
          <Link to="/">
            <GrFacebookOption size="1.5em" className="social-link  mr-4  " />
          </Link>
          <Link to="/">
            <AiOutlineInstagram size="1.5em" className="social-link  mr-4" />
          </Link>
          <Link to="/">
            <GrTwitter size="1.5em" className="social-link  mr-4" />
          </Link>
          <Link to="/">
            <GrGithub size="1.5em" className=" social-link" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
