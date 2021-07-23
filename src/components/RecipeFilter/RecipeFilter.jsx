import React from 'react';
import { Form } from 'react-bootstrap';

function RecipeFilter({ recipe, setRecipe }) {
  const onChangeHandler = (event) => {
    setRecipe(event.target.value);
  };

  return (
    <Form>
      <Form.Group controlId="recipeName">
        <Form.Control
          type="text"
          placeholder="Název receptu"
          value={recipe}
          onChange={onChangeHandler}
          className="mt-3"
          style={{ boxShadow: '0 0.25rem 1rem 0.25rem #e5e5e5 ' }}
        />
      </Form.Group>
    </Form>
  );
}

export default RecipeFilter;
