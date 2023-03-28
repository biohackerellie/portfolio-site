import React from "react";
import { Container, Row, } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container fluid max-width={540} className="home-content">
          <Row md={7} className="home-header" style={{ marginTop: "15px" }}>
              <h1 style={{textAlign: "center" }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻                
                  </span>
                  <row>
                  <div>
                  <span className="heading-name">
                I'm
                <strong className="main-name"> Ellie Kerns</strong>
                </span>
                </div>
                </row>
                </h1>

              <div style={{ padding: 1, textAlign: "center" }}>
                <Type />
              </div>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
