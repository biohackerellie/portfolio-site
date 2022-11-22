import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "./Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =  "https://github.com/biohackerellie/portfolio-site/blob/3e75a87b470a60dc2e0906756018e384c1af9f79/src/components/Resume/Resume.pdf";


  const resume = pdf

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <div>
      <Particle />
      <Container fluid className="resume-section">

        <div>
        <Container style={{ justifyContent: "center", position: "relative" }} className=".resume">  
          <Document file={resume} position= "center" >
            <Container>
            <Page pageNumber={1} scale={width > 8 ? 1.7 : 0.5} position= "center" />
            </Container>
          </Document>
          </Container>
          </div>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        </Container>
      </div>
    </div>
  );
}

export default ResumeNew;
