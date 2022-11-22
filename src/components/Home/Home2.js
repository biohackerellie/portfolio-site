import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an Audio Engineer, Artist, and Musican by hobby, and a Systems Administrator and aspiring Devops Engineer by trade.
              Basically you can call me a nerd 🤷‍♀️
              <br />
              <br />I have a combined 10 years expierence working with
              <i>
                <b className="purple"> Powershell, Linux, Windows Server, Ableton Live, Docker, and more! </b>
              </i>
              <br />
              <br />
              My field of Interest's are  &nbsp;
              <i>
                <b className="purple">Automation and Virtualization </b> and
                also in areas related to{" "}
                <b className="purple">
                  Devops and Network Administration
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I work to expand my knowledge of scripting and development
              with <b className="purple">Powershell, Bash, and Javascript</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern virtualization platforms
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Docker and Kubernetes</b>
              </i>
            </p>
          </Col>
              <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> 
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/biohackerellie"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              {/* </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a> */}
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ellie-kerns-ab1328a0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
