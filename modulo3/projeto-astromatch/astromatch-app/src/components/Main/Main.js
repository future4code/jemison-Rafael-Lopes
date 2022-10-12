import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ImgProfile } from './styles'

function Main(props) {

  const [profile, setProfile] = useState({})


  const getProfileToChoose = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
      .then((response) => {
        setProfile(response.data.profile)
      })
      .catch((error) => {
        console.log(JSON.stringify(error))
      })
  }

  useEffect(() => {
    getProfileToChoose()
  }, [])

  const headers = {
    headers: {
      Authorization: "rafael-lopes-jemison",
      'Content-Type': 'application/json'
    }
  }
  const choosePerson = (() => {
    axios.post(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person", headers, {
      body: {
        id: "",
        choice: true,
      },
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(JSON.stringify(error))
    })
  })
  


  return (
    <div>
      <button onClick={() => props.changeScreen("matchList")} >Matchlist</button>
      <h2>Main</h2>
      <ImgProfile src={profile.photo} alt="" />
      <section>
        <h2>{profile.name}:</h2>
        <h3>{profile.age} anos</h3>
        <p>{profile.bio}</p>
      </section>

      <button>Excluir</button>
      <button>Resetar</button>
      <button onClick={() => choosePerson(true)}>Match</button>
    </div>

  )
}

export default Main;