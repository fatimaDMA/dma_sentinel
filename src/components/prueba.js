import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';

function Prueba() {

const [reminders, setReminders] = useState([]);

useEffect(() => {
  const fetchReminders = async () => {

      // Lógica para obtener datos desde el backend
      const response = await fetch('https://cors-anywhere.herokuapp.com/http://localhost:4060/s-get-reminders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Agrega cualquier otra cabecera necesaria aquí
        },
        // Puedes agregar un cuerpo si es necesario para tu solicitud POST
        body: JSON.stringify({ key: 'value' }),
      });

      const data = await response.json();

      console.log(response.json())

  };

  fetchReminders();
}, []); // Se ejecutará solo una vez al montar el componente

return (

    <div >

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
  }
};

export default Prueba;
