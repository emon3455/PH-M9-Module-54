import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SinglePost = () => {

    const post = useLoaderData();
    const { body, id, title, userId } = post;
    const navigate = useNavigate();
    const handleNavigate=()=>{
        navigate(-1);
    }

    return (
        <div className='shadow-2xl p-4 text-center border mt-4'>
            <h3 className='text-2xl font-bold'>Post By: {userId}</h3>
            <h4 className='text-lg font-semibold'>Title: {title}</h4>
            <h4 className='text-lg'>{body}</h4>
            <button className='bg-sky-500 p-2 text-white font-bold rounded-xl' onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default SinglePost;