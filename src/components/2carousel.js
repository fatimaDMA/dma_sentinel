import Carousel from 'react-bootstrap/Carousel';
import {MARNChart, MARNData} from './MARNChart';
import DualChart from './WazeReport';
import { Col, Row } from 'react-bootstrap';

function SentinelCarousel() {
  
  return (
    <Carousel>

      <Carousel.Item interval={6000} className='item'>
        <div className='code-container'>
          <h4>MARN Report</h4>
          
            <Row>
            <Col lgmd={6} style={{ width: '350px', height: '200px', margin: '10px' }}> <MARNChart></MARNChart> </Col>
            <Col md={4}> <MARNData></MARNData> </Col>
            </Row>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={6000} className='item'>
      <div className='code-container'>
          <h4>Waze Report</h4>
          <div style={{ width: '400px', height: '200px', margin: '20px' }}>
          <DualChart></DualChart>
          </div>
      </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default SentinelCarousel;