import React, { useState } from 'react';

import { Row, Container } from 'react-bootstrap';
import {
  DirectionsForm,
  BasicDetailsForm,
  RecipeTitleForm,
  IngredientsForm,
} from '../components/RecipeDetailEdit/RecipeDetailEditForms';
import { NewRecipeHeader } from '../components/PageHeaders';

export default function NewRecipePage() {
  const [
    { title, preparationTime, servingCount, directions, ingredients, sideDish },
    setNewRecipeDetails,
  ] = useState({
    title: '',
    preparationTime: 0,
    servingCount: null,
    directions: '',
    ingredients: [],
    sideDish: '',
  });

  const [ingredientsToAdd, setIngredientsToAdd] = useState({
    amount: 0,
    amountUnit: '',
    ingredient: '',
    ingredientsGroup: '',
  });

  return (
    <>
      <Container fluid>
        <NewRecipeHeader
          details={{ title, preparationTime, servingCount, directions, ingredients, sideDish }}
          setRecipeDetails={setNewRecipeDetails}
        />
        <RecipeTitleForm setRecipeDetails={setNewRecipeDetails} title={title} />
        <Row className="mt-3">
          <Container fluid className="d-flex justify-content-center">
            <BasicDetailsForm
              setRecipeDetails={setNewRecipeDetails}
              details={{ preparationTime, sideDish, servingCount }}
            />
            <IngredientsForm
              setIngredientsToAdd={setIngredientsToAdd}
              ingredients={ingredients}
              ingredientsToAdd={ingredientsToAdd}
              setRecipeDetails={setNewRecipeDetails}
            />
            <DirectionsForm directions={directions} setRecipeDetails={setNewRecipeDetails} />
          </Container>
        </Row>
      </Container>
    </>
  );
}
