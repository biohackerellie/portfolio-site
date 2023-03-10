import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle, } from "react-icons/ai";


function Player(props){

const [isPlaying, setIsPlaying] = useState(false);

const [play, { pause, duration, sound}] = useSound(props.audio);

const playingButton = () => {
  if (isPlaying) {
    pause();
    setIsPlaying(false);
  } else {
    play();
    setIsPlaying(true);
  }
};
const [currTime, setCurrTime] = useState({
  min: "",
  sec: "",
});

const time = useState({
  min: "",
  sec: "",
});
const [seconds, setSeconds] = useState();
useEffect(() => {
  const sec = duration / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min,
    sec: secRemain
  };
});
useEffect(() => {
  const interval = setInterval(() => {
    if (sound) {
      setSeconds(sound.seek([]));
      const min = Math.floor(sound.seek({}) / 60);
      const sec = Math.floor(sound.seek([]) % 60);
      setCurrTime({
        min,
        sec,
      });
    }
  }, 1000);
  return () => clearInterval(interval);
}, [sound]);
return (
  <div style={props.style} className="music-player">
    <img
      className="musicCover"
      src={props.cover}
      alt="pic"
    />
    <div>
      {!isPlaying ? (
        <button className="music-play" onClick={playingButton}>
            <AiFillPlayCircle size={70} />
        </button>
      ) : (
        <button className="music-play" onClick={playingButton}>
            <AiFillPauseCircle size={70} />
        </button>
      )}
      </div>
      <div>
        <div className="time">

        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
  </div>
);
};

export default Player;