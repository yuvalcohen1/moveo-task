import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { GoMute, GoUnmute } from "react-icons/go";
import { useAppSelector } from "../../redux/hooks";
import { selectPlayer } from "../../redux/slices/playerSlice";
import "./SingleAudio.css";

interface SingleAudioProps {
  audioColor: string;
  src: string;
}

const SingleAudio: FC<SingleAudioProps> = ({ audioColor, src }) => {
  const { isPlaying } = useAppSelector(selectPlayer);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  return (
    <div className="audio-container">
      <div className="audio" style={{ backgroundColor: audioColor }}></div>
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

export default SingleAudio;
