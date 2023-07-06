import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import headerImg from "../image/dog-routine.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const HeaderTop = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "", "" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
  
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Petzyi</span>
                  <h1>{`Trust the best with your pets`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ " ", " ", " " ]'><span className="wrap">{text}</span></span></h1>
                    <h1>Because they deserve Love </h1>

                    <Link to="/appointment" className="btn btn-white border border-dark btn-lg shadow rounded"> Book an appointment</Link>

  
                    {/* <button Link to onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button> */}
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    {/* <img src="../../images/dog_adobe_express.svg" alt="Header Img"/> */}
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }