//import logo from './logo.svg';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import SentinelNavBar from './components/1navbar';
import SentinelCarousel from './components/2carousel';
import SentinelReminders from './components/3reminders';
import SentinelTable from './components/4table';
import SentinelReports from './components/5reports';
import Spacer from './components/spacer';


function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Container>
      <Row className='navbar-nav navbar-center'>
      <SentinelNavBar></SentinelNavBar>
      </Row>

      <Spacer height={60} />

      <Row>
        <Col lg={8}>
          <SentinelCarousel></SentinelCarousel>
        </Col>
        <Col lg={4}>
          <SentinelReminders></SentinelReminders>
        </Col>
      </Row>
      <div className="row-spacing" />
     <Row>
      <Col lg={6}>
        <SentinelTable></SentinelTable>
      </Col>
      <Col lg={6}>
        <SentinelReports></SentinelReports>        
      </Col>
      </Row>

    </Container>

      </header>
    </div>
  );
}

export default App;
