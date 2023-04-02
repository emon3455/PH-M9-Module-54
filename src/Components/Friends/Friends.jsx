import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {

    const friends = useLoaderData();
    
    return (
        <div>
            <h2 className='text-2xl text-center mt-4'>Totall Friends: {friends.length}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6">
                {
                    friends.map(friend => <Friend
                        key = {friend.id}
                        friend= {friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;