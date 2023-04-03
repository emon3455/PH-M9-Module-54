import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleWork = () => {
    const workInfo = useLoaderData();
    const {userId,id,title,completed} = workInfo

    const navigate = useNavigate();
    const handleNavigation=()=>{
        navigate(-1);
    }

    return (
        <div className='shadow-2xl p-4 text-center border mt-4'>
            <h3 className='text-2xl font-bold'>Work For: {userId}</h3>
            <h4 className='text-lg'>Job ID: {id}</h4>
            <h4 className='text-lg font-semibold'>Title: {title}</h4>
            <span className='p-2  mx-2 bg-violet-400 text-white font-semibold rounded-lg'>
                Status: {completed? "Done": "Not Done"}
            </span>
            <button className='bg-sky-500 p-2 text-white font-bold rounded-xl'
             onClick={handleNavigation}
            >
                Go Back

            </button>
        </div>
    );
};

export default SingleWork;