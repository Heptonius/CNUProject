import React, { useState, useEffect, useRef } from 'react';
import { Row } from 'react-bootstrap';
import { api } from '../../../../api';
import { IngredientNameFormAutocompleteOverlay, IngredientNameFormNameInput } from './';

export default function SideDishForm({ ingredient, setIngredientsToAdd, handleIngredientSubmit }) {
  const ingredientsFocused = useRef(false);
  const [ingredients, setIngredients] = useState([]);
  const [matchedIngredients, setMatchedIngredients] = useState([]);
  const [target, setTarget] = useState(null);
  const refContainer = useRef(null);

  useEffect(() => {
    api
      .get(`/recipes/ingredients`)
      .then(({ data }) => {
        setIngredients(data);
      })
      .catch(() => {
        setIngredients([]);
      });
  }, []);

  useEffect(() => {
    let matchedIngredients = ingredients.filter((item) => {
      const regex = new RegExp(`${ingredient}`, 'gi');
      return item.match(regex);
    });
    setMatchedIngredients(matchedIngredients);
  }, [ingredient, ingredients]);

  return (
    <>
      <Row ref={refContainer}>
        <IngredientNameFormNameInput
          setTarget={setTarget}
          setMatchedIngredients={setMatchedIngredients}
          setIngredientsToAdd={setIngredientsToAdd}
          ingredient={ingredient}
          ingredientsFocused={ingredientsFocused}
          handleIngredientSubmit={handleIngredientSubmit}
        />
      </Row>
      <Row>
        <IngredientNameFormAutocompleteOverlay
          ingredientsFocused={ingredientsFocused}
          matchedIngredients={matchedIngredients}
          target={target}
          refContainer={refContainer}
          setIngredientsToAdd={setIngredientsToAdd}
        />
      </Row>
    </>
  );
}
