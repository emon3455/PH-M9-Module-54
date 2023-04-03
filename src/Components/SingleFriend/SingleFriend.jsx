import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleFriend = () => {
    const friend = useLoaderData();
    const {name,address,company,phone} = friend;
    return (
        <div>
            <div className='shadow-2xl p-4 text-center border mt-4'>
                <h3 className='text-2xl font-bold'>{name}</h3>            
                <h4 className='text-lg'>Adderess: {address.city}</h4>
                <h4 className='text-lg'>Works IN: {company.name}</h4>
                <h4 className='text-lg'>Phone: {phone}</h4>
            </div>
        </div>
    );
};

export default SingleFriend;