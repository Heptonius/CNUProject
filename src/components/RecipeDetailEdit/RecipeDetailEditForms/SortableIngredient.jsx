import React from 'react';
import { Ingredient } from './IngredientsForms/';
import { SortableElement } from 'react-sortable-hoc';

const SortableIngredient = SortableElement(({ ingredient, ingredients, setRecipeDetails }) => {
  const handleRemoveIngredient = () => {
    const filteredIngredients = ingredients.filter((item) => {
      return item._id !== ingredient._id;
    });
    filteredIngredients.forEach((item, index) => {
      item.position = index;
    });
    setRecipeDetails((prevState) => {
      return { ...prevState, ingredients: filteredIngredients };
    });
  };

  return (
    <>
      <div
        style={{
          margin: '0.125rem auto',
          border: 0,
          borderTop: '1px solid #e6e6e6',
        }}
      >
        <Ingredient ingredient={ingredient} handleRemoveIngredient={handleRemoveIngredient} />
      </div>
    </>
  );
});

export default SortableIngredient;
