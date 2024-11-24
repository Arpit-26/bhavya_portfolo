import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! I'm a tech innovator with a passion for pushing the
            boundaries of{" "}
            <span className="purple">Artificial Intelligence</span> and{" "}
            <span className="purple">Software Development.</span>
            <br />
            <br /> My journey in technology is driven by an insatiable curiosity
            to solve complex problems and create impactful solutions. <br />
            From crafting intelligent AI products to engineering robust software
            systems, I thrive on transforming bold ideas into reality. <br />
            <br />
            My professional playground spans across AI technologies,{" "}
            <span className="purple">Full-Stack Development</span> , and{" "}
            <span className="purple">Strategic Technology Leadership.</span>{" "}
            When I'm not diving deep into code or exploring the latest tech
            trends, you'll find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Experimenting with cutting-edge AI frameworks
            </li>
            <li className="about-activity">
              <ImPointRight />
              Mentoring young tech enthusiasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the intersection of technology and
              innovation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transform challenges into opportunities, one line of code at a
            time!"{" "}
          </p>
          <footer className="blockquote-footer">Bhavya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
