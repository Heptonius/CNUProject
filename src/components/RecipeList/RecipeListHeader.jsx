import React from 'react';

import { Link } from 'react-router-dom';

import { Row, Col, Button, Container } from 'react-bootstrap';

export default function RecipeListHeader() {
  return (
    <>
      <Container fluid className="p-0">
        <Row className="d-inline-flex justify-content-end container-fluid p-0 m-0">
          <Col className="p-0">
            <h1 style={{ fontVariant: 'small-caps' }}>Recepty</h1>
          </Col>
          <Col className="d-flex justify-content-end p-0">
            <Link to="/novy-recept/">
              <Button variant="primary" size="lg">
                <i className="fa fa-plus"></i>
                <span style={{ marginLeft: '0.5rem' }}>Nový recept</span>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
