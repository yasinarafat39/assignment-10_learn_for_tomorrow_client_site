import React from 'react';
import FemailStudent from '../../../assets/Femail-Student-1.jpg';
import femailStudentForMobile from '../../../assets/Femail-Student-for-Mobile.jpg';

import { GiBookmarklet, GiAchievement, GiTeacher } from "react-icons/gi";

const BenefitsOfLearning = () => {

    const data = [
        {
            _id: 1,
            icon: GiBookmarklet,
            title: "Online Courses",
            description: "Access a wide range of courses on various subjects from anywhere with internet connection, providing flexibility and convenience."
        },
        {
            _id: 2,
            icon: GiAchievement,
            title: "Earn A Certificates",
            description: "Obtain a recognized credential upon completion, enhancing your resume and demonstrating your knowledge and commitment."
        },
        {
            _id: 3,
            icon: GiTeacher,
            title: "Learn with Expert",
            description: "Interact with experienced instructors and industry professionals, gaining valuable insights and guidance for skill development and career advancement."
        },
    ]

    return (

        <section className='grid md:grid-cols-2 gap-10 bg-gray-50 w-full md:w-4/5 mx-auto '>
            <div className='bg-cover' style={{ backgroundImage: `url(${FemailStudent})`, backgroundRepeat: 'no-repeat' }}>
                <img src={femailStudentForMobile} alt="" className='md:hidden' />
            </div>


            <div className='p-4 pt-10 pl-0'>


                <p className='uppercase text-xl text-violet-600 font-semibold '>Learn Anything</p>
                <h2 className='text-[2.5em] font-semibold mb-4'>Benefits About Online Learning Expertise</h2>

                {
                    data.map(item => <div
                        key={item._id}
                        className='flex bg-white hover:bg-violet-600 hover:text-white p-5 mb-5'
                    >
                        <div className='mr-4'>
                            <i className='text-7xl hover:text-white'>{<item.icon />}</i>
                        </div>

                        <div>
                            <h3 className='text-xl font-semibold'>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>)
                }




            </div>
        </section>
    );
};

export default BenefitsOfLearning;