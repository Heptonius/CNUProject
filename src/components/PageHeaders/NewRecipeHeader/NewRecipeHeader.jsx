import React from 'react';
import { useHistory } from 'react-router';

import { api } from '../../../api';

import { Row, Col, Button } from 'react-bootstrap';

export default function NewRecipeHeader({
  details: { title, preparationTime, servingCount, directions, ingredients, sideDish },
}) {
  const history = useHistory();

  const handleDiscardRecipe = () => {
    history.push('/');
  };

  const reducedIngredients = ingredients.map((ingredient) => {
    const { position, _id, ...rest } = ingredient ?? { rest: null };
    return rest;
  });

  const newRecipeDetailsPayload = {
    title,
    preparationTime: Number(preparationTime) > 0 ? preparationTime : undefined,
    servingCount: Number(servingCount) === 0 ? undefined : servingCount,
    sideDish: sideDish === '' ? 'Nic' : sideDish,
    directions,
    ingredients: reducedIngredients,
  };

  const handleNewRecipeSubmit = () => {
    if (title !== '') {
      api
        .post('/recipes', newRecipeDetailsPayload)
        .then(({ data: { slug } }) => {
          history.push(`/recept/${slug}`);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
    }
  };

  return (
    <Row className="d-flex w-100 d-flex p-0 ">
      <Col className="justify-self-start p-0">
        <h1>{title !== '' ? title : 'Název receptu'}</h1>
      </Col>
      <Col className="d-flex justify-content-end  p-0">
        <Button variant="success" size="lg" onClick={handleNewRecipeSubmit}>
          <i className="fa fa-save"></i>
          <span style={{ marginLeft: '0.5rem' }}>Uložit recept</span>
        </Button>
        <Button
          onClick={handleDiscardRecipe}
          variant="outline-danger danger"
          className="ml-2"
          size="lg"
        >
          <i className="fa fa-times"></i>
          <span style={{ marginLeft: '0.5rem' }}>Zahodit recept</span>
        </Button>
      </Col>
    </Row>
  );
}
