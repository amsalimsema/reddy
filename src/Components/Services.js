import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  &:hover {
    transform: translateY(2px);
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
            <Col md={12}>
              <h5 className="font-weight-bold"> - BOREHOLE DRILLING -</h5>
              <p>
                We provide a complete borehole installation package in Kenya,
                which includes a storage tank, variable speed distribution
                pumps, pressure vessel, control system and, if required, water
                treatment. We understand the different geological needs across
                Uganda.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ImgBox>
                <img
                  src="https://images.ctfassets.net/wlgvz2z255oc/2f9fRaDrUh9tpjLk49ftNN/5ac695da4b21c786389d785bbdc49734/Boreholeone.jpg?w=1427&h=1063&fm=jpg&fl=progressive"
                  alt="service"
                  className="w-100 rounded"
                />
              </ImgBox>
            </Col>
            <Col md={6}>
              <ImgBox>
                <img
                  src="https://images.ctfassets.net/wlgvz2z255oc/1iGt9z7nf3GiHzQHGA2FAZ/0df77240bb5fb7126d314daaaa232965/Boreholetwo.jpg?w=1427&h=1063&fm=jpg&fl=progressive"
                  alt="service"
                  className="w-100 rounded"
                />
              </ImgBox>
            </Col>
          </Row>
        </Zoom>

        {/* end of first row */}
        <Zoom>
          <Row>
            <Col md={12}>
              <h5 className="font-weight-bold">- SOLAR SUPPLY SYSTEMS -</h5>
              <p>
                Solar pumping systems allow vital water resources to be accessed
                in remote rural Uganda. Solar water pumps require no fuel and
                minimal maintenance. Solar powered submersible pumps are used
                for wells, boreholes, water transfer, cattle & livestock
                watering and irrigation.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ImgBox>
                <img
                  src="https://images.ctfassets.net/wlgvz2z255oc/1iOgaZFkH1m00HQfimQPsC/7022fa2519206bc1313440a624877a9f/solarsystem1.jpg?w=1890&h=1063&fm=jpg&fl=progressive"
                  alt="service"
                  className="w-100 rounded"
                />
              </ImgBox>
            </Col>
            <Col md={6}>
              <ImgBox>
                <img
                  src="https://images.ctfassets.net/wlgvz2z255oc/60uplPtuMhvA2Mqam3Bdg6/bad089390ce212e229277c98a7042273/solarsystem2.jpg?w=1890&h=1063&fm=jpg&fl=progressive"
                  alt="service"
                  className="w-100 rounded"
                />
              </ImgBox>
            </Col>
          </Row>
        </Zoom>

        {/* end of first row */}
        <Zoom>
          <Row>
            <Col md={12}>
              <h5 className="font-weight-bold">
                - WATER SUPPLY & ELEVATED TANKS -
              </h5>
              <p>
                On top of water supply systems, we do design and installation of
                elevated steel tanks in Uganda, the tanks consist of a welded
                steel container supported by multiple welded steel legs,
                perimeter columns, and a central welded steel riser.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ImgBox>
                <img
                  src="https://images.ctfassets.net/wlgvz2z255oc/qAKfe7LSaNX53vX032e67/d714342509da32e6a712e18348a5a5a6/threereddy.jpg?w=1920&h=1080&fm=jpg&fl=progressive"
                  alt="service"
                  className="w-100 rounded"
                />
              </ImgBox>
            </Col>
            <Col md={6}>
              <ImgBox>
                <img
                  src="https://images.ctfassets.net/wlgvz2z255oc/78K5vbIZhhMC1ZAbWtGaSI/5ff791d5aaaf78fefbd52fe84ee989bb/watersupplyone.jpg?w=1920&h=1080&fm=jpg&fl=progressive"
                  alt="service"
                  className="w-100 rounded"
                />
              </ImgBox>
            </Col>
          </Row>
        </Zoom>

        {/* end of first row */}
        <Zoom>
          <Row>
            <Col md={12}>
              <p className="font-weight-bold">
                - FACTORY & WAREHOUSE CONSTRUCTION -
              </p>
              <p>
                Construction of a factory or warehouse involves many critical
                decisions to ensure the business will run like a well-oiled
                machine. From location and size, to logistics and
                space-planning. - every decision is a careful one.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ImgBox>
                <img
                  src="https://images.ctfassets.net/wlgvz2z255oc/4ek1OXO3TWMf65NRqVQ5uJ/6ecc876f81d276d2ab536fa4bd03a255/reddyfactory.jpg?w=1920&h=1080&fm=jpg&fl=progressive"
                  alt="service"
                  className="w-100 rounded"
                />
              </ImgBox>
            </Col>
            <Col md={6}>
              <ImgBox>
                <img
                  src="https://images.ctfassets.net/wlgvz2z255oc/6uxaELlh2vuC6f6DswgPPN/c5018ab1a8d0fa99f85411508ae1455b/reddywarehouse.jpg?w=1920&h=1080&fm=jpg&fl=progressive"
                  alt="service"
                  className="w-100 rounded"
                />
              </ImgBox>
            </Col>
          </Row>
        </Zoom>
      </Wrap>
    </>
  );
}
