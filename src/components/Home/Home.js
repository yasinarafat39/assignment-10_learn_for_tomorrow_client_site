import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (


        <div>
            <div className='text-center mt-24 flex items-center justify-center'>
                <div className=' '>
                    <h2 className='text-4xl font-semibold'>Welcome to our Educational Platform!</h2>
                    <h2 className='text-4xl font-semibold'>Learn For Tomorrow</h2>
                </div>
            </div>
            <div className='flex justify-center mt-8 mb-80'>
                <div>
                    <button
                        className="flex items-center self-start px-10 py-3 text-lg font-medium rounded-3xl bg-violet-400 hover:bg-violet-500 transition text-gray-800">
                        <Link
                            to="/courses"
                            aria-label="Courses"
                            title="Courses"
                        >
                            Courses
                        </Link>
                    </button>
                </div> &nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                    <button
                        className="flex items-center self-start px-10 py-3 text-lg font-medium rounded-3xl bg-violet-400 hover:bg-violet-500 transition text-gray-800">
                        <Link
                            to="/blog"
                            aria-label="Sign up"
                            title="Sign up"
                        >
                            Blog
                        </Link>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Home;