import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io"



const NavBar = () => {

    const [isExpanded, setIsExpanded] = useState(false)

    const handleExpand = () => {
        setIsExpanded((prev) => !prev)
    }

    return (
        <nav className={`relative font-roboto max-w-6xl w-100 font-bold py-3 px-10 mx-auto border-t border-b border-gray-300 ${isExpanded? 'expand' : ""}`}>
            <IoIosArrowDropdownCircle onClick={handleExpand} className={`dropdown ${isExpanded? "rotate" : ""}`}/>
            <ul className="nav-items capitalize flex flex-wrap gap-x-10 gap-y-3 md:justify-between max-w-6xl mx-auto" style={{color: "#291A2D"}}>
                <li>
                    <Link to={'/overview'}>
                        overview
                    </Link>
                </li>
                <li>
                    <Link to={'/payments'}>
                        payments
                    </Link>
                </li>
                <li>
                    <Link to={'/order'}>
                        order
                    </Link>
                </li>
                <li>
                    <Link to={'/tracking'}>
                        tracking
                    </Link>
                </li>
                <li>
                    <Link to={'/verification'}>
                        verification
                    </Link>
                </li>
                <li>
                    <Link to={'/pricing'}>
                        pricing
                    </Link>
                </li>
                <li>
                    <Link to={'/testimonials'}>
                        testimonials
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
