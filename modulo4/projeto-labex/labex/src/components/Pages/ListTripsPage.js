import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function ListTripsPage() {

  const url="https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/populate"

  const body = {
    "aluno": "darvas"
}

const postPopulate = (e) => {
    e.preventDefault();

    axios.post(url, body)
    .then((response) => {
        alert("Playlist cadastrada com sucesso!")
        // getAllPlaylists()
    }).catch((error) => {
        alert("Tente novamente :(")
    })

    // setInput("")
}


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
     <button  >Ver Viagens</button>
    </div>
  )
}

export default ListTripsPage;