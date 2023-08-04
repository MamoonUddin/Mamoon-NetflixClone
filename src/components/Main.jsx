import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
  // State to store the list of movies fetched from the API
  const [movies, setMovies] = useState([]);

  // Pick a random movie from the list to display in the main section
  const movie = movies[Math.floor(Math.random() * movies.length)];

  // Fetch the list of popular movies from the API using useEffect hook
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // Function to truncate a string and add ellipsis if it exceeds a certain length
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        {/* Background gradient */}
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        {/* Movie backdrop image */}
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          {/* Movie title */}
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            {/* Play button */}
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Play
            </button>
            {/* Watch Later button */}
            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          {/* Release date */}
          <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p>
          {/* Movie overview */}
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
