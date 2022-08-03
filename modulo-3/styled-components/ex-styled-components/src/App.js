import React from 'react';
import logoLabenu from './components/Logo/logoLabenu.jpg';
import Header from './components/Header/Header'
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { Imagem } from './components/Header/style';


function App() {

  return (

    <div className="ContainerPai">
      <Imagem>
        <img src={logoLabenu} alt="Logo Labenu" />
      </Imagem>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
