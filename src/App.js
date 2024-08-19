import './App.css';
import React, {useState, useEffect, lazy, Suspense } from 'react';
import ReactPlayer from 'react-player';
import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Spacer from './components/spacer';
import Video from './video.mp4';
import Loading from './components/loading';

const SentinelTable = lazy(() => import('././components/4table'));
const SentinelReminders = lazy(() => import('././components/3reminders'));
const SentinelCarousel = lazy(() => import('././components/2carousel'));
const SentinelNavBar = lazy(() => import('././components/1navbar'));

const TimerComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [scrappersData, setScrappersData] = useState([]);
  const [remindersData, setRemindersData] = useState([]);

  useEffect(() => {

  //Fetch de consulta a la api para los datos de la tabla
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };

        const response = await fetch("https://dma-api.onrender.com/s-get-status", requestOptions);
        const data = await response.json();

        if (data.request_status === 'OK') {
          setScrappersData(data.data);
        } else {
          console.error('Error en la solicitud al backend');
        }
      } catch (error) {
        console.error('Error al obtener datos desde el backend:', error);
      } 
    };

  //Fetch de consulta a la api para los datos de reminders
    const fetchReminders = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify({}),
          redirect: "follow"
        };

        const response = await fetch("https://dma-api.onrender.com/s-get-reminders", requestOptions);
        const data = await response.json();

        if (data.request_status === 'OK') {
          setRemindersData(data.data);
        } else {
          console.error('Error en la solicitud al backend');
        }
      } catch (error) {
        console.error('Error al obtener datos desde el backend:', error);
      }
    };

    fetchData();
    fetchReminders();

  const interval = setInterval(() => {
    fetchData();
    fetchReminders();
  }, 60000); 

  // Limpiar el intervalo al desmontar el componente
  return () => clearInterval(interval);
}, []);

  //Hook para el intercambio entre el vídeo y la página
  useEffect(() => {
    let timer;
    if (currentPage === 1) {
      timer = setTimeout(() => {
        setCurrentPage(2);
      }, 30000); 
    } else {
      timer = setTimeout(() => {
        setCurrentPage(1);
      }, 300000); 
    }

    return () => clearTimeout(timer);
  }, [currentPage]); 


  return (
    <div>
      {currentPage === 1 && <Page1 />}
      {currentPage === 2 && <Page2 scrappersData={scrappersData} remindersData={remindersData} />}
    </div>
  );
};

const Page1 = () => {
  return (
    <div className="video-wrapper">
      <div className="video-container">
        <ReactPlayer
          url={Video}
          playing={true}
          width="100%"
          height="100%"
          loop={true}
          muted={true}
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: 'contain',
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
};

const Page2 = ({ scrappersData, remindersData }) => {
  return <div >

    <header className="App-header" >
      <Suspense fallback={<Loading />}>
      <Container fluid className= "container-fluid-custom" >
        <Row > <SentinelNavBar></SentinelNavBar> </Row>
        
        <Spacer height={40} />

          <Row>        
            <Col mdlg={6}> <SentinelTable data={scrappersData}/> </Col>
            <Col mdlg={6}>
            <Row> <SentinelCarousel/> </Row>
            <Row> <SentinelReminders data={remindersData} /> </Row>

            </Col>        
          </Row>          

        <div className="row-spacing" />

      </Container>       
      </Suspense>
      </header>

  </div>;
};

export default TimerComponent;


