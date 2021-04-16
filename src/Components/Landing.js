import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import mic from "../Images/service.jpeg";
import Fade from "react-reveal/Fade";

import { Bg } from "./Global";

const Wrap = styled.div`
  width: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  height: 100vh;
`;
const BgOne = styled(Bg)`
  background-image: url(${mic});
  height: 100vh;
`;
const BgTwo = styled(Bg)`
  background-image: url(${mic});
  height: 100vh;
`;

export default function Landing() {
  return (
    <>
      <Wrap>
        <Carousel fade>
          <Carousel.Item interval={5000}>
            <BgOne />

            <Carousel.Caption>
              <Fade bottom>
                <h4>REDDY’S BOREHOLE AND TECHNICAL SERVICES LTD</h4>
                <h5 style={{ color: "cyan" }}>Reddy's Campaign tagline</h5>
              </Fade>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <BgOne />

            <Carousel.Caption>
              <Fade bottom>
                <h4>REDDY’S BOREHOLE AND TECHNICAL SERVICES LTD</h4>
                <h5 style={{ color: "cyan" }}>Reddy's Campaign tagline</h5>
              </Fade>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <BgTwo />

            <Carousel.Caption>
              <Fade bottom>
                <h4>REDDY’S BOREHOLE AND TECHNICAL SERVICES LTD</h4>
                <h5 style={{ color: "cyan" }}>Reddy's Campaign tagline</h5>
              </Fade>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Wrap>
    </>
  );
}
