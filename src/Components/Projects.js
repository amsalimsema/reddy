import React from "react";
import styled from "styled-components";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import pic from "../Images/service.jpg";
import { Wrap } from "./About";
import { ImgBox } from "./Services";

const Box = styled(ImgBox)``;

export default function Projects() {
  return (
    <>
      <Wrap>
        <Row>
          <Col md={3}>
            <Box></Box>
          </Col>
          <Col md={3}></Col>
          <Col md={3}></Col>
          <Col md={3}></Col>
        </Row>
      </Wrap>
    </>
  );
}
