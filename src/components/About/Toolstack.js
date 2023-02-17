import { Tooltip } from "bootstrap";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiGithub,
  SiPortainer,
  SiAbletonlive,
  SiReact
} from "react-icons/si";
import VscTerminalUbuntu from "react-icons/vsc";

function tips () {
  ('[data-toggle="tooltip"]').tooltip()
}


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <VscTerminalUbuntu title="Ubuntu Server" />
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
    </Row>
  );
}

export default Toolstack;
