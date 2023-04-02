import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {

    const {id, name, email, phone} = friend
    
    return (
        <div className='shadow-2xl p-4 text-center '>
            <h3 className='text-2xl font-bold'>{name}</h3>            
            <h4 className='text-lg'>Mail: {email}</h4>
            <h4 className='text-lg'>Phone: {phone}</h4>
            <p className='px-2 py-1 bg-sky-500 text-white font-semibold rounded-lg'>
                <Link to={`/friend/${id}`}>Know More</Link>
            </p>
        </div>
    );
};

export default Friend;