import React from "react";
import { Imagem } from '../src/components/Header/style';
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import logoLabenu from './components/Logo/logoLabenu.jpg';



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