import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { Wrap } from "./About";
import { ImgBox } from "./Services";
import { Space } from "./Global";

const Box = styled(ImgBox)`
  text-align: center;
  transition: all 0.4s ease-in-out;
  border: 2px solid transparent;
  border-radius: 0.5rem;

  &:hover {
    border: 2px dotted cyan;
    border-radius: 0.5rem;
  }
`;

export default function Projects() {
  return (
    <>
      <Space />
      <Wrap>
        <h4 className="font-weight-bold">PROJECTS ACCOMPLISHED BY REDDY'S:</h4>
        <Carousel fade>
          <Carousel.Item interval={5000}>
            <Row>
              <Col md={6}>
                <Box>
                  <img
                    src="https://images.ctfassets.net/wlgvz2z255oc/6TH3PSsGW5FrSOuYUHltVA/74ba73226cf2041a8b1b0b8909b38678/Rwentondo-Pump-Station-1.jpg?w=1890&h=1063&fm=jpg&fl=progressive"
                    alt="project"
                    className="w-100 rounded"
                  />
                  <p>RWENTONDO PUMP STATION - 1</p>
                </Box>
              </Col>
              <Col md={6}>
                <Box>
                  <img
                    src="https://images.ctfassets.net/wlgvz2z255oc/3UoO3pVFASB3SJRnsiLCA9/c502e286c294ca14f43d2dc3b58c4886/Nyabugando-Chlorine-House1.jpg?w=1890&h=1063&fm=jpg&fl=progressive"
                    alt="project"
                    className="w-100 rounded"
                  />
                  <p>NYABUGANDO CHLORINE HOUSE - 1</p>
                </Box>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Row>
              <Col md={6}>
                <Box>
                  <img
                    src="https://images.ctfassets.net/wlgvz2z255oc/11MUDJbaBpOCZmeW4Dq65p/4f98dfb76638ede5fc2738c62b6e98b4/OFFUA-III-WATER-SOURCE-1.jpg?w=1890&h=1063&fm=jpg&fl=progressive"
                    alt="project"
                    className="w-100 rounded"
                  />
                  <p>OFFUA-III-WATER-SOURCE-1</p>
                </Box>
              </Col>
              <Col md={6}>
                <Box>
                  <img
                    src="https://images.ctfassets.net/wlgvz2z255oc/6Yncy7FIVXfQWLnbZLJoU7/9103adecbda0fa13c3d911994b5c1eaa/OMUGO-VI-WATER-SOURCE-1.jpg?w=1890&h=1063&fm=jpg&fl=progressive"
                    alt="project"
                    className="w-100 rounded"
                  />
                  <p>OMUGO-VI-WATER-SOURCE-1</p>
                </Box>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Row>
              <Col md={6}>
                <Box>
                  <img
                    src="https://images.ctfassets.net/wlgvz2z255oc/LaXuHMdUFDpZ4fOS4yE0C/286e751577cabd9bc1e82a454c85cac2/OMUGO-VI-WATER-SOURCE-2.jpg?w=1890&h=1063&fm=jpg&fl=progressive"
                    alt="project"
                    className="w-100 rounded"
                  />
                  <p>OMUGO-VI-WATER-SOURCE-2</p>
                </Box>
              </Col>
              <Col md={6}>
                <Box>
                  <img
                    src="https://images.ctfassets.net/wlgvz2z255oc/3bVfzKGnf23jBWurxhkenM/78412005f075b9366ea4725595aef63a/Nyabugando-Chlorine-House2.jpg?w=1890&h=1063&fm=jpg&fl=progressive"
                    alt="project"
                    className="w-100 rounded"
                  />
                  <p>NYABUGANDO CHLORINE HOUSE - 2</p>
                </Box>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Row>
              <Col md={6}>
                <Box>
                  <img
                    src="https://images.ctfassets.net/wlgvz2z255oc/LaXuHMdUFDpZ4fOS4yE0C/286e751577cabd9bc1e82a454c85cac2/OMUGO-VI-WATER-SOURCE-2.jpg?w=1890&h=1063&fm=jpg&fl=progressive"
                    alt="project"
                    className="w-100 rounded"
                  />
                  <p>OMUGO-VI-WATER-SOURCE-2</p>
                </Box>
              </Col>
              <Col md={6}>
                <Box>
                  <img
                    src="https://images.ctfassets.net/wlgvz2z255oc/6TH3PSsGW5FrSOuYUHltVA/74ba73226cf2041a8b1b0b8909b38678/Rwentondo-Pump-Station-1.jpg?w=1890&h=1063&fm=jpg&fl=progressive"
                    alt="project"
                    className="w-100 rounded"
                  />
                  <p>RWENTONDO PUMP STATION - 1</p>
                </Box>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Wrap>
    </>
  );
}
