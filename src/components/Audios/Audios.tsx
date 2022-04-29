import React, { FC } from "react";
import Audio from "../Audio/Audio";
import song1 from "../.././loop-files/_tambourine_shake_higher.mp3";
import song2 from "../.././loop-files/ALL TRACK.mp3";
import song3 from "../.././loop-files/B VOC.mp3";
import song4 from "../.././loop-files/DRUMS.mp3";
import song5 from "../.././loop-files/HE HE VOC.mp3";
import song6 from "../.././loop-files/HIGH VOC.mp3";
import song7 from "../.././loop-files/JIBRISH.mp3";
import song8 from "../.././loop-files/LEAD 1.mp3";
import song9 from "../.././loop-files/UUHO VOC.mp3";
import "./Audios.css";
import { selectPlayer } from "../../redux/slices/playerSlice";
import { useAppSelector } from "../../redux/hooks";

interface Props {
  
}

const Audios: FC<Props> = () => {
  const { isPlaying } = useAppSelector(selectPlayer);

  return (
    <div className="audios">
      <Audio audioColor="lightgreen" src={song1} />
      <Audio audioColor="lightblue" src={song2} />
      <Audio audioColor="lightgray" src={song3} />
      <Audio audioColor="lightcoral" src={song4} />
      <Audio audioColor="lightsalmon" src={song5} />
      <Audio audioColor="lightseagreen" src={song6} />
      <Audio audioColor="lightpink" src={song7} />
      <Audio audioColor="lightyellow" src={song8} />
      <Audio audioColor="darkgray" src={song9} />

      <div className="time-line" style={{ left: 0, top: 0 }}></div>
    </div>
  );
};

export default Audios;
