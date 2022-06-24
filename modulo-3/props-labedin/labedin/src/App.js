import React, { Component } from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="src\components\CardGrande\imagensCardGrande\fotoPerfil.jpg"
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
          nome="Email:"
          descricao='rafael@gmail.com'
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          nome="Endereço:"
          descricao='Rua do sossego s/nº'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="src\components\CardGrande\imagensCardGrande\euAdvogado.jpg"
          nome="Advogado autônomo"
          descricao="Especialista em Regime Geral de Previdência."
        />

        <CardGrande
          imagem="https://www.freepik.com/free-photo/portrait-construction-worker-standing-rooftops-high-silos-storage-tanks-working-tablet-computer_11036818.htm#query=crude%20oil%20tank&position=16&from_view=search"
          nome="Vopak"
          descricao="Atuei como Supervisor de turno."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
