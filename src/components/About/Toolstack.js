import { Tooltip } from "bootstrap";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPowershell,
  SiPortainer,
  SiAbletonlive,
  SiNodered,
} from "react-icons/si";

function tips () {
  ('[data-toggle="tooltip"]').tooltip()
}


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Linux">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Visual Studio">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Powershell">
        <SiPowershell />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Portainer">
        <SiPortainer />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Ableton Live">
        <SiAbletonlive />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="NodeJS">
        <SiNodered />
      </Col>
    </Row>
  );
}

export default Toolstack;
