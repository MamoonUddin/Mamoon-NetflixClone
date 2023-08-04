import React from 'react';
import { Link } from 'react-router-dom';

// BreadCrumb component displays a list of links as a breadcrumb navigation.
// It receives an array of objects containing `name` (the link name) and `location` (the link destination).
function BreadCrumb({ paths }) {
  return (
    <ul className="ml-56 py-4 text-sm uppercase text-gray-700 dark:text-gray-300">
      {paths.map((path, i) => (
        // For each path in the `paths` array, create a Link component.
        <Link key={i} to={path.location}>
          {/* For paths other than the first one, add a separator character '|' before the link name. */}
          {i !== 0 && " | "}{path.name}
        </Link>
      ))}
    </ul>
  );
}

export default BreadCrumb;
