import React from 'react'
import { NavLink } from 'react-router-dom'

const SiignUp = () => {
    return (

        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>

                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px py-2">

                       <div className="grid grid-cols-2 gap-1 ">
                            <div>
                                <label htmlFor="first-name" className="sr-only">First Name</label>
                                <input
                                    className="appearance-none relative block
                                    w-full px-3 py-2 border border-gray-300
                                    placeholder-gray-500 text-gray-900 rounded-t-md
                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    required
                                    placeholder="First Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="first-name" className="sr-only">Last Name</label>
                                <input
                                    className="appearance-none relative block
                                    w-full px-3 py-2 border border-gray-300
                                    placeholder-gray-500 text-gray-900 rounded-t-md
                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    required
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>

                            </div>
                       </div>

                        <div>
                            <label htmlFor="username" className="sr-only">
                                Username
                            </label>
                            <input
                                className=" appearance-none 
                                rounded-none relative block w-full px-3
                                 py-2 border border-gray-300 placeholder-gray-500
                                  text-gray-900 rounded-t-md focus:outline-none 
                                  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                id="username"
                                name="username"
                                type="text"
                                required
                                placeholder="Username"
                            />

                        </div>

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

                            />
                        </div>
                    </div>

                    

                    <div>
                        <button

                            type="submit"
                            className="group relative w-full flex justify-center
                            py-2 px-4 border border-transparent text-sm font-medium
                            rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2
                             focus:ring-indigo-500"
                        >

                            Sign up
                        </button>

                    </div>

                    <div className="text-sm">
                        <p>Already Registered?? <NavLink className=" text-blue-600" to="/">Sign in</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SiignUp