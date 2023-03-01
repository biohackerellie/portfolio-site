import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "../contactform";

function Contact() {
  return (
    <section>
    <Row style={{ paddingTop: "500px", justifyContent: "center"}}>
      <ContactForm></ContactForm>
    </Row>
    </section>
  )
}

export default Contact