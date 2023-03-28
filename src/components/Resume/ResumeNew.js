import React from "react";
import { Container, Row,  } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "./res.png";
import pdf from "./Resume.pdf"






function ResumeNew() {
  return (
    <div>
    <Container fluid className=".resume-section">
      <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingTop: "100px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download PDF
          </Button>
        </Row>
				<img src={Image} className="resume"  alt="Resume" />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download PDF
          </Button>
        </Row>
        </Container>

    </div>
  );
}

export default ResumeNew;
