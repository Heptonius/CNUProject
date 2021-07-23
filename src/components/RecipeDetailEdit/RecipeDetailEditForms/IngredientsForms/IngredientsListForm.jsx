import React from 'react';
import arrayMove from 'array-move';

import { Form, Alert } from 'react-bootstrap';

import SortableIngredientsList from '../SortableIngredientsList';

export default function IngredientsListForm({ ingredients, setRecipeDetails }) {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    let array = arrayMove(ingredients, oldIndex, newIndex);
    for (let i = 0; i < array.length; i++) {
      array[i].position = i;
    }
    setRecipeDetails((prevState) => {
      return { ...prevState, ingredients: array };
    });
  };

  return (
    <>
      <Form.Group>
        {ingredients.length > 0 ? (
          <SortableIngredientsList
            ingredients={ingredients}
            onSortEnd={onSortEnd}
            axis="xy"
            setRecipeDetails={setRecipeDetails}
          />
        ) : (
          <Alert variant="info">Žádné ingredience nebyly doposud přidány.</Alert>
        )}
      </Form.Group>
    </>
  );
}
