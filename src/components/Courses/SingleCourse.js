import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    console.log(course);
    const { id, courseName, courseType, details, duration, gain, rating, review, thumbnail } = course;
    return (


        <div>
            <Link to={`/course/${id}`} className="relative ">
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-xl hover:shadow">
                    <div className="relative w-full h-48">
                        <img
                            src={thumbnail}
                            className="object-cover w-full h-full rounded-t"
                            alt="course banner"
                        />
                    </div>
                    <div className="p-4 h-64">
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">{courseName}</h3>
                            <p className="text-sm text-gray-900">
                                <span className='font-semibold text-gray-700'>You'll gain:</span> <span className='text-gray-400'>{gain.slice(0, 50) + "..."}</span>
                            </p>

                            <div className='text-gray-700'>
                                <small >{courseType}</small> <br />
                                <small>Duration: {duration}</small>
                            </div>

                            <div className='flex items-center justify-between'>
                                <small className='flex items-center'><FaStarHalfAlt className='text-yellow-500' /> &nbsp; <span className='text-gray-700'>{rating}</span></small>
                                <small className='text-gray-700'>({review} review)</small>
                            </div>
                        </div>

                    </div>
                </div>
            </Link >

        </div>
    );
};

export default SingleCourse;