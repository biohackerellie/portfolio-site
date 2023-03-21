import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import {
	FaAmazon, FaApple,
	FaSoundcloud, FaSpotify, FaYoutube
} from "react-icons/fa";
import ReactPlayer from "react-player";


function Music(){
  return (
    <section>
    	<Particle />			
        <Container fluid className="music-section" id="music">
						<h1 className="music-heading">
							My <strong className="purple">Latest</strong> Release
						</h1>
						<Row md={2} style={{justifyContent: "center"}} className="soundcloud">
							<ReactPlayer
								url="https://soundcloud.com/elliekerns/makin-it-up"
								height="600px"
								width="600px"								
								/>
                <Col md={6} className="music-card">
                <h3 style={{ color: "black", fontSize: "500"}}>
						Find my music on all <strong className="purple"> platforms</strong>
					</h3>												
						<Button
							href="https://open.spotify.com/artist/0csjx5EnVlhizAs1mwMwrW?si=SC15Rpc3RG-sz16ERSfkfg"
							target="_blank"
							className="social-buttons-spotify"
							//width="200px"
							>
							<FaSpotify style={{ fontSize: "1.6em" }}/> {"Spotify"}
							</Button>
							<Button
							href="https://music.apple.com/us/artist/ellie-kerns/1572324391"
							target="_blank"
							className="social-buttons-apple"
							>
							<FaApple style={{ fontSize: "1.6em" }}/> {"Apple Music"}
							</Button>
							<Button
							href="https://soundcloud.com/elliekerns"
							target="_blank"
							className="social-buttons-soundcloud"
							>
							<FaSoundcloud style={{ fontSize: "1.6em" }}/> {"SoundCloud"}
							</Button>
							<Button
							href="https://music.youtube.com/channel/UCM1F8x-uEcj2fc7n2zsa3WQ"
							target="_blank"
							className="social-buttons-youtube"
							>
							<FaYoutube style={{ fontSize: "1.6em" }}/> {"YouTube Music"}
							</Button>
							<Button
							href="https://music.amazon.com/artists/B0977FBDC1/ellie-kerns"
							target="_blank"
							className="social-buttons-amazon"
							>
							<FaAmazon style={{ fontSize: "1.6em" }}/> {"Amazon Prime Music"}
							</Button>
                </Col>
							</Row>
        </Container>
				<Container>
					<h1 className="music-heading">
						My previous<strong className="purple"> releases</strong> and <strong className="purple"> features</strong>
					</h1>
					<Row>
					<Col  style={{  justifyContent: "center", paddingBottom: "100px"}}>
						<Row>
						<Col md={4}>
							<ReactPlayer 
                url="https://soundcloud.com/elliekerns/getting-older-master?si=2c50c1b888174d13b0d441dd862f05e5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
								height="300px"
								width="300px"
							/>
						</Col>
						<Col md={4}>
							<ReactPlayer
                url="https://soundcloud.com/elliekerns/sets/songs-in-my-head?si=fa1926a68418426bba2abece703d3e8d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
								height="300px"
								width="300px"
							/>
						</Col>
						<Col md={4}>
							<ReactPlayer
                url="https://soundcloud.com/elliekerns/jordan-peterson-1?si=fa1926a68418426bba2abece703d3e8d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
								height="300px"
								width="300px"						
							/>
						</Col>
						</Row>
					</Col>
					</Row>
				</Container>							
		</section>			
  )
}



export default Music;
