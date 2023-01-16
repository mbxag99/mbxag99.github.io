import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailIcon from "../assets/img/emailicon.png";
import phoneIcon from "../assets/img/phoneicon.png";

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => <img src={contactImg} alt="Contact Us" />}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Get In Touch</h2>
                  <h3>And Let's Talk</h3>
                  <Row>
                    <Col size={12} className="px-1">
                      <div className="item_contact">
                        <img src={emailIcon} alt="email icon" />
                        <button type="submit" style={{ cursor: "auto" }}>
                          <span>mbx.ag99@gmail.com</span>
                        </button>
                      </div>
                      <div className="item_contact">
                        <img src={phoneIcon} alt="email icon" />
                        <button type="submit" style={{ cursor: "auto" }}>
                          <span>+972 0522257217</span>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
