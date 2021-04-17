import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";

import { Bg } from "./Global";

const Wrap = styled.div`
  width: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  height: 100vh;
`;
const BgOne = styled(Bg)`
  background-image: url("https://images.ctfassets.net/wlgvz2z255oc/qAKfe7LSaNX53vX032e67/d714342509da32e6a712e18348a5a5a6/threereddy.jpg?w=1920&h=1080&fm=jpg&fl=progressive");
  height: 100vh;
`;

const BgTwo = styled(Bg)`
  background-image: url("https://images.ctfassets.net/wlgvz2z255oc/3KVcp9fcn1gYY2xZypdsKM/8e69dd072be912d54b4de3a91c3e18fa/tworeddy.jpg?w=1920&h=1080&fm=jpg&fl=progressive");
  height: 100vh;
`;
const BgThree = styled(Bg)`
  background-image: url("https://images.ctfassets.net/wlgvz2z255oc/5Fy5vFddZ6SItl7Yq3FC5z/5826fb386460f038c56b75c6b7b4d3b8/onereddy.jpg?w=1920&h=1080&fm=jpg&fl=progressive");
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
                <h3 style={{ fontWeight: "bold" }}>
                  REDDY’S BOREHOLE AND TECHNICAL SERVICES LTD
                </h3>
                <h4 style={{ fontWeight: "bold" }}>Reddy's Campaign tagline</h4>
              </Fade>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <BgTwo />

            <Carousel.Caption>
              <Fade bottom>
                <h3 style={{ fontWeight: "bold" }}>
                  REDDY’S BOREHOLE AND TECHNICAL SERVICES LTD
                </h3>
                <h4 style={{ fontWeight: "bold" }}>Reddy's Campaign tagline</h4>
              </Fade>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <BgThree />

            <Carousel.Caption>
              <Fade bottom>
                <h3 style={{ fontWeight: "bold" }}>
                  REDDY’S BOREHOLE AND TECHNICAL SERVICES LTD
                </h3>
                <h4 style={{ fontWeight: "bold" }}>Reddy's Campaign tagline</h4>
              </Fade>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Wrap>
    </>
  );
}
