import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Recipe({ title, preparationTime, slug }) {
  return (
    <Card
      border="secondary"
      style={{ minWidth: '18rem', borderRadius: '0', boxShadow: '0 0.5rem 1rem 0.075rem #999' }}
      className="mt-4"
    >
      <Link to={`/recept/${slug}`}>
        <Card.Img
          src={`https://picsum.photos/400/200?random=${Math.floor(Math.random() * 100)}`}
          style={{ borderRadius: '0' }}
        />
        <div className={'m-3 text-center'} style={{ alignContent: 'center' }}>
          <Card.Title style={{ fontVariant: 'small-caps' }}>{title}</Card.Title>
          <small>
            {preparationTime && (
              <>
                <i className="fa fa-clock-o" />
                {`${
                  Math.floor(preparationTime / 60) !== 0
                    ? ` ${Math.floor(preparationTime / 60)} hod`
                    : ''
                } ${preparationTime % 60 !== 0 ? `${preparationTime % 60} min` : ''} `}
              </>
            )}
          </small>
        </div>
      </Link>
    </Card>
  );
}

///images/food-placeholder.png
