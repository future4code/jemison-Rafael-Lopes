import React from 'react';
import logoLabenu from './components/Logo/logoLabenujpg.jpg';
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

function App() {


  return (

    <div className="App">
      <span>
        <img src={logoLabenu} alt="Logo da Labenu" />
      </span>

      <Header />


      <Footer />
    </div>
  );
}

export default App;
