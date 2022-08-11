import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const navigate = useNavigate();

  const goToAdminHomePage = ()=>{
    navigate('/adminHomePage')
  }

  return (
    <div>
    <h1>LoginPage</h1>
    <p>Aqui colocar email e senha para logar</p>
    <button onClick={goToAdminHomePage} >Entrar</button>
    </div>
  )
}

export default LoginPage;