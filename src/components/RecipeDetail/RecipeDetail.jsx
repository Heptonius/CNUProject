import React from 'react';
import { Col, Container } from 'react-bootstrap';
import {
  RecipeDetailThumbnail,
  RecipeDetailDirections,
  RecipeDetailBasicInfo,
  RecipeDetailIngredientsList,
} from './RecipeDetailComps';

export default function RecipeDetail({
  data: { preparationTime, servingCount, directions, ingredients },
}) {
  const parsingRegexp = /\d\.\s/g;
  const parsedDirections = directions?.split(parsingRegexp) ?? [];

  return (
    <Container fluid className="mt-4 col">
      <Col>
        <RecipeDetailThumbnail />
        <Col xs={12} lg={5} className="d-flex flex-column mx-auto p-0">
          <RecipeDetailBasicInfo servingCount={servingCount} preparationTime={preparationTime} />
          <RecipeDetailIngredientsList ingredients={ingredients} />
        </Col>
        <RecipeDetailDirections parsedDirections={parsedDirections} />
      </Col>
    </Container>
  );
}
