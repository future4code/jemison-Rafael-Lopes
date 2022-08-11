import React from 'react'
import { useNavigate } from 'react-router-dom';

function ListTripsPage() {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/')
  }

  const goToAplicationFormPage = () => {
    navigate('/aplicationFormPage')
  }


  return (
    <div>
      <h1>ListTripsPage</h1>
      <h2>Lista de viagens</h2>
      <button onClick={goToHome} >Voltar</button>
      <button onClick={goToAplicationFormPage} >Inscrever-se</button>
    </div>
  )
}

export default ListTripsPage;