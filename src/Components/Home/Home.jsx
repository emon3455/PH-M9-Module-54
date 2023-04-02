import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <h2>This is home</h2>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;