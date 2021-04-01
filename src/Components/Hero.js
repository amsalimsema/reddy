import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import water from "../Images/water.jpg";
import { Bg } from "./Global";
import { Wrap } from "./About";
import one from "../Images/drilling.jpg";
import two from "../Images/drillingone.jpg";
//import three from "../Images/ppda.jpg";

const Legal = styled(Bg)`
  background-image: url(${water});
  height: 50vh;
  margin-bottom: 2rem;
`;
const Info = styled.div`
  text-align: center;
  padding-top: 10rem;
  color: #fff;
`;

export default function Hero() {
  return (
    <>
      <Legal>
        <Info>
          <h4>REDDY'S BOREHOLE & TECHNICAL SERVICES LTD</h4>
          <p>Incorporation No :213941</p>
        </Info>
      </Legal>

      <Wrap>
        <h4>PERMITS & CERTIFICATES:</h4>
        <Row>
          <Col md={6}>
            <img src={one} alt="one" className="w-100" />
          </Col>
          <Col md={6}>
            <img src={two} alt="one" className="w-100" />
          </Col>
        </Row>
      </Wrap>
    </>
  );
}
