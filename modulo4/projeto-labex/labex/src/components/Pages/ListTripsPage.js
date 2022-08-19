import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function ListTripsPage() {

  const [trips, setTrips] = useState(null)

  const listTrips = trips.map((trip)=>{
    return(
      <section>
  <h2>{trip.name}, {trip.planet}</h2>
      <p>Duração: {trip.durationInDays}</p>
      <p>Descrição: {trip.description}</p>
      </section>
    
    )
  })

  
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
   {listTrips}
    </div>
  )
}

export default ListTripsPage;