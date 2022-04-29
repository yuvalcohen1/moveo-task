import React, { useState } from "react";
import "./App.css";
import Audios from "./components/Audios/Audios";

import ButtonsBar from "./components/ButtonsBar/ButtonsBar";
import { useAppSelector } from "./redux/hooks";
import { selectPlayer } from "./redux/slices/playerSlice";

function App() {
  // const { isPlaying } = useAppSelector(selectPlayer);

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
