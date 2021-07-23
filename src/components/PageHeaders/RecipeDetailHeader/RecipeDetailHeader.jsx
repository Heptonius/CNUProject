import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Row, Col, Button, Container } from 'react-bootstrap';

import { api } from '../../../api';

export default function RecipeDetailHeader({ title, slug, data }) {
  const history = useHistory();

  const handleRecipeDeleteRequest = () => {
    api
      .delete(`/recipes/${data._id}`)
      .then(() => {
        console.log('delete call was successful - recipe is gone! :O');
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Container fluid>
        <Col>
          <Row>
            <h1 className="py-4 mx-auto" style={{ fontVariant: 'small-caps' }}>
              {title}
            </h1>
          </Row>
          <Row className="d-flex p-3 m-auto" style={{ gap: '0.25rem' }}>
            <Link
              to={{
                pathname: `/recept/${slug}/upravit/`,
                state: { data },
              }}
              style={{ margin: 'auto' }}
            >
              <Button variant="info" size="lg" className="h-100">
                <i className="fa fa-edit"></i>
                <span style={{ marginLeft: '0.5rem', fontSize: '1em' }}>Upravit recept</span>
              </Button>
            </Link>
            <Button
              className="h-auto"
              onClick={handleRecipeDeleteRequest}
              size="lg"
              variant="danger"
              style={{ height: 'min-content', margin: 'auto' }}
            >
              <i className="fa fa-trash"></i>
              <span style={{ marginLeft: '0.5rem', fontSize: '1em' }}>Smazat recept</span>
            </Button>
          </Row>
        </Col>
      </Container>
    </>
  );
}
