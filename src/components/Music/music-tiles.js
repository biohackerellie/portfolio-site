import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spotify from "react-spotify-embed";



function SpotifyTiles(props){
  return (
    <Card className="music-card-view">
      <Card.Img src={props.imgPath} alt="card-img" />
      <Card.ImgOverlay style={{ opacity: .9}}>
      <Card.Body>
        <Card.Title style={{ fontSize: 50, color: "#f070ca", textShadow: "0 0 2px #87209e" }}>  {props.title} </Card.Title>
        
      </Card.Body>
      </Card.ImgOverlay>
      <Spotify wide link={props.link} />
    </Card>

  )
}

export default SpotifyTiles;


