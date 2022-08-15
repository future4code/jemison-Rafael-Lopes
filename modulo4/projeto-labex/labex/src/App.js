import './App.css';
import Router from './components/Router';
import UseRequestData from './components/Hooks/UseRequestData';

function App() {

  const xxxxx = UseRequestData(`${BASE_URL}parametro`)
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
