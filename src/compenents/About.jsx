import React from 'react'
import { Row ,Container,Image, Col, Button} from 'react-bootstrap'
import aboutimage from '../asset/images/about-img.jpg'
const About = () => {
  return (
    <div className='about_us'>
<Container>
    <Row className='aboutus_row'>
        <Col md={6} className='aboutus_text mb-3'>
            <div>
            <h2>
              About us
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
            </p>
            <Button className="about_us_butn">
              Read More
            </Button>
            </div>
     
        </Col>
        <Col md={6}>
        <Image src={aboutimage}/>
        </Col>
    </Row>
</Container>

    </div>
  )
}

export default About