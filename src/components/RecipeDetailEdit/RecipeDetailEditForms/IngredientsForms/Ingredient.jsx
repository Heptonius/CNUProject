import React from 'react';

import { Button, Row, Col } from 'react-bootstrap';

export default function IngredientsDetailsForm({
  ingredient: { name, amount, amountUnit, isGroup },
  handleRemoveIngredient,
}) {
  if (isGroup) {
    return (
      <Row className="d-flex py-1 pl-4 pr-4">
        <Col
          xs={2}
          className="d-flex my-auto p-0 justify-content-start"
          style={{ paddingLeft: '2rem' }}
        >
          <Button size="sm" variant="outline-danger" onClick={handleRemoveIngredient}>
            <i style={{ pointerEvents: 'none' }} className="fa fa-ban"></i>
          </Button>
        </Col>
        <Col
          xs={8}
          className="d-flex m-auto p-0 text-center"
          style={{ pointerEvents: 'none', padding: '0 0.25rem' }}
        >
          <h6>{name}</h6>
        </Col>
        <Col xs={1} className="d-flex my-auto p-0 justify-content-end">
          <i className="fa fa-bars" style={{ cursor: 'pointer' }}></i>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row className="d-flex py-1 pl-4 pr-4">
        <Col xs={2} className="d-flex my-auto p-0 justify-content-start">
          <Button size="sm" variant="outline-danger" onClick={handleRemoveIngredient}>
            <i style={{ pointerEvents: 'none' }} className="fa fa-ban"></i>
          </Button>
        </Col>
        <Col xs={3} className="d-flex m-auto p-0" style={{ pointerEvents: 'none' }}>
          <h6>{amount}</h6>
          <h6 className="ml-2">{amountUnit}</h6>
        </Col>
        <Col xs={5} className="d-flex m-auto p-0" style={{ pointerEvents: 'none' }}>
          <h6>{name}</h6>
        </Col>
        <Col xs={1} className="d-flex my-auto p-0 justify-content-end">
          <i className="fa fa-bars" style={{ cursor: 'pointer' }}></i>
        </Col>
      </Row>
    );
  }
}
