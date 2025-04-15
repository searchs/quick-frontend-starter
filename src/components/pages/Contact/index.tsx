import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => (
  <Container className="py-5">
    <h1>Contact Us</h1>
    <p>We'd love to hear from you! Please fill out the form below:</p>
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Your message" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send Message
      </Button>
    </Form>
  </Container>
);

export default Contact;
