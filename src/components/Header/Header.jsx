import React from 'react';
import { Button, Container} from 'react-bootstrap'
// import logo from './assets/logo.png';

const Navbar = () => {
    // const logo = '/src/assets/logo.png';

    return (
        <header>
            <div className="logo">
                {/* <img src={logo} alt="" srcset=""/> */}
            </div>
            <div className="links">
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="http://">About</a>
                    <a href="http://">Services</a>
                    <a href="http://">Features</a>
                    <a href="http://">Blog</a>
                    <a href="http://">Contact</a>
                    <a href="http://">Help</a>
                </div>
                <div className="bttns">
                    <Button>Create an Account</Button>
                    <Button variant="default">Log in</Button>
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;