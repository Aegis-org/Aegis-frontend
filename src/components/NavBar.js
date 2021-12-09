import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io"



const NavBar = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const navLinks = [{id:0, name:'overview', to:'overview'}, {id:1, name:'payments', to:'payments'}, {id:2, name:'order', to:'order'}, {id:3, name:'tracking', to:'tracking'}, {id:4, name:'verification', to:'verification'}, {id:5, name:'pricing', to:'pricing'}, {id:6, name:'testimonials', to:'testimonials'}]

    const handleExpand = () => {
        setIsExpanded((prev) => !prev)
    }

    return (
        <nav className={`relative font-roboto max-w-6xl w-100 font-bold py-3 px-10 mx-auto border-t border-b border-gray-300 ${isExpanded? 'nav-expand' : ""}`}>
            <IoIosArrowDropdownCircle onClick={handleExpand} className={`nav-dropdown ${isExpanded? "dropdown-rotate" : ""}`}/>
            <ul className="nav-items capitalize flex flex-wrap gap-x-10 gap-y-3 md:justify-between max-w-6xl mx-auto" style={{color: "#291A2D"}}>
                {
                    navLinks.map((link) => 
                        (
                            <li key={link.id} className="hover:text-gray-500">
                                <Link to={`/${link.to}`}>
                                    {link.name}
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    )
}

export default NavBar;
