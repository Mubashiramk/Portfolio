import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mubashira M K </span>
            from <span className="purple"> Kerala, India.</span>
            <br />I am a Frontend developer at{" "}
            <span className="purple"> XPAYBACK.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Games & Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(30,80,100)" }}>"Sharp the edge !" </p>
          <footer className="blockquote-footer">Mubashira</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
