import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  raise1Sec,
  resetCurrentTime,
  selectPlayer,
  stop,
} from "../../redux/slices/playerSlice";
import SingleAudio from "../SingleAudio/SingleAudio";
import "./Audios.css";

interface Props {}

const Audios: FC<Props> = () => {
  const { tracks, isPlaying, currentTime, isLooping } =
    useAppSelector(selectPlayer);
  const duration = 17;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isPlaying && currentTime < duration) {
      console.log(isPlaying);
      console.log(currentTime);

      setTimeout(() => {
        dispatch(raise1Sec());
      }, 1000);
    } else {
      dispatch(resetCurrentTime());
    }
  }, [isPlaying, currentTime]);

  useEffect(() => {
    if (currentTime === duration && !isLooping) {
      dispatch(stop());
    }
  }, [isLooping, currentTime]);

  return (
    <div className="audios">
      {tracks.map((track) => (
        <SingleAudio key={track.src} audioColor={track.color} src={track.src} />
      ))}

      <div
        className="time-line"
        style={{ left: `${(currentTime / duration) * 100}%` }}
      ></div>
    </div>
  );
};

export default Audios;
