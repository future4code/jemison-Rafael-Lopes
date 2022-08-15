import './App.css';
import Router from './components/Router';
// import useRequestData from './components/Hooks/UseRequestData';

function App() {

  // const [xxx, isLoadingXXX, errorXXX] = useRequestData(`${BASE_URL}`parametro)
  // const [yyy, isLoadingYYY, errorYYY] = useRequestData(`${BASE_URL}`outroParametro)

  // const listaDeX = xxx && xxx.map((x) => {
  //   return <p>{x.name}</p>
  // })

  // const listaDeY = yyy && yyy.map((x) => {
  //   return <p>{y.name}</p>
  // })


  return (
    <div className="App">
      {/* {isLoadingXXX && <p>Carregando X</p>}
      {isLoadingYYY && <p>Carregando Y</p>}
      {!isLoadingXXX && errorXXX && <p>Algo deu errado com o X!</p>}
      {!isLoadingYYY && errorYYY && <p>Algo deu errado com o Y!</p>} */}
      <Router />
    </div>
  );
}

export default App;
