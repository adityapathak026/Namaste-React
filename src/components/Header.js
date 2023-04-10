import React, { useState } from 'react';
import { LOGO_URL } from '../utils/constatnts';
import Logo from '../assets/images/good-food.png';
import { Link } from 'react-router-dom';

function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <header className='header_container'>
            <img src={Logo} alt="Good Food" />
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About Us</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <li>Cart</li>
                {!isLoggedIn ? <button className='auth_btns' onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button> : <button className='auth_btns' onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>}
            </ul>
        </header>
    )
}

export default Header;