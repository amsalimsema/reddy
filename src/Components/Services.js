import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../Images/service.jpeg";
import { Space } from "./Global";
import Zoom from "react-reveal/Zoom";

const Wrap = styled(Container)`
  width: 70vw;
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`;
export const ImgBox = styled.div`
  margin-bottom: 3rem;
  transition: all 0.8s ease-in-out;
  cursor: pointer;
  filter: grayscale(1);
  &:hover {
    transform: translateY(2px);
    filter: grayscale(0);
  }
`;

export default function Services() {
  return (
    <>
      <Space />
      <Wrap>
        <h4 className="font-weight-bold">
          HIGHLY SPECIALIZED SERVICES BY REDDY'S:
        </h4>
        <Zoom>
          <Row>
            <Col md={6}>
              <ImgBox>
                <h5 className="font-weight-bold">BOREHOLE DRILLING</h5>
                <img src={pic} alt="service" className="w-100 rounded" />
              </ImgBox>
            </Col>
            <Col md={6}>
              <ImgBox>
                <h5 className="font-weight-bold">BOREHOLE REHABILITATION</h5>
                <img src={pic} alt="service" className="w-100 rounded" />
              </ImgBox>
            </Col>
          </Row>
        </Zoom>

        {/* end of first row */}
        <Zoom>
          <Row>
            <Col md={6}>
              <ImgBox>
                <h5 className="font-weight-bold">HYDRO GEOLOGICAL SURVEY</h5>
                <img src={pic} alt="service" className="w-100 rounded" />
              </ImgBox>
            </Col>
            <Col md={6}>
              <ImgBox>
                <h5 className="font-weight-bold">TEST PUMPING</h5>
                <img src={pic} alt="service" className="w-100 rounded" />
              </ImgBox>
            </Col>
          </Row>
        </Zoom>

        {/* end of first row */}
        <Zoom>
          <Row>
            <Col md={6}>
              <ImgBox>
                <h5 className="font-weight-bold">CASTING</h5>
                <img src={pic} alt="service" className="w-100 rounded" />
              </ImgBox>
            </Col>
            <Col md={6}>
              <ImgBox>
                <h5 className="font-weight-bold">PUMP SUPPLY & INSTALLATION</h5>
                <img src={pic} alt="service" className="w-100 rounded" />
              </ImgBox>
            </Col>
          </Row>
        </Zoom>

        {/* end of first row */}
        <Zoom>
          <Row>
            <Col md={6}>
              <ImgBox>
                <h5 className="font-weight-bold">WATER SUPPLY SYSTEMS</h5>
                <img src={pic} alt="service" className="w-100 rounded" />
              </ImgBox>
            </Col>
            <Col md={6}>
              <ImgBox>
                <h5 className="font-weight-bold">GENERAL CONSULTANCY</h5>
                <img src={pic} alt="service" className="w-100 rounded" />
              </ImgBox>
            </Col>
          </Row>
        </Zoom>
      </Wrap>
    </>
  );
}
