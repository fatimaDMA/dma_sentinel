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
import Prueba from './components/prueba';

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:4060/s-get-reminders", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Container fluid className= "container-fluid-custom">
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
         <Prueba></Prueba>
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
