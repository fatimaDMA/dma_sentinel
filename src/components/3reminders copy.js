import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';

function SentinelReminders() {

const [reminders, setReminders] = useState([]);



useEffect(() => {
  const fetchReminders = async () => {
    try {
      // Lógica para obtener datos desde el backend
      fetch('http://localhost:4060/s-get-reminders', {
  method: 'POST', // o cualquier otro método HTTP
  mode: 'no-cors' // configuración para desactivar CORS
})
  .then(response => {
    // aquí manejas la respuesta de la solicitud
    console.log(response);
  })
  .catch(error => {
    // manejo de errores
    console.error('Error:', error);
  });


      const data = await response.json();

      if (data.request_status === 'OK') {
        setReminders(data.data);
      } else {
        console.error('Error en la solicitud al backend');
      }
    } catch (error) {
      console.error('Error al obtener datos desde el backend:', error);
    }
  };

  fetchReminders();
}, []); // Se ejecutará solo una vez al montar el componente

/*
  return (

    <div >
      <h4>Daily Reminders</h4>

    <ListGroup as="ol" numbered>

    {reminders.map((reminder, index) => (
          <ListGroup.Item
            key={index}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{reminder.name}</div>
              <div>{reminder.date}</div>
            </div>
            <Badge bg={getBadgeVariant(reminder.priority)} pill>
              {reminder.priority}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

// Función auxiliar para obtener el color de Badge según la prioridad
const getBadgeVariant = (priority) => {
  switch (priority.toLowerCase()) {
    case 'alta':
      return 'danger';
    case 'media':
      return 'warning';
    case 'baja':
      return 'info';
    default:
      return 'primary';
  }*/
};


export default SentinelReminders;
