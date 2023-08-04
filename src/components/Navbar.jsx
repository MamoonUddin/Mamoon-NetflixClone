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
    // The main div contains the navigation items and logo.
    // It uses flex layout to align items horizontally.
    // The z-[100] class ensures the Navbar is displayed above other elements.
    // The w-full class ensures the Navbar spans the full width of its container.
    // The sticky class makes the Navbar sticky.
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute sticky top-0 bg-black'>
      {/* Logo link */}
      <Link to='/'>
        {/* The logo is displayed as a h1 element with text size 4xl and bold font. */}
        {/* It also acts as a cursor pointer on hover. */}
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          NETFLIX
        </h1>
      </Link>

      {/* Conditional rendering based on user authentication status */}
      {user?.email ? ( // If the user is logged in (user.email is not null or undefined)
        <div>
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
        </div>
      ) : ( // If the user is not logged in
        <div>
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
        </div>
      )}
    </div>
  );
};

export default Navbar;
