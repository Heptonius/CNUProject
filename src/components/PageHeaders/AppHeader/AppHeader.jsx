import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function AppHeader() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex">
        <Navbar.Brand className="justify-self-start d-flex" href="/" style={{ gap: '1.5rem' }}>
          <img src="/images/cookbook.svg" alt="cookbook logo" height="75px" />
          <h2
            style={{
              fontVariant: 'small-caps',
              fontSize: '200%',
              color: '#e5e5e5',
              textShadow: '-1px -1px 0.25rem black',
              margin: 'auto 0',
            }}
          >
            Cookbook
          </h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
