import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function SentinelReminders() {
  return (

    <div >
      <h4>Daily Reminders</h4>

    <ListGroup as="ol" numbered>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Run scrappers</div>
          <div>11/02/24</div>
        </div>
        <Badge bg="primary" pill>priority</Badge>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Sentinel Dev</div>
          <div>09/02/24</div>
        </div>
        <Badge bg="warning" pill>next</Badge>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">New Proyect</div> 
          <div>15/02/24</div>
        </div>
        <Badge bg="secondary" pill> pending</Badge>
      </ListGroup.Item>

    </ListGroup>
    </div>
  );
}

export default SentinelReminders;