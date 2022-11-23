import { Tooltip } from "bootstrap";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgMusic } from "react-icons/cg";
import {
  DiLinux,
  DiAtlassian,
  DiApple,
  DiDocker,
  DiWindows,
  DiGit,
  DiJavascript,
} from "react-icons/di";
import {
  SiMicrosoftazure,
  SiAdobecreativecloud,
  SiKubernetes,
  SiJavascript,
} from "react-icons/si";

function tips () {
  ('[data-toggle="tooltip"]').tooltip()
}


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Music Production" >
        <CgMusic />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Linux">
        <DiLinux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Atlassian">
        <DiAtlassian />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="MacOS">
        <DiApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Docker">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Adobe Creative Cloud">
        <SiAdobecreativecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Azure">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Windows, Server, AD">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Kubernetes">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-toggle="tooltip" data-placement="top" title="Javascript">
        <DiJavascript />
      </Col>
    </Row>
  );
}

export default Techstack;
