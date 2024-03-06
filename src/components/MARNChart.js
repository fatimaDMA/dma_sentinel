import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import  Card  from 'react-bootstrap/Card';
import { CardGroup, Row, Col } from 'react-bootstrap';
import Spacer from './spacer';

export const MARNChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      // Datos de ejemplo: meses y número de reportes
      const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      const reportes = [50000, 70000, 150000, 170000, 230000, 200000, 150000, 180000, 90000, 100000, 150000, 180000];
  
      // Configuración del gráfico
      const config = {
        type: 'bar',
        data: {
          labels: meses,
          datasets: [
            {
              label: 'Número de Reportes',
              data: reportes,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'category',
              labels: meses,
              title: {
                display: false,
                text: 'Meses del Año',
              },
            },
            y: {
              title: {
                display: false,
                text: 'Número de Reportes',
              },
              ticks: {
                beginAtZero: true,
                stepSize: 50000,
                max: 250000,
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: true,
              text: 'Reportes Diarios',
              padding: {
                top: 10,
                bottom: 30,
              },
            },
          },
        },
      };
  
      // Crear el gráfico
      const ctx = chartRef.current.getContext('2d');
      const myChart = new Chart(ctx, config);
  
      // Limpiar el gráfico al desmontar el componente
      return () => myChart.destroy();
    }, []);
  
    return <canvas ref={chartRef} width="400" height="200" />;
  };


export function MARNData () {
  return(
    <CardGroup>
      <Col>
    <Row style={{ margin: '10px' }}>
    <Card> 
      <Card.Body>
        <Card.Subtitle>Numero de registros</Card.Subtitle>
        <Card.Text color="green">450</Card.Text>
      </Card.Body>
    </Card> 
    </Row>

    <Row style={{ margin: '10px' }}>
    <Card>
    <Card.Body className='textoCard'>
        <Card.Subtitle>Proyectos geolocalizados</Card.Subtitle>
        <Card.Text>320</Card.Text>
      </Card.Body>
    </Card>
    </Row>
    </Col>
    </CardGroup>

  )
  };
  