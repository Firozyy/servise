import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import HouseTwoToneIcon from '@mui/icons-material/HouseTwoTone';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
const Servises = () => {
  return (
    <div>
        <Container>

        <Row className='servises_item_row text-secondary p-0 m-0'>
            <Col lg={4} className=' servises_item pt-5 pb-5'>
                <HandymanTwoToneIcon  style={{ fontSize: '5rem' }} />
          <span>Repair</span>
            </Col>
            <Col lg={4}    className=' servises_item  pt-5 pb-5 '>
                <HouseTwoToneIcon style={{ fontSize: '5rem' }} />
          <span>Improve</span>
            </Col>
            <Col lg={4} className=' servises_item pt-5 pb-5  '>
                <EngineeringTwoToneIcon style={{ fontSize: '5rem' }} />
          <span>Maintain</span>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Servises