import axios from 'axios';
import React, { useEffect } from 'react';
import useProtectedPage from '../Hooks/useProtectedPage'


function TripDetailsPage() {

  useProtectedPage()


  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/NoIFVcOiSgTKTIPVZwXS",
      {
        headers: {
          auth: token
        }
      }).then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.log("Algo seu errado: ", error.response)
      })
  }, [])

  return (
    <div>
      <h1>TripDetailsPage</h1>
    </div>
  )
}

export default TripDetailsPage;