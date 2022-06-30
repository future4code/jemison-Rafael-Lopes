import React from 'react';
import logoLabenu from './components/Logo/logoLabenujpg.jpg';
import Header from './components/Header/Header'
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';



function App() {


  return (

    <div className="ContainerPai">
      <span>
        <img src={logoLabenu} alt="Logo da Labenu" />
      </span>

      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
