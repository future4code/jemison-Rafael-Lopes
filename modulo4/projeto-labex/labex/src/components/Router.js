import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHomePage from './Pages/AdminHomePage';
import HomePage from './Pages/HomePage'
import ListTripsPage from './Pages/ListTripsPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='listTripsPage' element={<ListTripsPage />} />
        <Route path='adminHomePage' element={<AdminHomePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router