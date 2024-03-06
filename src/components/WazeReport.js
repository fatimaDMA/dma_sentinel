// DualChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DualChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Datos de ejemplo: horas del día, accidents y jams
    const horas = [0, 4, 8, 12, 16, 20, 24]
    const accidents = [50, 160, 80, 120, 100, 70, 50, 10, 40, 60, 150, 200];
    const jams = [10, 40, 35, 25, 20, 100, 15, 20, 35, 40, 100, 150];

    // Configuración del gráfico
    const config = {
      type: 'line',
      data: {
        labels: horas,
        datasets: [
          {
            label: 'Accidents',
            data: accidents,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false,
          },
          {
            label: 'Jams',
            data: jams,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'Horas del Día',
            },
            ticks: {
              stepSize: 4,
              max: 24,
            },
          },
          y: {
            title: {
              display: true,
              text: 'Cantidad',
            },
            ticks: {
              beginAtZero: true,
              stepSize: 50,
              max: 200,
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
            text: 'Daily Report',
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

export default DualChart;
