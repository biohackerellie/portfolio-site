import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spotify from "react-spotify-embed";



function SpotifyTilesN(props){
  return (
      <Spotify link={props.link} />

    
  )
}

export default SpotifyTilesN;