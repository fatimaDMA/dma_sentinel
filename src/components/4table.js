// table.js
import React from 'react';
import { Table, Badge } from 'react-bootstrap';

function ScrappersReport({ data }) {
  return (
    <div style={{ overflowY: 'auto' }}>
      <h5>Scrappers Report</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Scrappers</th>
            <th>Last Running Date</th>
            <th>Next Running Date</th>            
            <th>Status</th>
            <th>Observations</th>            
            <th>Execute Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr key={elemento.id}>
              <td>{elemento.id}</td>
              <td>{elemento.name}</td>
              <td>{elemento.lastdate}</td>
              <td>{elemento.nextdate}</td>
         
              <td>
                <Badge bg={getStatusBadgeVariant(elemento.status)}>
                  {elemento.status}
                </Badge>
              </td>
              <td>{elemento.requests}</td>     
              <td>{elemento.execute_time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

const getStatusBadgeVariant = (status) => {
  switch (status) {
    case 'done':
    case 'Done':
      return 'success';
    case 'running':
    case 'Running':
      return 'warning';
    case 'error':
    case 'Error':
      return 'danger';
    default:
      return 'primary';
  }
};

export default ScrappersReport;
