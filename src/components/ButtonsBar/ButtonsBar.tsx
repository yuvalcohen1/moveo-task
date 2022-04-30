import React, { FC, useCallback, useEffect } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  activateLoop,
  deactivateLoop,
  play,
  resetCurrentTime,
  selectPlayer,
  stop,
} from "../../redux/slices/playerSlice";
import "./ButtonsBar.css";

interface Props {}

const ButtonsBar: FC<Props> = () => {
  const { isPlaying, isLooping, currentTime } = useAppSelector(selectPlayer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentTime === 17) {
      dispatch(resetCurrentTime());
    }
  }, [currentTime]);

  const onPlay = useCallback(() => {
    dispatch(play());
  }, []);

  const onStop = useCallback(() => {
    dispatch(stop());
  }, []);

  const toggleLoop = useCallback(() => {
    if (isLooping) {
      dispatch(deactivateLoop());
    } else {
      dispatch(activateLoop());
    }
  }, [isLooping]);

  return (
    <span className="button-bar">
      <button disabled={isPlaying} onClick={onPlay}>
        <FaPlay />
      </button>
      <button disabled={!isPlaying} onClick={onStop}>
        <FaStop />
      </button>
      <button className="loop-btn" onClick={toggleLoop}>
        <ImLoop />
        <span className="loop-status">{isLooping ? "ON" : "OFF"}</span>
      </button>
    </span>
  );
};

export default ButtonsBar;
