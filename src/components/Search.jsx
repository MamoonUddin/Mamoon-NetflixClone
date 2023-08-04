import React, { useEffect, useState, useRef } from 'react';

export default function Search({ setSearch }) {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Ref to track the initial render
  const initial = useRef(true);

  // Effect to trigger search after a debounce of 500ms
  useEffect(() => {
    // Skip the effect on the initial render
    if (initial.current) {
      initial.current = false;
      return;
    }

    // Set a timeout for 500ms before performing the search
    const searchDebounce = setTimeout(() => {
      setSearch(searchQuery);
    }, 500);

    // Cleanup function to clear the timeout if the component unmounts or the search query changes before 500ms
    return () => clearTimeout(searchDebounce);
  }, [setSearch, searchQuery]);

  // Function to clear the search query
  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="w-full max-w-5xl m-auto sm:px-12 text-white">
      {/* Search input container */}
      <div className="relative bg-light-400 dark:bg-dark-600 text-light-800 dark:text-dark-200 shadow-md text-md rounded-full px-4 py-2 flex items-center">
        {/* Search icon */}
        <svg
          className="w-6 h-6 text-light-800 dark:text-dark-200 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        {/* Search input */}
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          className="w-full bg-transparent border-none focus:outline-none"
          placeholder="Search Movie"
          type="text"
          required
        />
        {/* Clear search button */}
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="ml-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-light-800 dark:text-dark-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
