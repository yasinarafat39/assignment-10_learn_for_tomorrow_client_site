import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const course = useLoaderData();
    const { id, courseName, courseType, details, duration, gain, rating, review, thumbnail } = course;

    const handleCheckout = () => {
        toast.success('Successfully Enrolled')
    }
    const handleCancel = () => {
        toast.warning('Canceled')
    }

    return (
        <div>
            <section className="py-6 dark:text-gray-50">
                <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
                    <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 dark:bg-violet-400 dark:text-gray-900">
                        <span className="text-lg font-semibold">Check Out | Beginner </span>
                        <p className="text-5xl font-bold">{courseName}</p>
                        <p className="font-semibold mt-4">{gain}</p>
                        <div className='flex '>
                            <button onClick={handleCheckout} className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:bg-gray-800 dark:text-gray-50">Get Start</button> &nbsp;&nbsp;&nbsp;
                            <button onClick={handleCancel} className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:bg-gray-800 dark:text-gray-50">Cancel</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CheckOut;