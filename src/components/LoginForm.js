import React, { useState } from 'react'
import Dashboard from './Dashboard';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = (props) => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: " ",
        password: " "
    });

    const token = localStorage.getItem("passData");
    console.log(token);



    const handleInput = (e) => {
        const name = e.target.value;
        const value = e.target.value;

        console.log(name, value);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        console.log(user);
        e.preventDefault();

        if (user.email === "hamalniraj5@gmail.com" && user.password === "niraj") {
            toast.success('Login Successfull!! Welcome to Dashboard ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }
            );
            console.log(user.password);
            localStorage.setItem('token', user.password);
            navigate("/dashboard");

        } else {

            toast.error('Login Failed ! Please Register', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }








    }










    return (
        <div>
            {
                token ? <Dashboard /> :
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>

                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                        value={setUser.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                        value={setUser.password}
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"

                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="group relative w-full flex justify-center
                            py-2 px-4 border border-transparent text-sm font-medium
                            rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2
                             focus:ring-indigo-500"
                                >

                                    Sign in
                                </button>

                            </div>

                            <div className="text-sm">
                                <NavLink className="text-blue-600" to="/signup">Sign up</NavLink>
                            </div>
                        </form>
                    </div>

                </div>
            }
        </div>







    )
}

export default LoginForm;