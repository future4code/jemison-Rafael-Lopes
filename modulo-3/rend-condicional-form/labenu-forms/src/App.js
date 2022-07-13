import React from "react";
import Etapa1 from "./components/PrimeiraEtapa";
import SegundaEtapa from "./components/SegundaEtapa";
import TerceiraEtapa from "./components/TerceiraEtapa"
import EtapaFinal from "./components/EtapaFinal";
import { BotaoAvancar } from "./components/style";

class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
        break;
      case 2:
        return <SegundaEtapa />;
        break;
      case 3:
        return <TerceiraEtapa />;
        break;
      case 4:
        return <EtapaFinal />;
        break;
      default:
        break;
    }
  };


  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }
  render() {
    return (
      <>
        {this.renderizaEtapa()}
        {this.state.etapa !== 4 && (
          <BotaoAvancar onClick={this.irParaProximaEtapa}>Próxima etapa</BotaoAvancar>
        )}
      </>
    )
  }
}

export default App;

