import logoLAbenu from './img/logo.png';
import './App.css';

function App() {
const mandarMensagem = () =>{
  alert('Vamos desenvolver juntos!')
}
   return (
    <div className="App">
     <h1>Olá! Eu sou a Labenu!</h1>
        <img src={logoLAbenu} className="App-logo" alt="logo" />
        <p>
          Este é o meu primeiro site React.
        </p>
        <a href='https://www.labenu.com.br/'> Site da Labenu !</a>
      <button onClick={mandarMensagem}>Aperte este botão</button>
    </div>
  );
}

export default App;
