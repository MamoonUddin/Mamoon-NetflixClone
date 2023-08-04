import React from 'react';
import { Link } from 'react-router-dom';
import TitleOverview from './TitleOverview';

// Hero component represents a hero section with an image background, title, and description.
function Hero({ image, title, link, description }) {
  return (
    // The main div element represents the hero section with a background image.
    // The image URL is set using inline styling (backgroundImage).
    <div
      className="relative h-2/3 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* The inner div contains the content of the hero section. */}
      {/* It uses flex layout to align its items at the bottom. */}
      <div className="w-full h-full flex items-end text-white absolute bottom-0 bg-gradient-to-t from-dark-600 to-transparent">
        {/* The inner div has a maximum width and is centered horizontally. */}
        <div className="w-full max-w-5xl mx-auto p-4 sm:px-12">
          {/* The title is displayed as a link to the provided link destination. */}
          <Link to={link}>
            {/* The title is displayed with a text size of 2xl, bold font, and a shadow effect. */}
            <h3 className="text-2xl drop-shadow-md font-bold mb-5">{title}</h3>
          </Link>

          {/* The TitleOverview component is used to display the description with a character limit of 280. */}
          {/* The description is displayed with a maximum width of 3xl. */}
          <TitleOverview text={description} limit={280} className="max-w-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
