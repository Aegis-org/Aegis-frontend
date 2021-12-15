import React, { useState } from "react";
import { GrFacebookOption, GrGithub, GrTwitter, GrStar } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import FooterNavList from "./FooterNavList";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Footer = () => {
  const [emailInput, setEmailInput] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="container mx-auto px-5 mb-8 md:px-10 font-montserrart">
      <div className=" grid grid-cols-5x md:px-8 lg:px-14 ">
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
        <FooterNavList linkHeading="Resources">
          <li className="mb-2">
            <form onSubmit={onFormSubmit}>
              <input
                type="email"
                placeholder="Email address"
                value={emailInput}
                onChange={(e) => {
                  setEmailInput(e.target.value);
                }}
                className="border bg-graylight px-4 md:py-1 rounded md:w-48 lg:w-[13.5rem]"
              />
              <button type="submit" className="inline-block">
                <MdNavigateNext
                  className="bg-pry-clr -ml-5 -mb-2.5 md:-mb-3 rounded hover:bg-pry-accent"
                  size="2.2em"
                  color="white"
                />
              </button>
            </form>
          </li>
          <li>
            <span className=" text-xs font-montserrart ">
              Loved and Trusted by all
            </span>
            <br />
            <span className="inline-block mr-2">
              <GrStar size="1.3em" />
            </span>
            <span className="inline-block mr-2">
              <GrStar size="1.3em" />
            </span>
            <span className="inline-block mr-2">
              <GrStar size="1.3em" />
            </span>
            <span className="inline-block">
              <GrStar size="1.3em" />
            </span>
          </li>
        </FooterNavList>
      </div>
      {/*     hr */}
      <div className="bg-graydark w-full h-1 mt-8"></div>
      {/* social */}
      <div className="  mt-5 flex justify-between md:px-14">
        <Link to="/">
          <img
            src={Logo}
            alt="Aegis-logo"
            className="h-5 w-6 md:w-12 md:h-10"
          />
        </Link>

        <div className=" md:mt-0 flex">
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
