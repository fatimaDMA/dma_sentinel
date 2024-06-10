import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import DMAlogo from '../img/DMASentinel_logo.png';

function SentinelNavBar() {
  return (
    <>
      <Navbar >
        <Container >
          <Navbar.Brand>
            <img
              alt=""
              src= {DMAlogo}
              width="300"
              height="70"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default SentinelNavBar;