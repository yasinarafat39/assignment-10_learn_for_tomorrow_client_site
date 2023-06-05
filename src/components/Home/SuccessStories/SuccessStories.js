import React from 'react';
import successStories from '../../../assets/Success-Stories.jpg';
import student from '../../../assets/graduate-student-svgrepo-com.png';
import teacher from '../../../assets/teacher-svgrepo-com (2).png';
import schedules from '../../../assets/calendar-svgrepo-com.png';
import courses from '../../../assets/courses-svgrepo-com.png';



const SuccessStories = () => {
    const data = [
        {
            _id: 1,
            icon: student,
            number: 3000,
            subject: "Success Stories"
        },
        {
            _id: 2,
            icon: teacher,
            number: 320,
            subject: "Trusted Tutors"
        },
        {
            _id: 3,
            icon: schedules,
            number: 1000,
            subject: "SCHEDULES"
        },
        {
            _id: 4,
            icon: courses,
            number: 587,
            subject: "Courses"
        },
    ]

    return (
        <div className='w-full bg-cover grid md:grid-cols-2 lg:grid-cols-4 mb-16' style={{ backgroundImage: `url(${successStories})`, backgroundRepeat: 'no-repeat' }}>

            {
                data.map(item => <div
                    key={item._id}
                    className='flex ml-4    lg:justify-center items-center py-10 md:py-14 lg:py-32'

                >
                    <i><img src={item.icon} className='w-16 mr-6' alt="" /></i>

                    <div>
                        <h1 className='text-[3em] font-bold text-white'>{item.number}</h1>
                        <h3 className='text-2xl font-semibold uppercase text-white'>{item.subject}</h3>
                    </div>
                </div>)
            }



        </div>
    );
};

export default SuccessStories;