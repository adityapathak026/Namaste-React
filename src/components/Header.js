import React from 'react';
import { LOGO_URL } from '../utils/constatnts'

function Header() {
    return (
        <header className='header_container'>
            <img src={LOGO_URL} alt="Good Food" />
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </header>
    )
}

export default Header;