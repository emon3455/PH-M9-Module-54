import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToDo from './ToDo';

const ToDos = () => {
    const toDoos = useLoaderData();
    return (
        <div>
            <h2>Total works: {toDoos.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {
                    toDoos.map(toDo=> <ToDo key={toDo.id} toDo={toDo}></ToDo>)
                }
            </div>
        </div>
    );
};

export default ToDos;