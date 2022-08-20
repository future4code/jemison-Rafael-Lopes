import React from 'react'
import { useNavigate } from 'react-router-dom';
import useForm from '../Hooks/useForm';
import { BASE_URL } from '../constants/constants';
import axios from 'axios';

function LoginPage() {

  // Body é o valor do form que está sendo retornado no useForm
  const [body, onChange, clear] = useForm({ email: "", password: "" })

  
  const login = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}rafael-lopes-jemison/login`, body)
      .then((response) => {
        console.log(response.data)
        navigate('/admin/trips/list')
      }).catch((error) => {
        console.log("Algo deu errado. Tente novamente.")
      })
clear()
    // console.log(body)
  }

  const navigate = useNavigate();

  const goToLastPage = () => {
    navigate(-1)
  }

  return (
    <div>
      <h1>LoginPage</h1>
      <p>Aqui colocar email e senha para logar</p>

      <form onSubmit={login} >
      <label htmlFor="email">Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={body.email}
          onChange={onChange}
          placeholder='email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          required
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id='password'
          name='password'
          value={body.password}
          onChange={onChange}
          placeholder='senha'
          pattern='^.{6}'
          required
        />
        <button>Entrar</button>
        <button onClick={goToLastPage}>Voltar</button>
      </form>
    </div>
  )
}

export default LoginPage;