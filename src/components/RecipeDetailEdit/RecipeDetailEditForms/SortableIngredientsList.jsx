import React from 'react';
import { Col } from 'react-bootstrap';

import { SortableContainer } from 'react-sortable-hoc';

import SortableIngredient from './SortableIngredient';

const SortableIngredientsList = SortableContainer(({ ingredients, setRecipeDetails }) => {
  return (
    <>
      <Col className="p-0">
        {ingredients
          .sort((a, b) => a.position - b.position)
          .map((ingredient, index) => {
            return (
              <SortableIngredient
                ingredient={ingredient}
                ingredients={ingredients}
                index={index}
                key={index}
                setRecipeDetails={setRecipeDetails}
              />
            );
          })}
      </Col>
    </>
  );
});

export default SortableIngredientsList;
