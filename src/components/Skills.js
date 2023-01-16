import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Item from "./Item";
import webdev from "../assets/img/icons8-web-development-100.png";
import mlicon from "../assets/img/MLicon.png";
import soft from "../assets/img/Soft.png";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Skills</h2>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={webdev} alt="Image" />
                  <h5 style={{ marginBottom: "2rem" }}>Web Development</h5>
                  <Item value="HTML" />
                  <Item value="CSS" />
                  <Item value="JavaScript" />
                  <Item value="TypeScript" />
                  <Item value="React" />
                  <Item value="Angular" />
                  <Item value="NodeJs" />
                  <Item value="ExpressJs" />
                  <Item value="MongoDB" />
                  <Item value="MySQL" />
                  <Item value="Django" />
                  <Item value="Flask" />
                  <h5 style={{ marginTop: "2rem" }}>and more...</h5>
                </div>
                <div className="item">
                  <img src={mlicon} alt="Image" />
                  <h5 style={{ marginBottom: "2rem" }}>Machine Learning</h5>
                  <Item value="Python" />
                  <Item value="Numpy" />
                  <Item value="Pandas" />
                  <Item value="Matplotlib" />
                  <Item value="Scikit-learn" />
                  <Item value="Tensorflow" />
                  <Item value="Pytorch" />
                  <Item value="Huggingface" />
                  <h5 style={{ marginTop: "2rem" }}>and more...</h5>
                </div>
                <div className="item">
                  <img src={soft} alt="Image" />
                  <h5>Software Engineering</h5>
                  <Item value="Java" />
                  <Item value="C++" />
                  <Item value="Python" />
                  <Item value="Data Structures" />
                  <Item value="Algorithms" />
                  <Item value="Git" />
                  <Item value="Dockers" />
                  <h5 style={{ marginTop: "2rem" }}>and more...</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
