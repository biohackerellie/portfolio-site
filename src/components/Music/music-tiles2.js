import { useEffect, useState} from "react";
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle, } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

function player(props){
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
return (
  <div className="music-player">
    <h2>Latest Release</h2>
    <img
      className="musicCover"
      src={props.cover}
    />
    <div>
      <h3 className="song-title">{props.title}</h3>
      <p className="song-artist">{props.artist}</p>
    </div>
    <div>
      <button className="music-play">
        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
          <BiSkipPrevious />
        </IconContext.Provider>
      </button>
      {!isPlaying ? (
        <button className="music-play" onClick={playingButton}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60"}}>
            <AiFillPlayCircle />
          </IconContext.Provider>
        </button>
      ) : (
        <button className="music-play" onClick={playingButton}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60"}}>
            <AiFillPauseCircle />
          </IconContext.Provider>
        </button>
      )}
      <button className="music-play">
        <IconContext.Provider value={{ size: "3em", color: "#27AE60"}}>
          <BiSkipNext />
        </IconContext.Provider>
      </button>
    </div>
  </div>
);
}

export default player;