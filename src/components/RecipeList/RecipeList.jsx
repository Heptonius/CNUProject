import React from 'react';
import { Row, CardDeck } from 'react-bootstrap';
import '../../styles/responsives.css';

import { Recipe } from './Recipe';

function RecipeList({ recipes }) {
  return (
    <Row className="p-0 m-0">
      <CardDeck>
        {recipes.map(({ _id, title, preparationTime, slug }) => (
          <Recipe key={_id} title={title} preparationTime={preparationTime} slug={slug} />
        ))}
      </CardDeck>
    </Row>
  );
}

export default RecipeList;
