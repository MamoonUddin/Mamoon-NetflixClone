// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // API key for Firebase project
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, // Firebase Auth domain
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID, // Firebase project ID
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, // Firebase storage bucket
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER, // Firebase messaging sender ID
  appId: process.env.REACT_APP_APP_ID, // Firebase app ID
  measurementId: process.env.REACT_APP_MEASUREMENT_ID // Firebase measurement ID (Optional)
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // Initialize the Firebase app with the given configuration
export const auth = getAuth(app); // Get the Firebase Auth instance for the initialized app
