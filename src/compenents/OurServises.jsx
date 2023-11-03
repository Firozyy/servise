import React from 'react'
import { Button, Col,Container, Image, Row } from 'react-bootstrap'
import s1 from '../asset/images/s1.png'
import s2 from '../asset/images/s2.png'
import s3 from '../asset/images/s3.png'
const OurServises = () => {
  return (
    <div className='ourServises '>
       
 <Container className=' ourServises_container'>
    <h1 >OUR SERVICES</h1>
<Row className='mt-5 mb-5'>
    <Col md={4}  className='  ourServises_col '>
        <div className='ourServises_col_items'>
            <div><Image src={s1}/></div>
            <div><span>Maintenance</span></div>
            <div><p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p></div>
        </div>
    </Col>
    
    <Col md={4}  className='  ourServises_col '>
        <div className='ourServises_col_items'>
            <div><Image src={s2}/></div>
            <div><span>Maintenance</span></div>
            <div><p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p></div>
        </div>
    </Col>
    <Col md={4}  className='  ourServises_col '>
        <div className='ourServises_col_items'>
            <div><Image src={s3}/></div>
            <div><span>Maintenance</span></div>
            <div><p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p></div>
        </div>
    </Col>
</Row>
<Button >View More</Button>
      </Container >
    
    </div>
  )
}

export default OurServises