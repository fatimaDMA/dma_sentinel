import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Loading...</h2>
      <Spinner animation="border" role="status" variant="dark" >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
};

export default Loading;
