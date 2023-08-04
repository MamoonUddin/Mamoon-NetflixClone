import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  // Access the user object from the UserAuth context
  const { user } = UserAuth();

  // Check if the user is authenticated
  // If the user is not authenticated (user is null or undefined),
  // navigate them to the home page ('/')
  if (!user) {
    return <Navigate to='/' />;
  } else {
    // If the user is authenticated, render the children components
    return children;
  }
};

export default ProtectedRoute;
