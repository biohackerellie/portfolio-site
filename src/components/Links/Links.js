import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineGithub,
    
} from "react-icons/ai";
import {
    FaSnapchatSquare,
    FaTumblr,
    FaReddit,
    FaLinkedinIn,
    FaSpotify,
} from "react-icons/fa";
import {
    CgFacebook,
    CgInstagram,
    CgGitHub,
    
    } from "react-icons/cg";


function Links(){
    return(
        <Container fluid style={{ justifyContent: "center",paddingTop: "100px", paddingBottom: "50px", paddingInline: "10px" }}>
            <Particle />
                <Container >
                <Col style={{ justifyContent: "center", padding: "10px" }}>
                <Row style={{ justifyContent: "center", padding: "5px" }}>
                <h1 style={{ color: "white", fontSize: "2.1em", paddingBottom: "20px" }}>
                    Where to Find <strong className="purple">Me</strong>
            </h1>
                    </Row>
                        <Button 
                            href="https://instagram.com/biohacker_ellie"
                            target="_blank"
                            className="social-buttons-insta"
                            >
                            <CgInstagram style={{ fontSize: "1.6em" }}/> {"Instagram"}        
                        </Button>
<Row style={{padding: "5px"}}></Row>

                        <Button 
                            href="https://github.com/biohackerellie"
                            target="_blank"
                            className="social-buttons-git"
                            >
                            <AiOutlineGithub style={{ fontSize: "1.6em" }}/>{"GitHub"}        
                        </Button>
                        <Row style={{padding: "5px"}}></Row>

                        <Button 
                            href="https://snapchat.com/add/biohacker_ellie"
                            target="_blank"
                            className="social-buttons-sc"
                            >
                            <FaSnapchatSquare style={{ fontSize: "1.6em" }}/> {"@SnapChat"}        
                        </Button>
                        <Row style={{padding: "5px"}}></Row>

                        <Button 
                            href="https://blog.epklabs.com"
                            target="_blank"
                            className="social-buttons-tumblr"
                            >
                            <FaTumblr style={{ fontSize: "1.6em" }}/> {"Tumblr"}        
                        </Button>
                        <Row style={{padding: "5px"}}></Row>

                        <Button 
                            href="https://reddit.com/u/biohacker_ellie"
                            target="_blank"
                            className="social-buttons-reddit"
                            >
                            <FaReddit style={{ fontSize: "1.6em" }}/> {"Reddit"}        
                        </Button>
                        <Row style={{padding: "5px"}}></Row>

                        <Button 
                            href="https://www.linkedin.com/in/ellie-kerns-ab1328a0/"
                            target="_blank"
                            className="social-buttons-linkedin"
                            >
                            <FaLinkedinIn style={{ fontSize: "1.6em" }}/> {"Linkedin"}        
                        </Button>
                        <Row style={{padding: "5px"}}></Row>

                        <Button 
                            href="https://open.spotify.com/artist/0csjx5EnVlhizAs1mwMwrW"
                            target="_blank"
                            className="social-buttons-spotify"
                            >
                            <FaSpotify style={{ fontSize: "1.6em" }}/> {"Spotify"}        
                        </Button>
                        <Row style={{padding: "5px"}}></Row>
                    
                    
                    </Col>
                </Container>
        </Container>
        )
}
export default Links;














        //         render()
        //             return (
        //             <div class="container">
        //             <div class="row">
        //                 <div class="column" style="margin-top: 10%">
        //                 <a class="button button-github" href="#" target="_blank" rel="noopener">
        //                     <img class="icon" src="images/icons/github.svg" alt="GitHub Logo"></img>GitHub</a>
        //                 </div>
        //             </div>
        //             </div>
        //             );
                        
        //         }
        // </Container>
