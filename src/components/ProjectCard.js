import { Col } from "react-bootstrap";
import ReactPlayer from "react-player";

export const ProjectCard = ({ title, description, Url, isVod }) => {
  return isVod != "potato" ? (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={Url} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  ) : isVod == "potato" ? (
    <Col size={20} sm={20} md={20}>
      <div className="proj-imgbx">
        <img src={Url} style={{ width: "100%", height: "100%" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  ) : null;
};
