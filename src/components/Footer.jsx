import React from 'react';

// Footer component represents the footer section at the end of the page.
function Footer() {
  return (
    <div className="flex flex-col space-y-2 items-center text-center py-6 text-white">
      {/* Made By text with a link to the author's GitHub profile */}
      <h4 className="text-true-gray-500 text-md">
        Made By
        <a
          className="m-1 border-b-2 border-teal-700 text-true-gray-600 dark:text-true-gray-400"
          href="https://github.com/MamoonUddin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mamoon
        </a>
      </h4>

      {/* Powered by text with a link to TMDB website */}
      <h4 className="text-true-gray-500 text-md">
        Powered by
        <a
          className="border-2 border-teal-800 rounded-full px-1 py-px m-1 text-true-gray-600 dark:text-true-gray-400"
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TMDB
        </a>
      </h4>
    </div>
  );
}

export default Footer;
