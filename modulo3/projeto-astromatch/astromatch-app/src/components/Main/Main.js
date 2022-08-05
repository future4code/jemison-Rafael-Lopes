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
        console.log(error.message)
        // Mudar linha acima para um atert de erro
      })
  }

  useEffect(() => {
    getProfileToChoose()
  }, [])

  return (
    <div>
      <button onClick={() => props.changeScreen("matchList")} >Matchlist</button>
      <h2>Main (cards)</h2>
      <ImgProfile src={profile.photo} alt="" />
      <section>
        <h2>{profile.name}</h2>
        <h3>{profile.age} anos</h3>
        <p>{profile.bio}</p>
      </section>

      <button>Discard</button>
      <button>Clear all</button>
      <button>Match</button>
    </div>

  )
}

export default Main;