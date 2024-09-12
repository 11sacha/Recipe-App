import { useState } from 'react';
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavouritesPage from './pages/FavouritesPage';


function App() {
  

  return (
    <div className='flex'>
      <SideBar / >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </div>
  )
}

export default App
