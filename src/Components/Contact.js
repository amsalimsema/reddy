import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Wrap } from "./About";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
const Btn = styled(Button)``;
export default function Contact() {
  //Form validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // success
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);
  return (
    <>
      <Space />
      <Wrap>
        <h4 className="font-weight-bold">CONTACT REDDY'S:</h4>
        <Row>
          <Col md={6}>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              name="reddys"
              method="POST"
              data-netlify="true"
              action="/?success=true"
              id="reddysinner"
              autoComplete="off"
              style={{ padding: "0.5rem 0 2rem 0" }}
            >
              {success && (
                <p style={{ color: "green" }}>Thanks for getting in touch!</p>
              )}

              <input type="hidden" name="form-name" value="reddys" />
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  {/* <Form.Label>Name:</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    required
                    name="name"
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide your first name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationCustom015">
                  {/* <Form.Label>Name:</Form.Label> */}
                  <Form.Control
                    type="tel"
                    placeholder="Your number"
                    required
                    name="phone"
                    pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid phone number eg. &nbsp; 0782442281
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationCustom014">
                  {/* <Form.Label>Email:</Form.Label> */}
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    required
                    name="email"
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationCustom013">
                  {/* <Form.Label>Message:</Form.Label> */}
                  <Form.Control
                    as="textarea"
                    placeholder="Type message here..."
                    required
                    name="message"
                  />

                  <Form.Control.Feedback type="invalid">
                    Please type your message
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Btn type="submit" style={{ width: "100%", marginTop: "0" }}>
                <small>SEND</small>
              </Btn>
            </Form>
          </Col>
          <Col md={6}>
            <div style={{ width: "100%" }}>
              <iframe
                title="reddys"
                width="100%"
                height="350"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Kawempe,%20Kalerwe%20-%20Tula%20Road,%20Kampala+(Reddy's%20borehole%20and%20technical%20services)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </Col>
        </Row>
        <div className="pt-5"></div>
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
