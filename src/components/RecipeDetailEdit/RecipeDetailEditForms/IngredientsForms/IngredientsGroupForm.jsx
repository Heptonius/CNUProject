import React from 'react';

import { Form, InputGroup, Button } from 'react-bootstrap';

export default function IngredientsGroupForm({
  ingredientsGroup,
  setIngredientsToAdd,
  handleIngredientsGroupSubmit,
}) {
  const handleIngredientGroupChange = (event) => {
    setIngredientsToAdd((prevState) => {
      return { ...prevState, ingredientsGroup: event.target.value ?? ' ' };
    });
  };

  return (
    <Form.Group>
      <Form.Label>Přidat skupinu ingrediencí</Form.Label>
      <InputGroup className="mb-3 p-0">
        <Form.Control
          placeholder="Název skupiny ingrediencí"
          aria-label="Název skupiny ingrediencí"
          aria-describedby="basic-addon2"
          onChange={handleIngredientGroupChange}
          value={ingredientsGroup}
        />
        <Button
          onClick={handleIngredientsGroupSubmit}
          disabled={ingredientsGroup !== '' ? null : 'disabled'}
          variant="outline-secondary"
          id="button-addon2"
        >
          <i className="fa fa-plus-square"></i>
          <span style={{ marginLeft: '0.5rem' }}>Přidat</span>
        </Button>
      </InputGroup>
    </Form.Group>
  );
}
