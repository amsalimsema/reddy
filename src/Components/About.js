import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Wrap = styled(Container)`
  margin: 5rem auto;
  width: 70vw;
  @media only screen and (max-width: 600px) {
    width: 80vw;
  }
`;
const Info = styled.div``;
const Vision = styled.div``;
export default function About() {
  return (
    <>
      <Wrap>
        <Row>
          <Col md={6}>
            <Info>
              <h4 className="font-weight-bold">ABOUT REDDY'S:</h4>
              <p>
                Reddy’s Borehole & Technical Services is broadly based on
                Irrigation & Bore Hole, specializes in multi-disciplinary
                construction and engineering projects. We managed to deliver on
                prime Projects in Uganda and is proud to be of service.
              </p>
              <p>
                The founders’ main objective was to pool their vast professional
                experience together to render professional services in civil,
                Mechanical and Electrical Engineering fields specializing in
                Construction, Installation and Maintenance services, and at a
                later stage, to extend into the manufacturing sector.
              </p>
            </Info>
          </Col>
          <Col md={6}>
            <Vision>
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
            </Vision>
          </Col>
        </Row>
      </Wrap>
    </>
  );
}
