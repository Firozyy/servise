import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./style.css";
import professional from "../asset/images/professional-img.png";
const HomeServise = () => {
  return (
    <div className="homeServise">
      <Container>
        <Row>
          <Col md={6}>
            <div>
              <Image src={professional} />
            </div>
          </Col>
          <Col md={6} className="professional_text_col">
            <div class="detail_box">
              <h2 className="mb-4">
                We Provide Professional <br />
                Home Services.
              </h2>
              <p className="mb-4">
                randomised words which don't look even slightly believable. If
                you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All randomised words which don't look even slightly
              </p>
              <Button className="read_more" href="">Read More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeServise;
