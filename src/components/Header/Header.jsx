import React from 'react';
import { Button, Container} from 'react-bootstrap'
import NavBar from '../NavBar';
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
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Services</a>
                    <a href="/">Features</a>
                    <a href="/">Blog</a>
                    <a href="/">Contact</a>
                    <a href="/">Help</a>
                </div>
                <div className="bttns">
                    <Button>Create an Account</Button>
                    <Button variant="default">Log in</Button>
                </div>
            </header>
            <NavBar />
        </>
    );
}
 
export default Navbar;