import React from 'react'
import { useNavigate } from 'react-router-dom';

function ListTripsPage() {

  const navigate=useNavigate();

  const goToHome=()=>{
    navigate('/')
  }
  return (
    <div>
    <h1>ListTripsPage</h1>
    <button onClick={goToHome} >Home</button>
    </div>
  )
}

export default ListTripsPage;