import React from 'react';
import { Col, InputGroup, Button, Form } from 'react-bootstrap';

export default function IngredientNameFormNameInput({
  setIngredientsToAdd,
  setMatchedIngredients,
  setTarget,
  ingredientsFocused,
  ingredient,
  handleIngredientSubmit,
}) {
  const handleIngredientNameChange = (event) => {
    setIngredientsToAdd((prevState) => {
      return { ...prevState, ingredient: event.target.value ?? ' ' };
    });
  };

  const handleIngredientsSuggestionsBlur = () => {
    setTimeout(() => {
      setMatchedIngredients([]);
      setTarget(null);
    }, 100);
  };

  return (
    <Col xs={12}>
      <InputGroup className="mb-3 p-0">
        <Form.Control
          placeholder="Název ingredience"
          aria-label="Název ingredience"
          aria-describedby="basic-addon2"
          onChange={handleIngredientNameChange}
          value={ingredient ?? ''}
          onBlur={handleIngredientsSuggestionsBlur}
          onFocus={(event) => {
            setTarget(event.target);
            ingredientsFocused.current = true;
          }}
        />
        <Button
          disabled={ingredient !== '' ? null : 'disabled'}
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            handleIngredientSubmit();
            ingredientsFocused.current = false;
          }}
        >
          <i className="fa fa-plus-square"></i>
          <span style={{ marginLeft: '0.5rem' }}>Přidat</span>
        </Button>
      </InputGroup>
    </Col>
  );
}
