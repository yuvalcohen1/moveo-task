import React from "react";
import "./App.css";
import Audio from "./components/Audio/Audio";

function App() {
  return (
    <div className="app">
      <div className="audios-container">
        <div className="audios">
          <Audio audioColor="green" src="aaa" />
        </div>
      </div>
    </div>
  );
}

export default App;
