import React from 'react';
import { Link } from 'react-router-dom';

const ToDo = ({toDo}) => {

    const {userId,id,title,completed} = toDo

    return (
        <div className='shadow-2xl p-4 text-center flex flex-col justify-between'>

            <h4 className='text-2xl font-bold'>user: {userId}</h4>
            <h4 className='text-xl font-bold'>{title}</h4>
            <h5 className='p-1 mb-2 bg-violet-400 text-white font-semibold rounded-lg'>
                Status: {completed? "Done": "Not Done"}
            </h5>
            <p className='bg-sky-500 text-white font-semibold rounded-lg'>
                <Link to={`/toDo/${id}`}>View Details</Link>
            </p>
        </div>
    );
};

export default ToDo;