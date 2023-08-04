// Import the API key and base URLs from environment variables
const key = process.env.REACT_APP_IMDB_API_KEY;
const baseURL = "https://api.themoviedb.org/3";
const TRENDING_BASE_URL = `${baseURL}/trending/all/day?api_key=${key}`;
const SEARCH_BASE_URL = `${baseURL}/search/multi?api_key=${key}&language=en-US`;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

// Object with requests for popular, top rated, trending, and upcoming movies
const requests = {
  requestPopular: `${baseURL}/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `${baseURL}/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `${baseURL}/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestUpcoming: `${baseURL}/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

// Function to fetch movies and TV shows based on the search term and page number
export async function getMoviesAndTV(page, searchTerm = "") {
  const resp = await fetch(
    searchTerm
      ? `${SEARCH_BASE_URL}&query=${searchTerm}&page=${page}`
      : `${TRENDING_BASE_URL}&page=${page}`
  );
  const titles = await resp.json();

  // Process the API response and format the data
  titles.results = titles.results
    .filter((res) => res.media_type !== "person")
    .map((title) => ({
      ...title,
      backdrop_path: title.backdrop_path
        ? IMAGE_BASE_URL + "/w1280" + title.backdrop_path
        : null,
      poster_path: title.poster_path
        ? IMAGE_BASE_URL + "/w342" + title.poster_path
        : null,
      title: title.media_type === "movie" ? title.title : title.name,
    }));

  return titles;
}

// Function to get detailed information about a specific title based on type and ID
export async function getTitle(type, id) {
  const resp = await fetch(`${baseURL}/${type}/${id}?api_key=${key}`);
  const title = await resp.json();

  // Process the API response and format the data
  if (title) {
    title.backdrop_path = title.backdrop_path
      ? IMAGE_BASE_URL + "/w1280" + title.backdrop_path
      : null;
    title.poster_path = title.poster_path
      ? IMAGE_BASE_URL + "/w500" + title.poster_path
      : null;
    title.name = type === "movie" ? title.title : title.name;
    title.runtime =
      title.runtime !== undefined ? title.runtime : title.episode_run_time[0];
    title.release_date = title.release_date
      ? title.release_date
      : title.first_air_date;
  }

  return title;
}


// Function to get the cast (actors) of a specific title based on type and ID
export async function getActors(type, id) {
  try {
    const credits = await fetch(`${baseURL}/${type}/${id}/credits?api_key=${key}`);
    if (!credits.ok) {
      throw new Error('API request failed');
    }

    const creditsData = await credits.json();

    if (!creditsData || !Array.isArray(creditsData.cast)) {
      return [];
    }

    return creditsData.cast.map((actor) => ({
      ...actor,
      profile_path: actor.profile_path ? IMAGE_BASE_URL + "/w185" + actor.profile_path : null,
    }));
  } catch (error) {
    console.error("Error fetching actor data:", error);
    return [];
  }
}

// Function to get detailed information about a specific actor based on ID
export async function getActor(id) {
  const respData = await fetch(`${baseURL}/person/${id}?api_key=${key}`);
  const respLinks = await fetch(`${baseURL}/person/${id}/external_ids?api_key=${key}`);

  const actorData = await respData.json();
  const actorLinks = await respLinks.json();

  return {
    links: {
      imdb: actorLinks.imdb_id ? "http://imdb.com/name/" + actorLinks.imdb_id : null,
      twitter: actorLinks.twitter_id ? "http://twitter.com/" + actorLinks.twitter_id : null,
      instagram: actorLinks.instagram_id ? "http://instagram.com/" + actorLinks.instagram_id : null,
      facebook: actorLinks.facebook_id ? "http://facebook.com/" + actorLinks.facebook_id : null,
    },
    data: {
      ...actorData,
      profile_path: actorData.profile_path ? IMAGE_BASE_URL + "/h632" + actorData.profile_path : null,
    },
  };
}

// Export the requests object and the utility functions
export default requests;
