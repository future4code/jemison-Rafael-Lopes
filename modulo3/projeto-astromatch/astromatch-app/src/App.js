import React, { useState } from "react";
import Main from "./components/Main/Main";
import MatchList from "./components/MatchList/MatchList";

function App() {

  const [screen, setScreen] = useState("mainScreen")

  const changeScreen = (screen) => {
    setScreen(screen)
  }

  const selectScreen = () => {
    switch (screen) {
      case "mainScreen":
        return <Main changeScreen={changeScreen} />
      case "matchList":
        return <MatchList changeScreen={changeScreen} />
      default:
        return <p>Algo deu errado!</p>;
    }
  }

  return (
    <div>
      {selectScreen()}
    </div>
  );
}

export default App;
