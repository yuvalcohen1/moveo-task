import React, { FC, useCallback, useState } from "react";
import { GoMute, GoUnmute } from "react-icons/go";
import "./Audio.css";

interface AudioProps {
  audioColor: string;
  src: string;
}

const Audio: FC<AudioProps> = ({ audioColor, src }) => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="audio-container">
      <div className="audio" style={{ backgroundColor: audioColor }}>
        <audio src={src}></audio>
      </div>
      {isMuted ? (
        <button className="unmute-btn" onClick={() => setIsMuted(!isMuted)}>
          <GoMute />
        </button>
      ) : (
        <button className="mute-btn" onClick={() => setIsMuted(!isMuted)}>
          <GoUnmute />
        </button>
      )}
    </div>
  );
};

export default Audio;
