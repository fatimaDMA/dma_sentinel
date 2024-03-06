import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

function SentinelTable() {
  return (
    <div>
      <Table striped bordered responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Scrappers Report</th>
            <th>Date</th>
            <th>Status</th>
            <th>Consultas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Super Selectos</td>
            <td>11/01/24</td>
            <td> <Badge bg="warning" text="dark"> Pending </Badge></td>
            <td>1120</td>

          </tr>
          <tr>
            <td>2</td>
            <td>Walmart</td>
            <td>11/01/24</td>
            <td> <Badge bg="success">Success</Badge></td>
            <td>1400</td>
          </tr>

          <tr>
            <td>3</td>
            <td>San Nicolás</td>
            <td>09/01/24</td>
            <td><Badge bg="danger">Error</Badge> </td>
            <td>720</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Éxito</td>
            <td>10/01/24</td>
            <td><Badge bg="primary">Primary</Badge></td>
            <td>750</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Olimpica</td>
            <td>11/01/23</td>
            <td><Badge bg="secondary">Secondary</Badge></td>
            <td>800</td>
          </tr>

          <tr>
            <td>6</td>
            <td>Tiendas D1</td>
            <td>13/01/23</td>
            <td><Badge bg="secondary">Secondary</Badge></td>
            <td>840</td>
          </tr>

          <tr>
            <td>6</td>
            <td>Kazu</td>
            <td>15/01/23</td>
            <td> <Badge bg="success">Success</Badge></td>
            <td>500</td>
          </tr>
          
        </tbody>
      </Table>

    </div>
  );
}

export default SentinelTable;