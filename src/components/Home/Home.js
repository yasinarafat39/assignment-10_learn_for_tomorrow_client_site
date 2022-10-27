import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (


        <div>
            <div className='text-center mt-24 flex items-center justify-center'>
                <div className=' '>
                    <h2 className='text-4xl font-semibold'>Welcome to our Educational Platform!</h2>
                    <h2 className='text-4xl font-semibold'>Learn For Tomorrow</h2>
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <div>
                    <NavLink
                        to="/courses"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-600 bg-gray-200 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign In"
                        title="Sign In"
                    >
                        Courses
                    </NavLink>
                </div> &nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                    <NavLink
                        to="/blog"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-600 bg-gray-200 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                    >
                        Blog
                    </NavLink>
                </div>
            </div>
        </div>

    );
};

export default Home;