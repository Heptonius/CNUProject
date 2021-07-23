import React from 'react';

import { Col, Form } from 'react-bootstrap';
import {
  IngredientsGroupForm,
  IngredientsDetailsForm,
  IngredientsListForm,
} from './IngredientsForms';

export default function IngrediencesForm({
  ingredients,
  ingredientsToAdd: { amount, amountUnit, ingredient, ingredientsGroup },
  setIngredientsToAdd,
  setRecipeDetails,
}) {
  const handleIngredientSubmit = () => {
    const ingredientsArray = [...ingredients];
    ingredientsArray.push({
      position: ingredients.length,
      _id: Math.random() * 1000,
      name: ingredient,
      amount: amount,
      amountUnit: amountUnit,
      isGroup: false,
    });
    setRecipeDetails((prevState) => {
      return { ...prevState, ingredients: ingredientsArray };
    });
    setIngredientsToAdd((prevState) => {
      return { ...prevState, amount: 0, amountUnit: '', ingredient: '' };
    });
  };
  const handleIngredientsGroupSubmit = () => {
    const ingredientsArray = [...ingredients];
    ingredientsArray.push({
      position: ingredients.length,
      _id: Math.random() * 1000,
      name: ingredientsGroup,
      amount: null,
      amountUnit: null,
      isGroup: true,
    });
    setRecipeDetails((prevState) => {
      return { ...prevState, ingredients: ingredientsArray };
    });
    setIngredientsToAdd((prevState) => {
      return { ...prevState, ingredientsGroup: '' };
    });
  };

  return (
    <>
      <Col xs={4} className="p-0 ml-4 w-25">
        <Form.Label>
          <h4>Ingredience</h4>
        </Form.Label>
        <IngredientsListForm ingredients={ingredients} setRecipeDetails={setRecipeDetails} />
        <IngredientsDetailsForm
          ingredientsToAdd={{ amount, amountUnit, ingredient }}
          setIngredientsToAdd={setIngredientsToAdd}
          handleIngredientSubmit={handleIngredientSubmit}
        />
        <IngredientsGroupForm
          setIngredientsToAdd={setIngredientsToAdd}
          ingredientsGroup={ingredientsGroup}
          handleIngredientsGroupSubmit={handleIngredientsGroupSubmit}
        />
      </Col>
    </>
  );
}
