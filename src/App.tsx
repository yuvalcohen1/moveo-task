import React from "react";
import "./App.css";
import Audios from "./components/Audios/Audios";
import ButtonsBar from "./components/ButtonsBar/ButtonsBar";

function App() {
  return (
    <div className="app">
      <div className="audios-container">
        <Audios />
      </div>

      <div className="buttons-bar-container">
        <ButtonsBar />
      </div>
    </div>
  );
}

export default App;
