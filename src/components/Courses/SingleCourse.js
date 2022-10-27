import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    console.log(course);
    const { id, courseName, courseType, details, duration, gain, rating, review, thumbnail } = course;
    return (





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
                    <div className="text-lg font-semibold">{courseName}</div>
                    <p className="text-sm text-gray-900">
                        You'll gain: {gain.slice(0, 50) + "..."}
                    </p>

                </div>

                <Link to={"/course/:id"} className="relative ">
                    <button className=' inline-flex items-center justify-center w-full h-12 font-medium tracking-wide text-gray-800 hover:bg-gray-200 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none '>
                        Details
                    </button>
                </Link>
            </div>
        </div>


    );
};

export default SingleCourse;