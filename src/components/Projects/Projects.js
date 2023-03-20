import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import docs from "./docs.png";
import ProjectCard from "./ProjectCards";
import PS from "./PS.png";
import python from "./python.png";
import rds from "./rds.png";
import site from "./site.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "rgb(96, 68, 114)" }}>
          Here are a few projects I've worked on recently. Working with code and repositories is a new venture for me, so hopefully this page will fill up over time :)
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PS}
              title="Azure to AD"
              description="I needed a way to convert certain groups from Azure to AD that wasn't offered in our Azure plan, this was what I came up with"
              ghLink="https://github.com/biohackerellie/azure-to-AD-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docs}
              title="Documentation"
              description="Documentation site I made for Laurel Public Schools developed with Docusaurus and ReactJS. The site is maintained on prem with scripts to automatically update the hosted docker container on git changes"
              ghLink="https://github.com/Laurel-Public-Schools/links"
              demoLink="https://links.laurel.k12.mt.us"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={site}
              title="This website!"
              description="This website is my first personal development project that I've published outside of my day job as a sys admin. Developed with Reactjs, it's been a great learning experience."
              ghLink="https://github.com/biohackerellie/portfolio-site"            
            />
          </Col>
        </Row>
        <Row style ={{ justifyContent: "center", paddingBottom: "50px"}}>
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={python}
            title="Google Calendar Emailer"
            description="A program I wrote in Python to take a list of google calendars and give users an option to send the current weekly events via email"
            ghLink="https://github.com/biohackerellie/emailer-app"
            demoLink="https://docs.epklabs.com/Python/CalendarEmail"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rds}
              title="Windows RDS using Guacamole"
              description="A RDS solution using Guacamole as a load-balancer used for Laurel Public Schools students. Project uses windows server 2022 for Windows Host, Docker for hosting the Guacamole gateway, and SQL for the user database"
              demoLink="https://docs.epklabs.com/Linux/Docker%20Projects/Windows%20RDS%20with%20Guacamole"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
