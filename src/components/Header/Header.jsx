import React, {useState} from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../assets/logo.png';
import Login from "../Login";


const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const headLinks = [
    { id: 0, name: "Home", to: "home" },
    { id: 1, name: "About", to: "about" },
    { id: 2, name: "Services", to: "services" },
    { id: 3, name: "Features", to: "features" },
    { id: 4, name: "Blog", to: "blog" },
    { id: 5, name: "Contact", to: "contact" },
    { id: 6, name: "Help", to: "help" },
  ];

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <header className="container mx-auto flex text-center item-center justify-between font-montserrart px-10 py-3 max-w-6xl">
        <div className="icon flex flex-row">
          <GiHamburgerMenu 
            onClick={handleExpand}
            className="w-wid h-4 md:px-4 text-lg justify-center cursor-pointer md:hidden items-center"
          />
          <div className="p-2 justify-center items-center">
            <img src={logo} className="w-wid" alt="Aigis Logo" srcset=""/>
          </div>
        </div>
        <div className="flex mx-5 space-x-4 text-sec-clr nav-links hidden md:inline-flex">
            {headLinks.map((link) => (
              <Link to={`/${link.to}`} key={link.id} className="list-none font-normal item-center justify-center hover:font-bold hover:text-pry-clr pt-2 hover:underline sm:space-x-2">
                {link.name}
              </Link>
            ))}
        </div>
        <div className=" flex justify-end hidden md:inline-flex">
          <Link  to="/" className="text-sm text-white font-semibold rounded-full border-2 border-pry-clr px-2 py-1 mx-6 bg-pry-clr">
            Create An Account
          </Link>
          <Link to="/login" className="px-4 drop-shadow-md py-1 text-sm font-semibold rounded-full border-2 border-pry-clr bg-white hover:text-white hover:bg-pry-clr">Log in</Link>
        </div>
      </header>
    </>
  );
};

export default Header;