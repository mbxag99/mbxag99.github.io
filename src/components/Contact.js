import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailIcon from "../assets/img/emailicon.png";
import phoneIcon from "../assets/img/phoneicon.png";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

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
