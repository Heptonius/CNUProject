import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

export default function RecipeDetailIngredientsList({ ingredients }) {
  return (
    <Row style={{ maxWidth: '70ch !important' }}>
      <Col className="p-0">
        <h4 className="mt-4 mb-3">Ingredience</h4>
        <ListGroup className="p-2">
          {ingredients.map(({ _id, amount, amountUnit, name, isGroup }) => {
            if (isGroup) {
              return (
                <ListGroup.Item
                  key={_id}
                  className="p-1 my-auto"
                  style={{ backgroundColor: '#eee' }}
                >
                  <Row className="mx-auto" style={{ backgroundColor: '#eee' }}>
                    <Col xs={12} className="mx-auto text-center">
                      <h6 className="my-auto">{name}</h6>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            } else {
              return (
                <ListGroup.Item key={_id} className="p-1 my-auto">
                  <Row className="mx-auto">
                    <Col xs={4} className="px-3" style={{ display: 'flex' }}>
                      <h6 className="my-auto pr-2">{amount !== 0 ? amount : ''}</h6>
                      <h6 className="my-auto">{amountUnit}</h6>
                    </Col>
                    <Col xs={8} className="d-flex justify-content-start px-3" style={{}}>
                      <div
                        style={{
                          height: '100%',
                          borderRight: '1px solid #ddd',
                          marginRight: '1rem',
                        }}
                      ></div>
                      <h6 className="my-auto">{name}</h6>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            }
          })}
        </ListGroup>
      </Col>
    </Row>
  );
}
