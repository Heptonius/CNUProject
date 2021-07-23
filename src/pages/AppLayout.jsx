import React from 'react';
import { Container } from 'react-bootstrap';

import { AppHeader } from '../components/PageHeaders';
import { AppFooter } from '../components/AppFooter';

export function AppLayout({ children }) {
  return (
    <>
      <AppHeader />
      <Container fluid className="mt-1 w-responsive p-3">
        {children}
      </Container>
      <AppFooter />
    </>
  );
}
