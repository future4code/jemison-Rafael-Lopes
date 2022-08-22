import React from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../Hooks/useProtectedPage';

function AdminHomePage() {
  useProtectedPage()

  const navigate = useNavigate();
  

   const goToCreateTripPage = () => {
    navigate('/admin/trips/create')
  }

  const goToLoginPage = () => {
    navigate('/login')
  }

  return (
    <div> 




    ||
      <h1>AdminHomePage</h1>
      <h2>Painel Administrativo</h2>
      <button onClick={goToCreateTripPage} >Criar Viagem</button>
      <button onClick={goToLoginPage}>Sair</button>
    </div>
  )
}

export default AdminHomePage;