import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError()
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center my-5'>
                <h1 className='text-7xl font-bold text-gray-500 mb-5'>Opssss!</h1>
                <p className='text-orange-500 text-3xl my-5'>{error?.message}</p>
                <img src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80" alt="" />

            </div>
        </div>
    );
};

export default Errorpage;