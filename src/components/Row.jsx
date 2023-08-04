import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ title, fetchURL, rowID }) => {
  // State to store the movies fetched from the API
  const [movies, setMovies] = useState([]);

  // Fetch movies from the API when the component mounts or fetchURL changes
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      // Set the fetched movies in the state
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  // Function to slide the movies carousel to the left
  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  // Function to slide the movies carousel to the right
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      {/* Display the title of the movie row */}
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>

      {/* Movies carousel */}
      <div className='relative flex items-center group'>
        {/* Left arrow for sliding left */}
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />

        {/* Container for movies with horizontal scrolling */}
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {/* Render each movie in the movies array using the Movie component */}
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>

        {/* Right arrow for sliding right */}
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
