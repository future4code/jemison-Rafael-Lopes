import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AplicationFormPage from './Pages/AplicationFormPage';
import HomePage from './Pages/HomePage'
import ListTripsPage from './Pages/ListTripsPage';
import LoginPage from './Pages/LoginPage';
import AdminHomePage from './Pages/AdminHomePage'
import CreateTripPage from './Pages/CreateTripPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/listTripsPage' element={<ListTripsPage />} />
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path='/aplicationFormPage' element={<AplicationFormPage />} />
        <Route path='/adminHomePage' element={<AdminHomePage />} />
        <Route path='/createTrip' element={<CreateTripPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router