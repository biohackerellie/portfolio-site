import { Tooltip } from "bootstrap";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiGithub,
  SiPortainer,
  SiAbletonlive,
  SiReact,
  SiUbuntu,
} from "react-icons/si";


function tips () {
  ('[data-toggle="tooltip"]').tooltip()
}


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu title="Ubuntu Server" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VsCode"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPortainer title="Portainer"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAbletonlive title="Ableton Live"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="Github"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact title="React"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
