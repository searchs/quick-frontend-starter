import React, { useState } from 'react';
import { Container, Navbar, Nav, Button, Offcanvas, Row, Col } from 'react-bootstrap';
import { List, House, Grid, Chat, Calendar, Gear, Bell, Person } from 'react-bootstrap-icons';
import './AppLayout.css';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  const handleCloseSidebar = () => setShowSidebar(false);
  const handleShowSidebar = () => setShowSidebar(true);

  return (
    <div className="app-layout">
      {/* Header */}
      <Navbar bg="white" expand={false} className="app-header">
        <Container fluid>
          <div className="d-flex align-items-center">
            <Button 
              variant="link" 
              className="menu-toggle d-lg-none" 
              onClick={handleShowSidebar}
            >
              <List size={24} />
            </Button>
            <Navbar.Brand href="#" className="brand-logo">
              <h1 className="brand-name">HairyAI</h1>
            </Navbar.Brand>
          </div>
          
          <div className="d-flex align-items-center">
            <div className="search-container d-none d-md-block">
              <input type="text" className="search-input" placeholder="Search..." />
            </div>
            
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link href="#" className="notification-icon">
                <Bell size={20} />
                <span className="notification-badge">3</span>
              </Nav.Link>
              <Nav.Link href="#" className="user-avatar">
                <img 
                  src="/api/placeholder/32/32" 
                  alt="User" 
                  className="rounded-circle" 
                />
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>

      <div className="content-wrapper">
        {/* Sidebar - visible on larger screens */}
        <div className="sidebar d-none d-lg-block">
          <div className="sidebar-content">
            <Nav className="flex-column">
              <Nav.Link href="#" className="sidebar-item active">
                <House size={20} />
                <span>Dashboard</span>
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-item">
                <Grid size={20} />
                <span>Projects</span>
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-item">
                <Chat size={20} />
                <span>Messages</span>
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-item">
                <Calendar size={20} />
                <span>Calendar</span>
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-item">
                <Person size={20} />
                <span>Profile</span>
              </Nav.Link>
            </Nav>
            
            <div className="sidebar-divider"></div>
            
            <Nav className="flex-column">
              <Nav.Link href="#" className="sidebar-item">
                <Gear size={20} />
                <span>Settings</span>
              </Nav.Link>
            </Nav>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <Offcanvas show={showSidebar} onHide={handleCloseSidebar} className="mobile-sidebar">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h1 className="brand-name">HairyAI</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link href="#" className="sidebar-item active">
                <House size={20} />
                <span>Dashboard</span>
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-item">
                <Grid size={20} />
                <span>Projects</span>
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-item">
                <Chat size={20} />
                <span>Messages</span>
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-item">
                <Calendar size={20} />
                <span>Calendar</span>
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-item">
                <Person size={20} />
                <span>Profile</span>
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-item">
                <Gear size={20} />
                <span>Settings</span>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Main Content */}
        <main className="main-content">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <Container fluid>
          <Row>
            <Col md={6}>
              <p className="mb-0">&copy; 2025 HairyAI. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-md-end">
              <Nav className="justify-content-md-end">
                <Nav.Link href="#">Privacy</Nav.Link>
                <Nav.Link href="#">Terms</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default AppLayout;