import React from 'react';
import { Form, Row } from 'react-bootstrap';

export default function RecipeTitleForm({ title, setRecipeDetails }) {
  const handleTitleChange = (event) => {
    setRecipeDetails((prevState) => {
      return { ...prevState, title: event.target.value ?? ' ' };
    });
  };

  return (
    <Row className="mt-4">
      <Form.Group controlId="recipeName" className="w-100">
        <Form.Control
          onChange={handleTitleChange}
          required
          type="text"
          placeholder="Název receptu"
          size="lg"
          value={title !== '' ? title : ' '}
        />
      </Form.Group>
    </Row>
  );
}
