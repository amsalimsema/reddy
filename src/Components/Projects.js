import React from "react";
import styled from "styled-components";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import pic from "../Images/service.jpeg";
import { Wrap } from "./About";
import { ImgBox } from "./Services";

const Box = styled(ImgBox)`
  text-align: center;
  transition: all 0.4s ease-in-out;
  border: 2px solid transparent;
  border-radius: 0.5rem;

  &:hover {
    border: 2px dotted black;
    border-radius: 0.5rem;
  }
`;

export default function Projects() {
  return (
    <>
      <Wrap>
        <h4 className="font-weight-bold">PROJECTS ACCOMPLISHED BY REDDY'S:</h4>
        <Carousel fade>
          <Carousel.Item interval={5000}>
            <Row>
              <Col md={3}>
                <Box>
                  <img src={pic} alt="project" className="w-100 rounded" />
                  <p>OMUGO VI WATER SOURCE</p>
                </Box>
              </Col>
              <Col md={3}>
                <Box>
                  <img src={pic} alt="project" className="w-100 rounded" />
                  <p>OMUGO VI WATER SOURCE</p>
                </Box>
              </Col>
              <Col md={3}>
                <Box>
                  <img src={pic} alt="project" className="w-100 rounded" />
                  <p>OMUGO VI WATER SOURCE</p>
                </Box>
              </Col>
              <Col md={3}>
                <Box>
                  <img src={pic} alt="project" className="w-100 rounded" />
                  <p>OMUGO VI WATER SOURCE</p>
                </Box>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Row>
              <Col md={3}>
                <Box>
                  <img src={pic} alt="project" className="w-100 rounded" />
                  <p>OMUGO VI WATER SOURCE</p>
                </Box>
              </Col>
              <Col md={3}>
                <Box>
                  <img src={pic} alt="project" className="w-100 rounded" />
                  <p>OMUGO VI WATER SOURCE</p>
                </Box>
              </Col>
              <Col md={3}>
                <Box>
                  <img src={pic} alt="project" className="w-100 rounded" />
                  <p>OMUGO VI WATER SOURCE</p>
                </Box>
              </Col>
              <Col md={3}>
                <Box>
                  <img src={pic} alt="project" className="w-100 rounded" />
                  <p>OMUGO VI WATER SOURCE</p>
                </Box>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Wrap>
    </>
  );
}
