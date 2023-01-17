import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bubbles from "../Bubbles";
import Spotify from "react-spotify-embed";
import SpotifyTiles from "./music-tiles";
import Particle from "../Particle";
import older from "./img/older.png";
import Album from "./img/Album.png";
import SpotifyTilesN from "./music-tilesn";
import Button from "react-bootstrap/Button";
import {
	FaSpotify,
	FaApple,
	FaSoundcloud,
	FaYoutube,
	FaAmazon
} from "react-icons/fa";




function Music(){
  return (
    <section>
      <Particle />
      <Bubbles />
			
        <Container fluid className="music-section" id="music">
				<Col  style={{  justifyContent: "center"}}>
					
          <Container>

            <h1 className="music-heading">
              Check out the <strong className="purple"> Music</strong> I've made
            </h1>
						
            <div></div>
						
            <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "10px" }}>
              <Col md={6} className="music-card">
              <h2 style={{ color: "white", fontSize: "500"}}>
              My latest release
            </h2>
                <SpotifyTilesN
                link="https://open.spotify.com/track/5UP1JnGWM3OUNdCI4VHhfi?si=0f854b6d87344293"
                />
								</Col>
                <Col md={6} className="music-card">
                <h3 style={{ color: "white", fontSize: "500"}}>
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
					<Col  style={{  justifyContent: "center"}}>

					<SpotifyTilesN
                link="https://open.spotify.com/album/08L1KXlcNM4yeUftTjTRoA?si=YAQ1MgxSSO-YAfeWEruepg"
								/>
								<div></div>
					<SpotifyTilesN
                link="https://open.spotify.com/track/3Y3LIdeg2xIpQH0sGZddoy?si=59f3a8668b5e4d52"

								/>
					<SpotifyTilesN
                link="https://open.spotify.com/track/0aS7p0EdDgTS0apOUiijDi?si=a3da587faa86411e"

								/>
					</Col>
					</Row>
				</Container>
				</Col>
			</Container>
		</section>			
  )
}



export default Music;
