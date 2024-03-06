import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import DMAlogo from '../img/DMASentinel_logo.png';

function SentinelNavBar() {
  return (
    <>
      <Navbar className="navbar-nav navbar-center" fixed="top">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src= {DMAlogo}
              width="195"
              height="45"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default SentinelNavBar;