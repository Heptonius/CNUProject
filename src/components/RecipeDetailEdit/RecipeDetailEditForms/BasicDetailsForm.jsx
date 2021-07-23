import React from 'react';
import { Form, Col, InputGroup } from 'react-bootstrap';
import SideDishForm from './SideDishForms/SideDishForm';

export default function BasicDetailsForm({
  details: { preparationTime, servingCount, sideDish },
  setRecipeDetails,
}) {
  const handlePreparationTimeChange = (event) => {
    if (event.target.value >= 0) {
      setRecipeDetails((prevState) => {
        return { ...prevState, preparationTime: event.target.value ?? 0 };
      });
    }
  };
  const handleServingCountChange = (event) => {
    if (event.target.value >= 0) {
      setRecipeDetails((prevState) => {
        return {
          ...prevState,
          servingCount: event.target.value ?? 1,
        };
      });
    }
  };

  return (
    <>
      <Col xs={2} className="p-0 w-25">
        <Form.Label>
          <h4>Základní údaje</h4>
        </Form.Label>
        <Col className="p-0">
          <Form.Label>Doba přípravy</Form.Label>
          <InputGroup className="mb-3 p-0">
            <Form.Control
              type="number"
              aria-label="doba přípravy receptu"
              aria-describedby="doba-min"
              value={preparationTime ?? 0}
              onChange={handlePreparationTimeChange}
            />
            <InputGroup.Text id="doba-min">min</InputGroup.Text>
          </InputGroup>
        </Col>
        <Form.Group>
          <Form.Label>Počet porcí</Form.Label>
          <Form.Control
            type="number"
            onChange={handleServingCountChange}
            value={servingCount ?? 0}
          />
        </Form.Group>
        <SideDishForm sideDish={sideDish} setRecipeDetails={setRecipeDetails} />
      </Col>
    </>
  );
}
