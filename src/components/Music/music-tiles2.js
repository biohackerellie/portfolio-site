import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle, } from "react-icons/ai";


function Player(props){
// create play,pause functionality
const [isPlaying, setIsPlaying] = useState(false);
// add audio to play function
const [play, { pause, duration, sound}] = useSound(props.audio);
// add switch to play,pause
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
      <h3 className="song-title">{props.title}</h3>
      <p className="song-artist">{props.artist}</p>
    </div>
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
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
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