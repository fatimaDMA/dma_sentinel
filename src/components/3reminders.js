import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function SentinelReminders({ data = [] }) { // Asegurar que data tenga un valor por defecto
  if (!data.length) {
    return <div>No data available</div>; // O muestra un mensaje de carga
  }

  return (
    <div className='Reminder' style={{ width: '100%', textAlign: 'center' }}>
      <h5>Daily Reminders</h5>
      <ListGroup as="ol" numbered>
        {data.map((reminder, index) => (
          <div className="ms-2 me-auto" style={{ width: '100%', textAlign: 'center' }} key={index}>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start">
              <div style={{ fontSize: '1rem' }}>
                {reminder.name}
                <p style={{ fontSize: '0.9rem'}}>{reminder.date}</p>
              </div>
              <Badge bg={getBadgeVariant(reminder.priority)} pill>
                {reminder.priority}
              </Badge>
            </ListGroup.Item>
          </div>
        ))}
      </ListGroup>
    </div>
  );
}

const getBadgeVariant = (priority) => {
  switch (priority.toLowerCase()) {
    case 'alta':
      return 'primary';
    case 'media':
      return 'info';
    case 'baja':
      return 'secondary';
    default:
      return 'primary';
  }
};

export default SentinelReminders;
