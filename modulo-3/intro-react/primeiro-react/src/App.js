import React from 'react';
import logoLabenu from './img/logo.png';
import './App.css';

function App() {
  const mandarMensagem = () => {
    alert('Vamos desenvolver juntos!')
  }
  return (
    <div className="body">
      <h1>Olá! Eu sou a Labenu!</h1>
      <div className = 'logo'>
        <img src={logoLabenu} alt="logo" />
      </div>
      <p>
        Este é o meu primeiro site React.
      </p>
      <div>
      <button onClick={mandarMensagem}>Aperte este botão</button>
      </div>
    </div>
  );
}
export default App;
