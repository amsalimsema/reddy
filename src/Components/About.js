import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Space } from "./Global";
import Fade from "react-reveal/Fade";

export const Wrap = styled(Container)`
  width: 70vw;
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`;
const Info = styled.div``;
const Vision = styled.div``;
export default function About() {
  return (
    <>
      <Space />
      <Wrap>
        <Row>
          <Col md={6}>
            <Info>
              <Fade bottom>
                <h4 className="font-weight-bold">ABOUT REDDY'S:</h4>
                <p>
                  Reddy’s Borehole & Technical Services is broadly based on
                  Irrigation & Bore Hole, specializes in multi-disciplinary
                  construction and engineering projects. We managed to deliver
                  on prime Projects in Uganda and is proud to be of service.
                </p>
                <p>
                  The founders’ main objective was to pool their vast
                  professional experience together to render professional
                  services in civil, Mechanical and Electrical Engineering
                  fields specializing in Construction, Installation and
                  Maintenance services, and at a later stage, to extend into the
                  manufacturing sector.
                </p>
              </Fade>
            </Info>
          </Col>
          <Col md={6}>
            <Vision>
              <Fade bottom>
                <h4 className="font-weight-bold">VISION:</h4>
                <p>
                  To maintain the highest levels of professionalism, integrity,
                  honesty and fairness in our relationships with our suppliers,
                  subcontractors, professional associates and customers.
                </p>
                <h4 className="font-weight-bold">MISSION:</h4>
                <p>
                  To perform for our customers the highest level of quality
                  construction services at fair and market competitive prices.
                </p>
              </Fade>
            </Vision>
          </Col>
        </Row>
      </Wrap>
    </>
  );
}
