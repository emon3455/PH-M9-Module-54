import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {

    const navigation = useNavigation();

    return (
        <div className='container mx-auto'>

            <Header></Header>

            <div className="text-4xl text-center text-red-700">
                {
                    navigation.state === "loading" ? "Loading..." : ""
                } 
            </div>
            
            <Outlet></Outlet>
            

        </div>
    );
};

export default Home;