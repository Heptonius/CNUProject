import React from 'react';
import IngredientNameForm from './IngredientNameForm';
import { Form, Row, Col } from 'react-bootstrap';

export default function IngredientsDetailsForm({
  ingredientsToAdd: { amount, amountUnit, ingredient },
  setIngredientsToAdd,
  handleIngredientSubmit,
}) {
  const handleIngredientAmountChange = (event) => {
    if (event.target.value >= 0) {
      setIngredientsToAdd((prevState) => {
        return { ...prevState, amount: event.target.value ?? 0 };
      });
    }
  };
  const handleIngredientAmountUnitChange = (event) => {
    setIngredientsToAdd((prevState) => {
      return { ...prevState, amountUnit: event.target.value ?? ' ' };
    });
  };

  return (
    <Form.Group>
      <Form.Label>Přidat ingredienci</Form.Label>
      <Row className="mb-2">
        <Col className="pr-1">
          <Form.Control
            type="number"
            placeholder="Množství"
            onChange={handleIngredientAmountChange}
            value={amount > 0 ? amount : ''}
          />
        </Col>
        <Col className="pl-1">
          <Form.Control
            placeholder="Jednotka"
            onChange={handleIngredientAmountUnitChange}
            value={amountUnit !== '' ? amountUnit : ''}
          />
        </Col>
      </Row>
      <IngredientNameForm
        setIngredientsToAdd={setIngredientsToAdd}
        ingredient={ingredient}
        handleIngredientSubmit={handleIngredientSubmit}
      />
    </Form.Group>
  );
}
