import Carousel from 'react-bootstrap/Carousel';
import TotalOfertasChart from './OfertasChart';
import {Row, Col} from 'react-bootstrap'
import  { TotalProductsChart } from './ProductsChart'

function SentinelReports() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
      <div className='code-container'>
          <h4>Retail Statistics</h4>
          <p>Walmart</p>
          <Row xs={1}>          
          <Col md={6}> <TotalOfertasChart></TotalOfertasChart> </Col>
          <Col md={6}> <TotalProductsChart></TotalProductsChart> </Col>
          </Row>
          </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className='code-container'>
          <h4>Retail Statistics</h4>
          <p>Calleja</p>
          <Row xs={1}>          
          <Col md={6}> <TotalOfertasChart></TotalOfertasChart> </Col>
          <Col md={6}> <TotalProductsChart></TotalProductsChart> </Col>
          </Row>
          </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className='code-container'>
          <h4>Retail Statistics</h4>
          <p>Éxito</p>
          <Row xs={1}>
          <Col md={6}> <TotalOfertasChart></TotalOfertasChart> </Col>
          <Col md={6}> <TotalProductsChart></TotalProductsChart> </Col>
          </Row>
          </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className='code-container'>
          <h4>Retail Statistics</h4>
          <p>Tiendas Metro</p>
          <Row xs={1}>
          <Col md={6}> <TotalOfertasChart></TotalOfertasChart> </Col>
          <Col md={6}> <TotalProductsChart></TotalProductsChart> </Col>
          </Row>
          </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className='code-container'>
          <h4>Retail Statistics</h4>
          <p>Olímpica</p>
          <Row xs={1}>
          <Col md={6}> <TotalOfertasChart></TotalOfertasChart> </Col>
          <Col md={6}> <TotalProductsChart></TotalProductsChart> </Col>
          </Row>
          </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div className='code-container'>
          <h4>Retail Statistics</h4>
          <p>Tiendas D1</p>
          <Row xs={1}>
          <Col md={6}> <TotalOfertasChart></TotalOfertasChart> </Col>
          <Col md={6}> <TotalProductsChart></TotalProductsChart> </Col>
          </Row>
          </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default SentinelReports;