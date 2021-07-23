import React from 'react';

import { Form, Col } from 'react-bootstrap';

export default function DirectionsForm({ directions, setRecipeDetails }) {
  const handleDirectionsChange = (event) => {
    setRecipeDetails((prevState) => {
      return { ...prevState, directions: event.target.value };
    });
  };

  return (
    <>
      <Col xs={6} className="p-0 ml-4">
        <Form.Group className="mb-3">
          <Form.Label>
            <h4>Postup</h4>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={20}
            value={directions || ''}
            onChange={handleDirectionsChange}
          />
        </Form.Group>
      </Col>
    </>
  );
}
