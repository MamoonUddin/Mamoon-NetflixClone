import React, { useState, useEffect, useReducer } from 'react';
import Hero from '../components/Hero';
import Search from '../components/Search';
import TitleList from '../components/TitleList';
import Loader from '../components/Loader';
import { getMoviesAndTV } from "../Requests";

const initialTitlesState = {
  page: 0,
  data: [],
  totalPages: 0,
  totalTitles: 0,
}

const titlesReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_INITIAL':
      return initialTitlesState

    case 'ADD_TITLES':
      return {
        page: state.page + 1,
        totalPages: payload.total_pages,
        totalTitles: payload.total_results,
        data: [
          ...new Map(
            [...state.data, ...payload.results].map(el => [el.id, el])
          ).values()
        ],
      }

    default:
      throw new Error()
  }
}

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [titles, dispatch] = useReducer(titlesReducer, initialTitlesState);
  let heroTitle = titles.data && titles.data[0]

  useEffect(() => {
    dispatch({ type: 'SET_INITIAL' })
    fetchTitles(1, searchQuery)
  }, [searchQuery])

  const fetchTitles = async (page, searchTerm = "") => {
    setLoading(true)
    const newTitles = await getMoviesAndTV(page, searchQuery)
    dispatch({ type: 'ADD_TITLES', payload: newTitles })
    setLoading(false)
  }

  const handlePagination = () => {
    fetchTitles(titles.page + 1)
  }

  return (
    <>
      <div style={{ height: 'calc(100vh - 64px)'}}>
        {heroTitle &&
          <Hero
            image={heroTitle.backdrop_path}
            title={heroTitle.title}
            description={heroTitle.overview}
            link={`/title/${heroTitle.media_type}/${heroTitle.id}`}
          />
        }
      </div>
      <div className="pt-16">
        <Search setSearch={setSearchQuery} />
        {titles.data &&
          <TitleList
            loadMore={handlePagination}
            hasMore={titles.totalPages > titles.page}
            header={searchQuery ? "Search Results" : "Popular Today"}
            titles={titles.data}
          />
        }
        {loading && <Loader />}
      </div>
    </>
  );
}

export default SearchPage;
