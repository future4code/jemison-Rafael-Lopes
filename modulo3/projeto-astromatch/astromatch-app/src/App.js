import { useState } from "react";
import Main from "./components/Main/Main";
import MatchPage from "./components/MatchPage/MatchPage";

function App() {

  const [screen, setScreen] = useState("mainScreen")

  const mainScreen= (screen)=> {
   setScreen(screen)
  }

  const switchScreen = ()=>{
    switch(screen){
      case "mainScreen":
        return<Main mainScreen={mainScreen} />
        case "matchList":
          return <MatchPage mainScreen={mainScreen} />
          default:
            return null;
    }
  } 

  return (
    <div>
    {switchScreen()}
    </div>
  );
}

export default App;
