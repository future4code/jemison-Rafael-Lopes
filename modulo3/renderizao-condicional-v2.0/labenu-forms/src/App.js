import React, { useState } from 'react';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { EtapaFinal } from './components/Final';

function App() {

  const [pagina, setPagina] = useState("1")

  const paginaRenderizada = () => {
    switch (pagina){
      case "1":
        return <Etapa1 mudaPagina={mudaPagina}/>
      case "2": 
        return <Etapa2 mudaPagina={mudaPagina}/>
      case "3":
        return <Etapa3 mudaPagina={mudaPagina}/>
      case "4":
        return <EtapaFinal />
      default: 
        return <Etapa1 mudaPagina={mudaPagina}/>
    }
  }

 function mudaPagina(pagina){
    setPagina(pagina)
 }

  return (
    <div className="App">
      {paginaRenderizada()}
    </div>
  );
}

export default App;
