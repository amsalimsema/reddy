import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import mic from "../Images/abstract.jpg";
import mic2 from "../Images/abstract.jpg";
import { Bg } from "./Global";
import logo from "../Images/logo.png";

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
  background-image: url(${mic2});
  height: 100vh;
`;

export default function Landing() {
  return (
    <>
      <Wrap>
        <Carousel fade>
          <Carousel.Item interval={10000}>
            <BgOne />

            <Carousel.Caption>
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: [10, 10, 0, -50, 20] }}
              >
                <img src={logo} alt="logo" style={{ width: "120px" }} />
                <h5 style={{ color: "cyan" }}>Reddy's Campaign tagline</h5>
              </motion.div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <BgOne />

            <Carousel.Caption>
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: [10, 10, 0, -50, 20] }}
              >
                <img src={logo} alt="logo" style={{ width: "120px" }} />
                <h5 style={{ color: "cyan" }}>Reddy's Campaign tagline</h5>
              </motion.div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <BgTwo />

            <Carousel.Caption>
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: [10, 10, 0, -50, 20] }}
              >
                <img src={logo} alt="logo" style={{ width: "120px" }} />
                <h5 style={{ color: "cyan" }}>Reddy's Campaign tagline</h5>
              </motion.div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Wrap>
    </>
  );
}
