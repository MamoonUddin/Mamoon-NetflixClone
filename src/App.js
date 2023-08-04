import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Show from "./pages/Show";
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import TitlePage from './pages/TitlePage';

function App() {
  return (
    <>
      {/* Wrap the entire application with AuthContextProvider to provide authentication context to all components */}
      <AuthContextProvider>
        {/* Render the Navbar component on top of the application */}
        <Navbar />
        {/* Use Routes component to define the routing configuration */}
        <Routes>
          {/* Define routes for different pages */}
          <Route path='/' element={<Home />} /> {/* Home page */}
          <Route path='/login' element={<Login />} /> {/* Login page */}
          <Route path='/signup' element={<Signup />} /> {/* Signup page */}
          <Route
            path='/shows'
            element={
              <ProtectedRoute>
                {/* ProtectedRoute to make sure only authenticated users can access Show page */}
                <Show />
              </ProtectedRoute>
            }
          />
          <Route
            path='/search'
            element={
              <ProtectedRoute>
                {/* ProtectedRoute to make sure only authenticated users can access SearchPage */}
                <SearchPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/title/:type/:id"
            element={
              <ProtectedRoute>
                {/* ProtectedRoute to make sure only authenticated users can access TitlePage */}
                <TitlePage />
              </ProtectedRoute>
            }
          />
          {/* Route for handling 404 Not Found pages */}
          <Route path='*' element={<NotFound />}/>
        </Routes>
        {/* Render the Footer component at the bottom of the application */}
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
