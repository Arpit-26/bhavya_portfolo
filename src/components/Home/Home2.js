import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a technology enthusiast with a passion for transforming
              innovative ideas into reality 🚀
              <br />
              <br />
              My journey in tech has been an exciting blend of
              <i>
                <b className="purple">
                  {" "}
                  AI, Full Stack Development, and Software Engineering.{" "}
                </b>
              </i>
              <br />
              <br />
              From being a &nbsp;
              <i>
                <b className="purple">
                  Chief Technology Officer at Persist Ventures{" "}
                </b>{" "}
                to{" "}
                <b className="purple">developing cutting-edge AI solutions,</b>I
                thrive on pushing technological boundaries.
              </i>
              <br />
              <br />
              My expertise spans{" "}
              <b className="purple">
                Python, JavaScript, and AI Technologies,
              </b>{" "}
              with a keen interest in building intelligent web products and
              exploring the intersections of{" "}
              <b className="purple">
                artificial intelligence and software development.
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON LinkedIn</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFIuJOXqHlbtQAAAZNUxwdwGUunVd093W2Z4LkgYEVtiJMy182rghTpVkzuHFtCfCsMBgLLSNF4LKGNF9X3CpuCDznfqsVE_zwTeglbLXfBl-k8O95z-XlKvzui3E5KLkZCUEk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fbhavya-bansal98%3Fjobid%3D1234%26lipi%3Durn%253Ali%253Apage%253Ad_jobs_easyapply_pdfgenresume%253BN6qxBeFGRtyt4tgUOXiwQg%253D%253D%26licu%3Durn%253Ali%253Acontrol%253Ad_jobs_easyapply_pdfgenresume-v02_profile"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
