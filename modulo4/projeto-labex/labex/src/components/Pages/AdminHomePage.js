import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminHomePage() {

  const navigate = useNavigate();

  const goToLastPage = () => {
    navigate(-1)
  }

  const goToCreateTripPage = () =>{
    navigate('/createTrip')
  }

  const goToLoginPage = () => {
    navigate('/loginPage')
  }

  return (
    <div>
      <h1>AdminHomePage</h1>
      <h2>Painel Administrativo</h2>
      <button onClick={goToLastPage} >Voltar</button>
      <button onClick={goToCreateTripPage} >Criar Viagem</button>
      <button onClick={goToLoginPage}>Sair</button>
    </div>
  )
}

export default AdminHomePage;