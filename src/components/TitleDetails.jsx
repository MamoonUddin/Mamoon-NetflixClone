import React from 'react';
import Card from './Card';
import TitleOverview from './TitleOverview';
import Loader from './Loader';

function TitleDetails({ title }) {
  console.log("Title prop in TitleDetails:", title);

  if (!title) {
    return <Loader />;
  }

  const {
    backdrop_path,
    poster_path,
    name,
    genres,
    homepage,
    overview,
    release_date,
    vote_average,
    runtime,
  } = title;

  return (
    <div 
      className="md:h-5/6 bg-fixed bg-cover bg-center py-8 px-8" 
      style={{backgroundImage: `url(${backdrop_path})`}}
    >
      <div className="w-full flex flex-col max-w-5xl m-auto sm:flex-row items-center sm:items-start rounded-2xl p-2 shadow-xl backdrop-filter backdrop-brightness-75 dark:backdrop-brightness-50 backdrop-blur-md">
        <div className="w-auto sm:w-80 object-cover">
          <Card image={poster_path} title={name} />
        </div>
        <div className="flex-1 px-2 sm:px-8 py-4 space-y-3 text-white dark:text-light-800">
          <a href={homepage}>
            <h2 className="text-3xl font-bold text-light-500">{name}</h2>
          </a>
          <div className="flex flex-wrap">
            {genres &&
              genres.map((genre) => (
                <span key={genre.id} className="px-2 text-sm m-1 rounded-full border border-light-800">
                  {genre.name}
                </span>
              ))}
          </div>
          <div>
            <h3 className="font-bold uppercase">Plot</h3>
            <TitleOverview text={overview} className="text-sm" />
          </div>

          <hr className="border-2 w-1/3 mx-auto rounded-full border-true-gray-500/30" />

          <div className="flex flex-wrap justify-center text-center text-sm">
            {release_date && (
              <div className="m-2">
                <h3 className="text-sm font-bold uppercase mb-2">Release date</h3>
                <span className="text-sm">
                  {new Date(release_date).toDateString()}
                </span>
              </div>
            )}
            <div className="m-2">
              <h3 className="font-bold uppercase mb-2">Rating</h3>
              <span className="w-8 h-8 rounded-full bg-light-800 p-1.5 text-dark-800">
                {vote_average ? vote_average : "N/A"}
              </span>
            </div>
            {homepage && (
              <div className="m-2">
                <h3 className="font-bold uppercase mb-2">Homepage</h3>
                <a className="capitalize text-blue-200" href={homepage} target="_blank" rel="noopener noreferrer">
                  {new URL(homepage).hostname.split(".").slice(-2,-1)[0]}
                </a>
              </div>
            )}
            <div className="m-2">
              <h3 className="font-bold uppercase mb-2">Runtime</h3>
              <span>{runtime ? `${runtime} min` : "N/A"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleDetails;
