import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();

    return (
        <div className='h-screen grid place-items-center text-center'>
            <div className='bg-slate-500 p-40 rounded-xl'>
                <h1 className='text-6xl text-white m-4 text-bold'>Oops!</h1>
                <p className='text-xl m-2'>Sorry, an unexpected error has occurred</p>
                {
                    error.status ?
                        <p>{error.status || error.message}</p>
                        : <p>
                            <b>{error.statusText || error.message}</b>
                        </p>
                }
            </div>


        </div>
    );
};

export default Error;