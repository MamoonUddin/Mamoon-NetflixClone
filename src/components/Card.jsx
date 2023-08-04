import React from 'react';

// Card component represents a card with an image and an optional title.
function Card({ image, title, showTitle, transition }) {
  return (
    <div className="relative text-center w-full h-full bg-true-gray-400 dark:bg-dark-800 rounded-2xl overflow-hidden shadow-md">
      {/* If an image is provided, display it. Otherwise, show a message. */}
      {image ? (
        <img
          className={`w-full h-full object-cover ${transition ? "transition duration-500 ease-out transform hover:(shadow-lg scale-120)" : ""}`}
          src={image}
          alt={`poster for ${title}`}
        />
      ) : (
        <div className="text-dark-50 my-28">Image not available</div>
      )}

      {/* Display the title if showTitle is true or if no image is provided. */}
      {(showTitle || !image) && (
        <h4 className="absolute bottom-0 w-full text-white backdrop-filter backdrop-brightness-50 backdrop-blur-sm p-1">
          {title}
        </h4>
      )}
    </div>
  );
}

export default Card;
