import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../Images/service.JPG";

const Wrap = styled(Container)`
  width: 70vw;
  @media only screen and (max-width: 600px) {
    width: 80vw;
  }
`;
export const ImgBox = styled.div`
  margin-bottom: 3rem;
  transition: all 0.8s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(2px);
  }
`;

export default function Services() {
  return (
    <>
      <Wrap>
        <h4 className="font-weight-bold">
          HIGHLY SPECIALIZED SERVICES BY REDDY'S:
        </h4>
        <Row>
          <Col md={6}>
            <ImgBox>
              <h5>SERVICE NAME</h5>
              <img src={pic} alt="service" className="w-100 rounded" />
              <p>Description of service:</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus dolore beatae quas, maiores modi reprehenderit iste
                aliquam. Laborum, qui nemo qui nemo qui nemo.
              </p>
            </ImgBox>
          </Col>
          <Col md={6}>
            <ImgBox>
              <h5>SERVICE NAME</h5>
              <img src={pic} alt="service" className="w-100 rounded" />
              <p>Description of service:</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus dolore beatae quas, maiores modi reprehenderit iste
                aliquam. Laborum, qui nemo qui nemo qui nemo.
              </p>
            </ImgBox>
          </Col>
        </Row>
        {/* end of first row */}
        <Row>
          <Col md={6}>
            <ImgBox>
              <h5>SERVICE NAME</h5>
              <img src={pic} alt="service" className="w-100 rounded" />
              <p>Description of service:</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus dolore beatae quas, maiores modi reprehenderit iste
                aliquam. Laborum, qui nemo qui nemo qui nemo.
              </p>
            </ImgBox>
          </Col>
          <Col md={6}>
            <ImgBox>
              <h5>SERVICE NAME</h5>
              <img src={pic} alt="service" className="w-100 rounded" />
              <p>Description of service:</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus dolore beatae quas, maiores modi reprehenderit iste
                aliquam. Laborum, qui nemo qui nemo qui nemo.
              </p>
            </ImgBox>
          </Col>
        </Row>
      </Wrap>
    </>
  );
}
