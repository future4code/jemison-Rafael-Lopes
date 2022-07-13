import React from "react";
import Etapa1 from "./components/PrimeiraEtapa";
import SegundaEtapa from "./components/SegundaEtapa";
import TerceiraEtapa from "./components/TerceiraEtapa"
import EtapaFinal from "./components/EtapaFinal";

class App extends React.Component {
  state = {
    etapa: 1
  }

  pulaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <SegundaEtapa />;
      case 3:
        return <TerceiraEtapa />;
      case 4:
        return <EtapaFinal />;
        break;
      default: 
        break;
    }
  }

  add = () => {
    this.setState({ etapa: this.state.etapa + 1})
  }
  render(){
    return (
      <>
      {this.pulaEtapa()}
      <br />
      {this.state.etapa !== 4 && (
        <button onClick={this.add}>Próxima etapa</button>
        )}
      </>
    )
  }
}

export default App;

