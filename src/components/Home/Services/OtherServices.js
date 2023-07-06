import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {Servicecaed}  from "./Servicecaed";
import projImg1 from "../../../assets/images/12.jpeg"
import projImg2 from "../../../assets/images/13.jpeg"
import projImg3 from "../../../assets/images/14.jpeg"
import projImg4 from "../../../assets/images/15.jpeg"
import projImg5 from "../../../assets/images/16.jpeg"
import projImg6 from "../../../assets/images/17.jpeg"
import colorSharp2 from "../../images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const OtherServices = () => {

  const projects = [
    {
      title: "  ",
      description: "",
      imgUrl: projImg1
    },
    {
      title: " ",
      description: " ",
      imgUrl: projImg2,
    },
    {
      title: " ",
      description: " ",
      imgUrl: projImg3,
    },
    {
      title: "  ",
      description: " ",
      imgUrl: projImg4,
    },
    {
      title: " ",
      description: " ",
      imgUrl: projImg5,
    },
    {
      title: " ",
      description: " ",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Community</h2>
                <p> </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Servicecaed
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p> </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
