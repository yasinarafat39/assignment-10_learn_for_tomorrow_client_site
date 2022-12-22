import React from 'react';
import { toast } from 'react-toastify';

import goalWithUs from '../../../assets/withUs.png';

const GetUpdate = () => {

    const handleSubscribe = (event) => {
        event.preventDefault()
        const form = event.target;
        toast.success("Subscribe Successful")
        form.reset();
    }

    return (
        <div className="w-full overflow-hidden relative mt-24" >
            <img className='absolute inset-0 h-full w-full object-cover' src={goalWithUs} alt="" />
            <div className='absolute inset-0 bg-gray-900 bg-opacity-50'></div>

            <div className=" container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10 relative">
                <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">Get Our Updates</h1>
                <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">Find out about events and other news</p>
                <div className="flex flex-row">
                    <form onSubmit={handleSubscribe}>
                        <input type="email" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" required />
                        <button type="submit" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-600 text-gray-50">Subscribe</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default GetUpdate;