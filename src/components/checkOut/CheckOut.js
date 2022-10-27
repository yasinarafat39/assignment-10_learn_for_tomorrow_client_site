import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <h2>This is Check Out page.</h2>
        </div>
    );
};

export default CheckOut;