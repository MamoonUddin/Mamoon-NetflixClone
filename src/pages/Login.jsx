import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  // State to manage user inputs for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to handle and display error messages during login
  const [error, setError] = useState('');

  // Access the authentication context to get the user's authentication state and login function
  const { user, logIn } = UserAuth();

  // React router's navigate function to programmatically navigate to other routes
  const navigate = useNavigate();

  // Function to handle form submission and attempt user login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state before attempting login
    try {
      // Call the logIn function from the authentication context with email and password
      await logIn(email, password);
      navigate('/'); // Redirect to the home page after successful login
    } catch (error) {
      console.log("this is an eror", error);
      setError(error.message); // Set error state to display the error message from the authentication process
    }
  };

  return (
    <div className='w-full h-screen'>
      {/* Background image for the login page */}
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='/'
      />
      {/* Semi-transparent overlay to darken the background image */}
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign In</h1>
            {/* Display error message if there's an authentication error */}
            {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
            {/* Login form */}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-700 rouded'
                type='email'
                placeholder='Email'
                autoComplete='email'
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-700 rouded'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
              />
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                Sign In
              </button>
              {/* Checkbox for "Remember me" and "Need Help?" link */}
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              {/* Link to navigate to the sign-up page */}
              <p className='py-8'>
                <span className='text-gray-600'>New to Netflix?</span>{' '}
                <Link to='/signup'>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
