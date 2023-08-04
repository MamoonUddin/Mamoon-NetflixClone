import React, { useState } from 'react';

function TitleOverview({ text, limit = 250, className: propClasses }) {
  // State to track whether the complete text should be shown or truncated
  const [showComplete, setShowComplete] = useState(false);

  if (!text) {
    return null; // Return null or any other fallback content when the text prop is not provided
  }

  return (
    <div className={propClasses}>
      {text.length > limit ? (
        // If the text length exceeds the limit, show a truncated version with "more" link
        <>
          {/* If showComplete is true, show the complete text; otherwise, show the truncated version */}
          {showComplete ? (
            // If showComplete is true, show the complete text and add a link to show less
            <span onClick={() => setShowComplete(false)}>{text}</span>
          ) : (
            // If showComplete is false, show the truncated version with ellipsis and add a link to show more
            <span onClick={() => setShowComplete(true)}>
              {text.substring(0, limit - 50)} {/* Limit the text length with an additional buffer */}
            </span>
          )}

          {/* Show a link to toggle between showing more and showing less */}
          <span
            className="text-gray-400 cursor-pointer"
            onClick={() => setShowComplete(!showComplete)}
          >
            {showComplete ? " less" : " ...more"}
          </span>
        </>
      ) : (
        // If the text length does not exceed the limit, show the complete text
        <p className="inline">{text}</p>
      )}
    </div>
  );
}

export default TitleOverview;
