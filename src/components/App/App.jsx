import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navigation from '../Navigation/Navigation'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import HomePage from '../../pages/HomePage/HomePage';

function App() {
  return (
<div>
  <Navigation />
    <Routes>
      <Route path='/' element={< HomePage />} />
      <Route path='/movies' element={ <MoviesPage/> } />
      <Route path="/movies/:movieId" element={ <MovieDetailsPage /> } />
      <Route path="cast" element={<MovieCast />} />
      <Route path="reviews" element={<MovieReviews />} />
      <Route path='*' element={ <NotFoundPage /> } />
    </Routes>
</div>
  )
}

export default App
