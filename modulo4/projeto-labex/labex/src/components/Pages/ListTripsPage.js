import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/constants';
import useRequestData from '../Hooks/UseRequestData'

function ListTripsPage() {

  const [tripsList, isLoadingList, errorList] = useRequestData(`${BASE_URL}rafael-lopes-jemison/trips`)

  const updatedList = tripsList && tripsList.trips.map((trip, index) => {
    return (
      <section key={index}>
        <h2>{trip.name}</h2>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.date}</p>
      </section>
    )
  })

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/')
  }

  const goToAplicationFormPage = () => {
    navigate('/trips/application')
  }



  return (
    <div>
      <h1>ListTripsPage</h1>
      <h2>Lista de viagens</h2>
      <button onClick={goToHome} >Voltar</button>
      <button onClick={goToAplicationFormPage} >Inscrever-se</button>
      {/* Verificações + tratamento de erros */}
      {isLoadingList && <p>Carregando...</p>}
      {!isLoadingList && errorList && <p>Ocorreu um erro com o carregamento da lista de viagens.</p>}
      {!isLoadingList && tripsList && tripsList.trips.length > 0 && updatedList} 
      {!isLoadingList && tripsList && tripsList.trips.length === 0 && (<p>Não há viagens para mostrar.</p>)}
    </div>
  )
}

export default ListTripsPage;