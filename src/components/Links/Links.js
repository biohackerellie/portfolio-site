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
                <Row style={{ justifyContent: "center", padding: "5px" }}>
                <h1 style={{ color: "white", fontSize: "5.1em", paddingBottom: "20px" }}>
                    Where to Find <strong className="purple">Me</strong>
            </h1>
                    </Row>
                    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col xs={4} md={2} className="social-buttons-insta" >
                    <Button 
                    xs={4}
                    md={2}
                    href="https://instagram.com/biohacker_ellie"
                    target="_blank"
                    className="social-buttons-insta"
                    >
                            <CgInstagram style={{ fontSize: "1.6em" }}/> {"Instagram"}   
                            </Button>
                        </Col>
                        
                        <Col xs={4} md={2} className="social-buttons-git">
                        <Button
                                            xs={4}
                                            md={2} 
                            href="https://github.com/biohackerellie"
                            target="_blank"
                            className="social-buttons-git"
                            >
                            <AiOutlineGithub style={{ fontSize: "1.6em" }}/>{"GitHub"}        
                        </Button>
                        </Col>
                        <Col xs={4} md={2} className="social-buttons-sc"  >
                        <Button 
                            href="https://snapchat.com/add/biohacker_ellie"
                            target="_blank"
                            className="social-buttons-sc"
                            >
                            <FaSnapchatSquare style={{ fontSize: "1.6em" }}/><div></div> {"SnapChat"}        
                        </Button>
                        </Col>
                        <Col xs={4} md={2} className="social-buttons-tumblr" >
                        <Button 
                            href="https://blog.epklabs.com"
                            target="_blank"
                            className="social-buttons-tumblr"
                            >
                            <FaTumblr style={{ fontSize: "1.6em" }}/> {"Tumblr"}        
                        </Button>
                        </Col>
                        <Col xs={4} md={2} className="social-buttons-reddit" >
                        <Button 
                            href="https://reddit.com/u/biohacker_ellie"
                            target="_blank"
                            className="social-buttons-reddit"
                            >
                            <FaReddit style={{ fontSize: "1.6em" }}/> {"Reddit"}        
                        </Button>
                        </Col>
                        <Col xs={4} md={2} className="social-buttons-linkedin" >

                        <Button 
                            href="https://www.linkedin.com/in/ellie-kerns-ab1328a0/"
                            target="_blank"
                            className="social-buttons-linkedin"
                            >
                            <FaLinkedinIn style={{ fontSize: "1.6em" }}/> {"Linkedin"}        
                        </Button>
                        </Col>
                        <Col xs={4} md={2} className="social-buttons-spotify">
                        <Button 
                            href="https://open.spotify.com/artist/0csjx5EnVlhizAs1mwMwrW"
                            target="_blank"
                            className="social-buttons-spotify"
                            >
                            <FaSpotify style={{ fontSize: "1.6em" }}/> {"Spotify"}        
                        </Button>
                        </Col>
                        </Row>
                </Container>
        </Container>
        )
}
export default Links;


