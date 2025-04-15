import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <Container className="py-5 text-center">
    <h1 className="display-4">404 - Page Not Found</h1>
    <p className="lead text-muted">Sorry, we couldn’t find the page you were looking for.</p>
    <Button as={Link as any} to="/" variant="primary">
      Back to Home
    </Button>
  </Container>
);

export default NotFound;
