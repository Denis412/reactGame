import React from "react";
import Board from "./components/UI/Board/Board";
import classes from "./styles/App.css";
import Game from "./components/Game";
import WinMessage from "./components/WinMessage/WinMessage";

function App() {

  return (
    <div className="App">
        <Game />
    </div>
  );
}

export default App;
