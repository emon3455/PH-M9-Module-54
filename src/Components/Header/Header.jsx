import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-xl flex flex-col text-center md:text-left md:flex-row justify-around p-2 bg-black text-white'>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/toDoos">ToDoos</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;