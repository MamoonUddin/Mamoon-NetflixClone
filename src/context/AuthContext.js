import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// Create the AuthContext
const AuthContext = createContext();

// AuthContextProvider component to manage user authentication
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  // Function to sign up a new user with email and password
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }

  // Function to log in an existing user with email and password
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Function to log out the current user
  function logOut() {
    return signOut(auth);
  }

  // useEffect hook to handle user authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state with the current user
    });
    return () => {
      unsubscribe(); // Cleanup function to unsubscribe from the onAuthStateChanged listener
    };
  }, []);

  // Provide the authentication context to child components
  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the authentication context
export function UserAuth() {
  return useContext(AuthContext);
}
