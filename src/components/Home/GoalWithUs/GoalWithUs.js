import React from 'react';
import { Link } from 'react-router-dom';

import goalWithUs from '../../../assets/withUs.png';

const GoalWithUs = () => {
    return (
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">

            <div aria-hidden="true" className="mt-10 lg:mt-0 mb-8 lg:mb-0">
                <img src={goalWithUs} alt="" className="mx-auto rounded-lg" />
            </div>

            <div className='lg:mr-28'>
                <h3 className="mb-6 text-4xl font-semibold font-mono  text-violet-400">Take the next step toward your personal and professional goals with us.</h3>
                <p className="mt-3 text-lg text-gray-600">Build skills with courses, life time access, free enrolment, and for a better online reviews courses. </p>

                <Link
                    to="/signup"
                    className=" mt-5 inline-flex items-center justify-center h-12 px-16 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-violet-600 bg-violet-400  focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                >
                    Sign up
                </Link>
            </div>

        </div>
    );
};

export default GoalWithUs;