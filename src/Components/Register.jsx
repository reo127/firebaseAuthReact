import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'

const Register = () => {
    const navigate = useNavigate();

    // Collecting input values
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const [error, setError] = useState('')


    // Create or register new user to database
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            if(password !== conformPassword){
                setError("password and conform password is not match")
                return
            }

            let res = await createUserWithEmailAndPassword(auth, email, password)
            let user = res.user
            navigate('/login')
            console.log(user)
            
        } catch (error) {
            console.log(error)
            if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
        }
        
    }


    return (
        <section className="text-gray-400 bg-gray-900 body-font h-[90vh]">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="  md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 className="text-white font-medium title-font mb-5 text-3xl text-center">Register</h2>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">First Name</label>
                        <input type="text" id="first-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Last Name</label>
                        <input type="text" id="last-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Password</label>
                        <input type="password" id="password-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Conform Password</label>
                        <input type="password" id="cpassword-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={e => setConformPassword(e.target.value)}
                            value={conformPassword}
                        />
                    </div>
                    <div className='w-full flex justify-center my-3'> <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleRegister}>Submit</button></div>
                {error && <h1 className='text-3xl font-semibold text-red-400'>{ error }</h1> }
                </div>

            </div>
        </section>
    )
}

export default Register