import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Home() {
  // Access the authentication context to get the user's authentication state
  const { user } = UserAuth();

  return (
    <>
      {/* Conditional rendering based on user authentication */}
      {user ? (
        // If the user is authenticated, redirect to the '/shows' route using Navigate component
        <Navigate to='/shows' />
      ) : (
        // If the user is not authenticated, show the landing page with an image background
        <div
          className='w-full h-screen relative flex items-center justify-center'
          style={{
            backgroundImage: 'url("https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='bg-black/70 p-8 rounded-md max-w-[700px]'>
            <p className='text-white text-xl font-bold'>
              This is a project fully built with React, Firebase, and the TMDB API.
            </p>
            <p className='text-white mt-4'>
              You can sign up as a user or you can simply use this test user:
              <br />
              <span className='font-bold'>Username/Email:</span> test@test.com
              <br />
              <span className='font-bold'>Password:</span> password
            </p>
            <p className='text-white mt-4'>
              Thank you for looking at the project. To check out more, visit my{' '}
              <a
                className='text-blue-400 hover:underline'
                href='https://github.com/MamoonUddin'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>{' '}
              or my{' '}
              <a
                className='text-blue-400 hover:underline'
                href='https://mamoon.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Portfolio
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
