import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import { Container, Row } from 'react-bootstrap';
import {
  DirectionsForm,
  BasicDetailsForm,
  RecipeTitleForm,
  IngredientsForm,
} from '../components/RecipeDetailEdit/RecipeDetailEditForms';
import { RecipeDetailEditHeader } from '../components/PageHeaders';

export default function RecipeDetailEditPage() {
  const { slug } = useParams();
  const hasApiFetchedData = useRef(false);
  const [
    { title, preparationTime, servingCount, directions, ingredients, sideDish, _id },
    setDetailsToEdit,
  ] = useState({
    title: 'Recept',
    preparationTime: 0,
    servingCount: 1,
    directions: '',
    ingredients: [],
    sideDish: '',
  });

  const [{ error, loading }, setRequestState] = useState({ error: '', loading: true });
  const [ingredientsToAdd, setIngredientsToAdd] = useState({
    amount: 0,
    amountUnit: '',
    ingredient: '',
    ingredientsGroup: '',
  });

  useEffect(() => {
    if (!hasApiFetchedData.current) {
      api
        .get(`/recipes/${slug}`)
        .then(({ data }) => {
          setDetailsToEdit({ ...data });
          setRequestState({ error: '', loading: false });
        })
        .catch(() => {
          setDetailsToEdit({
            title: 'Recept',
            preparationTime: 0,
            servingCount: 1,
            directions: '',
            ingredients: [],
            sideDish: '',
          });
          setRequestState({ error: 'Něco se pokazilo :/', loading: false });
        });
      hasApiFetchedData.current = true;
    }
  }, [slug]);

  if (loading) {
    return 'Loading...';
  }

  if (error !== '') {
    return 'Něco se pokazilo :(';
  }

  return (
    <>
      <Container fluid>
        <RecipeDetailEditHeader
          slug={slug}
          details={{ title, preparationTime, servingCount, directions, ingredients, sideDish, _id }}
        />
        <RecipeTitleForm setRecipeDetails={setDetailsToEdit} title={title} />
        <Row className="mt-3">
          <Container fluid className="d-flex justify-content-center">
            <BasicDetailsForm
              setRecipeDetails={setDetailsToEdit}
              details={{ preparationTime, sideDish, servingCount }}
            />
            <IngredientsForm
              setIngredientsToAdd={setIngredientsToAdd}
              ingredients={ingredients}
              ingredientsToAdd={ingredientsToAdd}
              setRecipeDetails={setDetailsToEdit}
            />
            <DirectionsForm directions={directions} setRecipeDetails={setDetailsToEdit} />
          </Container>
        </Row>
      </Container>
    </>
  );
}
