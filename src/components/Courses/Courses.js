import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
                        courses.map(course => <Link to={"/course/:id"}><p className='bg-gray-200 text-gray-800 mb-2 p-2'>{course.courseName}</p></Link>)
                    }
                </div>
            </div>

            <div className='mainContent border col-span-3'>
                <div className='grid grid-cols-3 gap-6 m-6'>
                    {
                        courses.map(course => <SingleCourse
                            key={course.id}
                            course={course}
                        ></SingleCourse>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Courses;