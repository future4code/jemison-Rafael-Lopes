import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();

  const goToListTripsPage = () => {
    navigate('/listTripsPage')
  }

  const goToAdminHomePage = () => {
    navigate('/adminHomePage')
  }
  return (
    <section>
      <h1>HomePage</h1>
      <h1>Labex</h1>
      <button onClick={goToListTripsPage} >Ver Viagens</button>
      <button onClick={goToAdminHomePage} >Área Admin</button>
    </section>
  )
}

export default HomePage;