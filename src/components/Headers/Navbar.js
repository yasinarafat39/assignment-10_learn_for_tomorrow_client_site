
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css'
import logo from '../../assets/Learn For Tomorrow (1).png'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, userSignOut } = useContext(AuthContext);



    const handleSignOut = () => {
        userSignOut()
            .then(result => {
                toast.success('Sign Out Success.')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className="bg-white shadow-sm">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <NavLink
                        to="/"
                        aria-label="Learn For Tomorrow"
                        title="Learn For Tomorrow"
                        className="inline-flex items-center"
                    >
                        <div className='flex justify-center items-center'>
                            <img src={logo} width="70" height="70" alt="logo" />
                            <span className="ml-2 text-xl font-bold tracking-wide text-violet-400 uppercase">
                                Learn For Tomorrow
                            </span>
                        </div>
                    </NavLink>
                    <ul className="flex items-center hidden space-x-4 lg:flex">
                        <li>
                            <NavLink
                                to="/home"
                                aria-label="Home"
                                title="Home"
                                className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-600 transition duration-200 underline-offset-2 underline"
                                    :
                                    "font-medium tracking-wide text-gray-600 transition duration-200 hover:underline underline-offset-2"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/courses"
                                aria-label="Our product"
                                title="Our product"
                                className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-600 transition duration-200 underline-offset-2 underline"
                                    :
                                    "font-medium tracking-wide text-gray-600 transition duration-200 hover:underline underline-offset-2"
                                }
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/faq"
                                aria-label="Our product"
                                title="Our product"
                                className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-600 transition duration-200 underline-offset-2 underline"
                                    :
                                    "font-medium tracking-wide text-gray-600 transition duration-200 hover:underline underline-offset-2"}
                            >
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-600 transition duration-200 underline-offset-2 underline"
                                    :
                                    "font-medium tracking-wide text-gray-600 transition duration-200 hover:underline underline-offset-2"}
                            >
                                Blog
                            </NavLink>
                        </li>


                        {
                            user?.uid ?
                                <>
                                    <li>

                                        {
                                            user.photoURL ?
                                                <div title={user.displayName} className='relative flex-shrink-0'>
                                                    <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-violet-500 border border-white rounded-full dark:text-gray-100"></span>
                                                    <img className='rounded-full' src={user.photoURL} style={{ width: '50px', height: '50px' }} alt="user-profile" />
                                                </div>
                                                :
                                                <FaUserCircle title={user.displayName} />
                                        }

                                    </li>
                                    <li>
                                        <button
                                            onClick={handleSignOut}
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-600 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-gray-300 bg-gray-200  focus:shadow-outline focus:outline-none"
                                            aria-label="Sign Out"
                                            title="Sign Out"
                                        >
                                            Sign Out
                                        </button>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink
                                            to="/signin"
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-600 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-gray-300 bg-gray-200 focus:shadow-outline focus:outline-none"
                                            aria-label="Sign In"
                                            title="Sign In"
                                        >
                                            Sign In
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/signup"
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-600 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-gray-300 bg-gray-200  focus:shadow-outline focus:outline-none"
                                            aria-label="Sign up"
                                            title="Sign up"
                                        >
                                            Sign up
                                        </NavLink>
                                    </li>
                                </>


                        }

                        <li>


                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>

                        </li>

                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <NavLink
                                                to="/"
                                                aria-label="Learn For Tomorrow"
                                                title="Learn For Tomorrow"
                                                className="inline-flex items-center"
                                            >

                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Learn For Tomorrow
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to="/home"
                                                    aria-label="Home"
                                                    title="Home"
                                                    className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-600 transition duration-200 underline-offset-2 underline"
                                                        :
                                                        "font-medium tracking-wide text-gray-600 transition duration-200 hover:underline underline-offset-2"}
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/courses"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-600 transition duration-200 underline-offset-2 underline"
                                                        :
                                                        "font-medium tracking-wide text-gray-600 transition duration-200 hover:underline underline-offset-2"}
                                                >
                                                    Courses
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/faq"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-600 transition duration-200 underline-offset-2 underline"
                                                        :
                                                        "font-medium tracking-wide text-gray-600 transition duration-200 hover:underline underline-offset-2"}
                                                >
                                                    FAQ
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/blog"
                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-600 transition duration-200 underline-offset-2 underline"
                                                        :
                                                        "font-medium tracking-wide text-gray-600 transition duration-200 hover:underline underline-offset-2"}
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>

                                            {
                                                user?.uid ?
                                                    <>

                                                        <li>
                                                            <div className='flex items-center justify-center'>
                                                                <p className='font-bold text-gray-700'>{user.displayName ? user.displayName : "N/A"}</p> &nbsp; &nbsp;
                                                                {
                                                                    user.photoURL ?
                                                                        <div title={user.displayName} className='relative flex-shrink-0'>
                                                                            <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-violet-500 border border-white rounded-full dark:text-gray-100"></span>
                                                                            <img className='rounded-full' src={user.photoURL} style={{ width: '50px', height: '50px' }} alt="user-profile" />
                                                                        </div>
                                                                        :
                                                                        <FaUserCircle title={user.displayName} />

                                                                }
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <button
                                                                onClick={handleSignOut}
                                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-600 bg-gray-200 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                                aria-label="Sign Out"
                                                                title="Sign Out"
                                                            >
                                                                Sign Out
                                                            </button>
                                                        </li>
                                                    </>
                                                    :
                                                    <>
                                                        <li>
                                                            <NavLink
                                                                to="/signin"
                                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-600 bg-gray-200 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                                aria-label="Sign In"
                                                                title="Sign In"
                                                            >
                                                                Sign In
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to="/signup"
                                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-600 bg-gray-200 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                                aria-label="Sign up"
                                                                title="Sign up"
                                                            >
                                                                Sign up
                                                            </NavLink>
                                                        </li>
                                                    </>
                                            }

                                            <li className='text-center'>


                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>

                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;