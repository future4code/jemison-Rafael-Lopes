import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminHomePage() {
 

  const navigate = useNavigate();
  

   const goToCreateTripPage = () => {
    navigate('/admin/trips/create')
  }

  const goToLoginPage = () => {
    navigate('/login')
  }


  return (
    <div> 
      <h1>AdminHomePage</h1>
      <h2>Painel Administrativo</h2>
      <button onClick={goToCreateTripPage} >Criar Viagem</button>
      <button onClick={goToLoginPage}>Sair</button>
    </div>
  )
}

export default AdminHomePage;