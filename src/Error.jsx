import React from 'react';
import Header from './Header';

const Error = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='font-bold text-[5rem] text-center'>Oooooops</h1>
            <h1 className='font-bold text-[4rem] text-center'>404 page not found.</h1>
        </div>
    );
};

export default Error;