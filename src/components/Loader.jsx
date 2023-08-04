import React from 'react';

// Loader component represents a simple loading animation with bouncing circles.
function Loader() {
  return (
    // The main div contains three bouncing circles displayed horizontally.
    // They are flex items aligned at the center of the container.
    <div className="flex space-x-2 p-5 justify-center items-center">
      {/* The first circle with an animation delay of 0.1 seconds */}
      <div
        style={{ animationDelay: "0.1s" }}
        className="bg-true-gray-500 dark:bg-true-gray-700 p-2 w-6 h-6 rounded-full animate-bounce"
      ></div>
      
      {/* The second circle with an animation delay of 0.2 seconds */}
      <div
        style={{ animationDelay: "0.2s" }}
        className="bg-true-gray-600 p-2 w-6 h-6 rounded-full animate-bounce"
      ></div>
      
      {/* The third circle with an animation delay of 0.3 seconds */}
      <div
        style={{ animationDelay: "0.3s" }}
        className="bg-true-gray-700 dark:bg-true-gray-500 p-2 w-6 h-6 rounded-full animate-bounce"
      ></div>
    </div>
  );
}

export default Loader;
