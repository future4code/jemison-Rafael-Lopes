import React from 'react';
import { useNavigate } from 'react-router-dom';

function AplicationFormPage() {

  const navigate = useNavigate();

  const goToListTripsPage =()=>{
    navigate(-1)
  }

  return (
    <div>
      <h1>AplicationFormPage</h1>
      <h2>Inscrever-se para uma viagem</h2>
      <button onClick={goToListTripsPage} >Voltar</button>
      <button>Enviar</button>
    </div>
  )
}

export default AplicationFormPage;