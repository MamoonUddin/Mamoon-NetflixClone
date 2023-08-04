import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Movie = ({ item }) => {
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      {/* Wrap the movie card with Link and set the "to" attribute to the title page URL */}
      <Link to={`/title/movie/${item?.id}`}> {/* Use item.media_type instead of hardcoding the type */}
        <img
          className='w-full h-auto block'
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
          <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
            {item?.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
