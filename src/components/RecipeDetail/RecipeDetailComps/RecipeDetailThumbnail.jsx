import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default function RecipeDetailThumbnail() {
  return (
    <Row>
      <Col xs={12} lg={6} className="mb-3 d-flex flex-column mx-auto">
        <Image src="https://source.unsplash.com/user/foodess/700x700" thumbnail />
      </Col>
    </Row>
  );
}
