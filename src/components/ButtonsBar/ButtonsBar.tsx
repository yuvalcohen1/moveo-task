import React, { FC, useCallback, useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { play, selectPlayer, stop } from "../../redux/slices/playerSlice";
import "./ButtonsBar.css";

interface Props {}

const ButtonsBar: FC<Props> = () => {
  const { isPlaying } = useAppSelector(selectPlayer);
  const [isLooping, setIsLooping] = useState(false);

  const dispatch = useAppDispatch();

  const onPlay = useCallback(() => {
    dispatch(play());
  }, []);

  const onStop = useCallback(() => {
    dispatch(stop());
  }, []);

  return (
    <span className="button-bar">
      <button disabled={isPlaying} onClick={onPlay}>
        <FaPlay />
      </button>
      <button disabled={!isPlaying} onClick={onStop}>
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
