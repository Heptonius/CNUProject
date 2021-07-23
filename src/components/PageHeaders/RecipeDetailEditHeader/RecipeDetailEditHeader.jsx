import React from 'react';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { api } from '../../../api';

import { Row, Col, Button, Container } from 'react-bootstrap';

export default function RecipeDetailEditHeader({ slug, details }) {
  const history = useHistory();

  const { title, preparationTime, servingCount, directions, ingredients, sideDish, _id } = details;

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

  const submitRecipeDetailsChanges = () => {
    api
      .post(`/recipes/${_id}`, newRecipeDetailsPayload)
      .then(({ data: { slug } }) => {
        console.log('recept byl úspěšně změněn');

        history.push(`/recept/${slug}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container fluid className="p-0">
        <Row className="d-inline-flex justify-content-end container-fluid">
          <Col className="p-0">
            <h1 style={{ fontVariant: 'small-caps' }}>{title}</h1>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button variant="success" size="lg" onClick={submitRecipeDetailsChanges}>
              <i className="fa fa-save"></i>
              <span style={{ marginLeft: '0.5rem' }}>Uložit změny</span>
            </Button>
            <Link to={`/recept/${slug}`}>
              <Button className="ml-2 h-100" variant="outline-danger" size="lg">
                <i className="fa fa-times"></i>
                <span style={{ marginLeft: '0.5rem' }}>Zahodit změny</span>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
