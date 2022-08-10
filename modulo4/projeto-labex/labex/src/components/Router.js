import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'

function Router() {
  return (
   <BrowserRouter>
    <Routes>
        <Route index element={<HomePage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default Router