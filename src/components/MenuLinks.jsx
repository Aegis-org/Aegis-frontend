import React from 'react'
import { Link } from 'react-router-dom'

function MenuSection({section}) {
    return (
    <ul className="ml-6 font-medium">
        {
        section.map((link) => (
            <li key={link} className="hover:text-gray-500 mb-2">
                <Link 
                to={`/${link.toLowerCase()}`}>{link}</Link>
            </li>
        ))
        }
    </ul>
    )
}
const MenuLinks = ({visibility}) => {
    const primaryMenu = ['Home', 'About', 'Services', 'Features', 'Blog', 'Contact', 'Help']
    const secondaryMenu = ['overview', 'payments', 'order', 'tracking', 'verification', 'pricing', 'testimonials']
    return (
        <div className={`capitalize px-8 text-pry-clr dynamic-header-links ${visibility? "visible" : ""}  pb-2 rounded-b-xl shadow-xl`}>
            {/* <h1 className="text-center">Menu</h1> */}
            <h2 className="font-bold text-xl my-2">Main Menu</h2>
            <MenuSection section={primaryMenu}/>
            <h2 className="font-bold text-xl my-2">Secondary Menu</h2>
            <MenuSection section={secondaryMenu}/>
        </div>
    )
}

export default MenuLinks
