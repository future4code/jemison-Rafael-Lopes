import React from 'react';
import imagemDePerfil from './img/rafael.png';
import './App.css';

function App() {
  const mandarMensagem = () => {
    alert('Boa noite visitante!')
  }
  return (
    <div className="body">
      <h1>Olá! Me chamo Rafael Lopes!</h1>
      <div className='img'>
        <img src={imagemDePerfil}  alt="Minha imagem de perfil" />
      </div>
      <p>
        Este é o meu primeiro site React.
      </p>
      <div>
        <button onClick={mandarMensagem}>Aperte</button>
      </div>
    </div>
  );
}
export default App;
