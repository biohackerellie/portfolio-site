import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PS from "./PS.png";
import docs from "./docs.png";
import site from "./site.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. Working with code and repositories is a new venture for me, so hopefully this page will fill up over time :)
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PS}
              isBlog={false}
              title="Azure to AD"
              description="I needed a way to convert certain groups from Azure to AD that wasn't offered in our Azure plan, this was what I came up with"
              ghLink="https://github.com/biohackerellie/azure-to-AD-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docs}
              isBlog={false}
              title="Documentation"
              description="Documentation site I made for Laurel Public Schools developed with Docusaurus and ReactJS. The site is maintained on prem with scripts to automatically update the hosted docker container on git changes"
              ghLink="https://github.com/Laurel-Public-Schools/links"
              demoLink="https://links.laurel.k12.mt.us"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={site}
              isBlog={false}
              title="this site!"
              description="This website is my first personal development project that I've published outside of my day job as a sys admin. Developed with Reactjs, it's been a great learning experience."
              ghLink="https://github.com/biohackerellie/portfolio-site"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
