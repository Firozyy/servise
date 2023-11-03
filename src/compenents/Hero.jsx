import React from "react";
import { Col, Row ,Image, Button, Container} from "react-bootstrap";
import "./style.css";
import mainimage from '../asset/images/slider-img.png'

const Hero = () => {
  return (
    <div className="hero">
    <Container>
      <Row className=" p-0 m-0 ">
        <Col md={6} className=" mb-5 mt-3  hero_item1">
          <div >
            <h1 className="mb-4">
              Repair and <br />
              Maintenance <br />
              Services
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
              voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
              tempora iusto, ad possimus soluta hic praesentium mollitia
              consequatur beatae, aspernatur culpa.
            </p>
            <Button className="contact_us" href="">Contact Us</Button>
          </div>
        </Col>
        <Col md={6}>
        <div>
          <Image src={mainimage} />
        </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Hero;
