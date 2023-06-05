import React from 'react';
import FemailStudent from '../../../assets/Femail-Student-1.jpg';
import femailStudentForMobile from '../../../assets/Femail-Student-for-Mobile.jpg';

import { GiBookmarklet, GiAchievement, GiTeacher } from "react-icons/gi";

const BenefitsOfLearning = () => {
    return (
        <section className='grid md:grid-cols-2 gap-10 bg-gray-50 w-full md:w-4/5 mx-auto   mt-8  '>
            <div className='bg-cover' style={{ backgroundImage: `url(${FemailStudent})`, backgroundRepeat: 'no-repeat' }}>
                <img src={femailStudentForMobile} alt="" className='md:hidden' />
            </div>


            <div className='p-4 pl-0'>


                <p className='uppercase text-xl text-violet-600 font-semibold '>Learn Anything</p>
                <h2 className='text-[2.5em] font-semibold mb-4'>Benefits About Online Learning Expertise</h2>

                <div className='flex bg-white hover:bg-violet-600 hover:text-white p-5 mb-5'>
                    <div className='mr-4'>
                        <i className='text-7xl hover:text-white'><GiBookmarklet /></i>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold'>Online Courses</h3>
                        <p>Access a wide range of courses on various subjects from anywhere with internet connection, providing flexibility and convenience.</p>
                    </div>
                </div>

                <div className='flex bg-white hover:bg-violet-600 hover:text-white p-5 mb-5'>
                    <div className='mr-4'>
                        <i className='text-7xl hover:text-white'><GiAchievement /></i>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold'>Earn A Certificates</h3>
                        <p>Obtain a recognized credential upon completion, enhancing your resume and demonstrating your knowledge and commitment.</p>
                    </div>
                </div>


                <div className='flex bg-white hover:bg-violet-600 hover:text-white p-5 mb-5'>
                    <div className='mr-4'>
                        <i className='text-7xl hover:text-white'><GiTeacher /></i>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold'>Learn with Expert</h3>
                        <p>Interact with experienced instructors and industry professionals, gaining valuable insights and guidance for skill development and career advancement.</p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default BenefitsOfLearning;