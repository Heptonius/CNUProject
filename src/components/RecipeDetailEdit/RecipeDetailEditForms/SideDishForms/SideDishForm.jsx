import React, { useState, useEffect, useRef } from 'react';
import { Row } from 'react-bootstrap';
import { api } from '../../../../api';
import { SideDishFormNameInput, SideDishFormAutocompleteOverlay } from './';

export default function SideDishForm({ sideDish, setRecipeDetails }) {
  const sideDishFocused = useRef(false);
  const [sideDishes, setSideDishes] = useState([]);
  const [matchedSideDishes, setMatchedSideDishes] = useState([]);
  const [target, setTarget] = useState(null);
  const refContainer = useRef(null);

  useEffect(() => {
    api
      .get(`/recipes/side-dishes`)
      .then(({ data }) => {
        setSideDishes(data);
      })
      .catch(() => {
        setSideDishes([]);
      });
  }, []);

  useEffect(() => {
    let matchedSideDishes = sideDishes.filter((item) => {
      const regex = new RegExp(`${sideDish}`, 'gi');
      return item.match(regex);
    });
    setMatchedSideDishes(matchedSideDishes);
  }, [sideDish, sideDishes]);

  return (
    <>
      <Row ref={refContainer}>
        <SideDishFormNameInput
          sideDish={sideDish}
          sideDishFocused={sideDishFocused}
          setTarget={setTarget}
          setRecipeDetails={setRecipeDetails}
          setMatchedSideDishes={setMatchedSideDishes}
        />
      </Row>
      <Row>
        <SideDishFormAutocompleteOverlay
          refContainer={refContainer}
          sideDishFocused={sideDishFocused}
          target={target}
          setRecipeDetails={setRecipeDetails}
          matchedSideDishes={matchedSideDishes}
        />
      </Row>
    </>
  );
}
