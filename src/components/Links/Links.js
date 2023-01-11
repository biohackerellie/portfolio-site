import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react"
import Particle from "../Particle";

function Links(){
    return(
        <Container fluid className="links-section">
            <Particle />
                <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    Where to Find <strong className="purple">Me</strong>
            </h1>
                    </Row>
                <Row style ={{ justifyContent: "center", padding: "10px" }}>
                <Button fluid className="button-section">
                </Button>
                </Row>
                </Container>
        </Container>
        )
}
export default Links;














        //         render()
        //             return (
        //             <div class="container">
        //             <div class="row">
        //                 <div class="column" style="margin-top: 10%">
        //                 <a class="button button-github" href="#" target="_blank" rel="noopener">
        //                     <img class="icon" src="images/icons/github.svg" alt="GitHub Logo"></img>GitHub</a>
        //                 </div>
        //             </div>
        //             </div>
        //             );
                        
        //         }
        // </Container>
