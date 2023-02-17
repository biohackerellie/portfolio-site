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
} from "react-icons/di";
import {
  SiMicrosoftazure,
  SiAdobecreativecloud,
  SiKubernetes,
  SiJavascript,
  SiGithub,
  SiPowershell,
  SiPython,
  SiGnubash,
} from "react-icons/si";

function tips () {
  ('[data-toggle="tooltip"]').tooltip()
}


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgMusic title="Music Production"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAtlassian title="Atlassian Products"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiApple title="MacOS&IOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker  title="Docker"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobecreativecloud title="Adobe Creative Cloud"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure title="Azure" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows title="Windows"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes title="Kubernetes" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash title="Bash"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript title="Javascript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell title="Powershell" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython title="Python" />
      </Col>
    </Row>
  );
}

export default Techstack;


