import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {

    const { user, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');



    const handleOnSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                setError('');
                toast.success('LogIn Success!', { position: 'top-center', autoClose: 3000 })
            })
            .catch(error => {
                toast.error(error.message);
                setError(error.message);
            })
    }

    return (
        <div className="hero  bg-base-200">

            <div className="card  w-2/4 shadow-2xl ">

                <form onSubmit={handleOnSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {
                        error && <p className='text-red-400'><small>{error}</small></p>
                    }

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Login;