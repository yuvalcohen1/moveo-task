import React, { useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import "./ButtonsBar.css";

type Props = {};

const ButtonsBar = (props: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  return (
    <span className="button-bar">
      <button disabled={isPlaying} onClick={() => setIsPlaying(!isPlaying)}>
        <FaPlay />
      </button>
      <button disabled={!isPlaying} onClick={() => setIsPlaying(!isPlaying)}>
        <FaStop />
      </button>
      <button className="loop-btn" onClick={() => setIsLooping(!isLooping)}>
        <ImLoop />
        <span className="loop-status">{isLooping ? "ON" : "OFF"}</span>
      </button>
    </span>
  );
};

export default ButtonsBar;
