import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {

    const {id,userId,title} = post

    return (
        <div className='shadow-2xl p-4 text-center flex flex-col justify-between'>

            <h2 className='text-2xl font-bold'>{userId}</h2>
            <h4 className='text-xl'>Title: <br />
                {title}
            </h4>
            <p className='bg-sky-500 text-white font-semibold rounded-lg'>
                <Link to={`/post/${id}`}>See More</Link>
            </p>
            
        </div>
    );
};

export default Post;