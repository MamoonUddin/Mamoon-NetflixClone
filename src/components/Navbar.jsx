import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  // Access the user and logOut function from the UserAuth context
  const { user, logOut } = UserAuth();

  // Create a navigate function using the useNavigate hook from React Router
  const navigate = useNavigate();

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      // Call the logOut function from the UserAuth context
      await logOut();
      // Redirect the user to the home page after logout
      navigate('/');
    } catch (error) {
      console.log("this is an error", error);
    }
  };

  return (
    // The main container div contains the navigation items and logo.
    // It uses flex layout to align items horizontally and justify the content.
    // The z-[100] class ensures the Navbar is displayed above other elements.
    // The w-full class ensures the Navbar spans the full width of its container.
    // The sticky class makes the Navbar sticky.
    <div className='w-full bg-black'>
      <div className='flex items-center justify-between p-4 z-[100] max-w-screen-xl mx-auto'>
        {/* Left section with MMU Powered By TMDB */}
        <div className="flex items-center">
          {/* Link to navigate to the home page */}
          <Link to='/'>
            <h1 className='text-red-600 text-4xl font-bold mr-4 cursor-pointer'>
              MMU
            </h1>
          </Link>
          {/* External link to TMDB website */}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className='text-white text-sm mr-4 cursor-pointer'>
              Powered By
            </h1>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="TMDB"
              className="w-16 h-auto cursor-pointer"
            />
          </a>
        </div>

        {/* Right section with Sign In/Sign Up */}
        <div className="flex items-center">
          {/* Conditional rendering based on user authentication status */}
          {user?.email ? ( // If the user is logged in (user.email is not null or undefined)
            <>
              {/* Search button */}
              <Link to='/search'>
                <button className='text-white pr-4'>
                  {/* The search icon from the BiSearch react-icons library */}
                  <BiSearch />
                </button>
              </Link>
              {/* Logout button */}
              <button
                onClick={handleLogout}
                className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
              >
                Logout
              </button>
            </>
          ) : ( // If the user is not logged in
            <>
              {/* Sign In button */}
              <Link to='/login'>
                <button className='text-white pr-4'>Sign In</button>
              </Link>
              {/* Sign Up button */}
              <Link to='/signup'>
                <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
