import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../../styles/responsives.css';

export default function RecipeDetailDirections({ parsedDirections }) {
  return (
    <Row
      className="d-flex flex-column justify-content-around directionsList"
      style={{ margin: '1rem auto 0 auto' }}
    >
      <Col xs={12} className="p-0">
        <h4 className="mb-3">Postup</h4>
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '1rem',
            margin: '0 auto',
          }}
        >
          {parsedDirections.map((direction) => (
            <p key={Math.random()}>{direction}</p>
          ))}
        </div>
      </Col>
    </Row>
  );
}
