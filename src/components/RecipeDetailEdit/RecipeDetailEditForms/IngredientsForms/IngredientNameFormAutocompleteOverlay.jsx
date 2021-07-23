import React from 'react';
import { Overlay, Col, ListGroup } from 'react-bootstrap';

export default function IngredientNameFormAutocompleteOverlay({
  ingredientsFocused,
  refContainer,
  target,
  matchedIngredients,
  setIngredientsToAdd,
}) {
  const handleAutocompleteIngredientName = (ingredient) => {
    setIngredientsToAdd((prevState) => {
      return { ...prevState, ingredient };
    });
    ingredientsFocused.current = false;
  };

  return (
    <Overlay
      show={ingredientsFocused.current}
      placement="bottom"
      container={refContainer}
      target={target}
      transition={true}
    >
      {({ placement, arrowProps, show: _show, popper, ...props }) => (
        <Col style={{ zIndex: 1500 }}>
          <ListGroup
            {...props}
            style={{
              overflowY: 'scroll',
              maxHeight: '15rem',
              margin: '0',
              zIndex: 1500,
            }}
          >
            {ingredientsFocused.current &&
              matchedIngredients.map((ingredient, index) => {
                return (
                  <ListGroup.Item
                    key={index}
                    onClick={() => {
                      handleAutocompleteIngredientName(ingredient);
                    }}
                  >
                    {ingredient}
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </Col>
      )}
    </Overlay>
  );
}
