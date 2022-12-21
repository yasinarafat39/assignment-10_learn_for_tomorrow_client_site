import React from 'react';
import { Link } from 'react-router-dom';
import GetUpdate from './GetUpdate/GetUpdate';
import GoalWithUs from './GoalWithUs/GoalWithUs';
import LearnerOutcomes from './LearnerOutcomes/LearnerOutcomes';

import banner from '../../assets/3785210.jpg';

const Home = () => {
    return (


        <div className='mx-auto p-6 '>

            <section className="bg-[rgb(238,239,243)]  text-gray-800 mb-24">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Welcome to
                            <span className="text-violet-600"> Educational</span> Website
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Build skills with courses, life time access, free enrolment,
                            and for a better online reviews courses.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to="/courses" className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">courses</Link>
                            <Link to="/blog" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 hover:bg-violet-600 hover:text-white ">Blogs</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>



            {/* <div className='flex justify-center mt-8 mb-80'>
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
            </div> */}


            <LearnerOutcomes></LearnerOutcomes>
            <GoalWithUs></GoalWithUs>
            <GetUpdate></GetUpdate>
        </div>

    );
};

export default Home;