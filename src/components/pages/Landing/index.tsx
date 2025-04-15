import React, { lazy, Suspense } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Form,
  InputGroup,
} from 'react-bootstrap';
import {
  BarChart,
  PieChart,
  PeopleFill,
  Globe,
  LightningFill,
  GraphUpArrow,
  CheckCircleFill,
} from 'react-bootstrap-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const About = lazy(() => import('../About'));
const Careers = lazy(() => import('../Careers'));
const Contact = lazy(() => import('../Contact'));
const NotFound = lazy(() => import('../NotFound'));

const HomePage: React.FC = () => (
  <>
    {/* Hero Section */}
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="display-4 fw-bold">
              Transform Data Into <span className="text-info">Growth</span>
            </h1>
            <p className="lead text-muted">
              We turn complex analytics into actionable insights that drive business success.
            </p>
            <div className="d-flex gap-3">
              <Button variant="dark" className="d-flex align-items-center">
                <BarChart className="me-2" size={20} /> See Our Work
              </Button>
              <Button variant="outline-dark">Contact Us</Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="bg-white p-4 shadow rounded">
              <h5 className="mb-3">Campaign Performance</h5>
              <div className="d-flex gap-2 mb-4">
                {[20, 40, 60, 25, 75, 66, 50, 80, 60, 100, 80, 66].map((h, idx) => (
                  <div
                    key={idx}
                    style={{ height: `${h}px`, width: '8%', backgroundColor: '#0dcaf0' }}
                    className="rounded-top"
                  ></div>
                ))}
              </div>
              <Row>
                <Col className="bg-info bg-opacity-10 p-3 text-center rounded">
                  <GraphUpArrow className="text-info mb-2" size={24} />
                  <div className="fw-bold fs-4">92%</div>
                  <small>Conversion Rate</small>
                </Col>
                <Col className="bg-success bg-opacity-10 p-3 text-center rounded">
                  <PieChart className="text-success mb-2" size={24} />
                  <div className="fw-bold fs-4">4.8x</div>
                  <small>ROI Increase</small>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Analytics Expertise */}
    <section id="analytics" className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Analytics Expertise</h2>
          <p className="text-muted">
            We blend cutting-edge technology with human insight to deliver analytics that drive real business outcomes.
          </p>
        </div>
        <Row>
          <Col md={4} className="mb-4">
            <div className="p-4 shadow rounded border-top border-warning">
              <div className="bg-warning bg-opacity-25 rounded-circle p-3 mb-3 d-inline-block">
                <BarChart size={32} className="text-warning" />
              </div>
              <h5 className="fw-bold">Predictive Analytics</h5>
              <p className="text-muted">
                Forecast trends and behaviors with advanced machine learning models.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 shadow rounded border-top border-success">
              <div className="bg-success bg-opacity-25 rounded-circle p-3 mb-3 d-inline-block">
                <PeopleFill size={32} className="text-success" />
              </div>
              <h5 className="fw-bold">Customer Analytics</h5>
              <p className="text-muted">
                Understand your customers deeply with segmentation and behavioral analysis.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 shadow rounded border-top border-info">
              <div className="bg-info bg-opacity-25 rounded-circle p-3 mb-3 d-inline-block">
                <Globe size={32} className="text-info" />
              </div>
              <h5 className="fw-bold">Marketing Analytics</h5>
              <p className="text-muted">
                Optimize your marketing spend across channels with performance tracking.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

const DigitalAgencyLanding: React.FC = () => {
  return (
    <Router>
      <div className="bg-white text-dark">
        {/* Navbar */}
        <Navbar expand="md" bg="light" className="py-3 shadow-sm sticky-top">
          <Container>
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <div className="bg-success p-2 rounded me-2">
                <BarChart color="white" size={20} />
              </div>
              <span className="fw-bold fs-4 text-dark">DataVision</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#analytics">Analytics</Nav.Link>
                <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
              </Nav>
              <Button className="ms-md-4" variant="info">Get Started</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default DigitalAgencyLanding;
