import React, { FC, useEffect } from "react";
import SingleAudio from "../SingleAudio/SingleAudio";
import { selectPlayer } from "../../redux/slices/playerSlice";
import { useAppSelector } from "../../redux/hooks";
import "./Audios.css";

interface Props {}

const Audios: FC<Props> = () => {
  const { tracks } = useAppSelector(selectPlayer);

  return (
    <div className="audios">
      {tracks.map((track) => (
        <SingleAudio audioColor={track.color} src={track.src} />
      ))}

      <div className="time-line" style={{ left: 0, top: 0 }}></div>
    </div>
  );
};

export default Audios;
