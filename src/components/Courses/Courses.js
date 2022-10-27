import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';

const Courses = () => {

    const courses = useLoaderData();
    console.log(courses);

    return (
        <div className='grid grid-cols-4 mt-8'>

            <div className='left-sidebar border col-span-1 p-2'>
                <h2 className='text-center font-semibold text-2xl bg-violet-400 text-gray-800 mb-5 p-3'>Course Name</h2>
                <div className=''>
                    {
                        courses.map(course => <p className='bg-gray-200 text-gray-800 mb-2 p-2'>{course.courseName}</p>)
                    }
                </div>
            </div>

            <div className='mainContent border col-span-3'>
                <div className=''>
                    {
                        courses.map(course => <SingleCourse
                            key={course.id}
                            
                        ></SingleCourse>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Courses;