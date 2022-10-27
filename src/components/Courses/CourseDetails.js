import React from 'react';
import { FaCrown, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineCloudDownload } from "react-icons/ai";

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, courseName, courseType, details, duration, gain, rating, review, thumbnail } = course;

    return (
        <div className='mt-12 lg:grid lg:grid-cols-4 '>
            <div className='col-span-1 bg-gray-100'>

                <div className=' rounded transition flex items-center bg-gray-300 p-2 m-3 '>
                    <p>Rating:</p>&nbsp;
                    <p className='flex items-center justify-center'> <FaStar className='text-yellow-600' /> &nbsp;{rating}</p>
                </div>
                <p className='bg-gray-300 p-2 m-3 rounded transition '>{courseType}</p>
                <p className='bg-gray-300 p-2 m-3 rounded transition '>{review} Review</p>
                <p className='bg-gray-300 p-2 m-3 rounded transition '>Duration: {duration}</p>

                <Link to={`/checkout/${id}`} className=' rounded hover:shadow-lg transition m-3 py-6 bg-violet-400 hover:bg-violet-500 px-4 py-2 text-gray-800   flex items-center justify-center '> <FaCrown className='text-yellow-400' />&nbsp; Get Premium Access </Link>

            </div>

            <div className='col-span-3 p-5'>

                <section className="text-gray-800 bg-gray-100">
                    <div className="container flex flex-col mx-auto lg:flex-row">

                        <div className="w-full w-1/3" style={{ backgroundImage: `url(${thumbnail})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                         
                        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-violet-400">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <h2 className="text-3xl font-semibold leading-none">{courseName}</h2>
                            <p className="mt-4 mb-8 text-sm">{gain}</p>

                            <button className="flex items-center self-start px-10 py-3 text-lg font-medium rounded-3xl bg-violet-400 text-gray-900">Download &nbsp; <AiOutlineCloudDownload /></button>


                        </div>
                    </div>
                </section>

                <h2 className='text-2xl mt-11 font-semibold text-gray-800'>{courseName}</h2>
                <p className='text-xl text-gray-800 font-semibold mt-10 mb-2'>About This Course:</p>
                <h3 className='text-gray-700'>
                    {details}
                </h3>

                <h2 className='text-gray-800 mb-2 text-xl font-semibold mt-16'>After this Course you'll gain: </h2>
                <p className='text-gray-700 '>{gain}</p>


                <div className='lg:flex items-center lg:justify-between text-gray-700  mt-12'>
                    <div className='flex items-center lg:justify-between'>
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
                        <p>Duration: {duration}</p>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='mt-20 inline-block'>
                        <Link to="/courses" className='bg-gray-200 hover:bg-gray-300 transition px-6 py-2 text-gray-800 block flex items-center justify-between'> < AiOutlineDoubleLeft />&nbsp;Back</Link>
                    </div>
                    <div className='mt-20 inline-block'>
                        <Link to={`/checkout/${id}`} className='bg-violet-400 hover:bg-violet-500 px-4 py-2 text-gray-800 block flex items-center justify-between'> <FaCrown className='text-yellow-400' />&nbsp; Get Premium Access &nbsp;<AiOutlineDoubleRight /> </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CourseDetails;