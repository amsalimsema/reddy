import React from "react";
import styled from "styled-components";
import { Wrap } from "./About";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillTag } from "react-icons/ai";
import { MdLocalPostOffice } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiPhone } from "react-icons/gi";
import { Space } from "./Global";

const Tag = styled(AiFillTag)`
  color: black;
  font-size: 1.5rem;
  &:hover {
    color: cyan;
  }
`;
const Postal = styled(MdLocalPostOffice)`
  color: black;
  font-size: 1.5rem;
  &:hover {
    color: cyan;
  }
`;
const Map = styled(FaMapMarkerAlt)`
  color: black;
  font-size: 1.5rem;
  &:hover {
    color: cyan;
  }
`;
const Phone = styled(GiPhone)`
  color: black;
  font-size: 1.5rem;
  &:hover {
    color: cyan;
  }
`;
const Footer = styled.div`
  font-weight: bold;
  margin-top: 3rem;
`;
export default function Contact() {
  return (
    <>
      <Space />
      <Wrap>
        <h4 className="font-weight-bold">CONTACT REDDY'S:</h4>
        <Row>
          <Col md={6}>
            <div style={{ fontSize: "1rem" }}>
              <p>
                <Tag />
                &nbsp;&nbsp; Reddy's BoreHole And Technical Services Ltd
              </p>
              <p>
                <Postal /> &nbsp;&nbsp;P.o.Box 10940 Kampala Uganda
              </p>
              <p>
                <Map />
                &nbsp;&nbsp; Kawempe, Kalerwe - Tula Road, Kampala
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ fontSize: "1rem" }}>
              <p>
                <a href="tel: +256709234234" style={{ color: "inherit" }}>
                  <Phone /> &nbsp;&nbsp;+256(0)709 234234 | +256(0)776 234234
                </a>
              </p>
              <p>
                <a
                  href="mailto:rbtsltd.ug@gmail.com"
                  style={{ color: "inherit" }}
                >
                  <Postal /> &nbsp;&nbsp;rbtsltd.ug@gmail.com
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Footer>
          <p>
            &copy;{new Date().getFullYear()}&nbsp;Reddy's Borehole & Technical
            Services Ltd.&nbsp;All Rights Reserved
          </p>
        </Footer>
      </Wrap>
    </>
  );
}
