import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-xl flex justify-around p-2 bg-black text-white'>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;