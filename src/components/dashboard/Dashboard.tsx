import React from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, ProgressBar } from 'react-bootstrap';
import { ArrowUp, ArrowDown, Calendar3, Clock, People } from 'react-bootstrap-icons';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <Container fluid className="dashboard">
      <Row className="mb-4">
        <Col>
          <h1 className="page-title">Dashboard</h1>
          <p className="text-muted">Welcome back! Here&apos;s an overview of your activity.</p>
        </Col>
        <Col xs="auto">
          <Button variant="primary" className="action-button">
            <Calendar3 className="me-2" /> Schedule
          </Button>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={3} md={6} className="mb-4 mb-lg-0">
          <Card className="stats-card">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="stats-title">Total Users</h6>
                  <h3 className="stats-value">1,524</h3>
                </div>
                <div className="stats-icon users">
                  <People size={24} />
                </div>
              </div>
              <div className="stats-trend positive">
                <ArrowUp size={12} /> 12.5% since last month
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={6} className="mb-4 mb-lg-0">
          <Card className="stats-card">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="stats-title">Active Projects</h6>
                  <h3 className="stats-value">42</h3>
                </div>
                <div className="stats-icon projects">
                  <Calendar3 size={24} />
                </div>
              </div>
              <div className="stats-trend positive">
                <ArrowUp size={12} /> 8.2% since last month
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={6} className="mb-4 mb-lg-0">
          <Card className="stats-card">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="stats-title">Total Revenue</h6>
                  <h3 className="stats-value">$38,420</h3>
                </div>
                <div className="stats-icon revenue">
                  <Clock size={24} />
                </div>
              </div>
              <div className="stats-trend negative">
                <ArrowDown size={12} /> 3.8% since last month
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={6}>
          <Card className="stats-card">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="stats-title">Task Completion</h6>
                  <h3 className="stats-value">87%</h3>
                </div>
                <div className="stats-icon tasks">
                  <Clock size={24} />
                </div>
              </div>
              <div className="stats-trend positive">
                <ArrowUp size={12} /> 5.1% since last month
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="mb-4">
          <Card className="h-100">
            <Card.Header>
              <h5 className="mb-0">Recent Projects</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <Table responsive className="table-borderless table-hover">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Status</th>
                    <th>Team</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Website Redesign</td>
                    <td><Badge bg="success">Completed</Badge></td>
                    <td>
                      <div className="avatar-group">
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                      </div>
                    </td>
                    <td>
                      <ProgressBar now={100} variant="success" className="progress-sm" />
                    </td>
                  </tr>
                  <tr>
                    <td>Mobile App Development</td>
                    <td><Badge bg="warning">In Progress</Badge></td>
                    <td>
                      <div className="avatar-group">
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                      </div>
                    </td>
                    <td>
                      <ProgressBar now={68} variant="warning" className="progress-sm" />
                    </td>
                  </tr>
                  <tr>
                    <td>Marketing Campaign</td>
                    <td><Badge bg="primary">Planning</Badge></td>
                    <td>
                      <div className="avatar-group">
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                      </div>
                    </td>
                    <td>
                      <ProgressBar now={20} variant="primary" className="progress-sm" />
                    </td>
                  </tr>
                  <tr>
                    <td>Product Launch</td>
                    <td><Badge bg="danger">Delayed</Badge></td>
                    <td>
                      <div className="avatar-group">
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                      </div>
                    </td>
                    <td>
                      <ProgressBar now={45} variant="danger" className="progress-sm" />
                    </td>
                  </tr>
                  <tr>
                    <td>Customer Research</td>
                    <td><Badge bg="info">Review</Badge></td>
                    <td>
                      <div className="avatar-group">
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                        <img src="/api/placeholder/32/32" alt="User" className="avatar" />
                      </div>
                    </td>
                    <td>
                      <ProgressBar now={85} variant="info" className="progress-sm" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Upcoming Tasks</h5>
            </Card.Header>
            <Card.Body className="px-0 py-2">
              <div className="task-list">
                <div className="task-item">
                  <div className="task-checkbox">
                    <input type="checkbox" id="task1" />
                    <label htmlFor="task1" className="visually-hidden">Task 1</label>
                  </div>
                  <div className="task-content">
                    <h6>Client Meeting</h6>
                    <p className="text-muted small mb-0">Today, 2:00 PM</p>
                  </div>
                  <div className="task-priority high"></div>
                </div>
                <div className="task-item">
                  <div className="task-checkbox">
                    <input type="checkbox" id="task2" />
                    <label htmlFor="task2" className="visually-hidden">Task 2</label>
                  </div>
                  <div className="task-content">
                    <h6>Design Review</h6>
                    <p className="text-muted small mb-0">Tomorrow, 10:00 AM</p>
                  </div>
                  <div className="task-priority medium"></div>
                </div>
                <div className="task-item">
                  <div className="task-checkbox">
                    <input type="checkbox" id="task3" />
                    <label htmlFor="task3" className="visually-hidden">Task 3</label>
                  </div>
                  <div className="task-content">
                    <h6>Project Proposal</h6>
                    <p className="text-muted small mb-0">Apr 16, 2025</p>
                  </div>
                  <div className="task-priority high"></div>
                </div>
                <div className="task-item">
                  <div className="task-checkbox">
                    <input type="checkbox" id="task4" />
                    <label htmlFor="task4" className="visually-hidden">Task 4</label>
                  </div>
                  <div className="task-content">
                    <h6>Budget Planning</h6>
                    <p className="text-muted small mb-0">Apr 18, 2025</p>
                  </div>
                  <div className="task-priority low"></div>
                </div>
                <div className="task-item">
                  <div className="task-checkbox">
                    <input type="checkbox" id="task5" />
                    <label htmlFor="task5" className="visually-hidden">Task 5</label>
                  </div>
                  <div className="task-content">
                    <h6>Team Meeting</h6>
                    <p className="text-muted small mb-0">Apr 20, 2025</p>
                  </div>
                  <div className="task-priority medium"></div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="outline-primary" size="sm">View All Tasks</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;