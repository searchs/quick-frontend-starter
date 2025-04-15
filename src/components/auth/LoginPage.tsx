import React, { useState } from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import { Google, Facebook, Apple } from 'react-bootstrap-icons';
import './LoginPage.css';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    console.log({ email, password, rememberMe });
    onLogin();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center login-container">
      <Card className="login-card">
        <Card.Body className="p-4">
          <div className="text-center mb-4">
            <h1 className="brand-name">UrgentAI</h1>
            <h2 className="welcome-text">Welcome Back</h2>
            <p className="sign-in-text mb-4">Sign in to your UrgentAI account</p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <div className="input-with-icon">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="input-icon">✉️</span>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <div className="input-with-icon">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span 
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setShowPassword(!showPassword);
                    }
                  }}
                  className="input-icon clickable"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <span aria-label="Show password as plain text">👁️</span> : <span aria-label="Hide password">👁️‍🗨️</span>}
                </span>
              </div>
            </Form.Group>

            <div className="d-flex justify-content-between mb-4">
              <Form.Check
                type="checkbox"
                label="Remember me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="remember-me"
              />
              <a href="#forgot" className="forgot-password">Forgot password?</a>
            </div>

            <Button variant="primary" type="submit" className="w-100 sign-in-btn">
              Sign In
            </Button>

            <div className="divider my-4">
              <span>Or continue with</span>
            </div>

            <Row className="social-login">
              <Col xs={4}>
                <Button variant="light" className="w-100 social-btn">
                  <Google />
                </Button>
              </Col>
              <Col xs={4}>
                <Button variant="light" className="w-100 social-btn">
                  <Facebook />
                </Button>
              </Col>
              <Col xs={4}>
                <Button variant="light" className="w-100 social-btn">
                  <Apple />
                </Button>
              </Col>
            </Row>

            <p className="text-center mt-4">
              Don&apos;t have an account? <a href="#create" className="create-account">Create Account</a>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;