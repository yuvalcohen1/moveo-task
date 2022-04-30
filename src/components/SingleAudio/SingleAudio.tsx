import React, { FC, useEffect, useRef, useState } from "react";
import { GoMute, GoUnmute } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetCurrentTime, selectPlayer } from "../../redux/slices/playerSlice";
import "./SingleAudio.css";

interface SingleAudioProps {
  audioColor: string;
  src: string;
}

const SingleAudio: FC<SingleAudioProps> = ({ audioColor, src }) => {
  const { isPlaying, isLooping, currentTime } = useAppSelector(selectPlayer);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const duration = 17;

  const dispatch = useAppDispatch();

  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isMuted) {
      audioRef.current.muted = true;
    } else {
      audioRef.current.muted = false;
    }
  }, [isMuted]);

  useEffect(() => {
    if (isLooping && currentTime === duration) {
      audioRef.current.currentTime = 0;
      dispatch(resetCurrentTime());
      audioRef.current.play();
    }
  }, [isLooping, currentTime]);

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
