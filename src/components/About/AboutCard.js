import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Heya, I'm <span className="purple">Ellie Kerns </span>
            from <span className="purple"> Billings, Montana.</span>
            <br />I'm a full time Systems and Network Administrator currently working for Laurel
                  Public Schools. I'm hoping to expand my career in the IT industry, so 
                  I've spent the last couple of years getting certified and practicing
                  in all new areas to me like Linux administration, and writing JS! (like this site)
        
            <br />
            <br />
            Apart from IT, I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing World of Warcraft
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Going on Adventures with my Wife
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "you miss 100% of the shots you don't take"{" "}
          </p>
          <footer className="blockquote-footer">Wayne Gretzky</footer>
          <footer className="blockquote-footer">Michael Scott</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
