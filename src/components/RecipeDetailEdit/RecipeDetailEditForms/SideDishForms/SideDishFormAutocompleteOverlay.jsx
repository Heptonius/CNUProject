import React from 'react';
import { Col, Overlay, ListGroup } from 'react-bootstrap';

export default function SideDishFormAutocompleteOverlay({
  sideDishFocused,
  target,
  refContainer,
  matchedSideDishes,
  setRecipeDetails,
}) {
  const handleAutocompleteSideDish = (sideDish) => {
    setRecipeDetails((prevState) => {
      return { ...prevState, sideDish };
    });
    sideDishFocused.current = false;
  };

  return (
    <Overlay
      show={sideDishFocused.current}
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
            {sideDishFocused.current &&
              matchedSideDishes.map((sideDish, index) => {
                return (
                  <ListGroup.Item
                    key={index}
                    onClick={() => {
                      handleAutocompleteSideDish(sideDish);
                    }}
                  >
                    {sideDish}
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </Col>
      )}
    </Overlay>
  );
}
