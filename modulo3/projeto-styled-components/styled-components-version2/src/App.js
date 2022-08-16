import './App.css';
import Header from './components/Header/Header';
import { Imagem } from './components/Header/style';
import logoLabenu from './logo/logoLabenu.jpg'

function App() {
  return (
    <div className="ContainerPai">
  <Imagem>
    <img src={logoLabenu} alt="A Logo da Labenu" />
  </Imagem>
  <Header/>
    </div>
  );
}

export default App;
