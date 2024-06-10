import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'

export const TotalProductsChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      // Datos de ejemplo: meses y número de reportes
      const meses = ['14/Dic', '15/Ene', '14/Feb', '15/Mar', '13/Abr'];
      const reportes = [1000, 890, 1120, 1170, 980];
  
      // Configuración del gráfico
      const config = {
        type: 'line',
        data: {
          labels: meses,
          datasets: [
            {
              label: 'Total Productos',
              data: reportes,
              borderColor: '#7E57C2',
              color: 'rgba(54, 162, 235, 0.5)',
              borderWidth: 2,
              fill: true,
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
                text: 'Fecha',
              },
            },
            y: {
              title: {
                display: false,
                text: 'Productos',
              },
              ticks: {
                beginAtZero: true,
                stepSize: 10,
                max: 100,
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
              text: 'Productos',
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
export default TotalProductsChart
