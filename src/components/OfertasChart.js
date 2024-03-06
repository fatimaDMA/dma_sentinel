import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'

export const TotalOfertasChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      // Datos de ejemplo: meses y número de reportes
      const meses = ['14/Dic', '15/Ene', '14/Feb', '15/Mar', '13/Abr'];
      const reportes = [96, 78, 112, 70, 85];
  
      // Configuración del gráfico
      const config = {
        type: 'line',
        data: {
          labels: meses,
          datasets: [
            {
              label: 'Total Ofertas',
              data: reportes,
              borderColor: '#FF9800',
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
                text: 'Ofertas',
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
              text: 'Ofertas',
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
export default TotalOfertasChart
