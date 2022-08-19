import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const navigate = useNavigate();

  const goToAdminHomePage = ()=>{
    navigate('/admin/trips/list')
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