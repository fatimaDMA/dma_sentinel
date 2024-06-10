import Carousel from 'react-bootstrap/Carousel';
import {MARNChart, MARNData} from './MARNReport';
import DualChart from './WazeReport';
import { Col, Row } from 'react-bootstrap';
import { KazuAlquiler, KazuVenta} from './KazuReport';

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
          <Row>
            <Col lgmd={8} style={{ width: '100px', height: '200px', margin: '10px' }}> <DualChart></DualChart> </Col>
            <Col md={4}> </Col>
            </Row>
          
      </div>
      </Carousel.Item>

      <Carousel.Item interval={6000} className='item'>
        <div className='code-container'>
          <h4>Kazu Report</h4>
          
            <Row>
            <Col lgmd={4} style={{ width: '200px', height: '200px', margin: '10px' }}> <KazuVenta></KazuVenta> </Col>
            <Col lgmd={4} style={{ width: '200px', height: '200px', margin: '10px' }}> <KazuAlquiler></KazuAlquiler> </Col>
            </Row>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default SentinelCarousel;