import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();

  const goToListTripsPage = () => {
    navigate('/listTripsPage')
  }

  const goToLoginPage = () => {
    navigate('/loginPage')
  }
  return (
    <section>
      <h1>HomePage</h1>
      <h1>Labex</h1>
      <button onClick={goToListTripsPage} >Ver Viagens</button>
      <button onClick={goToLoginPage} >Área Admin</button>
    </section>
  )
}

export default HomePage;