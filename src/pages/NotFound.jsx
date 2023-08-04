import React from 'react';

function NotFound() {
  return (
    <div className='w-full h-screen'>
      {/* Semi-transparent overlay to darken the background */}
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto'>
          <div className='max-w-[320px] mx-auto py-16 h-1/2 flex flex-col justify-center items-center '>
            {/* Display the "404" error code */}
            <h1 className="text-red-500 text-6xl font-bold align-middle">404</h1>
            {/* Display the "Page Not Found" message */}
            <p className="text-red-400 text-4xl font-bold uppercase">Page Not Found</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
