import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../Hooks/useForm';
import { BASE_URL } from '../constants/constants';
import axios from 'axios'

function CreateTripPage() {


  const [form, onChange, clear] = useForm({ name: '', planet: '', date: '' })

  const createTrip = (event) => {
    event.preventDefault()

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: "sem valor",
      durationInDays: 450
    }
    console.log(body);

    axios.post(`${BASE_URL}rafael-lopes-jemison/trips`, body, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then((response) => {
      alert('Viagem cadastrada!')
      clear()
    }).catch((error) => console.log(error)
  )
  }

  const navigate = useNavigate();

  const goToLastPage = () => {
    navigate(-1)
  }

  return (
    <div>
      <h1>CreateTripPage</h1>
      <h2>Criar Viagem</h2>

      <form onSubmit={createTrip}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name='name'
          value={form.name}
          id='name'
          onChange={onChange}
          required
        />
        <label htmlFor="planet">Planeta</label>
        <input
          type="text"
          name="planet"
          value={form.planet}
          id="planet"
          onChange={onChange}
          required
        />
        <label htmlFor="date">Data</label>
        <input
          type="text"
          name="date"
          id="date"
          value={form.date}
          onChange={onChange}
          pattern='^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$'
          required
        />
      </form>

      <button onClick={goToLastPage} >Voltar</button>
      <button>Criar</button>
    </div>
  )
}

export default CreateTripPage;