import React, { useState } from "react";
import Main from "./components/Main/Main";
import MatcheList from "./components/MatchList/MatchList";

function App() {

  const [screen, setScreen] = useState("start")

  const changeScreen = (screen) => {
    setScreen(screen)
  }

  const switchScreen = () => {
    switch (screen) {
      case "start":
        return <Main changeScreen={changeScreen} />
      case "list":
        return <MatcheList changeScreen={changeScreen} />
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
