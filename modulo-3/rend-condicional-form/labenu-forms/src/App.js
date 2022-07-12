import React from "react";
import Etapa1 from "./components/PrimeiraEtapa";
import SegundaEtapa from "./components/SegundaEtapa";
import TerceiraEtapa from "./components/TerceiraEtapa"
import EtapaFinal from "./components/EtapaFinal";
function App() {
  return (
    <div>
      <Etapa1 />
      <SegundaEtapa />
      <TerceiraEtapa />
      <EtapaFinal />
      <button>Próximo</button>
    </div>
  );
}

export default App;
