import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {

    const posts = useLoaderData();

    return (
        <div>

            <h2 className='text-2xl text-center my-4 font-semibold'>Totall Post: {posts.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {
                    posts.map(post=> <Post key={post.id} post ={post}></Post>)
                }
            </div>
            
        </div>
    );
};

export default Posts;