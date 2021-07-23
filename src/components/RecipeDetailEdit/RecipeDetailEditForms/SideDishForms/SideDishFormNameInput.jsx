import React from 'react';
import { Col, Form } from 'react-bootstrap';

export default function SideDishFormNameInput({
  sideDish,
  setRecipeDetails,
  setMatchedSideDishes,
  setTarget,
  sideDishFocused,
}) {
  const handleSideDishChange = (event) => {
    setRecipeDetails((prevState) => {
      return { ...prevState, sideDish: event.target.value ?? '' };
    });
  };
  const handleSideDishSuggestionsBlur = () => {
    setTimeout(() => {
      setMatchedSideDishes([]);
      setTarget(null);
    }, 100);
  };

  return (
    <Col xs={12}>
      <Form.Group>
        <Form.Label>Příloha</Form.Label>
        <Form.Control
          type="text"
          value={sideDish ?? ''}
          onChange={handleSideDishChange}
          onBlur={handleSideDishSuggestionsBlur}
          onFocus={(event) => {
            sideDishFocused.current = true;
            setTarget(event.target);
          }}
          onClick={(event) => {
            sideDishFocused.current = true;
            setTarget(event.target);
          }}
        />
      </Form.Group>
    </Col>
  );
}
