import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function RecipeDetailBasicInfo({ preparationTime, servingCount }) {
  return (
    <Row
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
      xs={{ className: 'flex-column' }}
    >
      <Col style={{ display: 'flex', flexDirection: 'row' }} className="p-0" xs={(8, { order: 1 })}>
        <i className="fa fa-clock-o ml-auto my-auto" />
        <h5 className="mr-auto my-auto ml-2">
          Délka přípravy:{' '}
          {`${
            Math.floor(preparationTime / 60) !== 0 ? `${Math.floor(preparationTime / 60)} hod` : ''
          } ${preparationTime % 60 !== 0 ? `${preparationTime % 60} min` : ''} `}
        </h5>
      </Col>
      <Col style={{ display: 'flex', flexDirection: 'row' }} className="p-0" xs={(4, { order: 2 })}>
        <i className="fa fa-angle-double-right ml-auto my-auto" />
        <h5 className="mr-auto my-auto ml-2">Počet porcí: {servingCount ?? '-'}</h5>
      </Col>
    </Row>
  );
}
