import React from 'react';

import learnerOutcomes from '../../../assets/learnerOutcomes.png';
import { FaRegHandPointRight } from "react-icons/fa";


const LearnerOutcomes = () => {
    return (
        <div className=" mb-24 grid lg:gap-8 lg:grid-cols-2 lg:items-center">



            <div aria-hidden="true" className="mt-10 lg:mt-0 mb-8 lg:mb-0">
                <img src={learnerOutcomes} alt="" className="mx-auto rounded-lg" />
            </div>

            <div className='lg:mr-24'>
                <h1 className="text-5xl mb-8 text-violet-400 font-mono font-semibold ">Learner outcomes on courses you will take</h1>

                <p className='flex text-xl mb-4'>
                    <FaRegHandPointRight className=' text-2xl text-[#B37946] mr-4 '></FaRegHandPointRight>
                    Techniques to engage effectively with vulnerable children and young people.
                </p>
                <p className='flex text-xl mb-4'>
                    <FaRegHandPointRight className=' text-2xl text-[#B37946] mr-4 '></FaRegHandPointRight>
                    Join millions of people from around the world learning together.
                </p>
                <p className='flex text-xl mb-4'>
                    <FaRegHandPointRight className=' text-2xl text-[#B37946] mr-4 '></FaRegHandPointRight>
                    Join millions of people from around the world learning together. Online learning is as easy and natural.
                </p>


            </div>



        </div>
    );
};

export default LearnerOutcomes;