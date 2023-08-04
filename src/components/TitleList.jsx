import React, { useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'

import Card from './Card'
import FlexContainer from './FlexContainer'

export default function TitleList({ header, titles, loadMore, hasMore }) {
  // Create a ref to hold the IntersectionObserver instance
  const observer = useRef()

  // useCallback hook to create a memoized function that observes the last title element
  const lastTitleRef = useCallback(node => {
    // Check if titles is available
    if (!titles) return

    // Disconnect the current observer if exists
    if (observer.current) observer.current.disconnect()

    // Create a new IntersectionObserver and observe the last title element
    observer.current = new IntersectionObserver(entries => {
      // When the last title element comes into view and there are more items to load
      if (entries[0].isIntersecting && hasMore) {
        // Call the loadMore function to fetch more titles
        loadMore()
      }
    })

    // If the node exists, observe it
    if (node) observer.current.observe(node)
  }, [titles, hasMore, loadMore]) // Include loadMore in the dependency array to avoid missing dependency warning

  return (
    <FlexContainer title={header}>
      {/* Loop through the titles array and render each title */}
      {titles.map((t, i) => 
        <div 
          // Use the lastTitleRef for the last title element to set the intersection observer
          ref={(titles.length === i + 1) ? lastTitleRef : null}
          className="relative m-2 w-44 hover:opacity-90" 
          key={t.id}
        >
          {/* Show the vote average on top of the poster */}
          <div className="flex justify-center items-center w-8 h-8 absolute top-0 right-0 p-1 m-1 z-2 text-sm font-bold rounded-full bg-dark-800/70 text-white">
            {t.vote_average ? t.vote_average : "N/A"}
          </div>
          {/* Link to the individual title page */}
          <Link to={`/title/${t.media_type}/${t.id}`}>
            {/* Render the Card component with title information */}
            <Card
              id={t.id} 
              title={t.title}
              image={t.poster_path}
              transition 
            />
          </Link>
        </div>
      )}
    </FlexContainer>
  )
}
