import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import acimg1 from "../assets/img/5.png";
import acimg2 from "../assets/img/7.png";
import acimg3 from "../assets/img/14.png";
import acimg4 from "../assets/img/16.png";
import acimg5 from "../assets/img/robocap.jpg";
import vod from "../assets/img/AutoCarlines_heading.mp4";
import gifvod from "../assets/videos/AutoCarlines_heading.gif";
import gifvso from "../assets/videos/vso.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";

import img1TKB from "../assets/img/PhoneAppImg3.png";
import img2TKB from "../assets/img/PhoneAppIm5.png";
import img3TKB from "../assets/img/PhoneAppIm6.png";
import img4TKB from "../assets/img/PhoneAppIm4.png";
import img5TKB from "../assets/img/room.png";
import img6TKB from "../assets/img/roomcha.png";

import img1SL from "../assets/img/SKIMLITim3.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const AC = [
    {
      description: "Auto Car Result",
      Url: gifvod,
      section: "results",
    },
    {
      description: "Visual Odometry Input",
      Url: gifvso,
      section: "results",
    },
    {
      description: "Main System Architecture",
      Url: acimg1,
      section: "main",
    },
    {
      description: "How it looks",
      Url: acimg5,
      section: "main",
    },
    {
      description: "Auto Car Brief",
      Url: acimg4,
      section: "core",
    },
    {
      description: "Visual Odometry Brief",
      Url: acimg2,
      section: "core",
    },
    {
      description: "Visual Odometry Result",
      Url: acimg3,
      section: "results",
    },
  ];
  const TKB = [
    {
      description: "For You Page",
      Url: img1TKB,
      section: "main",
    },
    {
      description: "For You Page",
      Url: img2TKB,
      section: "main",
    },
    {
      description: "Creation Page",
      Url: img3TKB,
      section: "main",
    },
    {
      description: "Search Page",
      Url: img4TKB,
      section: "main",
    },
    {
      description: "Room Page",
      Url: img5TKB,
      section: "main",
    },
    {
      description: "Room Chat Page",
      Url: img6TKB,
      section: "main",
    },
  ];

  const SL = [
    {
      description: "How It Works",
      Url: img1SL,
      section: "core",
      isVod: "potato",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <p>Some of my highlighted projects are listed below.</p>
                  <p>(All projects are available on my GitHub)</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                      style={{ padding: 15 }}
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Autonomous Toy Car & Visual Odometry
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          ClubTok
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">SkimLit</Nav.Link>
                      </Nav.Item>
                      {/*<Nav.Item style={{ width: "80%" }}>
                        <Nav.Link eventKey="fourth">Others</Nav.Link>
              </Nav.Item>*/}
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <div style={{ textAlign: "center", marginBottom: 10 }}>
                          <span style={{ color: "white" }}>
                            A toy car, Built from scratch using Arduino, Added a
                            platform to put a phone on it, and used the phone's
                            camera to act as a middleman between the car and the
                            server, To control the car using bluetooth
                            coomunication, Visual Data are sent and processed by
                            the server.
                          </span>
                        </div>
                        <Row className="justify-content-center">
                          {AC.map((project, index) => {
                            return project.section == "main" ? (
                              <ProjectCard key={index} {...project} />
                            ) : null;
                          })}
                        </Row>
                        <Row className="justify-content-center">
                          {AC.map((project, index) => {
                            return project.section == "core" ? (
                              <ProjectCard key={index} {...project} />
                            ) : null;
                          })}
                        </Row>
                        <Row className="justify-content-center">
                          {AC.map((project, index) => {
                            return project.section == "results" ? (
                              <ProjectCard key={index} {...project} />
                            ) : null;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div style={{ textAlign: "center", marginBottom: 10 }}>
                          <span style={{ color: "white" }}>
                            A social media app, It's a combination of ClubHouse
                            and Tiktok, It's a place where you can create rooms
                            and talk about anything you want. Supports live
                            streaming, and voice chat. You Can create a room
                            with a video/image as a cover to persuade people to
                            join
                          </span>
                        </div>
                        <Row className="justify-content-center">
                          {TKB.map((project, index) => {
                            return project.section == "main" ? (
                              <ProjectCard key={index} {...project} />
                            ) : null;
                          })}
                        </Row>
                        <Row className="justify-content-center">
                          {TKB.map((project, index) => {
                            return project.section == "core" ? (
                              <ProjectCard key={index} {...project} />
                            ) : null;
                          })}
                        </Row>
                        <Row className="justify-content-center">
                          {TKB.map((project, index) => {
                            return project.section == "results" ? (
                              <ProjectCard key={index} {...project} />
                            ) : null;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div style={{ textAlign: "center", marginBottom: 10 }}>
                          <span style={{ color: "white" }}>
                            An NLP model to classify abstract sentences into the
                            role they play (e.g. objective, methods, results,
                            etc..) to enable faster and more efficient reading.
                          </span>
                        </div>
                        <Row className="justify-content-center">
                          {SL.map((project, index) => {
                            return project.section == "main" ? (
                              <ProjectCard key={index} {...project} />
                            ) : null;
                          })}
                        </Row>
                        <Row className="justify-content-center">
                          {SL.map((project, index) => {
                            return project.section == "core" ? (
                              <ProjectCard key={index} {...project} />
                            ) : null;
                          })}
                        </Row>
                        <Row className="justify-content-center">
                          {SL.map((project, index) => {
                            return project.section == "results" ? (
                              <ProjectCard key={index} {...project} />
                            ) : null;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
