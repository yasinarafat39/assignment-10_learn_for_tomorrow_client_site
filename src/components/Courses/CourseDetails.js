import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, courseName, courseType, details, duration, gain, rating, review, thumbnail } = course;

    return (
        <div className='mt-12 grid lg:grid-cols-4 '>
            <div className='col-span-1 bg-gray-200'>

            </div>

            <div className='col-span-3 p-5'>
                <img src={thumbnail} className="mx-auto" width="400" height="300" alt="" />
                <h2 className='text-2xl mt-11 font-semibold text-gray-800'>{courseName}</h2>
                <p className='text-xl text-gray-800 font-semibold mt-10 mb-2'>About This Course:</p>
                <h3 className='text-gray-700'>
                    {details}
                </h3>

                <h2 className='text-gray-800 mb-2 text-xl font-semibold mt-16'>After this Course you'll gain: </h2>
                <p className='text-gray-700 '>{gain}</p>


                <div className='flex items-center justify-between text-gray-700  mt-12'>
                    <div className='flex items-center justify-between'>
                        <p>Rating:</p>&nbsp;
                        <p className='flex items-center justify-center'> <FaStar className='text-yellow-400' /> &nbsp;{rating}</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>{courseType}</p>

                    </div>
                    <div>
                        <p>{review} Review</p>

                    </div>
                    <div>
                        <p>{duration}</p>
                    </div>
                </div>

                <button className=''>Back</button>
            </div>


        </div>
    );
};

export default CourseDetails;