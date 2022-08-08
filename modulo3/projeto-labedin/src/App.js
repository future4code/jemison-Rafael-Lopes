import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import fotoPerfil from './components/imagensCardGrande/fotoPerfil.png'
import justiceWoman from './components/imagensCardGrande/justiceWoman.jpg'
import laborWorker from './components/imagensCardGrande/laborWorker.jpg'
import logoLinkedin from './components/imagensCardGrande/linkedin.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
       imagem = {fotoPerfil}
        nome="Sobre mim"
        descricao="Oi, eu sou o Rafael Lopes.
        Sou aluno do curso de Desenvolvimento Full Stack da Labenu. Amo assuntos relacionados à tecnologia, música, mercado financeiro e de criptomoedas."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          nome={<span>Email:</span>}
          descricao='rafael@gmail.com'
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          nome={<span>Endereço:</span>}
          descricao='Rua do sossego s/nº'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem= {justiceWoman}
          nome="Advogado autônomo"
          descricao="Especialista em Regime Geral de Previdência."
        />

        <CardGrande
          imagem= {laborWorker}
          nome="Vopak"
          descricao="Atuei como Supervisor de turno."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <a href='https://www.linkedin.com/in/rafael-lopes-fullstack-developer/' target='_blanck' alt='Logo LinkidIn'>
        <ImagemButton
         imagem = {logoLinkedin}
          texto="LinkedIn"
        />
          </a>

<a href='https://twitter.com/RafaelL77859907' target='_blanck'>
        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
        </a>
      </div>
    </div>
  );
}

export default App;