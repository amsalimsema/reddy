import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import face from "../Images/avatar.png";
import { ImgBox } from "./Services";
import { Space } from "./Global";

const TeamBox = styled(Container)`
  width: 50vw;
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`;
const Box = styled(ImgBox)`
  text-align: center;
  > img {
    border: 2px dotted transparent;
    &:hover {
      border: 2px dotted cyan;
    }
  }
`;
export default function Team() {
  return (
    <>
      <Space />
      <TeamBox>
        <h4 className="font-weight-bold pb-4 text-center">TOP TEAM</h4>
        <Row>
          <Col md={4}>
            <Box>
              <Image
                src={face}
                alt="team"
                roundedCircle
                style={{ width: "100px", height: "100px" }}
              />
              <p>Kummathi Sreenivasa Reddy</p>
            </Box>
          </Col>
          <Col md={4}>
            <Box>
              <Image
                src={face}
                alt="team"
                roundedCircle
                style={{ width: "100px", height: "100px" }}
              />
              <p>Marapareddygari Mahendra Reddy</p>
            </Box>
          </Col>
          <Col md={4}>
            <Box>
              <Image
                src={face}
                alt="team"
                roundedCircle
                style={{ width: "100px", height: "100px" }}
              />
              <p>Peddireddy Venkata Reddy</p>
            </Box>
          </Col>
        </Row>
      </TeamBox>
    </>
  );
}
